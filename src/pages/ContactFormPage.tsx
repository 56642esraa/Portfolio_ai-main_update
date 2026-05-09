import React, { useMemo, useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Mail, User, MessageSquare, Send, CheckCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const ContactFormPage = () => {
  const { language } = useLanguage();
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<string[]>([]);
  const [fields, setFields] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const isRtl = language === 'ar';
  const labels = useMemo(
    () => ({
      title: isRtl ? 'تواصل معي' : 'Contact Me',
      subtitle: isRtl
        ? 'هل لديك مشروع في ذهنك؟ املأ النموذج أدناه وسأرد عليك في أقرب وقت ممكن.'
        : "Have a project in mind? Fill out the form below and I'll get back to you as soon as possible.",
      back: isRtl ? 'العودة إلى الرئيسية' : 'Back to Home',
      name: isRtl ? 'الاسم' : 'Name',
      email: isRtl ? 'البريد الإلكتروني' : 'Email',
      subject: isRtl ? 'الموضوع' : 'Subject',
      message: isRtl ? 'الرسالة' : 'Message',
      sending: isRtl ? 'جاري الإرسال...' : 'Sending...',
      send: isRtl ? 'إرسال الرسالة' : 'Send Message',
      successTitle: isRtl ? 'تم إرسال الرسالة بنجاح!' : 'Message Sent Successfully!',
      successText: isRtl ? 'شكراً لتواصلك! سأرد عليك في غضون 24 ساعة.' : "Thank you for reaching out! I'll get back to you within 24 hours.",
      sendAnother: isRtl ? 'إرسال رسالة أخرى' : 'Send Another Message',
      genericError: isRtl ? 'حدث خطأ. حاول مرة أخرى.' : 'Something went wrong. Please try again.',
    }),
    [isRtl],
  );

  const validate = () => {
    const nextErrors: string[] = [];
    if (!fields.name.trim()) nextErrors.push(isRtl ? 'يرجى إدخال الاسم.' : 'Please enter your name.');
    if (!fields.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.trim()))
      nextErrors.push(isRtl ? 'يرجى إدخال بريد إلكتروني صحيح.' : 'Please enter a valid email address.');
    if (!fields.subject.trim()) nextErrors.push(isRtl ? 'يرجى إدخال الموضوع.' : 'Please enter a subject.');
    if (!fields.message.trim()) nextErrors.push(isRtl ? 'يرجى كتابة رسالة قصيرة.' : 'Please write a short message.');
    if (fields.message.length > 2000)
      nextErrors.push(isRtl ? 'يجب ألا تزيد الرسالة عن 2000 حرف.' : 'Message must be 2000 characters or less.');
    return nextErrors;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const nextErrors = validate();
    if (nextErrors.length) {
      setErrors(nextErrors);
      setStatus('error');
      return;
    }

    setErrors([]);
    setStatus('submitting');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: fields.name.trim(),
          email: fields.email.trim(),
          subject: fields.subject.trim(),
          message: fields.message.trim(),
        }),
      });

      const data = await res.json().catch(() => null);
      if (!res.ok) {
        const apiErrors = Array.isArray(data?.errors) ? data.errors : null;
        setErrors(apiErrors?.length ? apiErrors : [labels.genericError]);
        setStatus('error');
        return;
      }

      setStatus('success');
      setFields({ name: '', email: '', subject: '', message: '' });
    } catch {
      setErrors([labels.genericError]);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="min-h-screen pt-32 pb-20 px-6 bg-gradient-to-b from-bg-dark to-bg-dark/95">
        <div className="max-w-md mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-card p-8 rounded-2xl text-center"
          >
            <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
              <CheckCircle size={40} className="text-green-400" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-3">
              {labels.successTitle}
            </h2>
            <p className="text-white/60 mb-6">
              {labels.successText}
            </p>
            <div className="flex flex-col items-center justify-center gap-3">
              <Link
                to="/"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-accent-purple to-accent-blue text-white rounded-xl font-bold hover:scale-105 transition-all"
              >
                <ArrowLeft size={18} />
                {labels.back}
              </Link>
              <button
                type="button"
                onClick={() => {
                  setStatus('idle');
                  setErrors([]);
                }}
                className="inline-flex items-center gap-2 px-6 py-3 border border-accent-purple/30 text-accent-purple rounded-xl hover:bg-accent-purple/10 transition-all"
              >
                {labels.sendAnother}
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 bg-gradient-to-b from-bg-dark to-bg-dark/95">
      <div className="max-w-2xl mx-auto">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-white/40 hover:text-accent-purple transition-colors font-bold uppercase tracking-widest text-xs group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> 
            {labels.back}
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-accent-purple/20 to-accent-blue/20 flex items-center justify-center mx-auto mb-6 border border-accent-purple/30 shadow-lg">
            <Mail size={40} className="text-accent-purple" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
            {labels.title}
          </h1>
          <div className="w-16 h-1 bg-gradient-to-r from-accent-purple to-accent-blue mx-auto rounded-full mb-6" />
          <p className="text-white/50 max-w-md mx-auto">
            {labels.subtitle}
          </p>
        </motion.div>

        {/* Contact Form */}
        <div
          dir={isRtl ? 'rtl' : 'ltr'}
          className={`glass-card p-8 rounded-2xl ${isRtl ? 'text-right' : 'text-left'}`}
        >
          <form onSubmit={onSubmit} className="space-y-5">
            <div>
              <label className="block text-white/60 text-sm font-medium mb-2">
                {labels.name}
              </label>
              <input
                id="name"
                type="text"
                name="name"
                value={fields.name}
                onChange={(e) => setFields((p) => ({ ...p, name: e.target.value }))}
                placeholder={isRtl ? 'إسراء علي' : 'Esraa Ali'}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent-purple focus:bg-white/10 transition-all text-white/80 placeholder:text-white/40"
                required
              />
            </div>

            <div>
              <label className="block text-white/60 text-sm font-medium mb-2">
                {labels.email}
              </label>
              <input
                id="email"
                type="email"
                name="email"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                placeholder="you@example.com"
                value={fields.email}
                onChange={(e) => setFields((p) => ({ ...p, email: e.target.value }))}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent-purple focus:bg-white/10 transition-all text-white/80 placeholder:text-white/40"
                required
              />
            </div>

            <div>
              <label className="block text-white/60 text-sm font-medium mb-2">
                {labels.subject}
              </label>
              <input
                id="subject"
                type="text"
                name="subject"
                value={fields.subject}
                onChange={(e) => setFields((p) => ({ ...p, subject: e.target.value }))}
                placeholder={isRtl ? 'استفسار عن مشروع' : 'Project Inquiry'}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent-purple focus:bg-white/10 transition-all text-white/80 placeholder:text-white/40"
                required
              />
            </div>

            <div>
              <label className="block text-white/60 text-sm font-medium mb-2">
                {labels.message}
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                maxLength={2000}
                value={fields.message}
                onChange={(e) => setFields((p) => ({ ...p, message: e.target.value }))}
                placeholder={isRtl ? 'اكتب رسالتك هنا...' : 'Write your message here...'}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent-purple focus:bg-white/10 transition-all text-white/80 placeholder:text-white/40 resize-none"
                required
              />
            </div>

            <button
              type="submit"
              disabled={status === 'submitting'}
              className={`w-full py-4 bg-gradient-to-r from-accent-purple to-accent-blue text-white font-bold rounded-xl transition-all duration-300 ${
                status === 'submitting' ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-[0_0_20px_rgba(139,92,246,0.3)]'
              }`}
            >
              {status === 'submitting' ? (
                <span className="inline-flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  {labels.sending}
                </span>
              ) : (
                <span className="inline-flex items-center justify-center gap-2">
                  <Send size={18} />
                  {labels.send}
                </span>
              )}
            </button>

            {errors.length > 0 && (
              <div className="text-red-300 text-sm mt-4 p-4 rounded-xl bg-red-500/10 border border-red-500/20">
                <div className="font-bold mb-2">{isRtl ? 'تحقق من التالي:' : 'Please check the following:'}</div>
                <ul className="list-disc pl-5 space-y-1">
                  {errors.map((e, i) => (
                    <li key={`${e}-${i}`}>{e}</li>
                  ))}
                </ul>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactFormPage;