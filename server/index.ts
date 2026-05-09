import dotenv from 'dotenv';
import express from 'express';
import nodemailer from 'nodemailer';

dotenv.config();

const app = express();

app.use(express.json({ limit: '64kb' }));

function requiredEnv(name: string): string {
  const value = process.env[name];
  if (!value) throw new Error(`Missing required env var: ${name}`);
  return value;
}

const port = Number(process.env.PORT || 3001);

app.get('/api/health', (_req, res) => {
  res.json({ ok: true });
});

app.post('/api/contact', async (req, res) => {
  try {
    const name = String(req.body?.name ?? '').trim();
    const email = String(req.body?.email ?? '').trim();
    const subject = String(req.body?.subject ?? '').trim();
    const message = String(req.body?.message ?? '').trim();

    const errors: string[] = [];
    if (!name) errors.push('Name is required.');
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.push('Valid email is required.');
    if (!subject) errors.push('Subject is required.');
    if (!message) errors.push('Message is required.');
    if (message.length > 2000) errors.push('Message must be 2000 characters or less.');

    if (errors.length) {
      res.status(400).json({ ok: false, errors });
      return;
    }

    const transporter = nodemailer.createTransport({
      host: requiredEnv('SMTP_HOST'),
      port: Number(process.env.SMTP_PORT || 587),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: requiredEnv('SMTP_USER'),
        pass: requiredEnv('SMTP_PASS'),
      },
    });

    const mailTo = requiredEnv('MAIL_TO');
    const mailFrom = process.env.MAIL_FROM || process.env.SMTP_USER!;

    await transporter.sendMail({
      from: mailFrom,
      to: mailTo,
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      text: `New message from portfolio contact form\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}\n`,
    });

    res.json({ ok: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ ok: false, error: 'Failed to send message.' });
  }
});

app.listen(port, () => {
  console.log(`Contact API listening on http://localhost:${port}`);
});

