import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "ar";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    home: "Home",
    about: "About",
    education: "Education",
    skills: "Skills",
    experience: "Experience",
    services: "Services",
    projects: "Projects",
    role: "Full-Stack Developer & WordPress Expert",
    rights: "All rights reserved",
    contact: "Contact",
    pricing: "Pricing",
    cv: "CV",
    aboutTitle: "About Me",
    aboutSubtitle: "My story and background",
    eduTitle: "Education",
    eduSubtitle: "My academic and professional training",
    skillsTitle: "Skills",
    skillsSubtitle: "Technologies and tools I work with",
    expTitle: "Experience",
    expSubtitle: "My professional journey and growth",
    projTitle: "Projects",
    projSubtitle: "My Recent Work",
    servTitle: "Services",
    servSubtitle: "What I can do for you",
    testTitle: "Testimonials",
    testSubtitle: "What others say about my work",
    welcome: "Welcome to my world",
    hi: "Hi, I'm",
    myPortfolio: "My Portfolio",
    viewCV: "View CV",
    availableForHire: "Available for hire",
    yearsExp: "Years Experience",
    projectsDone: "Projects Done",
    techSkills: "Technical Skills",
    softSkills: "Soft Skills",
    viewProjectDetails: "View Project Details",
    launchProject: "Launch Project",
    sourceCode: "Source Code",
    stack: "Stack",
    challenge: "Challenge",
    solution: "Solution",
    frontend: "Frontend Development",
    backend: "Backend & Database",
    wordpress: "WordPress & CMS",
    tools: "Tools & Others",
    teamwork: "Teamwork",
    communication: "Communication",
    timeManagement: "Time Management",
    problemSolving: "Problem Solving",
    adaptability: "Adaptability",
    leadership: "Leadership",
    criticalThinking: "Critical Thinking",
    workEthic: "Work Ethic",
    noTestimonials: "No Testimonials Yet",
    noTestimonialsDesc:
      "I'm currently working on some exciting projects. Check back soon to see what clients are saying!",
    aboutMeDesc:
      "I’m Esraa Ali, a developer who believes in owning the entire lifecycle of a product. I specialize in Full-Stack Web Development, where I architect responsive, component-driven interfaces in React and pair them with scalable backend solutions (including WordPress). I thrive on complex challenges, like the large-scale Traveling Platform I developed requiring high availability and real-time data. With a foundation from the ITI in AI, Big Data, and Cloud (Huawei), I focus on leveraging modern infrastructure to drive measurable innovation.",
    pricingTitle: "Pricing Plans",
    pricingSubtitle: "Transparent pricing for individuals and companies",
    backToHome: "Back to Home",
    mostPopular: "Most Popular",
    forCompanies: "For Companies",
    getInTouch: "Get in Touch",
    getStarted: "Get Started",
    contactMe: "Contact Me",
    requestProposal: "Request Proposal",
    perProject: "per project",
    printCV: "Print CV",
    professionalSummary: "Professional Summary",
    workExperience: "Work Experience",
    keyProjects: "Key Projects",
    certifications: "Certifications",
    awards: "Awards",
    languages: "Languages",
    native: "Native",
    professional: "Professional",
    testimonials: "Testimonials",
  },
  ar: {
    home: "الرئيسية",
    about: "من أنا",
    education: "التعليم",
    skills: "المهارات",
    experience: "الخبرة",
    services: "الخدمات",
    projects: "المشاريع",
    role: "مطور واجهات كاملة وخبير ووردبريس",
    rights: "جميع الحقوق محفوظة",
    contact: "اتصل بي",
    pricing: "الأسعار",
    cv: "السيرة الذاتية",
    aboutTitle: "من أنا",
    aboutSubtitle: "قصتي وخلفيتي المهنية",
    eduTitle: "التعليم",
    eduSubtitle: "تدريبي الأكاديمي والمهني",
    skillsTitle: "المهارات",
    skillsSubtitle: "التقنيات والأدوات التي أعمل بها",
    expTitle: "الخبرة",
    expSubtitle: "رحلتي المهنية ونموي",
    projTitle: "المشاريع",
    projSubtitle: "أحدث أعمالي",
    servTitle: "الخدمات",
    servSubtitle: "ما يمكنني تقديمه لك",
    testTitle: "التوصيات",
    testSubtitle: "ماذا يقول الآخرون عن عملي",
    welcome: "مرحباً بك في عالمي",
    hi: "أهلاً، أنا",
    myPortfolio: "معرض أعمالي",
    viewCV: "عرض السيرة الذاتية",
    availableForHire: "متاح للعمل",
    yearsExp: "سنوات خبرة",
    projectsDone: "مشاريع منجزة",
    techSkills: "مهارات تقنية",
    softSkills: "مهارات شخصية",
    viewProjectDetails: "عرض تفاصيل المشروع",
    launchProject: "إطلاق المشروع",
    sourceCode: "كود المصدر",
    stack: "التقنيات",
    challenge: "التحدي",
    solution: "الحل",
    noTestimonials: "لا توجد توصيات بعد",
    noTestimonialsDesc:
      "أعمل حالياً على بعض المشاريع المثيرة. عد قريباً لرؤية ما يقوله العملاء!",
    aboutMeDesc:
      "أنا إسراء علي، مطورة تؤمن بامتلاك دورة حياة المنتج بالكامل. أتخصص في تطوير الويب الكامل، حيث أقوم ببناء واجهات متجاوبة تعتمد على المكونات في React وأربطها بحلول خلفية قابلة للتوسع (بما في ذلك WordPress). أزدهر في مواجهة التحديات المعقدة، مثل منصة السفر واسعة النطاق التي قمت بتطويرها والتي تتطلب توافراً عالياً وبيانات في الوقت الفعلي. مع أساس من ITI في الذكاء الاصطناعي والبيانات الضخمة والسحابة (Huawei)، أركز على الاستفادة من البنية التحتية الحديثة لدفع الابتكار القابل للقياس.",
    frontend: "تطوير الواجهة الأمامية",
    backend: "الخلفية وقواعد البيانات",
    wordpress: "ووردبريس وأنظمة إدارة المحتوى",
    tools: "الأدوات وأخرى",
    teamwork: "العمل الجماعي",
    communication: "التواصل",
    timeManagement: "إدارة الوقت",
    problemSolving: "حل المشكلات",
    adaptability: "القدرة على التكيف",
    leadership: "القيادة",
    criticalThinking: "التفكير النقدي",
    workEthic: "أخلاقيات العمل",
    pricingTitle: "خطط الأسعار",
    pricingSubtitle: "أسعار شفافة للأفراد والشركات",
    backToHome: "العودة للرئيسية",
    mostPopular: "الأكثر شعبية",
    forCompanies: "للشركات",
    getInTouch: "تواصل معي",
    getStarted: "ابدأ الآن",
    contactMe: "اتصل بي",
    requestProposal: "اطلب عرض سعر",
    perProject: "لكل مشروع",
    printCV: "طباعة السيرة الذاتية",
    professionalSummary: "الملخص المهني",
    workExperience: "الخبرة العملية",
    keyProjects: "المشاريع الرئيسية",
    certifications: "الشهادات",
    awards: "الجوائز",
    languages: "اللغات",
    native: "اللغة الأم",
    professional: "احترافي",

    backEnd: "الواجهة الخلفية",
    frontEnd: "الواجهة الأمامية",
    fullStack: "التطوير الكامل",
    softSkills: "المهارات الشخصية", 
    softSkillsCategory: "المهارات الشخصية", 
    testimonials: "التوصيات",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem("language");
    return (saved as Language) || "en";
  });

  useEffect(() => {
    localStorage.setItem("language", language);
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context)
    throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};
