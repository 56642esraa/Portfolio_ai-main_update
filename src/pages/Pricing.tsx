import React from 'react';
import { motion } from 'motion/react';
import { Zap, Star, Shield, MessageSquare, Check, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SectionHeading } from '../components/Shared';
import { useLanguage } from '../context/LanguageContext';

const Pricing = () => {
  const { t, language } = useLanguage();
  
  const plans = language === 'en' ? [
    {
      name: "Starter",
      price: "$200–500",
      period: t('perProject'),
      desc: "Perfect for simple apps & MVPs",
      icon: <Zap size={20} />,
      features: [
        "3–5 Screens Web app",
        "Basic UI implementation",
        "State management",
        "Clean architecture",
        "1–2 weeks delivery"
      ]
    },
    {
      name: "Professional",
      price: "$800–2,000",
      period: t('perProject'),
      desc: "Ideal for full-featured applications",
      icon: <Star size={20} />,
      popular: true,
      features: [
        "6–12 Screens Web app",
        "Clean Architecture + Redux",
        "REST API integration",
        "Responsive deployment",
        "4–6 weeks delivery",
        "3 revision rounds",
        "Performance optimization"
      ]
    },
    {
      name: "Ultimate",
      price: "$2,500+",
      period: t('perProject'),
      desc: "For complex, scalable applications",
      icon: <Shield size={20} />,
      ctaKey: 'contactMe',
      features: [
        "Full-scale Web application",
        "Advanced architecture design",
        "Custom backend integration",
        "Real-time features",
        "Multi-platform support",
        "Ongoing maintenance & support",
        "Unlimited revisions",
        "Priority support"
      ]
    },
    {
      name: "Business",
      price: "$5,000+",
      period: t('perProject'),
      desc: "Built for growing companies and internal platforms",
      icon: <Shield size={20} />,
      company: true,
      ctaKey: 'requestProposal',
      features: [
        "Multi-role dashboard systems",
        "Business workflow automation",
        "Advanced reporting and analytics",
        "Secure auth and access control",
        "Integration with CRM/ERP tools",
        "Deployment, monitoring and handover"
      ]
    },
    {
      name: "Enterprise",
      price: "Custom Quote",
      period: "",
      desc: "For large organizations with complex requirements",
      icon: <Star size={20} />,
      company: true,
      ctaKey: 'requestProposal',
      features: [
        "Enterprise-grade architecture",
        "High availability and scalability planning",
        "Custom SLAs and long-term support",
        "Security hardening and compliance-ready setup",
        "Dedicated technical consultation",
        "Team onboarding and documentation"
      ]
    },
    {
      name: "Custom",
      price: "Let's Talk",
      period: "",
      desc: "Have something unique in mind? Let's discuss",
      icon: <MessageSquare size={20} />,
      ctaKey: 'getInTouch',
      features: [
        "Fully customized scope & features",
        "Flexible timeline & milestones",
        "Tailored tech stack",
        "Dedicated communication channel",
        "Custom architecture & design",
        "Scalable & future-proof solutions",
        "Pay as you go or fixed quote"
      ]
    }
  ] : [
    {
      name: "البداية",
      price: "200–500 دولار",
      period: t('perProject'),
      desc: "مثالي للتطبيقات البسيطة والنماذج الأولية",
      icon: <Zap size={20} />,
      features: [
        "تطبيق ويب 3-5 شاشات",
        "تنفيذ واجهة مستخدم أساسية",
        "إدارة الحالة",
        "بنية نظيفة",
        "تسليم خلال 1-2 أسبوع"
      ]
    },
    {
      name: "احترافي",
      price: "800–2,000 دولار",
      period: t('perProject'),
      desc: "مثالي للتطبيقات كاملة الميزات",
      icon: <Star size={20} />,
      popular: true,
      features: [
        "تطبيق ويب 6-12 شاشة",
        "بنية نظيفة + Redux",
        "تكامل REST API",
        "نشر متجاوب",
        "تسليم خلال 4-6 أسابيع",
        "3 جولات مراجعة",
        "تحسين الأداء"
      ]
    },
    {
      name: "الأقصى",
      price: "+2,500 دولار",
      period: t('perProject'),
      desc: "للتطبيقات المعقدة والقابلة للتوسع",
      icon: <Shield size={20} />,
      ctaKey: 'contactMe',
      features: [
        "تطبيق ويب كامل النطاق",
        "تصميم معماري متقدم",
        "تكامل خلفية مخصص",
        "ميزات الوقت الفعلي",
        "دعم منصات متعددة",
        "صيانة ودعم مستمر",
        "مراجعات غير محدودة",
        "دعم ذو أولوية"
      ]
    },
    {
      name: "الأعمال",
      price: "+5,000 دولار",
      period: t('perProject'),
      desc: "مصمم للشركات المتنامية والمنصات الداخلية",
      icon: <Shield size={20} />,
      company: true,
      ctaKey: 'requestProposal',
      features: [
        "لوحات تحكم متعددة الأدوار",
        "أتمتة سير العمل",
        "تقارير وتحليلات متقدمة",
        "توثيق وصلاحيات وصول آمنة",
        "تكامل مع أنظمة CRM/ERP",
        "نشر ومراقبة وتسليم كامل"
      ]
    },
    {
      name: "المؤسسات",
      price: "عرض سعر مخصص",
      period: "",
      desc: "للمؤسسات الكبيرة ذات المتطلبات المعقدة",
      icon: <Star size={20} />,
      company: true,
      ctaKey: 'requestProposal',
      features: [
        "معمارية على مستوى المؤسسات",
        "تخطيط للتوسع والتوافر العالي",
        "اتفاقيات SLA ودعم طويل المدى",
        "تعزيز الأمان وتجهيز للامتثال",
        "استشارات تقنية مخصصة",
        "تدريب الفريق وتوثيق شامل"
      ]
    },
    {
      name: "مخصص",
      price: "دعنا نتحدث",
      period: "",
      desc: "لديك شيء فريد في ذهنك؟ دعنا نناقش",
      icon: <MessageSquare size={20} />,
      ctaKey: 'getInTouch',
      features: [
        "نطاق وميزات مخصصة بالكامل",
        "جدول زمني ومعالم مرنة",
        "مجموعة تقنية مصممة خصيصاً",
        "قناة اتصال مخصصة",
        "بنية وتصميم مخصص",
        "حلول قابلة للتوسع ومستقبلية",
        "الدفع حسب الاستخدام أو عرض سعر ثابت"
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-white/40 hover:text-accent-purple transition-colors font-bold uppercase tracking-widest text-xs"
          >
            <ArrowLeft size={16} /> {t('backToHome')}
          </Link>
        </div>

        <SectionHeading 
          title={t('pricingTitle')} 
          subtitle={t('pricingSubtitle')} 
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`relative glass-card p-8 rounded-3xl flex flex-col transition-all duration-500 ${plan.popular ? 'bg-accent-purple/10 border-accent-purple glow-purple scale-105 z-10' : 'hover:border-white/20'}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-bg-dark border border-accent-purple rounded-full flex items-center gap-1 z-20">
                  <Star size={10} className="fill-accent-purple text-accent-purple" />
                  <span className="text-[9px] font-bold uppercase tracking-widest text-accent-purple">{t('mostPopular')}</span>
                </div>
              )}
              {plan.company && (
                <div className="absolute -top-4 right-6 px-3 py-1 bg-accent-blue/10 border border-accent-blue/40 rounded-full z-20">
                  <span className="text-[9px] font-bold uppercase tracking-widest text-accent-blue">{t('forCompanies')}</span>
                </div>
              )}
              
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-accent-purple mb-8">
                {plan.icon}
              </div>

              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <p className="text-white/40 text-xs mb-6 leading-relaxed">{plan.desc}</p>

              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className={`text-3xl font-bold ${plan.name === 'Custom' || plan.name === 'مخصص' ? 'text-white' : 'text-accent-purple'}`}>{plan.price}</span>
                  {plan.period && <span className="text-white/30 text-[10px] uppercase tracking-widest">{plan.period}</span>}
                </div>
              </div>

              <div className="h-px w-full bg-white/5 mb-8" />

              <div className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature, j) => (
                  <div key={j} className="flex items-start gap-3 text-white/60 text-xs">
                    <Check size={14} className="text-accent-purple shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-4 rounded-2xl font-bold uppercase tracking-widest text-[10px] transition-all ${plan.popular ? 'bg-gradient-to-r from-accent-purple to-accent-blue text-white hover:scale-105 glow-mixed' : 'bg-gradient-to-r from-accent-purple/10 to-accent-blue/10 text-accent-purple hover:from-accent-purple hover:to-accent-blue hover:text-white'}`}>
                {plan.ctaKey ? t(plan.ctaKey) : plan.popular ? t('mostPopular') : t('getStarted')}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
