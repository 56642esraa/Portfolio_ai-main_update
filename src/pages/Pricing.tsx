import React from 'react';
import { motion } from 'motion/react';
import { Zap, Star, Shield, MessageSquare, Check, ArrowLeft, Rocket, DollarSign, Crown, Sparkles } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Pricing = () => {
  const { t, language } = useLanguage();
  const navigate = useNavigate();
  
  const plans = language === 'en' ? [
    {
      name: "Starter",
      price: "$25–100",
      period: t('perProject'),
      desc: "Perfect for simple apps & MVPs",
      icon: <Zap size={20} />,
      features: [
        "3–5 Screens Web app",
        "Basic UI implementation",
        "State management",
        "Clean architecture",
        "1–2 weeks delivery",
        "Basic responsive design"
      ],
      buttonText: "Get Started",
      popular: false,
      color: "from-gray-500/20 to-gray-600/20",
      borderColor: "border-gray-500/30",
      iconColor: "text-gray-400"
    },
    {
      name: "Professional",
      price: "$100–500",
      period: t('perProject'),
      desc: "Ideal for full-featured applications",
      icon: <Crown size={20} />,
      popular: true,
      features: [
        "6–12 Screens Web app",
        "Clean Architecture + Redux",
        "REST API integration",
        "Responsive deployment",
        "4–6 weeks delivery",
        "3 revision rounds",
        "Performance optimization",
        "SEO optimization",
        "Analytics integration",
        "Priority email support"
      ],
      buttonText: "Get Started",
      color: "from-accent-purple/30 to-accent-blue/30",
      borderColor: "border-accent-purple/50",
      iconColor: "text-accent-purple"
    },
    {
      name: "Business",
      price: "$500–1500",
      period: t('perProject'),
      desc: "For growing businesses & complex needs",
      icon: <Rocket size={20} />,
      features: [
        "15–25 Screens Web app",
        "Advanced architecture design",
        "Custom backend integration",
        "Real-time features",
        "Multi-platform support",
        "6–8 weeks delivery",
        "Priority support",
        "Team training included",
        "SLA agreement",
        "24/7 technical support"
      ],
      buttonText: "Contact Us",
      popular: false,
      color: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-500/30",
      iconColor: "text-purple-400"
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      desc: "For large organizations",
      icon: <Shield size={20} />,
      features: [
        "Full-scale Web application",
        "Enterprise-grade architecture",
        "High availability and scalability",
        "Custom SLAs and support",
        "Security hardening",
        "Dedicated team",
        "White-label solution",
        "Compliance ready",
        "24/7 dedicated support",
        "On-premise deployment"
      ],
      buttonText: "Contact Us",
      popular: false,
      color: "from-amber-500/20 to-orange-500/20",
      borderColor: "border-amber-500/30",
      iconColor: "text-amber-400"
    }
  ] : [
    {
      name: "البداية",
      price: "25–100 دولار",
      period: t('perProject'),
      desc: "مثالي للتطبيقات البسيطة",
      icon: <Zap size={20} />,
      features: [
        "تطبيق ويب 3-5 شاشات",
        "تنفيذ واجهة مستخدم أساسية",
        "إدارة الحالة",
        "بنية نظيفة",
        "تسليم خلال 1-2 أسبوع",
        "تصميم متجاوب أساسي"
      ],
      buttonText: "ابدأ الآن",
      popular: false,
      color: "from-gray-500/20 to-gray-600/20",
      borderColor: "border-gray-500/30",
      iconColor: "text-gray-400"
    },
    {
      name: "احترافي",
      price: "100–500 دولار",
      period: t('perProject'),
      desc: "مثالي للتطبيقات المتكاملة",
      icon: <Crown size={20} />,
      popular: true,
      features: [
        "تطبيق ويب 6-12 شاشة",
        "بنية نظيفة + Redux",
        "تكامل REST API",
        "نشر متجاوب",
        "تسليم خلال 4-6 أسابيع",
        "3 جولات مراجعة",
        "تحسين الأداء",
        "تحسين محركات البحث",
        "تكامل التحليلات",
        "دعم優先 عبر البريد"
      ],
      buttonText: "ابدأ الآن",
      color: "from-accent-purple/30 to-accent-blue/30",
      borderColor: "border-accent-purple/50",
      iconColor: "text-accent-purple"
    },
    {
      name: "الأعمال",
      price: "500–1500 دولار",
      period: t('perProject'),
      desc: "للشركات المتنامية",
      icon: <Rocket size={20} />,
      features: [
        "تطبيق ويب 15-25 شاشة",
        "تصميم معماري متقدم",
        "تكامل خلفية مخصص",
        "ميزات الوقت الفعلي",
        "دعم منصات متعددة",
        "تسليم خلال 6-8 أسابيع",
        "دعم ذو أولوية",
        "تدريب الفريق مشمول",
        "اتفاقية مستوى الخدمة",
        "دعم فني 24/7"
      ],
      buttonText: "اتصل بنا",
      
      popular: false,
      color: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-500/30",
      iconColor: "text-purple-400"
    },
    {
      name: "المؤسسات",
      price: "مخصص",
      period: "",
      desc: "للمؤسسات الكبيرة",
      icon: <Shield size={20} />,
      features: [
        "تطبيق ويب كامل النطاق",
        "معمارية متكاملة",
        "توافر عالي وقابلية للتوسع",
        "اتفاقيات SLA ودعم مخصص",
        "تعزيز الأمان",
        "فريق مخصص",
        "حل علامة بيضاء",
        "جاهز للامتثال",
        "دعم مخصص 24/7",
        "نشر محلي"
      ],
      buttonText: "اتصل بنا",
      popular: false,
      color: "from-amber-500/20 to-orange-500/20",
      borderColor: "border-amber-500/30",
      iconColor: "text-amber-400"
    }
  ];

  // Function to scroll to contact section on home page
  const scrollToContact = () => {
    // First navigate to home page
    navigate('/');
    
    // Wait for navigation to complete, then scroll
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
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
            {t('backToHome')}
          </Link>
        </motion.div>

        {/* Header with Logo */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="flex justify-center mb-6"
          >
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-accent-purple/20 to-accent-blue/20 flex items-center justify-center border border-accent-purple/30 shadow-lg">
              <DollarSign size={40} className="text-accent-purple" />
            </div>
          </motion.div>
          
          <span className="text-accent-purple font-bold uppercase tracking-[0.3em] text-[10px]">
            {t('pricingTitle')}
          </span>
          <h1 className="text-5xl md:text-6xl font-bold mt-4 mb-6 tracking-tight bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
            Choose Your Perfect Plan
          </h1>
          <div className="w-16 h-1 bg-gradient-to-r from-accent-purple to-accent-blue mx-auto rounded-full" />
          <p className="text-white/50 max-w-2xl mx-auto mt-6">
            {language === 'en'
              ? "Transparent pricing for every need. Start small and scale as you grow."
              : "أسعار شفافة لكل احتياج. ابدأ صغيراً وتوسع مع نموك."}
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              onClick={scrollToContact}
              className={`relative glass-card p-6 rounded-2xl transition-all duration-300 group cursor-pointer flex flex-col ${
                plan.popular 
                  ? 'border-accent-purple/50 shadow-2xl shadow-accent-purple/30 scale-105 z-10 bg-gradient-to-b from-accent-purple/10 to-accent-blue/5' 
                  : 'hover:border-accent-purple/30 hover:shadow-lg hover:shadow-accent-purple/10'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.3 }}
                  className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-accent-purple to-accent-blue rounded-full flex items-center gap-1 shadow-lg z-20"
                >
                  <Sparkles size={10} className="text-white animate-pulse" />
                  <Star size={10} className="fill-white text-white" />
                  <span className="text-[9px] font-bold text-white uppercase tracking-wider">
                    {language === 'en' ? 'Most Popular' : 'الأكثر شهرة'}
                  </span>
                </motion.div>
              )}

              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${plan.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 relative ${
                plan.popular ? 'shadow-lg shadow-accent-purple/30' : ''
              }`}>
                {plan.popular && (
                  <div className="absolute inset-0 rounded-xl bg-accent-purple/20 blur-xl group-hover:blur-2xl transition-all" />
                )}
                <div className={`${plan.popular ? 'text-white' : plan.iconColor} group-hover:text-white transition-colors relative z-10`}>
                  {plan.icon}
                </div>
              </div>

              {/* Plan Name */}
              <h3 className={`text-xl font-bold mb-1 ${plan.popular ? 'text-transparent bg-clip-text bg-gradient-to-r from-accent-purple to-accent-blue' : 'text-white'}`}>
                {plan.name}
              </h3>
              <p className="text-white/40 text-xs mb-4">{plan.desc}</p>

              {/* Price */}
              <div className="mb-4">
                <div className="flex items-baseline gap-1">
                  <motion.span 
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    className={`text-3xl font-bold ${plan.price === "Custom" || plan.price === "مخصص" ? 'text-white' : plan.popular ? 'text-accent-purple' : 'text-white'}`}
                  >
                    {plan.price}
                  </motion.span>
                  {plan.period && <span className="text-white/30 text-[10px]">{plan.period}</span>}
                </div>
                {plan.popular && (
                  <p className="text-green-400 text-[9px] mt-1">⭐ Best value</p>
                )}
              </div>

              {/* Divider */}
              <div className={`h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-4 ${plan.popular ? 'via-accent-purple/50' : ''}`} />

              {/* Features */}
              <div className="space-y-2 mb-6 flex-grow">
                {plan.features.slice(0, 8).map((feature, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + i * 0.02 }}
                    className="flex items-start gap-2"
                  >
                    <Check size={12} className={`${plan.popular ? 'text-accent-purple' : 'text-white/40'} shrink-0 mt-0.5 ${plan.popular ? 'group-hover:scale-110 transition-transform' : ''}`} />
                    <span className="text-white/50 text-[11px] leading-relaxed">{feature}</span>
                  </motion.div>
                ))}
                {plan.features.length > 8 && (
                  <p className="text-white/30 text-[9px] pl-5">+{plan.features.length - 8} more features</p>
                )}
              </div>

              {/* Button */}
              <div
                className={`block w-full py-3 rounded-xl text-center font-bold text-sm transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-accent-purple to-accent-blue text-white hover:scale-105 hover:shadow-xl hover:shadow-accent-purple/50 shadow-lg relative overflow-hidden'
                    : 'border border-accent-purple/30 text-accent-purple hover:bg-accent-purple/10 hover:scale-105 hover:border-accent-purple/50'
                }`}
              >
                <span className="relative z-10">{plan.buttonText}</span>
              </div>

              {/* Professional Badge */}
              {plan.popular && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="mt-3 text-center"
                >
                  <span className="text-[8px] text-accent-purple/60 uppercase tracking-wider">✨ Recommended for most projects</span>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="glass-card p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-white mb-2">
              {language === 'en' ? 'Need a custom solution?' : 'هل تحتاج إلى حل مخصص؟'}
            </h3>
            <p className="text-white/50 text-sm mb-6">
              {language === 'en'
                ? 'Contact me for a personalized quote tailored to your specific requirements.'
                : 'اتصل بي للحصول على عرض سعر مخصص حسب متطلباتك الخاصة.'}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button
                onClick={scrollToContact}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-accent-purple to-accent-blue text-white rounded-xl font-bold text-sm hover:scale-105 transition-all shadow-lg hover:shadow-accent-purple/30"
              >
                <MessageSquare size={16} />
                {language === 'en' ? 'Contact Me' : 'اتصل بي'}
              </button>
              <a
                href="https://wa.me/201012847580"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-green-500/50 text-green-400 rounded-xl font-bold text-sm hover:bg-green-500/10 hover:scale-105 transition-all"
              >
                <MessageSquare size={16} />
                WhatsApp
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Pricing;