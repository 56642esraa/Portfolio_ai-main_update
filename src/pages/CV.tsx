import React from 'react';
import { motion } from 'motion/react';
import { 
  Mail, 
  Phone, 
  Globe, 
  Github, 
  Linkedin, 
  Download, 
  ExternalLink,
  MapPin,
  Calendar,
  Briefcase,
  GraduationCap,
  Code2,
  CheckCircle2,
  Award,
  FileBadge
} from 'lucide-react';

import { useLanguage } from '../context/LanguageContext';

const CV = () => {
  const { t, language } = useLanguage();

  const personalInfo = {
    name: "Esraa Ali",
    role: language === 'en' ? "Full-Stack Developer | WordPress" : "مطور واجهات كاملة | ووردبريس",
    email: "esraahamaza299@gmail.com",
    phone: "01012847580",
    location: language === 'en' ? "Egypt" : "مصر",
    github: "github.com/56642esraa",
    linkedin: "linkedin.com/in/esra2ali",
    website: "esraa-ali.dev"
  };

  const experiences = language === 'en' ? [
    {
      company: "Digilians (MCIT Initiative)",
      role: "Fullstack Developer Intern",
      period: "Jan '26 - Present",
      achievements: [
        "Developed and maintained responsive web applications using React.js and Node.js, ensuring 100% cross-browser compatibility and mobile responsiveness.",
        "Architected RESTful APIs with Express.js to handle data communication between the frontend and MongoDB/PostgreSQL databases, improving data retrieval efficiency.",
        "Implemented global state management using Redux or Context API, reducing prop-drilling and streamlining data flow across complex component trees.",
        "Integrated third-party APIs and authentication (e.g., Firebase, JWT) to enhance application security and provide dynamic user features.",
        "Collaborated in an Agile environment, participating in daily stand-ups and code reviews to maintain high code quality and meet project milestones.",
        "Optimized application performance by implementing lazy loading and code-splitting in React, resulting in faster initial page load times.",
        "Managed version control using Git and GitHub, resolving merge conflicts and maintaining clean branch architectures for team collaboration."
      ]
    },
    {
      company: "Information Technology Institute (ITI)",
      role: "Wordpress Developer",
      period: "Jan '25",
      achievements: [
        "SEO & CMS: Optimizing WordPress architectures and implementing on-page SEO to drive user retention.",
        "Full-Stack Engineering: Developed a large-scale traveling website graduation project, applying Software Engineering principles to ensure modularity and scalability.",
        "Core Fundamentals: Mastered Object-Oriented Programming (OOP) in C++, Advanced Data Structures, and Clean Code principles."
      ]
    },
    {
      company: "DEPI Initiative",
      role: "Full-Stack Web Development Trainee",
      period: "2025 - 2026",
      achievements: [
        "Intensive training on modern web technologies. Built several full-stack projects using the MERN stack and followed industry-standard state management patterns."
      ]
    }
  ] : [
    {
      company: "Digilians (مبادرة MCIT)",
      role: "متدرب مطور ويب كامل",
      period: "يناير 26 - الحالي",
      achievements: [
        "تطوير وصيانة تطبيقات ويب متجاوبة باستخدام React.js و Node.js، مما يضمن توافقاً بنسبة 100% مع المتصفحات واستجابة الهاتف المحمول.",
        "بناء واجهات برمجة تطبيقات RESTful باستخدام Express.js للتعامل مع اتصالات البيانات بين الواجهة الأمامية وقواعد بيانات MongoDB/PostgreSQL.",
        "تنفيذ إدارة الحالة العالمية باستخدام Redux أو Context API، مما يقلل من prop-drilling ويسهل تدفق البيانات.",
        "دمج واجهات برمجة تطبيقات الطرف الثالث والمصادقة (مثل Firebase و JWT) لتعزيز أمن التطبيق.",
        "العمل في بيئة Agile، والمشاركة في الاجتماعات اليومية ومراجعات الكود للحفاظ على جودة الكود العالية.",
        "تحسين أداء التطبيق من خلال تنفيذ التحميل البطيء وتقسيم الكود في React.",
        "إدارة التحكم في الإصدار باستخدام Git و GitHub، وحل تعارضات الدمج والحفاظ على بنية فروع نظيفة."
      ]
    },
    {
      company: "معهد تكنولوجيا المعلومات (ITI)",
      role: "مطور ووردبريس",
      period: "يناير 25",
      achievements: [
        "SEO و CMS: تحسين معمارية ووردبريس وتنفيذ SEO على الصفحة لزيادة الاحتفاظ بالمستخدمين.",
        "هندسة الويب الكاملة: تطوير مشروع تخرج لموقع سفر واسع النطاق، وتطبيق مبادئ هندسة البرمجيات لضمان النمطية والقابلية للتوسع.",
        "الأساسيات الجوهرية: إتقان البرمجة الكائنية (OOP) في C++، وهياكل البيانات المتقدمة، ومبادئ الكود النظيف."
      ]
    },
    {
      company: "مبادرة DEPI",
      role: "متدرب تطوير ويب كامل",
      period: "2025 - 2026",
      achievements: [
        "تدريب مكثف على تقنيات الويب الحديثة. قمت ببناء عدة مشاريع كاملة باستخدام MERN stack واتباع أنماط إدارة الحالة القياسية في الصناعة."
      ]
    }
  ];

  const education = language === 'en' ? [
    {
      degree: "Bachelor's Degree in Information Technology",
      school: "Luxor University",
      year: "May '23",
      details: "Core Competencies: Network Administration, Cybersecurity Fundamentals, Database Management (SQL), and Systems Analysis. Technical Proficiencies: Python, Java, AWS Cloud Essentials, and Windows/Linux Server Management.",
      capstone: "Capstone Project: Designed and implemented a secure, scalable network architecture for a mock enterprise, reducing simulated downtime by 20%."
    }
  ] : [
    {
      degree: "بكالوريوس في تكنولوجيا المعلومات",
      school: "جامعة الأقصر",
      year: "مايو 23",
      details: "الكفاءات الأساسية: إدارة الشبكات، أساسيات الأمن السيبراني، إدارة قواعد البيانات (SQL)، وتحليل الأنظمة. الكفاءات التقنية: Python، Java، أساسيات سحابة AWS، وإدارة خوادم Windows/Linux.",
      capstone: "مشروع التخرج: تصميم وتنفيذ معمارية شبكة آمنة وقابلة للتوسع لمؤسسة افتراضية، مما قلل من وقت التوقف المحاكي بنسبة 20%."
    }
  ];

  const certifications = [
    { name: "HCIA-Big Data", date: "Dec '24" },
    { name: "HCIA-AI", date: "Jan '24" },
    { name: "HCIA-Cloud Computing", date: "Jan '23" }
  ];

  const projects = language === 'en' ? [
    {
      title: "WordPress CMS Travel Platform",
      role: "Full-Stack Developer",
      tech: "WordPress, PHP, SEO, Google Maps API",
      desc: "Large-scale traveling platform featuring advanced search/filtering, interactive itinerary builder, robust review system, multi-currency/language support, and integrated booking engines with Stripe/PayPal.",
      features: [
        "Advanced Search & Filtering",
        "Interactive Itinerary Builder",
        "Robust Review System",
        "Global Support (Multi-currency/language)",
        "Geolocation Integration (Google Maps)",
        "Direct Online Booking & Payment Integration",
        "User Profiles & Dashboards",
        "Automated Notifications",
        "Travel Schema SEO & Social Proof Widgets"
      ],
      link: "#"
    },
    {
      title: "Horeca Hut",
      role: "Full-Stack Developer",
      tech: "WordPress, WooCommerce, PHP, Tailwind CSS",
      desc: "Premium e-commerce platform for kitchen equipment in UAE with custom product management and optimized performance.",
      link: "https://horecahut.ae/"
    },
    {
      title: "E-Commerce Platform",
      role: "Full-Stack Developer",
      tech: "Node.js, TypeScript, MongoDB, Redis",
      desc: "Scalable e-commerce backend with robust REST APIs and modular architecture.",
      link: "#"
    }
  ] : [
    {
      title: "منصة سفر بنظام إدارة محتوى ووردبريس",
      role: "مطور ويب كامل",
      tech: "WordPress, PHP, SEO, Google Maps API",
      desc: "منصة سفر واسعة النطاق تتميز بالبحث والتصفية المتقدمة، وبناء مسارات رحلات تفاعلية، ونظام مراجعات قوي، ودعم لغات وعملات متعددة.",
      features: [
        "بحث وتصفية متقدمة",
        "بناء مسار رحلة تفاعلي",
        "نظام مراجعات قوي",
        "دعم عالمي (عملات ولغات متعددة)",
        "تكامل الموقع الجغرافي (خرائط جوجل)",
        "حجز مباشر عبر الإنترنت وتكامل الدفع",
        "ملفات تعريف المستخدمين ولوحات التحكم",
        "إشعارات تلقائية",
        "SEO لمخطط السفر وأدوات الإثبات الاجتماعي"
      ],
      link: "#"
    },
    {
      title: "Horeca Hut",
      role: "مطور ويب كامل",
      tech: "WordPress, WooCommerce, PHP, Tailwind CSS",
      desc: "منصة تجارة إلكترونية متميزة لمعدات المطابخ في الإمارات مع إدارة مخصصة للمنتجات وأداء محسن.",
      link: "https://horecahut.ae/"
    },
    {
      title: "منصة تجارة إلكترونية",
      role: "مطور ويب كامل",
      tech: "Node.js, TypeScript, MongoDB, Redis",
      desc: "خلفية تجارة إلكترونية قابلة للتوسع مع واجهات برمجة تطبيقات REST قوية ومعمارية نمطية.",
      link: "#"
    }
  ];

  const skills = {
    soft: language === 'en' 
      ? ["Effective Communication", "Problem-Solving", "Critical Thinking", "Continuous Learning", "Adaptability", "Productivity & Ownership"]
      : ["التواصل الفعال", "حل المشكلات", "التفكير النقدي", "التعلم المستمر", "القدرة على التكيف", "الإنتاجية والمسؤولية"],
    technical: ["React", "Node.js", "TypeScript", "MongoDB", "PostgreSQL", "WordPress", "PHP", "C++", "Tailwind CSS", "AWS"],
    tools: ["Git", "GitHub", "Docker", "Figma", "Postman", "Redis", "Socket.io"]
  };

  const summary = language === 'en'
    ? "Detail-oriented Web Developer with a strong foundation in React and specialized training in AI, Big Data, and Cloud Computing through an intensive ITI internship. Proven ability to deliver end-to-end web solutions, recently demonstrated by a large-scale traveling website graduation project. Passionate about building scalable, high-performance applications and leveraging data-driven technologies."
    : "مطور ويب مهتم بالتفاصيل مع أساس قوي في React وتدريب متخصص في الذكاء الاصطناعي والبيانات الضخمة والحوسبة السحابية من خلال تدريب مكثف في ITI. قدرة مثبتة على تقديم حلول ويب متكاملة، تم إثباتها مؤخراً من خلال مشروع تخرج لموقع سفر واسع النطاق. شغوف ببناء تطبيقات قابلة للتوسع وعالية الأداء والاستفادة من التقنيات القائمة على البيانات.";

  return (
    <div className="pt-32 pb-20 px-6 min-h-screen bg-bg-dark">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <div>
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-5xl font-bold mb-2"
            >
              {personalInfo.name}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="text-accent-purple text-xl font-medium"
            >
              {personalInfo.role}
            </motion.p>
          </div>
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="px-6 py-3 bg-gradient-to-r from-accent-purple to-accent-blue text-white font-bold rounded-xl flex items-center gap-2 hover:scale-105 transition-all glow-mixed"
            onClick={() => window.print()}
          >
            <Download size={18} /> {t('printCV')}
          </motion.button>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {[
            { icon: <Mail size={16} />, text: personalInfo.email, href: `mailto:${personalInfo.email}` },
            { icon: <Phone size={16} />, text: personalInfo.phone, href: `tel:${personalInfo.phone}` },
            { icon: <MapPin size={16} />, text: personalInfo.location },
            { icon: <Globe size={16} />, text: personalInfo.website, href: `https://${personalInfo.website}` },
            { icon: <Github size={16} />, text: personalInfo.github, href: `https://${personalInfo.github}` },
            { icon: <Linkedin size={16} />, text: personalInfo.linkedin, href: `https://${personalInfo.linkedin}` },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 text-white/50 text-sm">
              <span className="text-accent-purple">{item.icon}</span>
              {item.href ? (
                <a href={item.href} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  {item.text}
                </a>
              ) : (
                item.text
              )}
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Left Column */}
          <div className="md:col-span-2 space-y-12">
            {/* Summary */}
            <section>
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Briefcase size={20} className="text-accent-purple" /> {t('professionalSummary')}
              </h2>
              <p className="text-white/60 leading-relaxed">
                {summary}
              </p>
            </section>

            {/* Experience */}
            <section>
              <h2 className="text-xl font-bold mb-8 flex items-center gap-2">
                <Calendar size={20} className="text-accent-purple" /> {t('workExperience')}
              </h2>
              <div className="space-y-8">
                {experiences.map((exp, i) => (
                  <div key={i} className="relative pl-8 border-l border-white/10 rtl:pl-0 rtl:pr-8 rtl:border-l-0 rtl:border-r">
                    <div className="absolute left-[-5px] rtl:left-auto rtl:right-[-5px] top-0 w-[10px] h-[10px] rounded-full bg-accent-purple" />
                    <div className="mb-2 flex justify-between items-start">
                      <h3 className="font-bold text-lg">{exp.role}</h3>
                      <span className="text-accent-purple text-xs font-bold">{exp.period}</span>
                    </div>
                    <h4 className="text-white/40 text-sm mb-4">{exp.company}</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((ach, j) => (
                        <li key={j} className="text-white/50 text-sm flex items-start gap-2">
                          <CheckCircle2 size={14} className="text-accent-purple mt-1 flex-shrink-0" />
                          {ach}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Projects */}
            <section>
              <h2 className="text-xl font-bold mb-8 flex items-center gap-2">
                <Code2 size={20} className="text-accent-purple" /> {t('keyProjects')}
              </h2>
              <div className="grid gap-6">
                {projects.map((project, i) => (
                  <div key={i} className="glass-card p-6 rounded-2xl border border-white/5 hover:border-accent-purple/30 transition-all group">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-lg group-hover:text-accent-purple transition-colors">{project.title}</h3>
                      <a href={project.link} className="text-white/20 hover:text-white"><ExternalLink size={16} /></a>
                    </div>
                    <p className="text-accent-purple text-xs font-bold mb-3">{project.role} • {project.tech}</p>
                    <p className="text-white/50 text-sm leading-relaxed mb-4">{project.desc}</p>
                    {project.features && (
                      <div className="flex flex-wrap gap-2">
                        {project.features.map((feature, k) => (
                          <span key={k} className="text-[10px] px-2 py-1 bg-white/5 rounded-md text-white/40 border border-white/5">
                            {feature}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div className="space-y-12">
            {/* Skills */}
            <section>
              <h2 className="text-xl font-bold mb-6">{t('skillsTitle')}</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xs font-bold text-white/30 uppercase tracking-widest mb-3">{t('techSkills')}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.technical.map(skill => (
                      <span key={skill} className="px-3 py-1 bg-white/5 rounded-full text-xs text-white/60 border border-white/10">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-xs font-bold text-white/30 uppercase tracking-widest mb-3">{t('softSkills')}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.soft.map(skill => (
                      <span key={skill} className="px-3 py-1 bg-white/5 rounded-full text-xs text-white/60 border border-white/10">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Certifications */}
            <section>
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                <FileBadge size={20} className="text-accent-purple" /> {t('certifications')}
              </h2>
              <div className="space-y-4">
                {certifications.map((cert, i) => (
                  <div key={i} className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-sm">{cert.name}</h3>
                      <p className="text-white/40 text-[10px]">{cert.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Education */}
            <section>
              <h2 className="text-xl font-bold mb-6">{t('eduTitle')}</h2>
              <div className="space-y-6">
                {education.map((edu, i) => (
                  <div key={i}>
                    <h3 className="font-bold text-sm mb-1">{edu.degree}</h3>
                    <p className="text-accent-purple text-xs font-bold mb-1">{edu.year}</p>
                    <p className="text-white/40 text-xs mb-2">{edu.school}</p>
                    <p className="text-white/30 text-[10px] leading-relaxed mb-2">{edu.details}</p>
                    <p className="text-accent-purple/60 text-[10px] italic">{edu.capstone}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Awards */}
            <section>
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Award size={20} className="text-accent-purple" /> {t('awards')}
              </h2>
              <div className="space-y-2">
                <p className="text-sm text-white/60">{language === 'en' ? 'Huawei ICT Competition' : 'مسابقة هواوي لتكنولوجيا المعلومات والاتصالات'}</p>
                <p className="text-[10px] text-white/30 italic">{language === 'en' ? 'International Technology Competition' : 'مسابقة تكنولوجية دولية'}</p>
              </div>
            </section>

            {/* Languages */}
            <section>
              <h2 className="text-xl font-bold mb-6">{t('languages')}</h2>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-white/60">{language === 'en' ? 'Arabic' : 'العربية'}</span>
                  <span className="text-xs font-bold text-accent-purple">{t('native')}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-white/60">{language === 'en' ? 'English' : 'الإنجليزية'}</span>
                  <span className="text-xs font-bold text-accent-purple">{t('professional')}</span>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CV;
