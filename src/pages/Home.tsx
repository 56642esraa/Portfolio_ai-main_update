import React, { useState, useEffect } from "react";
import { MdEmail } from 'react-icons/md';
import {
  FaWhatsapp,
  FaGithub,
  FaLinkedin,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaBootstrap,

} from 'react-icons/fa';

// React Icons imports

import {
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiRedux,
  SiTailwindcss,
  SiJquery,
  SiNodedotjs,
  SiMongodb,
  SiAuth0,
  SiPostman,
  SiCodeigniter,
  SiRedis,
  SiDocker,
  SiServerless,
  SiPhp,
  SiSwagger
} from 'react-icons/si';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectCoverflow } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import { motion, AnimatePresence } from "motion/react";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  BookOpen,
  ChevronRight,
  Code2,
  Globe,
  Cpu,
  Award,
  Layers,
  Search,
  Menu,
  X,
  Settings,
  Download,
  MousePointer2,
  Rocket,
  Zap,
  Database,
  Terminal,
  Users,
  Star,
  Palette,
  Server,
  Plug,
  Smartphone,
  Gauge,
  MessageSquare,
  Clock,
  Target,
  RefreshCw,
  TrendingUp,
  Heart,
  Atom,
  FileCode,
  Flame,
  Layout,
  ShoppingBag,
  GitBranch,
  Cloud,
  Box,
  Figma,
  Send,
  List,
  CheckCircle2,
  AlertCircle,
  Lightbulb,
  Shield,
  Play,
  Calendar,
  GraduationCap,

  FileBadge,
  MapPin,
  Trophy,
  Brain,
  Briefcase,
  User,
  DollarSign,





} from "lucide-react";
import { Link } from "react-router-dom";
import { Badge, SectionHeading } from "../components/Shared";
import { useLanguage } from "../context/LanguageContext";

const Home = () => {
  const { t, language } = useLanguage();
  const [activeSkillTab, setActiveSkillTab] = useState<
    "backend" | "frontend" | "fullstack" | "softskills"
  >("backend");
  const [activeProjectTab, setActiveProjectTab] = useState<
    "All" | "Frontend" | "Backend" | "Full-Stack" | "WordPress"
  >("All");
  const [selectedProject, setSelectedProject] = useState<any | null>(null);
  const [selectedFeatureProject, setSelectedFeatureProject] = useState<
    any | null
  >(null);

  // Add near other useState declarations in Home component
  const [activeEduTab, setActiveEduTab] = useState<'education' | 'certifications'>('education');

  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const words = [t("role")];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % words.length;
      const fullWord = words[i];

      setDisplayText(
        isDeleting
          ? fullWord.substring(0, displayText.length - 1)
          : fullWord.substring(0, displayText.length + 1),
      );

      setTypingSpeed(isDeleting ? 75 : 150);

      if (!isDeleting && displayText === fullWord) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum, typingSpeed]);

  // Experience Section
  const experiences = language === 'en' ? [

    {
      period: "Jan '26 - Present",
      title: "Fullstack Web Developer Intern",
      company: "Digilians (MCIT Initiative)",
      challenge: "Building responsive web applications with complex state management and real-time data synchronization.",
      action: "Developed React.js applications with Redux, architected RESTful APIs using Express.js, and implemented JWT authentication.",
      result: "Achieved 100% cross-browser compatibility, improved data retrieval efficiency by 35%, and reduced load times by 45%."
    },
    {
      period: "2025",
      title: "WordPress Developer",
      company: "Information Technology Institute (ITI)",
      challenge: "Creating a large-scale traveling platform with complex search/filtering and booking systems.",
      action: "Optimized WordPress architectures, implemented on-page SEO strategies, and applied Software Engineering principles.",
      result: "Successfully launched a production-ready traveling website with multi-currency/language support."
    },

  ] : [

    {
      period: "يناير 26 - حتى الآن",
      title: "متدرب مطور ويب كامل",
      company: "Digilians (مبادرة MCIT)",
      challenge: "بناء تطبيقات ويب متجاوبة مع إدارة حالة معقدة.",
      action: "طورت تطبيقات React.js، وبنيت RESTful APIs، ونفذت المصادقة.",
      result: "حققت توافقاً مع المتصفحات وحسنت كفاءة استرجاع البيانات."
    },
    {
      period: " 2025",
      title: "مطور ووردبريس",
      company: "معهد تكنولوجيا المعلومات (ITI)",
      challenge: "إنشاء منصة سفر واسعة النطاق مع أنظمة حجز.",
      action: "حسنت معمارية ووردبريس ونفذت استراتيجيات SEO.",
      result: "أطلقت بنجاح موقع سفر مع دعم عملات ولغات متعددة."
    },


  ];

  const testimonials = language === 'en' ? [
    {
      name: "Ahmed Mohamed",
      role: "CTO, Tech Solutions",
      content: "Esraa delivered an exceptional WordPress solution for our e-commerce platform. Her attention to detail and technical expertise exceeded our expectations. The project was completed ahead of schedule.",
      rating: 5,
      initials: "AM"
    },
    {
      name: "Sarah Johnson",
      role: "Project Manager",
      content: "Working with Esraa was a pleasure. She understood our requirements perfectly and delivered a scalable, performant React application. Her communication skills are top-notch.",
      rating: 5,
      initials: "SJ"
    },
    {
      name: "Omar Hassan",
      role: "Founder, Startup Hub",
      content: "Esraa's full-stack expertise helped us launch our MVP quickly. She built robust APIs and a responsive frontend. Highly recommended for any web development project.",
      rating: 4,
      initials: "OH"
    },
    {
      name: "Ahmed Mohamed",
      role: "CTO, Tech Solutions",
      content: "Esraa delivered an exceptional WordPress solution for our e-commerce platform. Her attention to detail and technical expertise exceeded our expectations.",
      rating: 5,
      initials: "AM"
    },
    {
      name: "Sarah Johnson",
      role: "Project Manager",
      content: "Working with Esraa was a pleasure. She understood our requirements perfectly and delivered a scalable, performant React application.",
      rating: 5,
      initials: "SJ"
    },
    {
      name: "Omar Hassan",
      role: "Founder",
      content: "Esraa's full-stack expertise helped us launch our MVP quickly. She built robust APIs and a responsive frontend.",
      rating: 4,
      initials: "OH"
    },
    {
      name: "Nour El Din",
      role: "Product Owner",
      content: "Professional, punctual, and highly skilled. Esraa brought our vision to life with clean code and beautiful design.",
      rating: 5,
      initials: "NE"
    }
  ] : [
    {
      name: "أحمد محمد",
      role: "التقنية التنفيذي",
      content: "قدمت إسراء حلاً استثنائياً لووردبريس لمنصة التجارة الإلكترونية لدينا. تجاوز اهتمامها بالتفاصيل وخبرتها الفنية توقعاتنا. تم إنجاز المشروع قبل الموعد المحدد.",
      rating: 5,
      initials: "أم"
    },
    {
      name: "سارة جونسون",
      role: "مديرة مشاريع",
      content: "العمل مع إسراء كان ممتعاً. فهمت متطلباتنا تماماً وقدمت تطبيق React قابلاً للتوسع وعالي الأداء. مهارات التواصل لديها ممتازة.",
      rating: 5,
      initials: "سج"
    },
    {
      name: "عمر حسن",
      role: "مؤسس",
      content: "خبرة إسراء في التطوير الكامل ساعدتنا في إطلاق منتجنا بسرعة. بنت واجهات برمجة تطبيقات قوية وواجهة أمامية متجاوبة. موصى بها بشدة.",
      rating: 4,
      initials: "عم"
    },
    {
      name: "نور الدين",
      role: "مدير المنتج",
      content: "مهني، منتظم، وخبير. أنقذت رؤيتنا إلى الواقع مع الكود النظيف والتصميم الجذاب.",
      rating: 5,
      initials: "ند"
    },
    {
      name: "أحمد محمد",
      role: "التقنية التنفيذي",
      content: "قدمت إسراء حلاً استثنائياً لووردبريس لمنصة التجارة الإلكترونية لدينا. تجاوز اهتمامها بالتفاصيل وخبرتها الفنية توقعاتنا. تم إنجاز المشروع قبل الموعد المحدد.",
      rating: 5,
      initials: "أم"
    },
    {
      name: "سارة جونسون",
      role: "مديرة مشاريع",
      content: "العمل مع إسراء كان ممتعاً. فهمت متطلباتنا تماماً وقدمت تطبيق React قابلاً للتوسع وعالي الأداء. مهارات التواصل لديها ممتازة.",
      rating: 5,
      initials: "سج"
    },
    {
      name: "عمر حسن",
      role: "مؤسس",
      content: "خبرة إسراء في التطوير الكامل ساعدتنا في إطلاق منتجنا بسرعة. بنت واجهات برمجة تطبيقات قوية وواجهة أمامية متجاوبة. موصى بها بشدة.",
      rating: 4,
      initials: "عم"
    },

  ];

  const projects =
    language === "en"
      ? [
        {
          title: "Horeca Hut",
          client: "Horeca Hut UAE",
          duration: "Jan 2025 – Mar 2025",
          category: "WordPress",
          date: "2025",
          description:
            "A premium e-commerce platform for commercial kitchen equipment in the UAE, featuring a high-performance catalog and seamless checkout.",
          featureOverview:
            "Developed a high-performance e-commerce platform for Horeca Hut, the UAE’s leading supplier of commercial kitchen equipment. Built on WordPress, the project transformed a dense product catalog into a streamlined, user-centric digital storefront for B2B and B2C professional culinary clients.",
          challenge:
            "Inventory Scaling: Managing a massive database of industrial equipment, glassware, and appliances using the WooCommerce framework. Server Logic: Resolving complex file system permissions and session management issues to ensure a stable shopping experience. Conversion Friction: Reducing the steps required for professional chefs and procurement officers to find specific technical SKUs.",
          solution:
            "WooCommerce Customization: Leveraged the WooCommerce engine to handle high-volume product variants, dynamic pricing, and inventory tracking. Multi-Device Architecture: Engineered a fully responsive experience across PC, Laptop, Tablet, and Mobile using Flexbox and CSS Grid. Optimized Navigation: Implemented a persistent 'Sticky Header' with an advanced search bar and categorized mega-menus for instant access to Bakeware, Cookware, and Appliances. Admin Efficiency: Configured a custom WordPress dashboard to allow the client to easily update stock levels and 'Exclusive Deals' without technical overhead.",
          results:
            "35% Faster Navigation: Streamlined category paths allowed users to reach product details in fewer clicks. Enhanced UX Clarity: High-contrast CTA buttons (Orange/Black) significantly improved the visual 'Add to Cart' flow. Backend Stability: Optimized WordPress server-side configurations to handle concurrent sessions during peak sales. Professional Presence: Elevated the digital brand to match the quality of premium partners like Victorinox and Cambro.",
          techStack:
            "CMS & E-commerce: WordPress, WooCommerce | Frontend: JavaScript (ES6+), CSS Grid/Flexbox, HTML5 | Design Tools: Figma | Deployment: Managed WordPress Hosting",
          image: "/images/hut (1).png",
          tags: ["WordPress", "WooCommerce", "PHP", "Tailwind CSS"],
          technologies: [
            "WordPress",
            "WooCommerce",
            "PHP",
            "JavaScript",
            "MySQL",
            "Tailwind CSS",
            "Payment Gateway Integration",
          ],
          githubLink: "https://github.com/56642esraa/horeca-hut",
          liveLink: "https://horecahut.ae/",
          videoLink: "", // optional, leave empty
          challenges:
            "Developing a highly customized e-commerce experience with complex product variations and ensuring high performance for a large inventory.",
          solutions:
            "Implemented custom WooCommerce hooks and optimized database queries. Integrated advanced caching mechanisms and a modern frontend using Tailwind CSS for a fast, responsive user interface.",
        },

        {
          title: "Travel Platform",
          date: "2025",
          category: "Full-Stack",
          description:
            "A high-performance, large-scale traveling platform with real-time data synchronization and complex filtering.",
          image: "/images/trip.png",
          tags: ["React", "Node.js", "MongoDB", "Redux"],
          technologies: [
            "React",
            "Node.js",
            "Express",
            "MongoDB",
            "Redux",
            "Tailwind CSS",
            "SEO Optimization",
          ],
          challenges:
            "Managing high availability and real-time data synchronization for thousands of users simultaneously while maintaining sub-second response times for complex search filters.",
          solutions:
            "Implemented a robust state management system with Redux and optimized backend queries with indexing and caching. Leveraged modern cloud infrastructure to ensure scalability and high availability.",
        },
        {
          title: "E-Commerce Platform",
          date: "Jan — Feb 2025",
          category: "Backend",
          description:
            "Scalable e-commerce backend built with Node.js and TypeScript. Implemented robust REST APIs for product catalog and orders.",
          image: "/images/e-commerce.png",
          tags: ["Node.js", "TypeScript", "MongoDB"],
          technologies: [
            "Node.js",
            "TypeScript",
            "MongoDB",
            "Stripe API",
            "Redis",
            "Modular Architecture",
          ],
          challenges:
            "Managing complex state transitions for orders and ensuring consistency across inventory, payments, and shipping modules.",
          solutions:
            "Utilized TypeScript for type safety across the backend and implemented a robust error-handling middleware with transaction-like behavior for payments using Redis for session management.",
        },
      ]
      : [
        {
          title: "Horeca Hut",
          date: "2024",
          category: "Full-Stack",
          description:
            "منصة تجارة إلكترونية متميزة لمعدات ومستلزمات المطابخ في الإمارات العربية المتحدة، تتميز بكتالوج عالي الأداء وعملية دفع سلسة.",
          image: "/images/hut (1).png",
          tags: ["WordPress", "WooCommerce", "PHP", "Tailwind CSS"],
          technologies: [
            "WordPress",
            "WooCommerce",
            "PHP",
            "JavaScript",
            "MySQL",
            "Tailwind CSS",
            "بوابة الدفع",
          ],
          challenges:
            "تطوير تجربة تجارة إلكترونية مخصصة للغاية مع اختلافات معقدة في المنتجات وضمان الأداء العالي لمخزون كبير.",
          solutions:
            "تنفيذ خطافات WooCommerce مخصصة وتحسين استعلامات قاعدة البيانات. دمج آليات التخزين المؤقت المتقدمة وواجهة أمامية حديثة باستخدام Tailwind CSS لواجهة مستخدم سريعة ومتجاوبة.",
        },
        {
          title: "منصة سفر",
          date: "2023",
          category: "Full-Stack",
          description:
            "منصة سفر واسعة النطاق وعالية الأداء مع مزامنة البيانات في الوقت الفعلي وتصفية معقدة.",
          image: "/images/trip.png",
          tags: ["React", "Node.js", "MongoDB", "Redux"],
          technologies: [
            "React",
            "Node.js",
            "Express",
            "MongoDB",
            "Redux",
            "Tailwind CSS",
            "تحسين محركات البحث",
          ],
          challenges:
            "إدارة التوافر العالي ومزامنة البيانات في الوقت الفعلي لآلاف المستخدمين في وقت واحد مع الحفاظ على أوقات استجابة أقل من الثانية لمرشحات البحث المعقدة.",
          solutions:
            "تنفيذ نظام قوي لإدارة الحالة باستخدام Redux وتحسين استعلامات الخلفية مع الفهرسة والتخزين المؤقت. الاستفادة من البنية التحتية السحابية الحديثة لضمان القابلية للتوسع والتوافر العالي.",
        },
        {
          title: "منصة تجارة إلكترونية",
          date: "يناير - فبراير 2025",
          category: "Backend",
          description:
            "خلفية تجارة إلكترونية قابلة للتوسع مبنية باستخدام Node.js و TypeScript. تنفيذ واجهات برمجة تطبيقات REST قوية لكتالوج المنتجات والطلبات.",
          image: "/images/e-commerce.png",
          tags: ["Node.js", "TypeScript", "MongoDB"],
          technologies: [
            "Node.js",
            "TypeScript",
            "MongoDB",
            "Stripe API",
            "Redis",
            "معمارية نمطية",
          ],
          challenges:
            "إدارة انتقالات الحالة المعقدة للطلبات وضمان الاتساق عبر وحدات المخزون والمدفوعات والشحن.",
          solutions:
            "استخدام TypeScript لسلامة الأنواع عبر الخلفية وتنفيذ برمجيات وسيطة قوية لمعالجة الأخطاء مع سلوك يشبه المعاملات للمدفوعات باستخدام Redis لإدارة الجلسات.",
        },
      ];

  const education =
    language === "en"
      ? [
        {
          title: "Full-Stack Web Development",
          institution: "Digilians (MCIT Initiative)",
          year: "2026 - present",
          desc: "Specialized training in modern web architecture, MERN stack, and scalable application design.",
        },
        {
          title: "Software Development Internship",
          institution: "Information Technology Institute (ITI)",
          year: "2025",
          desc: "Intensive internship focusing on Software Development, Huawei Academy tracks, AI, Big Data, and Cloud Computing.",
        },

        {
          title: "WordPress Developer",
          institution: "Information Technology Institute (ITI)",
          year: "2025",
          desc: "Specialized training in custom theme development, plugin creation, and CMS architecture.",
        },
      ]
      : [
        {
          title: "تطوير الويب الكامل",
          institution: "(DIGILIANS) الرواد الرقميون ",
          year: "2026 - الحالى",
          desc: "تدريب متخصص في معمارية الويب الحديثة، MERN stack، وتصميم التطبيقات القابلة للتوسع.",
        },
        {
          title: "تدريب تطوير البرمجيات",
          institution: "معهد تكنولوجيا المعلومات (ITI)",
          year: "2025",
          desc: "تدريب مكثف يركز على تطوير البرمجيات، مسارات أكاديمية هواوي، الذكاء الاصطناعي، البيانات الضخمة، والحوسبة السحابية.",
        },

        {
          title: "إتقان ووردبريس",
          institution: "معهد تكنولوجيا المعلومات (ITI)",
          year: "2025",
          desc: "تدريب متخصص في تطوير القوالب المخصصة، إنشاء الإضافات، ومعمارية أنظمة إدارة المحتوى.",
        },
      ];

  const certifications = language === 'en' ? [
    {
      name: "Full-Stack Web Development",
      date: "2026",
      issuer: "DEPI Initiative",
      link: "https://drive.google.com/drive/folders/1V-6yBYGZHF1pC-wr_LfBqSN0wqoTRzem"
    },
    {
      name: "HCIA-Big Data",
      date: "Dec '24",
      issuer: "Huawei",
      link: "https://drive.google.com/drive/folders/1V-6yBYGZHF1pC-wr_LfBqSN0wqoTRzem" // Big Data folder
    },
    {
      name: "HCIA-AI",
      date: "Jan '24",
      issuer: "Huawei",
      link: "https://drive.google.com/drive/folders/1V-6yBYGZHF1pC-wr_LfBqSN0wqoTRzem" // AI folder
    },
    {
      name: "HCIA-Cloud Computing",
      date: "Jan '23",
      issuer: "Huawei",
      link: "https://drive.google.com/drive/folders/1V-6yBYGZHF1pC-wr_LfBqSN0wqoTRzem"
    },
    {
      name: "WordPress Developer",
      date: "2025",
      issuer: "ITI",
      link: "https://drive.google.com/drive/folders/1V-6yBYGZHF1pC-wr_LfBqSN0wqoTRzem"
    }
  ] : [
    {
      name: "تطوير الويب الكامل",
      date: "2026",
      issuer: "DIGILIANS",
      link: "https://drive.google.com/drive/folders/1V-6yBYGZHF1pC-wr_LfBqSN0wqoTRzem"
    },
    {
      name: "HCIA-البيانات الضخمة",
      date: "ديسمبر 24",
      issuer: "هواوي",
      link: "https://drive.google.com/drive/folders/1V-6yBYGZHF1pC-wr_LfBqSN0wqoTRzem"
    },
    {
      name: "HCIA-الذكاء الاصطناعي",
      date: "يناير 24",
      issuer: "هواوي",
      link: "https://drive.google.com/drive/folders/1V-6yBYGZHF1pC-wr_LfBqSN0wqoTRzem"
    },
    {
      name: "HCIA-الحوسبة السحابية",
      date: "يناير 23",
      issuer: "هواوي",
      link: "https://drive.google.com/drive/folders/1V-6yBYGZHF1pC-wr_LfBqSN0wqoTRzem"
    },
    {
      name: "تطوير ووردبريس",
      date: "2025",
      issuer: "ITI",
      link: "https://drive.google.com/drive/folders/1V-6yBYGZHF1pC-wr_LfBqSN0wqoTRzem"
    }
  ];

  const filteredProjects =
    activeProjectTab === "All"
      ? projects
      : projects.filter((p) => {
        if (activeProjectTab === "WordPress") {
          // Show projects that have "WordPress" in tags or category
          return p.tags?.includes("WordPress") || p.category === "WordPress";
        }
        return p.category === activeProjectTab;
      });

  const heroDescription =
    language === "en"
      ? "I build scalable, high-performance web and WordPress applications with clean, maintainable code."
      : "أبني تطبيقات ويب وووردبريس قابلة للتوسع وعالية الأداء بكود نظيف وسهل الصيانة.";

  // const services =
  //   language === "en"
  //     ? [
  //       {
  //         title: "Web Development",
  //         icon: <Globe size={32} />,
  //         desc: "Full-stack web applications built with modern technologies and best practices.",
  //         tags: [
  //           "Custom web applications",
  //           "CMS integration",
  //           "E-commerce solutions",
  //           "Database design",
  //         ],
  //       },
  //       {
  //         title: "Frontend Engineering",
  //         icon: <Palette size={32} />,
  //         desc: "Pixel-perfect, interactive user interfaces with smooth animations and transitions.",
  //         tags: [
  //           "Component-based architecture",
  //           "State management",
  //           "Animation & motion",
  //           "Accessibility (a11y)",
  //         ],
  //       },
  //       {
  //         title: "Backend Development",
  //         icon: <Server size={32} />,
  //         desc: "Robust server-side solutions with secure APIs and scalable architecture.",
  //         tags: [
  //           "RESTful API design",
  //           "Authentication & security",
  //           "Database optimization",
  //           "Cloud deployment",
  //         ],
  //       },
  //       {
  //         title: "API Integration",
  //         icon: <Plug size={32} />,
  //         desc: "Seamless third-party service integration and custom API development.",
  //         tags: [
  //           "Payment gateways",
  //           "Social media APIs",
  //           "Analytics platforms",
  //           "Custom webhooks",
  //         ],
  //       },
  //       {
  //         title: "Responsive Design",
  //         icon: <Smartphone size={32} />,
  //         desc: "Designs that look and work flawlessly across every device and screen size.",
  //         tags: [
  //           "Mobile-first approach",
  //           "Cross-browser testing",
  //           "Touch-optimized UI",
  //           "Adaptive layouts",
  //         ],
  //       },
  //       {
  //         title: "Performance Optimization",
  //         icon: <Gauge size={32} />,
  //         desc: "Lightning-fast load times through code splitting, caching, and asset optimization.",
  //         tags: [
  //           "Core Web Vitals",
  //           "Asset compression",
  //           "Lazy loading",
  //           "SEO optimization",
  //         ],
  //       },
  //     ]
  //     : [
  //       {
  //         title: "تطوير الويب",
  //         icon: <Globe size={32} />,
  //         desc: "تطبيقات ويب كاملة مبنية بأحدث التقنيات وأفضل الممارسات.",
  //         tags: [
  //           "تطبيقات ويب مخصصة",
  //           "تكامل أنظمة إدارة المحتوى",
  //           "حلول التجارة الإلكترونية",
  //           "تصميم قواعد البيانات",
  //         ],
  //       },
  //       {
  //         title: "هندسة الواجهة الأمامية",
  //         icon: <Palette size={32} />,
  //         desc: "واجهات تفاعلية دقيقة مع حركات وانتقالات سلسة.",
  //         tags: [
  //           "معمارية قائمة على المكونات",
  //           "إدارة الحالة",
  //           "الحركات والانتقالات",
  //           "إمكانية الوصول",
  //         ],
  //       },
  //       {
  //         title: "تطوير الواجهة الخلفية",
  //         icon: <Server size={32} />,
  //         desc: "حلول خلفية قوية بواجهات API آمنة ومعمارية قابلة للتوسع.",
  //         tags: [
  //           "تصميم RESTful API",
  //           "التوثيق والأمان",
  //           "تحسين قواعد البيانات",
  //           "النشر السحابي",
  //         ],
  //       },
  //       {
  //         title: "تكامل واجهات API",
  //         icon: <Plug size={32} />,
  //         desc: "تكامل سلس مع الخدمات الخارجية وتطوير APIs مخصصة.",
  //         tags: [
  //           "بوابات الدفع",
  //           "واجهات السوشيال ميديا",
  //           "منصات التحليلات",
  //           "Webhooks مخصصة",
  //         ],
  //       },
  //       {
  //         title: "تصميم متجاوب",
  //         icon: <Smartphone size={32} />,
  //         desc: "تصاميم تعمل بكفاءة على جميع الأجهزة ومقاسات الشاشات.",
  //         tags: [
  //           "نهج Mobile-first",
  //           "اختبار عبر المتصفحات",
  //           "واجهات محسنة للمس",
  //           "تصميمات تكيفية",
  //         ],
  //       },
  //       {
  //         title: "تحسين الأداء",
  //         icon: <Gauge size={32} />,
  //         desc: "سرعة تحميل عالية عبر تقسيم الكود والتخزين المؤقت وتحسين الأصول.",
  //         tags: [
  //           "مؤشرات Core Web Vitals",
  //           "ضغط الأصول",
  //           "التحميل الكسول",
  //           "تحسين SEO",
  //         ],
  //       },
  //     ];

  const services = language === 'en' ? [
    {
      title: "Database Design",
      desc: "Efficient schemas optimized for performance and scalability.",
      icon: <Database size={24} className="text-accent-purple" />,
      tags: ["SQL Server", "Entity Framework", "T-SQL", "LINQ"]
    },
    {
      title: "API Development",
      desc: "Secure and documented RESTful APIs for web & mobile apps.",
      icon: <Server size={24} className="text-accent-purple" />,
      tags: [".NET Core", "Swagger", "JWT Auth", "Postman"]
    },
    {
      title: "Web Applications",
      desc: "Building full-featured web applications using the .NET ecosystem.",
      icon: <Globe size={24} className="text-accent-purple" />,
      tags: ["ASP.NET MVC", "Razor Pages", "Redis", "Stripe"]
    },
    {
      title: "Frontend Development",
      desc: "Modern, responsive interfaces with React and Tailwind CSS.",
      icon: <Code2 size={24} className="text-accent-purple" />,
      tags: ["React", "Next.js", "TypeScript", "Tailwind CSS"]
    },
    {
      title: "Cloud Solutions",
      desc: "Scalable cloud architecture and deployment strategies.",
      icon: <Cloud size={24} className="text-accent-purple" />,
      tags: ["AWS", "Azure", "Docker", "CI/CD"]
    },
    {
      title: "WordPress Development",
      desc: "Custom themes, plugins, and e-commerce solutions.",
      icon: <Layout size={24} className="text-accent-purple" />,
      tags: ["WordPress", "WooCommerce", "PHP", "Elementor"]
    }
  ] : [
    {
      title: "تصميم قواعد البيانات",
      desc: "مخططات فعالة محسنة للأداء وقابلية التوسع.",
      icon: <Database size={24} className="text-accent-purple" />,
      tags: ["SQL Server", "Entity Framework", "T-SQL", "LINQ"]
    },
    {
      title: "تطوير واجهات API",
      desc: "واجهات برمجة تطبيقات RESTful آمنة وموثقة للتطبيقات.",
      icon: <Server size={24} className="text-accent-purple" />,
      tags: [".NET Core", "Swagger", "JWT Auth", "Postman"]
    },
    {
      title: "تطبيقات الويب",
      desc: "بناء تطبيقات ويب كاملة باستخدام النظام البيئي .NET.",
      icon: <Globe size={24} className="text-accent-purple" />,
      tags: ["ASP.NET MVC", "Razor Pages", "Redis", "Stripe"]
    },
    {
      title: "تطوير الواجهة الأمامية",
      desc: "واجهات حديثة ومتجاوبة باستخدام React و Tailwind CSS.",
      icon: <Code2 size={24} className="text-accent-purple" />,
      tags: ["React", "Next.js", "TypeScript", "Tailwind CSS"]
    },
    {
      title: "الحلول السحابية",
      desc: "معمارية سحابية قابلة للتوسع واستراتيجيات النشر.",
      icon: <Cloud size={24} className="text-accent-purple" />,
      tags: ["AWS", "Azure", "Docker", "CI/CD"]
    },
    {
      title: "تطوير ووردبريس",
      desc: "قوالب وإضافات وحلول تجارة إلكترونية مخصصة.",
      icon: <Layout size={24} className="text-accent-purple" />,
      tags: ["WordPress", "WooCommerce", "PHP", "Elementor"]
    }
  ];

  const contactInfo =
    language === "en"
      ? [
        {
          icon: <Mail size={20} />,
          title: "Email",
          value: "esraahamaza299@gmail.com",
          href: "mailto:esraahamaza299@gmail.com",
        },
        {
          icon: <Phone size={20} />,
          title: "Phone",
          value: "01012847580",
          href: "tel:01012847580",
        },
        {
          icon: <Globe size={20} />,
          title: "Location",
          value: "Cairo, Egypt",
          href: "#",
        },
      ]
      : [
        {
          icon: <Mail size={20} />,
          title: "البريد الإلكتروني",
          value: "esraahamaza299@gmail.com",
          href: "mailto:esraahamaza299@gmail.com",
        },
        {
          icon: <Phone size={20} />,
          title: "الهاتف",
          value: "01012847580",
          href: "tel:01012847580",
        },
        {
          icon: <Globe size={20} />,
          title: "الموقع",
          value: "القاهرة، مصر",
          href: "#",
        },
      ];

  const ProjectModal = ({
    project,
    onClose,
  }: {
    project: any;
    onClose: () => void;
  }) => {
    if (!project) return null;

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center px-6 py-10 bg-bg-dark/95 backdrop-blur-2xl"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 40 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 40 }}
          className="glass-card w-full max-w-6xl max-h-[90vh] overflow-hidden rounded-[2.5rem] border-white/10 glow-mixed relative flex flex-col lg:flex-row"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all z-20 backdrop-blur-md border border-white/10"
          >
            <X size={24} />
          </button>

          {/* Left: Image Side */}
          <div className="w-full lg:w-1/2 h-64 lg:h-auto relative group overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-transparent to-transparent opacity-60" />

            <div className="absolute bottom-8 left-8 right-8">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-bold text-white/80 uppercase tracking-widest"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Content Side */}
          <div className="w-full lg:w-1/2 p-8 lg:p-16 overflow-y-auto custom-scrollbar">
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-gradient-to-r from-accent-purple/20 to-accent-blue/20 border border-accent-purple/30 rounded-full text-[10px] font-bold text-accent-purple uppercase tracking-widest">
                  {project.category}
                </span>
                <span className="text-white/30 text-[10px] font-bold uppercase tracking-widest">
                  {project.date}
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-mixed leading-tight">
                {project.title}
              </h2>
              <p className="text-white/60 leading-relaxed text-lg">
                {project.description}
              </p>
            </div>

            <div className="space-y-10">
              <div>
                <h4 className="flex items-center gap-3 text-white font-bold text-sm mb-4 uppercase tracking-[0.2em]">
                  <Code2 size={18} className="text-accent-purple" />{" "}
                  {t("stack")}
                </h4>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech: string) => (
                    <div
                      key={tech}
                      className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/5 rounded-xl hover:border-accent-purple/30 transition-all"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-accent-purple" />
                      <span className="text-xs font-bold text-white/70">
                        {tech}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="flex items-center gap-3 text-white font-bold text-sm mb-4 uppercase tracking-[0.2em]">
                    <AlertCircle size={18} className="text-accent-blue" />{" "}
                    {t("challenge")}
                  </h4>
                  <p className="text-white/40 text-sm leading-relaxed italic">
                    "{project.challenges}"
                  </p>
                </div>

                <div>
                  <h4 className="flex items-center gap-3 text-white font-bold text-sm mb-4 uppercase tracking-[0.2em]">
                    <Lightbulb size={18} className="text-accent-purple" />{" "}
                    {t("solution")}
                  </h4>
                  <p className="text-white/40 text-sm leading-relaxed">
                    {project.solutions}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-10 border-t border-white/5 flex flex-col sm:flex-row gap-4">
              <a
                href="#"
                className="flex-1 py-5 bg-gradient-to-r from-accent-purple to-accent-blue text-white font-bold uppercase tracking-[0.2em] text-xs rounded-2xl text-center hover:scale-[1.02] transition-all glow-mixed flex items-center justify-center gap-2"
              >
                {t("launchProject")} <Globe size={16} />
              </a>
              <a
                href="#"
                className="flex-1 py-5 border border-white/10 text-white font-bold uppercase tracking-[0.2em] text-xs rounded-2xl text-center hover:bg-white/5 transition-all flex items-center justify-center gap-2"
              >
                {t("sourceCode")} <Github size={16} />
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    );
  };
  // FeatureModal
  const FeatureModal = ({ project, onClose }: { project: any; onClose: () => void }) => {
    if (!project) return null;

    return (
      <div
        className="fixed inset-0 z-[100] flex items-center justify-center px-6 py-10 bg-bg-dark/95 backdrop-blur-2xl"
        onClick={onClose}
      >
        <div
          className="glass-card w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl border-white/10 glow-mixed relative custom-scrollbar"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all z-20"
          >
            <X size={20} />
          </button>

          <div className="p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient-mixed">
              {project.title}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 pb-6 border-b border-white/10">
              <div>
                <h4 className="text-xs font-bold text-white/40 uppercase tracking-wider mb-1">CLIENT</h4>
                <p className="text-white/80 font-medium">{project.client || "Personal Brand Development"}</p>
              </div>
              <div>
                <h4 className="text-xs font-bold text-white/40 uppercase tracking-wider mb-1">DURATION</h4>
                <p className="text-white/80 font-medium">{project.duration || project.date || "Jan 2025 – Feb 2025"}</p>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-sm font-bold text-accent-purple uppercase tracking-wider mb-2">PROJECT OVERVIEW</h4>
              <p className="text-white/60 leading-relaxed">{project.featureOverview || project.description}</p>
            </div>

            <div className="mb-6">
              <h4 className="text-sm font-bold text-accent-purple uppercase tracking-wider mb-2">CHALLENGE</h4>
              <p className="text-white/60 leading-relaxed">{project.challenge || project.challenges}</p>
            </div>

            <div className="mb-6">
              <h4 className="text-sm font-bold text-accent-purple uppercase tracking-wider mb-2">SOLUTION</h4>
              <p className="text-white/60 leading-relaxed">{project.solution || project.solutions}</p>
            </div>

            {project.results && (
              <div className="mb-6">
                <h4 className="text-sm font-bold text-accent-purple uppercase tracking-wider mb-2">KEY RESULTS</h4>
                <p className="text-white/60 leading-relaxed">{project.results}</p>
              </div>
            )}

            {project.techStack && (
              <div>
                <h4 className="text-sm font-bold text-accent-purple uppercase tracking-wider mb-2">TECH STACK</h4>
                <p className="text-white/60 leading-relaxed">{project.techStack}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };
  // --------------------------------------------
  // Back End skills (with icons)
  const backendSkills =
    language === "en"
      ? [
        {
          title: "Node.js / Express",
          icon: <Server size={20} />,
          description:
            "Building scalable, event‑driven backends with RESTful APIs and middleware architecture.",
        },
        {
          title: "Databases (MongoDB, PostgreSQL)",
          icon: <Database size={20} />,
          description:
            "Designing efficient schemas, indexing, and optimizing queries for high‑performance data storage.",
        },
        {
          title: "Authentication & Security",
          icon: <Shield size={20} />,
          description:
            "Implementing JWT, OAuth, bcrypt hashing, and role‑based access control.",
        },
        {
          title: "API Integration",
          icon: <Plug size={20} />,
          description:
            "Connecting third‑party services (payment gateways, social logins, external APIs) seamlessly.",
        },
      ]
      : [
        {
          title: "Node.js / Express",
          icon: <Server size={20} />,
          description:
            "بناء خلفيات قابلة للتوسع تعتمد على الأحداث باستخدام RESTful APIs وهندسة البرمجيات الوسيطة.",
        },
        {
          title: "قواعد البيانات (MongoDB, PostgreSQL)",
          icon: <Database size={20} />,
          description:
            "تصميم مخططات فعالة، والفهرسة، وتحسين الاستعلامات لتخزين البيانات عالية الأداء.",
        },
        {
          title: "المصادقة والأمان",
          icon: <Shield size={20} />,
          description:
            "تنفيذ JWT، OAuth، تشفير bcrypt، والتحكم في الوصول القائم على الأدوار.",
        },
        {
          title: "تكامل واجهات API",
          icon: <Plug size={20} />,
          description:
            "ربط خدمات الطرف الثالث (بوابات الدفع، وسائل التواصل الاجتماعي، APIs خارجية) بسلاسة.",
        },
      ];

  // Front End skills (with icons)
  const frontendSkills =
    language === "en"
      ? [
        {
          title: "React.js / Next.js",
          icon: <Atom size={20} />,
          description:
            "Building component‑driven, interactive UIs with hooks, context, and server‑side rendering.",
        },
        {
          title: "TypeScript",
          icon: <FileCode size={20} />,
          description:
            "Adding type safety to JavaScript for more robust and maintainable code.",
        },
        {
          title: "Tailwind CSS / Framer Motion",
          icon: <Palette size={20} />,
          description:
            "Crafting responsive, utility‑first designs with smooth animations and transitions.",
        },
        {
          title: "State Management (Redux, Zustand)",
          icon: <Layers size={20} />,
          description:
            "Managing complex application state predictably across large component trees.",
        },
      ]
      : [
        {
          title: "React.js / Next.js",
          icon: <Atom size={20} />,
          description:
            "بناء واجهات مستخدم تفاعلية تعتمد على المكونات باستخدام hooks، context، والتقديم من جانب الخادم.",
        },
        {
          title: "TypeScript",
          icon: <FileCode size={20} />,
          description:
            "إضافة أمان الأنواع إلى JavaScript للحصول على كود أكثر قوة وقابلية للصيانة.",
        },
        {
          title: "Tailwind CSS / Framer Motion",
          icon: <Palette size={20} />,
          description:
            "صياغة تصاميم متجاوبة تعتمد على المرافق مع حركات وانتقالات سلسة.",
        },
        {
          title: "إدارة الحالة (Redux, Zustand)",
          icon: <Layers size={20} />,
          description:
            "إدارة حالة التطبيق المعقدة بشكل يمكن التنبؤ به عبر أشجار المكونات الكبيرة.",
        },
      ];

  // Full Stack skills (with icons)
  const fullstackSkills =
    language === "en"
      ? [
        {
          title: "MERN Stack",
          icon: <Code2 size={20} />,
          description:
            "End‑to‑end development with MongoDB, Express, React, and Node.js.",
        },
        {
          title: "Real‑time Features (WebSockets)",
          icon: <Zap size={20} />,
          description:
            "Implementing live chat, notifications, and collaborative editing using Socket.io.",
        },
        {
          title: "Cloud Deployment & DevOps",
          icon: <Cloud size={20} />,
          description:
            "Deploying apps on AWS, Vercel, or Netlify; using Docker and CI/CD pipelines.",
        },
        {
          title: "GraphQL / Prisma",
          icon: <GitBranch size={20} />,
          description:
            "Building flexible APIs with GraphQL and efficient ORM for database interactions.",
        },
      ]
      : [
        {
          title: "MERN Stack",
          icon: <Code2 size={20} />,
          description:
            "تطوير شامل باستخدام MongoDB، Express، React، و Node.js.",
        },
        {
          title: "الميزات الفورية (WebSockets)",
          icon: <Zap size={20} />,
          description:
            "تنفيذ الدردشة المباشرة والإشعارات والتحرير التعاوني باستخدام Socket.io.",
        },
        {
          title: "النشر السحابي و DevOps",
          icon: <Cloud size={20} />,
          description:
            "نشر التطبيقات على AWS، Vercel، أو Netlify؛ استخدام Docker ومسارات CI/CD.",
        },
        {
          title: "GraphQL / Prisma",
          icon: <GitBranch size={20} />,
          description:
            "بناء APIs مرنة باستخدام GraphQL و ORM فعال للتعامل مع قواعد البيانات.",
        },
      ];

  // Soft Skills (with icons)

  const softSkillsList =
    language === "en"
      ? [
        {
          title: "Team Collaboration",
          icon: <Users size={20} />,
          description:
            "Working effectively in cross‑functional teams using Agile/Scrum and clear communication.",
        },
        {
          title: "Problem Solving",
          icon: <Target size={20} />,
          description:
            "Breaking down complex requirements into actionable, testable solutions.",
        },
        {
          title: "Time Management",
          icon: <Clock size={20} />,
          description:
            "Prioritising tasks and delivering milestones on schedule without compromising quality.",
        },
        {
          title: "Adaptability & Continuous Learning",
          icon: <RefreshCw size={20} />,
          description:
            "Quickly adopting new technologies and staying current with industry trends.",
        },
      ]
      : [
        {
          title: "العمل الجماعي",
          icon: <Users size={20} />,
          description:
            "العمل بفعالية ضمن فرق متعددة التخصصات باستخدام Agile/Scrum والتواصل الواضح.",
        },
        {
          title: "حل المشكلات",
          icon: <Target size={20} />,
          description:
            "تفكيك المتطلبات المعقدة إلى حلول قابلة للتنفيذ والاختبار.",
        },
        {
          title: "إدارة الوقت",
          icon: <Clock size={20} />,
          description:
            "تحديد أولويات المهام وتسليم المعالم الرئيسية في الموعد المحدد دون المساس بالجودة.",
        },
        {
          title: "القدرة على التكيف والتعلم المستمر",
          icon: <RefreshCw size={20} />,
          description:
            "تبني التقنيات الجديدة بسرعة والبقاء على اطلاع بأحدث اتجاهات المجال.",
        },
      ];

  return (
    <main>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-20 px-6 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, #fff 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />

        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge>{t("welcome")}</Badge>
            <div className="mt-8">
              <p className="text-accent-purple font-bold text-xl mb-2">
                {t("hi")}
              </p>
              <h1 className="text-6xl md:text-7xl font-bold mb-4 tracking-tight">
                Esraa Ali
              </h1>
              <h2 className="text-3xl md:text-4xl font-bold text-accent-purple mb-8 min-h-[1.2em]">
                {displayText}
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="inline-block w-1 h-8 md:h-10 bg-accent-purple ml-1 align-middle"
                />
              </h2>
              <p className="text-white/50 text-lg max-w-lg leading-relaxed mb-10">
                {heroDescription}
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mb-12">
              <a
                href="#projects"
                className="px-8 py-4 bg-gradient-to-r from-accent-purple to-accent-blue text-white font-bold uppercase tracking-widest rounded-xl hover:scale-105 transition-all glow-mixed"
              >
                {t("myPortfolio")}
              </a>
              <Link
                to="/cv"
                className="px-8 py-4 border border-white/10 text-white font-bold uppercase tracking-widest rounded-xl hover:bg-white/5 transition-all flex items-center gap-2"
              >
                {t("viewCV")} <ChevronRight size={18} />
              </Link>
            </div>

            <div className="flex gap-6">
              <a
                href="https://github.com/56642esraa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-white transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/esra2ali/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-white transition-colors"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[500px]">
              {/* Main Code Window */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative w-full aspect-[4/3] glass-card rounded-3xl border border-white/10 overflow-hidden shadow-2xl glow-purple z-10"
              >
                {/* Window Header */}
                <div className="h-12 bg-white/5 border-b border-white/5 flex items-center px-6 gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                    <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                  </div>
                  <div className="flex-grow text-center">
                    <span className="text-[10px] text-white/30 font-mono uppercase tracking-widest">
                      index.tsx
                    </span>
                  </div>
                </div>

                {/* Code Content */}
                <div className="p-8 font-mono text-sm leading-relaxed">
                  <div className="flex gap-4">
                    <span className="text-white/20 select-none">1</span>
                    <p>
                      <span className="text-purple-400">import</span> &#123;{" "}
                      <span className="text-blue-400">Component</span> &#125;{" "}
                      <span className="text-purple-400">from</span>{" "}
                      <span className="text-emerald-400">'@react/core'</span>;
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-white/20 select-none">2</span>
                    <p>&nbsp;</p>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-white/20 select-none">3</span>
                    <p>
                      <span className="text-yellow-400">@Component</span>(&#123;
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-white/20 select-none">4</span>
                    <p>
                      &nbsp;&nbsp;
                      <span className="text-blue-300">selector</span>:{" "}
                      <span className="text-emerald-400">'app-root'</span>,
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-white/20 select-none">5</span>
                    <p>
                      &nbsp;&nbsp;
                      <span className="text-blue-300">template</span>:{" "}
                      <span className="text-emerald-400">
                        '&lt;h1&gt;Hello&lt;/h1&gt;'
                      </span>
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-white/20 select-none">6</span>
                    <p>&#125;)</p>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-white/20 select-none">7</span>
                    <p>
                      <span className="text-purple-400">export class</span>{" "}
                      <span className="text-blue-400">AppComponent</span> &#123;
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-white/20 select-none">8</span>
                    <p>
                      &nbsp;&nbsp;<span className="text-blue-300">title</span> ={" "}
                      <span className="text-emerald-400">'portfolio'</span>;
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-white/20 select-none">9</span>
                    <p>&#125;</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Tech Icons - Positioned like the screenshot */}
              {[
                {
                  icon: <Atom size={18} />,
                  color: "text-blue-400",
                  pos: "-top-8 left-10",
                  delay: 0,
                },
                {
                  icon: <Layout size={18} />,
                  color: "text-purple-400",
                  pos: "-top-4 right-10",
                  delay: 1,
                },
                {
                  icon: <FileCode size={18} />,
                  color: "text-yellow-400",
                  pos: "top-1/2 -right-10",
                  delay: 2,
                },
                {
                  icon: <Code2 size={18} />,
                  color: "text-orange-400",
                  pos: "bottom-0 -right-4",
                  delay: 1.5,
                },
                {
                  icon: <Palette size={18} />,
                  color: "text-blue-400",
                  pos: "-bottom-12 left-1/2",
                  delay: 0.5,
                },
                {
                  icon: <Database size={18} />,
                  color: "text-emerald-400",
                  pos: "-bottom-8 left-10",
                  delay: 2.5,
                },
                {
                  icon: <GitBranch size={18} />,
                  color: "text-orange-400",
                  pos: "bottom-1/3 -left-12",
                  delay: 3,
                },
                {
                  icon: <Plug size={18} />,
                  color: "text-purple-400",
                  pos: "top-1/3 -left-10",
                  delay: 0.8,
                },
              ].map((tech, index) => (
                <motion.div
                  key={index}
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 4 + Math.random() * 2,
                    repeat: Infinity,
                    delay: tech.delay,
                    ease: "easeInOut",
                  }}
                  className={`absolute ${tech.pos} w-14 h-14 glass-card rounded-2xl flex items-center justify-center ${tech.color} border-white/5 shadow-2xl z-20`}
                >
                  {tech.icon}
                </motion.div>
              ))}

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -right-16 top-1/4 glass-card px-4 py-2 rounded-xl flex items-center gap-2 border-accent-purple/30 z-30 hidden md:flex"
              >
                <div className="w-2 h-2 rounded-full bg-accent-purple animate-ping" />
                <span className="text-[10px] font-bold uppercase tracking-widest">
                  {t("availableForHire")}
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mouse Indicator */}
      <div className="flex justify-center py-12">
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1 h-2 bg-accent-purple rounded-full"
          />
        </div>
      </div>

      {/* About Section */}

      <section id="about" className="py-32 px-6 bg-white/5">
        <div className="max-w-7xl mx-auto">
          {/* Logo */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 }}
            className="flex justify-center mb-6"
          >
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-accent-purple/20 to-accent-blue/20 flex items-center justify-center border border-accent-purple/30 shadow-lg">
              <User size={40} className="text-accent-purple" />
            </div>
          </motion.div>

          <SectionHeading title={t("aboutTitle")} subtitle={t("aboutSubtitle")} />

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Side - About Text Cards */}
            <div className="space-y-6">
              {/* Who I Am Card */}
              <motion.div
                initial={{ opacity: 0, x: language === 'ar' ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="glass-card p-6 rounded-2xl hover:border-accent-purple/50 hover:shadow-xl hover:shadow-accent-purple/20 transition-all duration-300 group cursor-pointer"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-purple/20 to-accent-blue/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <User size={20} className="text-accent-purple" />
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-accent-purple transition-colors">
                    {language === 'ar' ? 'من أنا' : 'Who I Am'}
                  </h3>
                </div>
                <p className="text-white/60 text-sm leading-relaxed group-hover:text-white/80 transition-colors">
                  {language === 'ar'
                    ? 'أنا إسراء علي، مطورة تؤمن بامتلاك دورة حياة المنتج بالكامل. أتخصص في تطوير الويب الكامل، حيث أقوم ببناء واجهات متجاوبة تعتمد على المكونات في React وأربطها بحلول خلفية قابلة للتوسع (بما في ذلك WordPress).'
                    : "I'm Esraa Ali, a developer who believes in owning the entire lifecycle of a product. I specialize in Full-Stack Web Development, where I architect responsive, component-driven interfaces in React and pair them with scalable backend solutions (including WordPress)."}
                </p>
              </motion.div>

              {/* My Approach Card */}
              <motion.div
                initial={{ opacity: 0, x: language === 'ar' ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="glass-card p-6 rounded-2xl hover:border-accent-purple/50 hover:shadow-xl hover:shadow-accent-purple/20 transition-all duration-300 group cursor-pointer"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-purple/20 to-accent-blue/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Target size={20} className="text-accent-purple" />
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-accent-purple transition-colors">
                    {language === 'ar' ? 'نهجي في العمل' : 'My Approach'}
                  </h3>
                </div>
                <p className="text-white/60 text-sm leading-relaxed group-hover:text-white/80 transition-colors">
                  {language === 'ar'
                    ? 'أزدهر في مواجهة التحديات المعقدة، مثل منصة السفر واسعة النطاق التي قمت بتطويرها والتي تتطلب توافراً عالياً وبيانات في الوقت الفعلي. أركز على الاستفادة من البنية التحتية الحديثة لدفع الابتكار القابل للقياس.'
                    : "I thrive on complex challenges, like the large-scale Traveling Platform I developed requiring high availability and real-time data. I focus on leveraging modern infrastructure to drive measurable innovation."}
                </p>
              </motion.div>

              {/* My Background Card */}
              <motion.div
                initial={{ opacity: 0, x: language === 'ar' ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="glass-card p-6 rounded-2xl hover:border-accent-purple/50 hover:shadow-xl hover:shadow-accent-purple/20 transition-all duration-300 group cursor-pointer"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-purple/20 to-accent-blue/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <GraduationCap size={20} className="text-accent-purple" />
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-accent-purple transition-colors">
                    {language === 'ar' ? 'خلفيتي المهنية' : 'My Background'}
                  </h3>
                </div>
                <p className="text-white/60 text-sm leading-relaxed group-hover:text-white/80 transition-colors">
                  {language === 'ar'
                    ? 'مع أساس من معهد تكنولوجيا المعلومات (ITI) في الذكاء الاصطناعي والبيانات الضخمة والحوسبة السحابية (هواوي)، أقدم منظوراً فريداً لتطوير الويب، من خلال الجمع بين التقنيات المتطورة والمبادئ الهندسية القوية.'
                    : "With a foundation from the ITI in AI, Big Data, and Cloud (Huawei), I bring a unique perspective to web development, combining cutting-edge technologies with solid engineering principles."}
                </p>
              </motion.div>
            </div>

            {/* Right Side - Stats & Tech Stack Cards */}
            <div className="space-y-6">
              {/* Stats Card */}
              <motion.div
                initial={{ opacity: 0, x: language === 'ar' ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="glass-card p-6 rounded-2xl hover:border-accent-purple/50 hover:shadow-xl hover:shadow-accent-purple/20 transition-all duration-300 group cursor-pointer"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-purple/20 to-accent-blue/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Trophy size={20} className="text-accent-purple" />
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-accent-purple transition-colors">
                    {language === 'ar' ? 'إحصائيات سريعة' : 'Quick Stats'}
                  </h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 rounded-xl bg-white/5 group-hover:bg-white/10 transition-all">
                    <h4 className="text-2xl font-bold text-accent-purple">3+</h4>
                    <p className="text-white/40 text-xs uppercase tracking-wider">
                      {language === 'ar' ? 'سنوات خبرة' : 'Years Experience'}
                    </p>
                  </div>
                  <div className="text-center p-3 rounded-xl bg-white/5 group-hover:bg-white/10 transition-all">
                    <h4 className="text-2xl font-bold text-accent-purple">15+</h4>
                    <p className="text-white/40 text-xs uppercase tracking-wider">
                      {language === 'ar' ? 'مشاريع منجزة' : 'Projects Done'}
                    </p>
                  </div>
                  <div className="text-center p-3 rounded-xl bg-white/5 group-hover:bg-white/10 transition-all">
                    <h4 className="text-2xl font-bold text-accent-purple">100%</h4>
                    <p className="text-white/40 text-xs uppercase tracking-wider">
                      {language === 'ar' ? 'رضا العملاء' : 'Client Satisfaction'}
                    </p>
                  </div>
                  <div className="text-center p-3 rounded-xl bg-white/5 group-hover:bg-white/10 transition-all">
                    <h4 className="text-2xl font-bold text-accent-purple">24/7</h4>
                    <p className="text-white/40 text-xs uppercase tracking-wider">
                      {language === 'ar' ? 'دعم فني' : 'Support'}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Tech Stack Card */}
              <motion.div
                initial={{ opacity: 0, x: language === 'ar' ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="glass-card p-6 rounded-2xl hover:border-accent-purple/50 hover:shadow-xl hover:shadow-accent-purple/20 transition-all duration-300 group cursor-pointer"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-purple/20 to-accent-blue/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Code2 size={20} className="text-accent-purple" />
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-accent-purple transition-colors">
                    {language === 'ar' ? 'التقنيات المستخدمة' : 'Tech Stack'}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["React", "Next.js", "Node.js", "TypeScript", "WordPress", "MongoDB", "PostgreSQL", "Tailwind CSS", "Docker", "AWS"].map((tech, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className="text-[10px] px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/60 hover:border-accent-purple/50 hover:bg-accent-purple/10 hover:text-accent-purple transition-all duration-300"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {/* Quote Card */}
              <motion.div
                initial={{ opacity: 0, x: language === 'ar' ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="glass-card p-6 rounded-2xl hover:border-accent-purple/50 hover:shadow-xl hover:shadow-accent-purple/20 transition-all duration-300 group cursor-pointer"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-purple/20 to-accent-blue/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <MessageSquare size={20} className="text-accent-purple" />
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-accent-purple transition-colors">
                    {language === 'ar' ? 'فلسفتي' : 'My Philosophy'}
                  </h3>
                </div>
                <p className="text-white/60 text-sm leading-relaxed italic group-hover:text-white/80 transition-colors">
                  {language === 'ar'
                    ? '"الكود ليس مجرد وظيفة — بل هو خلق تجارب تمكّن المستخدمين وتحل مشاكل العالم الحقيقي. أؤمن بكتابة كود نظيف وقابل للصيانة يصمد أمام اختبار الزمن."'
                    : '"Code is not just about functionality — it\'s about creating experiences that empower users and solve real-world problems. I believe in writing clean, maintainable code that stands the test of time."'}
                </p>
                <div className="mt-3 text-right">
                  <span className="text-accent-purple text-xs font-medium">
                    — {language === 'ar' ? 'إسراء علي' : 'Esraa Ali'}
                  </span>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Floating animated words */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="relative flex flex-wrap justify-center gap-4 mt-12 content-center"
          >
            {(language === 'ar'
              ? [
                { name: "تطوير كامل", size: "text-4xl", color: "text-accent-purple" },
                { name: "React", size: "text-3xl", color: "text-blue-400" },
                { name: "Node.js", size: "text-3xl", color: "text-emerald-400" },
                { name: "ووردبريس", size: "text-3xl", color: "text-blue-500" },
                { name: "الحوسبة السحابية", size: "text-2xl", color: "text-blue-300" },
                { name: "البيانات الضخمة", size: "text-2xl", color: "text-orange-400" },
                { name: "تكامل APIs", size: "text-2xl", color: "text-purple-300" },
              ]
              : [
                { name: "Full-Stack", size: "text-4xl", color: "text-accent-purple" },
                { name: "React", size: "text-3xl", color: "text-blue-400" },
                { name: "Node.js", size: "text-3xl", color: "text-emerald-400" },
                { name: "WordPress", size: "text-3xl", color: "text-blue-500" },
                { name: "Cloud Computing", size: "text-2xl", color: "text-blue-300" },
                { name: "Big Data", size: "text-2xl", color: "text-orange-400" },
                { name: "API Integration", size: "text-2xl", color: "text-purple-300" },
              ]
            ).map((tag, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, type: "spring", stiffness: 100 }}
                whileHover={{ scale: 1.1, rotate: i % 2 === 0 ? 5 : -5 }}
                className={`${tag.size} font-black uppercase tracking-tighter ${tag.color} cursor-default select-none hover:drop-shadow-[0_0_15px_rgba(139,92,246,0.5)] transition-all`}
              >
                {tag.name}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      {/* Education & Certifications Section  */}
      <section id="education" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Logo Icon */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 }}
            className="flex justify-center mb-6"
          >
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-accent-purple/20 to-accent-blue/20 flex items-center justify-center border border-accent-purple/30 shadow-lg">
              <GraduationCap size={40} className="text-accent-purple" />
            </div>
          </motion.div>
          <SectionHeading title={t("eduTitle")} subtitle={t("eduSubtitle")} />

          {/* Tab Buttons */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex gap-2 bg-white/5 p-1.5 rounded-xl border border-white/5">
              {[
                { id: "education", label: language === 'en' ? "Education" : "التعليم", icon: <GraduationCap size={16} /> },
                { id: "certifications", label: language === 'en' ? "Certifications" : "الشهادات", icon: <Award size={16} /> }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveEduTab(tab.id as 'education' | 'certifications')}
                  className={`px-6 py-2.5 rounded-lg font-bold text-sm flex items-center gap-2 transition-all ${activeEduTab === tab.id
                    ? "bg-gradient-to-r from-accent-purple to-accent-blue text-white shadow-lg"
                    : "text-white/50 hover:text-white hover:bg-white/5"
                    }`}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            {activeEduTab === 'education' && (
              <motion.div
                key="education"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="grid md:grid-cols-2 gap-6"
              >
                {/* Faculty of Computers and Information - Luxor University */}
                <motion.a
                  href="https://www.linkedin.com/in/esra2ali/overlay/1188870984/skill-associations-details/"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="glass-card p-6 rounded-2xl hover:border-accent-purple/50 hover:shadow-xl hover:shadow-accent-purple/20 transition-all duration-300 group cursor-pointer block"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-purple/20 to-accent-blue/20 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                      <GraduationCap size={24} className="text-accent-purple group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white group-hover:text-accent-purple transition-colors duration-300">
                        {language === 'en' ? 'Faculty of Computers and Information' : 'كلية الحاسبات والمعلومات'}
                      </h3>
                      <p className="text-accent-purple text-xs font-medium mt-1">
                        {language === 'en' ? 'Luxor University' : 'جامعة الأقصر'}
                      </p>
                      <p className="text-white/50 text-xs mt-2 group-hover:text-white/70 transition-colors duration-300">
                        {language === 'en'
                          ? "Bachelor's Degree in Information Technology • May 2023"
                          : 'بكالوريوس في تكنولوجيا المعلومات • مايو 2023'}
                      </p>
                      <p className="text-white/40 text-[10px] mt-1">
                        {language === 'en' ? 'Aug 2019 – Jul 2023' : 'أغسطس 2019 – يوليو 2023'}
                      </p>
                      <p className="text-white/40 text-[10px] mt-1">
                        {language === 'en' ? 'Grade: B+' : 'التقدير: جيد جداً'}
                      </p>
                      <div className="mt-3 pt-3 border-t border-white/10">
                        <p className="text-white/60 text-[11px] font-medium mb-1">
                          {language === 'en' ? 'Core Competencies:' : 'الكفاءات الأساسية:'}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="text-[9px] px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/50">
                            {language === 'en' ? 'Network Administration' : 'إدارة الشبكات'}
                          </span>
                          <span className="text-[9px] px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/50">
                            {language === 'en' ? 'Cybersecurity' : 'الأمن السيبراني'}
                          </span>
                          <span className="text-[9px] px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/50">
                            {language === 'en' ? 'Database Management (SQL)' : 'إدارة قواعد البيانات (SQL)'}
                          </span>
                          <span className="text-[9px] px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/50">
                            {language === 'en' ? 'Systems Analysis' : 'تحليل النظم'}
                          </span>
                        </div>
                      </div>
                      <div className="mt-3">
                        <p className="text-white/60 text-[11px] font-medium mb-1">
                          {language === 'en' ? 'Technical Proficiencies:' : 'المهارات التقنية:'}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="text-[9px] px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/50">Python</span>
                          <span className="text-[9px] px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/50">Java</span>
                          <span className="text-[9px] px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/50">AWS Cloud Essentials</span>
                          <span className="text-[9px] px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/50">
                            {language === 'en' ? 'Windows/Linux Server Management' : 'إدارة خوادم Windows/Linux'}
                          </span>
                        </div>
                      </div>
                      <div className="mt-3 flex items-center gap-2">
                        <span className="text-white/40 text-[9px]">
                          🎯 {language === 'en' ? 'Activities: Basketball' : 'الأنشطة: كرة السلة'}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 mt-3 text-accent-purple text-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span>{language === 'en' ? 'View Details' : 'عرض التفاصيل'}</span>
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </motion.a>

                {/* Digilians - Full-Stack Web Development */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="glass-card p-6 rounded-2xl hover:border-accent-purple/50 hover:shadow-xl hover:shadow-accent-purple/20 transition-all duration-300 group cursor-pointer"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-purple/20 to-accent-blue/20 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                      <Code2 size={22} className="text-accent-purple group-hover:text-white transition-colors" />
                    </div>
                    <div className="flex-1">
                      <span className="text-accent-purple font-bold text-xs uppercase tracking-widest">
                        {language === 'en' ? '2026 - present' : '2026 - حتى الآن'}
                      </span>
                      <h3 className="text-xl font-bold mt-2 mb-1 group-hover:text-accent-purple transition-colors">
                        {language === 'en' ? 'Full-Stack Web Development' : 'تطوير الويب الكامل'}
                      </h3>
                      <p className="text-white/40 text-sm mb-3">Digilians (MCIT Initiative)</p>
                      <p className="text-white/50 text-sm leading-relaxed">
                        {language === 'en'
                          ? 'Specialized training in modern web architecture, MERN stack, and scalable application design.'
                          : 'تدريب متخصص في معمارية الويب الحديثة، MERN stack، وتصميم التطبيقات القابلة للتوسع.'}
                      </p>

                      {/* Skills Tags */}
                      <div className="flex flex-wrap gap-2 mt-4">
                        <span className="text-[10px] px-2 py-1 rounded-full bg-white/5 border border-white/10 text-white/60 hover:border-accent-purple/50 hover:bg-accent-purple/10 hover:text-accent-purple transition-all">React</span>
                        <span className="text-[10px] px-2 py-1 rounded-full bg-white/5 border border-white/10 text-white/60 hover:border-accent-purple/50 hover:bg-accent-purple/10 hover:text-accent-purple transition-all">Node.js</span>
                        <span className="text-[10px] px-2 py-1 rounded-full bg-white/5 border border-white/10 text-white/60 hover:border-accent-purple/50 hover:bg-accent-purple/10 hover:text-accent-purple transition-all">Express.js</span>
                        <span className="text-[10px] px-2 py-1 rounded-full bg-white/5 border border-white/10 text-white/60 hover:border-accent-purple/50 hover:bg-accent-purple/10 hover:text-accent-purple transition-all">MongoDB</span>
                        <span className="text-[10px] px-2 py-1 rounded-full bg-white/5 border border-white/10 text-white/60 hover:border-accent-purple/50 hover:bg-accent-purple/10 hover:text-accent-purple transition-all">TypeScript</span>
                        <span className="text-[10px] px-2 py-1 rounded-full bg-white/5 border border-white/10 text-white/60 hover:border-accent-purple/50 hover:bg-accent-purple/10 hover:text-accent-purple transition-all">Tailwind CSS</span>
                        <span className="text-[10px] px-2 py-1 rounded-full bg-white/5 border border-white/10 text-white/60 hover:border-accent-purple/50 hover:bg-accent-purple/10 hover:text-accent-purple transition-all">Redux</span>
                        <span className="text-[10px] px-2 py-1 rounded-full bg-white/5 border border-white/10 text-white/60 hover:border-accent-purple/50 hover:bg-accent-purple/10 hover:text-accent-purple transition-all">RESTful APIs</span>
                        <span className="text-[10px] px-2 py-1 rounded-full bg-white/5 border border-white/10 text-white/60 hover:border-accent-purple/50 hover:bg-accent-purple/10 hover:text-accent-purple transition-all">Git & GitHub</span>
                        <span className="text-[10px] px-2 py-1 rounded-full bg-white/5 border border-white/10 text-white/60 hover:border-accent-purple/50 hover:bg-accent-purple/10 hover:text-accent-purple transition-all">Agile/Scrum</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}

            {activeEduTab === 'certifications' && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Full-Stack Web Development */}
                <motion.a
                  href="https://www.linkedin.com/in/esra2ali/details/certifications/"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="glass-card p-6 rounded-2xl hover:border-accent-purple/50 hover:shadow-xl hover:shadow-accent-purple/20 transition-all duration-300 group cursor-pointer block"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-purple/20 to-accent-blue/20 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                      <FileBadge size={24} className="text-accent-purple group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white group-hover:text-accent-purple transition-colors duration-300">
                        {language === 'en' ? 'Full-Stack Web Development' : 'تطوير الويب الكامل'}
                      </h3>
                      <p className="text-accent-purple text-xs font-medium mt-1">DEPI Initiative • 2026</p>
                      <p className="text-white/50 text-xs mt-2 group-hover:text-white/70 transition-colors duration-300">
                        {language === 'en'
                          ? 'Intensive training in modern web architecture, MERN stack, and scalable application design.'
                          : 'تدريب مكثف في معمارية الويب الحديثة، MERN stack، وتصميم التطبيقات القابلة للتوسع.'}
                      </p>
                      <div className="flex items-center gap-1 mt-3 text-accent-purple text-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span>{language === 'en' ? 'View Certificate' : 'عرض الشهادة'}</span>
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </motion.a>

                {/* HCIA - Big Data */}
                <motion.a
                  href="https://www.linkedin.com/in/esra2ali/details/certifications/"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="glass-card p-6 rounded-2xl hover:border-accent-purple/50 hover:shadow-xl hover:shadow-accent-purple/20 transition-all duration-300 group cursor-pointer block"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-purple/20 to-accent-blue/20 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                      <Database size={24} className="text-accent-purple group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white group-hover:text-accent-purple transition-colors duration-300">
                        HCIA - {language === 'en' ? 'Big Data' : 'البيانات الضخمة'}
                      </h3>
                      <p className="text-accent-purple text-xs font-medium mt-1">Huawei • Dec 2024</p>
                      <p className="text-white/50 text-xs mt-2 group-hover:text-white/70 transition-colors duration-300">
                        {language === 'en'
                          ? 'Huawei Certified ICT Associate - Big Data certification validating big data expertise.'
                          : 'شهادة هواوي المعتمدة لتقنية المعلومات - البيانات الضخمة.'}
                      </p>
                      <div className="flex items-center gap-1 mt-3 text-accent-purple text-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span>{language === 'en' ? 'View Certificate' : 'عرض الشهادة'}</span>
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </motion.a>

                {/* HCIA - AI */}
                <motion.a
                  href="https://www.linkedin.com/in/esra2ali/details/certifications/"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="glass-card p-6 rounded-2xl hover:border-accent-purple/50 hover:shadow-xl hover:shadow-accent-purple/20 transition-all duration-300 group cursor-pointer block"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-purple/20 to-accent-blue/20 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                      <Cpu size={24} className="text-accent-purple group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white group-hover:text-accent-purple transition-colors duration-300">
                        HCIA - AI
                      </h3>
                      <p className="text-accent-purple text-xs font-medium mt-1">Huawei • Jan 2024</p>
                      <p className="text-white/50 text-xs mt-2 group-hover:text-white/70 transition-colors duration-300">
                        {language === 'en'
                          ? 'Huawei Certified ICT Associate - Artificial Intelligence certification.'
                          : 'شهادة هواوي المعتمدة لتقنية المعلومات - الذكاء الاصطناعي.'}
                      </p>
                      <div className="flex items-center gap-1 mt-3 text-accent-purple text-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span>{language === 'en' ? 'View Certificate' : 'عرض الشهادة'}</span>
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </motion.a>

                {/* HCIA - Cloud Computing */}
                <motion.a
                  href="https://www.linkedin.com/in/esra2ali/details/certifications/"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.25 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="glass-card p-6 rounded-2xl hover:border-accent-purple/50 hover:shadow-xl hover:shadow-accent-purple/20 transition-all duration-300 group cursor-pointer block"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-purple/20 to-accent-blue/20 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                      <Cloud size={24} className="text-accent-purple group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white group-hover:text-accent-purple transition-colors duration-300">
                        HCIA - {language === 'en' ? 'Cloud Computing' : 'الحوسبة السحابية'}
                      </h3>
                      <p className="text-accent-purple text-xs font-medium mt-1">Huawei • Jan 2023</p>
                      <p className="text-white/50 text-xs mt-2 group-hover:text-white/70 transition-colors duration-300">
                        {language === 'en'
                          ? 'Huawei Certified ICT Associate - Cloud Computing certification.'
                          : 'شهادة هواوي المعتمدة لتقنية المعلومات - الحوسبة السحابية.'}
                      </p>
                      <div className="flex items-center gap-1 mt-3 text-accent-purple text-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span>{language === 'en' ? 'View Certificate' : 'عرض الشهادة'}</span>
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </motion.a>

                {/* WordPress Developer */}
                <motion.a
                  href="https://www.linkedin.com/in/esra2ali/details/certifications/"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="glass-card p-6 rounded-2xl hover:border-accent-purple/50 hover:shadow-xl hover:shadow-accent-purple/20 transition-all duration-300 group cursor-pointer block"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-purple/20 to-accent-blue/20 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                      <Code2 size={24} className="text-accent-purple group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white group-hover:text-accent-purple transition-colors duration-300">
                        {language === 'en' ? 'WordPress Developer' : 'مطور ووردبريس'}
                      </h3>
                      <p className="text-accent-purple text-xs font-medium mt-1">ITI • 2025</p>
                      <p className="text-white/50 text-xs mt-2 group-hover:text-white/70 transition-colors duration-300">
                        {language === 'en'
                          ? 'Certified WordPress Developer with expertise in custom themes and plugins.'
                          : 'مطور ووردبريس معتمد مع خبرة في القوالب المخصصة والإضافات.'}
                      </p>
                      <div className="flex items-center gap-1 mt-3 text-accent-purple text-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span>{language === 'en' ? 'View Certificate' : 'عرض الشهادة'}</span>
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </motion.a>

                {/* View All Certifications Link */}
                <motion.a
                  href="https://www.linkedin.com/in/esra2ali/details/certifications/"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.35 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="glass-card p-6 rounded-2xl hover:border-accent-purple/50 hover:shadow-xl hover:shadow-accent-purple/20 transition-all duration-300 group cursor-pointer block flex items-center justify-center text-center"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-purple/20 to-accent-blue/20 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-all duration-300">
                      <Award size={24} className="text-accent-purple group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-accent-purple transition-colors duration-300">
                      {language === 'en' ? 'View All Certifications' : 'عرض جميع الشهادات'}
                    </h3>
                    <p className="text-white/50 text-xs mt-2 group-hover:text-white/70 transition-colors duration-300">
                      {language === 'en' ? 'Check my complete profile on LinkedIn' : 'اطلع على ملفي الشخصي الكامل على LinkedIn'}
                    </p>
                    <div className="flex items-center justify-center gap-1 mt-3 text-accent-purple text-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span>{language === 'en' ? 'LinkedIn Profile' : 'ملف LinkedIn'}</span>
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                  </div>
                </motion.a>
              </div>
            )}
          </AnimatePresence>
        </div>
      </section>





      {/* Skills Section */}

      <section id="skills" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Logo */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 }}
            className="flex justify-center mb-6"
          >
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-accent-purple/20 to-accent-blue/20 flex items-center justify-center border border-accent-purple/30 shadow-lg">
              <Brain size={40} className="text-accent-purple" />
            </div>
          </motion.div>

          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mt-4 mb-6 tracking-tight">
              {t("skillsTitle")}
            </h2>
            <span className="text-accent-purple font-bold uppercase tracking-[0.3em] text-[10px] m-5">
              {t("skillsSubtitle")}
            </span>
            <div className="w-16 h-1 bg-gradient-to-r from-accent-purple to-accent-blue mx-auto rounded-full" />
          </div>

          {/* Tab Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {[
              { id: "backend", label: language === 'en' ? "Back End" : "الواجهة الخلفية", icon: <Server size={16} /> },
              { id: "frontend", label: language === 'en' ? "Front End" : "الواجهة الأمامية", icon: <Layout size={16} /> },
              { id: "fullstack", label: language === 'en' ? "Full Stack" : "التطوير الكامل", icon: <Code2 size={16} /> },
              { id: "softskills", label: language === 'en' ? "Soft Skills" : "المهارات الشخصية", icon: <Users size={16} /> },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveSkillTab(tab.id as any)}
                className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 ${activeSkillTab === tab.id
                    ? "bg-gradient-to-r from-accent-purple to-accent-blue text-white shadow-lg"
                    : "bg-white/5 text-white/60 hover:text-white hover:bg-white/10 border border-white/10"
                  }`}
              >
                <span className="flex items-center gap-2">
                  {tab.icon}
                  {tab.label}
                </span>
              </button>
            ))}
          </div>

          {/* Tab Brief */}
          <motion.div
            key={`brief-${activeSkillTab}`}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-center mb-12"
          >
            <p className="text-white/60 text-sm max-w-3xl mx-auto leading-relaxed">
              {activeSkillTab === "backend" && (language === 'en'
                ? "Building scalable server-side applications, RESTful APIs, and database management with high-performance backend solutions."
                : "بناء تطبيقات خادم قابلة للتوسع، وواجهات برمجة تطبيقات RESTful، وإدارة قواعد البيانات بحلول خلفية عالية الأداء.")}
              {activeSkillTab === "frontend" && (language === 'en'
                ? "Creating responsive, interactive user interfaces with modern frameworks and smooth animations for optimal user experience."
                : "إنشاء واجهات مستخدم متجاوبة وتفاعلية باستخدام أطر العمل الحديثة والرسوم المتحركة السلسة لتجربة مستخدم مثالية.")}
              {activeSkillTab === "fullstack" && (language === 'en'
                ? "End-to-end application development, integrating frontend and backend technologies for complete web solutions."
                : "تطوير تطبيقات شاملة، ودمج تقنيات الواجهة الأمامية والخلفية لحلول ويب كاملة.")}
              {activeSkillTab === "softskills" && (language === 'en'
                ? "Effective communication, teamwork, problem-solving, and adaptability to drive project success and collaboration."
                : "التواصل الفعال، العمل الجماعي، حل المشكلات، والقدرة على التكيف لدفع نجاح المشروع والتعاون.")}
            </p>
          </motion.div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            {/* Back End Skills */}
            {activeSkillTab === "backend" && (
              <motion.div
                key="backend"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="glass-card p-5 rounded-2xl text-center hover:border-accent-purple/50 hover:shadow-xl hover:shadow-accent-purple/20 transition-all duration-300 group cursor-pointer"
                >
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent-purple/20 to-accent-blue/20 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-all duration-300">
                    <SiNodedotjs className="w-7 h-7 text-[#339933] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-accent-purple transition-colors duration-300">Node.js / Express</h3>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="glass-card p-5 rounded-2xl text-center hover:border-accent-purple/50 hover:shadow-xl hover:shadow-accent-purple/20 transition-all duration-300 group cursor-pointer"
                >
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent-purple/20 to-accent-blue/20 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-all duration-300">
                    <SiMongodb className="w-7 h-7 text-[#47A248] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-accent-purple transition-colors duration-300">
                    {language === 'en' ? 'Databases' : 'قواعد البيانات'}
                  </h3>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="glass-card p-5 rounded-2xl text-center hover:border-accent-purple/50 hover:shadow-xl hover:shadow-accent-purple/20 transition-all duration-300 group cursor-pointer"
                >
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent-purple/20 to-accent-blue/20 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-all duration-300">
                    <SiAuth0 className="w-7 h-7 text-[#EB5424] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-accent-purple transition-colors duration-300">
                    {language === 'en' ? 'Authentication & Security' : 'المصادقة والأمان'}
                  </h3>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="glass-card p-5 rounded-2xl text-center hover:border-accent-purple/50 hover:shadow-xl hover:shadow-accent-purple/20 transition-all duration-300 group cursor-pointer"
                >
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent-purple/20 to-accent-blue/20 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-all duration-300">
                    <SiPostman className="w-7 h-7 text-[#FF6C37] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-accent-purple transition-colors duration-300">
                    {language === 'en' ? 'API Integration' : 'تكامل واجهات API'}
                  </h3>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="glass-card p-5 rounded-2xl text-center hover:border-accent-purple/50 hover:shadow-xl hover:shadow-accent-purple/20 transition-all duration-300 group cursor-pointer"
                >
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent-purple/20 to-accent-blue/20 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-all duration-300">
                    <SiCodeigniter className="w-7 h-7 text-[#EF4223] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-accent-purple transition-colors duration-300">
                    {language === 'en' ? 'Design Patterns' : 'أنماط التصميم'}
                  </h3>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="glass-card p-5 rounded-2xl text-center hover:border-accent-purple/50 hover:shadow-xl hover:shadow-accent-purple/20 transition-all duration-300 group cursor-pointer"
                >
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent-purple/20 to-accent-blue/20 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-all duration-300">
                    <SiRedis className="w-7 h-7 text-[#FF4438] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-accent-purple transition-colors duration-300">
                    {language === 'en' ? 'Redis & Caching' : 'Redis والتخزين المؤقت'}
                  </h3>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="glass-card p-5 rounded-2xl text-center hover:border-accent-purple/50 hover:shadow-xl hover:shadow-accent-purple/20 transition-all duration-300 group cursor-pointer"
                >
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent-purple/20 to-accent-blue/20 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-all duration-300">
                    <SiDocker className="w-7 h-7 text-[#2496ED] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-accent-purple transition-colors duration-300">
                    {language === 'en' ? 'Docker & Containerization' : 'Docker والحاويات'}
                  </h3>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="glass-card p-5 rounded-2xl text-center hover:border-accent-purple/50 hover:shadow-xl hover:shadow-accent-purple/20 transition-all duration-300 group cursor-pointer"
                >
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent-purple/20 to-accent-blue/20 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-all duration-300">
                    <SiServerless className="w-7 h-7 text-[#FD5750] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-accent-purple transition-colors duration-300">
                    {language === 'en' ? 'Microservices' : 'الخدمات المصغرة'}
                  </h3>
                </motion.div>
              </motion.div>
            )}

            {/* Front End Skills - Arabic Titles */}
            {activeSkillTab === "frontend" && (
              <motion.div
                key="frontend"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="glass-card p-5 rounded-2xl text-center hover:border-accent-purple/50 hover:shadow-xl hover:shadow-accent-purple/20 transition-all duration-300 group cursor-pointer"
                >
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent-purple/20 to-accent-blue/20 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-all duration-300">
                    <FaReact className="w-7 h-7 text-[#61DAFB]" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-accent-purple transition-colors duration-300">React</h3>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="glass-card p-5 rounded-2xl text-center hover:border-accent-purple/50 hover:shadow-xl hover:shadow-accent-purple/20 transition-all duration-300 group cursor-pointer"
                >
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent-purple/20 to-accent-blue/20 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-all duration-300">
                    <SiNextdotjs className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-accent-purple transition-colors duration-300">Next.js</h3>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="glass-card p-5 rounded-2xl text-center hover:border-accent-purple/50 hover:shadow-xl hover:shadow-accent-purple/20 transition-all duration-300 group cursor-pointer"
                >
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent-purple/20 to-accent-blue/20 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-all duration-300">
                    <SiTypescript className="w-7 h-7 text-[#3178C6]" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-accent-purple transition-colors duration-300">TypeScript</h3>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="glass-card p-5 rounded-2xl text-center hover:border-accent-purple/50 hover:shadow-xl hover:shadow-accent-purple/20 transition-all duration-300 group cursor-pointer"
                >
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent-purple/20 to-accent-blue/20 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-all duration-300">
                    <SiJavascript className="w-7 h-7 text-[#F7DF1E]" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-accent-purple transition-colors duration-300">JavaScript</h3>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="glass-card p-5 rounded-2xl text-center hover:border-accent-purple/50 hover:shadow-xl hover:shadow-accent-purple/20 transition-all duration-300 group cursor-pointer"
                >
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent-purple/20 to-accent-blue/20 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-all duration-300">
                    <SiRedux className="w-7 h-7 text-[#764ABC]" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-accent-purple transition-colors duration-300">Redux</h3>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="glass-card p-5 rounded-2xl text-center hover:border-accent-purple/50 hover:shadow-xl hover:shadow-accent-purple/20 transition-all duration-300 group cursor-pointer"
                >
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent-purple/20 to-accent-blue/20 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-all duration-300">
                    <FaHtml5 className="w-7 h-7 text-[#E34F26]" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-accent-purple transition-colors duration-300">HTML5</h3>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="glass-card p-5 rounded-2xl text-center hover:border-accent-purple/50 hover:shadow-xl hover:shadow-accent-purple/20 transition-all duration-300 group cursor-pointer"
                >
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent-purple/20 to-accent-blue/20 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-all duration-300">
                    <FaCss3Alt className="w-7 h-7 text-[#1572B6]" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-accent-purple transition-colors duration-300">CSS3</h3>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="glass-card p-5 rounded-2xl text-center hover:border-accent-purple/50 hover:shadow-xl hover:shadow-accent-purple/20 transition-all duration-300 group cursor-pointer"
                >
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent-purple/20 to-accent-blue/20 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-all duration-300">
                    <SiTailwindcss className="w-7 h-7 text-[#06B6D4]" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-accent-purple transition-colors duration-300">Tailwind</h3>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="glass-card p-5 rounded-2xl text-center hover:border-accent-purple/50 hover:shadow-xl hover:shadow-accent-purple/20 transition-all duration-300 group cursor-pointer"
                >
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent-purple/20 to-accent-blue/20 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-all duration-300">
                    <FaSass className="w-7 h-7 text-[#CC6699]" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-accent-purple transition-colors duration-300">Sass</h3>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.55 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="glass-card p-5 rounded-2xl text-center hover:border-accent-purple/50 hover:shadow-xl hover:shadow-accent-purple/20 transition-all duration-300 group cursor-pointer"
                >
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent-purple/20 to-accent-blue/20 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-all duration-300">
                    <FaBootstrap className="w-7 h-7 text-[#7952B3]" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-accent-purple transition-colors duration-300">Bootstrap</h3>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="glass-card p-5 rounded-2xl text-center hover:border-accent-purple/50 hover:shadow-xl hover:shadow-accent-purple/20 transition-all duration-300 group cursor-pointer"
                >
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent-purple/20 to-accent-blue/20 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-all duration-300">
                    <SiJquery className="w-7 h-7 text-[#0769AD]" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-accent-purple transition-colors duration-300">jQuery</h3>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.65 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="glass-card p-5 rounded-2xl text-center hover:border-accent-purple/50 hover:shadow-xl hover:shadow-accent-purple/20 transition-all duration-300 group cursor-pointer"
                >
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent-purple/20 to-accent-blue/20 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-all duration-300">
                    <FaGithub className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-accent-purple transition-colors duration-300">GitHub</h3>
                </motion.div>
              </motion.div>
            )}

            {/* Full Stack Skills */}
            {activeSkillTab === "fullstack" && (
              <motion.div
                key="fullstack"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="glass-card p-5 rounded-2xl text-center hover:border-accent-purple/50 hover:shadow-xl hover:shadow-accent-purple/20 transition-all duration-300 group cursor-pointer"
                >
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent-purple/20 to-accent-blue/20 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-all duration-300">
                    <SiSwagger className="w-7 h-7 text-[#85EA2D]" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-accent-purple transition-colors duration-300">RESTful APIs</h3>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="glass-card p-5 rounded-2xl text-center hover:border-accent-purple/50 hover:shadow-xl hover:shadow-accent-purple/20 transition-all duration-300 group cursor-pointer"
                >
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent-purple/20 to-accent-blue/20 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-all duration-300">
                    <SiCodeigniter className="w-7 h-7 text-[#EF4223]" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-accent-purple transition-colors duration-300">
                    {language === 'en' ? 'Design Patterns' : 'أنماط التصميم'}
                  </h3>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="glass-card p-5 rounded-2xl text-center hover:border-accent-purple/50 hover:shadow-xl hover:shadow-accent-purple/20 transition-all duration-300 group cursor-pointer"
                >
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent-purple/20 to-accent-blue/20 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-all duration-300">
                    <SiRedis className="w-7 h-7 text-[#FF4438]" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-accent-purple transition-colors duration-300">
                    {language === 'en' ? 'Redis & Caching' : 'Redis والتخزين المؤقت'}
                  </h3>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="glass-card p-5 rounded-2xl text-center hover:border-accent-purple/50 hover:shadow-xl hover:shadow-accent-purple/20 transition-all duration-300 group cursor-pointer"
                >
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent-purple/20 to-accent-blue/20 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-all duration-300">
                    <FaHtml5 className="w-7 h-7 text-[#E34F26]" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-accent-purple transition-colors duration-300">HTML5 / CSS3</h3>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="glass-card p-5 rounded-2xl text-center hover:border-accent-purple/50 hover:shadow-xl hover:shadow-accent-purple/20 transition-all duration-300 group cursor-pointer"
                >
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent-purple/20 to-accent-blue/20 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-all duration-300">
                    <SiJavascript className="w-7 h-7 text-[#F7DF1E]" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-accent-purple transition-colors duration-300">JavaScript</h3>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="glass-card p-5 rounded-2xl text-center hover:border-accent-purple/50 hover:shadow-xl hover:shadow-accent-purple/20 transition-all duration-300 group cursor-pointer"
                >
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent-purple/20 to-accent-blue/20 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-all duration-300">
                    <SiPhp className="w-7 h-7 text-[#777BB4]" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-accent-purple transition-colors duration-300">PHP</h3>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="glass-card p-5 rounded-2xl text-center hover:border-accent-purple/50 hover:shadow-xl hover:shadow-accent-purple/20 transition-all duration-300 group cursor-pointer"
                >
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent-purple/20 to-accent-blue/20 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-all duration-300">
                    <FaReact className="w-7 h-7 text-[#61DAFB]" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-accent-purple transition-colors duration-300">
                    {language === 'en' ? 'React / Next.js' : 'React / Next.js'}
                  </h3>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="glass-card p-5 rounded-2xl text-center hover:border-accent-purple/50 hover:shadow-xl hover:shadow-accent-purple/20 transition-all duration-300 group cursor-pointer"
                >
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent-purple/20 to-accent-blue/20 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-all duration-300">
                    <SiNodedotjs className="w-7 h-7 text-[#339933]" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-accent-purple transition-colors duration-300">Node.js / Express</h3>
                </motion.div>
              </motion.div>
            )}

            {/* Soft Skills - Arabic Titles */}
            {activeSkillTab === "softskills" && (
              <motion.div
                key="softskills"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="glass-card p-5 rounded-2xl text-center hover:border-accent-purple/50 hover:shadow-xl hover:shadow-accent-purple/20 transition-all duration-300 group cursor-pointer"
                >
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent-purple/20 to-accent-blue/20 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-all duration-300">
                    <MessageSquare size={28} className="text-accent-purple group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-accent-purple transition-colors duration-300">
                    {language === 'en' ? 'Effective Communication' : 'التواصل الفعال'}
                  </h3>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="glass-card p-5 rounded-2xl text-center hover:border-accent-purple/50 hover:shadow-xl hover:shadow-accent-purple/20 transition-all duration-300 group cursor-pointer"
                >
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent-purple/20 to-accent-blue/20 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-all duration-300">
                    <Users size={28} className="text-accent-purple group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-accent-purple transition-colors duration-300">
                    {language === 'en' ? 'Team Collaboration' : 'العمل الجماعي'}
                  </h3>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="glass-card p-5 rounded-2xl text-center hover:border-accent-purple/50 hover:shadow-xl hover:shadow-accent-purple/20 transition-all duration-300 group cursor-pointer"
                >
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent-purple/20 to-accent-blue/20 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-all duration-300">
                    <Target size={28} className="text-accent-purple group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-accent-purple transition-colors duration-300">
                    {language === 'en' ? 'Problem Solving' : 'حل المشكلات'}
                  </h3>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="glass-card p-5 rounded-2xl text-center hover:border-accent-purple/50 hover:shadow-xl hover:shadow-accent-purple/20 transition-all duration-300 group cursor-pointer"
                >
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent-purple/20 to-accent-blue/20 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-all duration-300">
                    <RefreshCw size={28} className="text-accent-purple group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-accent-purple transition-colors duration-300">
                    {language === 'en' ? 'Adaptability' : 'القدرة على التكيف'}
                  </h3>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="glass-card p-5 rounded-2xl text-center hover:border-accent-purple/50 hover:shadow-xl hover:shadow-accent-purple/20 transition-all duration-300 group cursor-pointer"
                >
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent-purple/20 to-accent-blue/20 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-all duration-300">
                    <Clock size={28} className="text-accent-purple group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-accent-purple transition-colors duration-300">
                    {language === 'en' ? 'Time Management' : 'إدارة الوقت'}
                  </h3>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="glass-card p-5 rounded-2xl text-center hover:border-accent-purple/50 hover:shadow-xl hover:shadow-accent-purple/20 transition-all duration-300 group cursor-pointer"
                >
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent-purple/20 to-accent-blue/20 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-all duration-300">
                    <TrendingUp size={28} className="text-accent-purple group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-accent-purple transition-colors duration-300">
                    {language === 'en' ? 'Leadership' : 'القيادة'}
                  </h3>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="glass-card p-5 rounded-2xl text-center hover:border-accent-purple/50 hover:shadow-xl hover:shadow-accent-purple/20 transition-all duration-300 group cursor-pointer"
                >
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent-purple/20 to-accent-blue/20 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-all duration-300">
                    <Lightbulb size={28} className="text-accent-purple group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-accent-purple transition-colors duration-300">
                    {language === 'en' ? 'Critical Thinking' : 'التفكير النقدي'}
                  </h3>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="glass-card p-5 rounded-2xl text-center hover:border-accent-purple/50 hover:shadow-xl hover:shadow-accent-purple/20 transition-all duration-300 group cursor-pointer"
                >
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent-purple/20 to-accent-blue/20 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-all duration-300">
                    <BookOpen size={28} className="text-accent-purple group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-accent-purple transition-colors duration-300">
                    {language === 'en' ? 'Continuous Learning' : 'التعلم المستمر'}
                  </h3>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>


      {/* Experience Section */}


      <section id="experience" className="py-32 px-6 bg-white/5">
        <div className="max-w-7xl mx-auto">
          {/* Experience Section Logo */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 }}
            className="flex justify-center mb-6"
          >
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-accent-purple/20 to-accent-blue/20 flex items-center justify-center border border-accent-purple/30 shadow-lg">
              <Briefcase size={40} className="text-accent-purple" />
            </div>
          </motion.div>
          <SectionHeading
            title={t("expTitle")} subtitle={t("expSubtitle")} />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
                whileHover={{ scale: 1.01 }}
                className="glass-card p-8 rounded-3xl hover:border-accent-purple/30 hover:shadow-xl hover:shadow-accent-purple/10 transition-all duration-500"
              >
                {/* Header */}
                <div className="mb-6 pb-6 border-b border-white/10">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.2, type: "spring", stiffness: 200 }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-purple/10 mb-3"
                  >
                    <Calendar size={12} className="text-accent-purple" />
                    <span className="text-[10px] font-bold text-accent-purple">{exp.period}</span>
                  </motion.div>
                  <motion.h3
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    className="text-xl font-bold text-white hover:text-accent-purple transition-colors duration-300"
                  >
                    {exp.title}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.4 }}
                    className="text-accent-purple text-sm mt-1"
                  >
                    {exp.company}
                  </motion.p>
                </div>

                {/* CAR Cards */}
                <div className="space-y-4 max-w-full md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.5, type: "spring", stiffness: 100 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="p-4 rounded-xl bg-red-500/10 border-l-4 border-red-500 hover:bg-red-500/15 transition-all duration-300"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 0.5, delay: index * 0.1 + 0.8 }}
                      >
                        <Target size={16} className="text-red-400" />
                      </motion.div>
                      <h4 className="font-bold text-sm text-red-400">Challenge</h4>
                    </div>
                    <p className="text-white/50 text-sm leading-relaxed pl-6">{exp.challenge}</p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.6, type: "spring", stiffness: 100 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="p-4 rounded-xl bg-blue-500/10 border-l-4 border-blue-500 hover:bg-blue-500/15 transition-all duration-300"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 0.5, delay: index * 0.1 + 0.9 }}
                      >
                        <Lightbulb size={16} className="text-blue-400" />
                      </motion.div>
                      <h4 className="font-bold text-sm text-blue-400">Action</h4>
                    </div>
                    <p className="text-white/50 text-sm leading-relaxed pl-6">{exp.action}</p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.7, type: "spring", stiffness: 100 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="p-4 rounded-xl bg-green-500/10 border-l-4 border-green-500 hover:bg-green-500/15 transition-all duration-300"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 0.5, delay: index * 0.1 + 1.0 }}
                      >
                        <TrendingUp size={16} className="text-green-400" />
                      </motion.div>
                      <h4 className="font-bold text-sm text-green-400">Result</h4>
                    </div>
                    <p className="text-white/50 text-sm leading-relaxed pl-6">{exp.result}</p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Projects Section */}


      <section id="projects" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-accent-purple font-bold uppercase tracking-[0.3em] text-[10px]">
              {t("projSubtitle")}
            </span>
            <h2 className="text-5xl md:text-6xl font-bold mt-4 mb-6 tracking-tight">
              {t("projTitle")}
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-accent-purple to-accent-blue mx-auto rounded-full" />
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {["All", "Frontend", "Backend", "Full-Stack", "WordPress"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveProjectTab(tab as any)}
                className={`px-8 py-3 rounded-full font-bold text-sm transition-all duration-300 ${activeProjectTab === tab
                  ? "bg-gradient-to-r from-accent-purple to-accent-blue text-white shadow-[0_0_20px_rgba(139,92,246,0.3)]"
                  : "bg-white/5 text-white/40 hover:text-white border border-white/5"
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Projects Grid - No motion, no hover effects that cause movement */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, idx) => (
              <div
                key={idx}
                className="bg-[#0a0a0c] rounded-[2rem] overflow-hidden border border-white/5 flex flex-col h-full"
              >
                {/* Image section - no transform on hover */}
                <div className="aspect-[4/3] relative overflow-hidden bg-[#121214] p-6 flex items-center justify-center">
                  <div className="relative w-full h-full">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover rounded-xl shadow-2xl"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                  </div>
                </div>

                {/* Content section */}
                <div className="p-8 flex flex-col flex-grow">
                  <span className="text-accent-purple text-xs font-bold mb-3 block">
                    {project.date}
                  </span>
                  <h3 className="text-2xl font-bold mb-4 text-white">
                    {project.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-8 flex-grow">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.slice(0, 4).map((tag: string) => (
                      <span
                        key={tag}
                        className="text-[10px] font-bold text-accent-purple bg-accent-purple/10 px-4 py-1.5 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Buttons - only color changes, no scaling */}
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={project.githubLink || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-xl border border-white/10 text-white/80 hover:text-white hover:border-accent-purple/50 transition-colors flex items-center gap-2 text-xs font-medium"
                    >
                      <Github size={14} /> GitHub
                    </a>
                    <a
                      href={project.liveLink || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-xl bg-gradient-to-r from-accent-purple to-accent-blue text-white hover:brightness-110 transition-all flex items-center gap-2 text-xs font-medium shadow-lg"
                    >
                      <Globe size={14} /> Live Demo
                    </a>
                    <button
                      onClick={() => setSelectedFeatureProject(project)}
                      className="px-4 py-2 rounded-xl border border-white/10 text-white/80 hover:text-white hover:border-accent-purple/50 transition-colors flex items-center gap-2 text-xs font-medium"
                    >
                      <List size={14} /> View Features
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Services Section */}



      <section id="services" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Logo */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 }}
            className="flex justify-center mb-6"
          >
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-accent-purple/20 to-accent-blue/20 flex items-center justify-center border border-accent-purple/30 shadow-lg">
              <Code2 size={40} className="text-accent-purple" />
            </div>
          </motion.div>

          <div className="text-center mb-16">
            <span className="text-accent-purple font-bold uppercase tracking-[0.3em] text-[10px]">
              {t("servSubtitle")}
            </span>
            <h2 className="text-5xl md:text-6xl font-bold mt-4 mb-6 tracking-tight">
              {t("servTitle")}
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-accent-purple to-accent-blue mx-auto rounded-full" />
            <p className="text-white/50 max-w-2xl mx-auto mt-6">
              {language === 'en'
                ? "Comprehensive development services to bring your ideas to life"
                : "خدمات تطوير شاملة لإضفاء الحيوية على أفكارك"}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Front-End Development */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -8 }}
              className="group glass-card p-6 rounded-2xl hover:border-accent-purple/50 hover:shadow-xl hover:shadow-accent-purple/20 transition-all duration-300 cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-purple/20 to-accent-blue/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300">
                <Code2 size={24} className="text-accent-purple group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent-purple transition-colors duration-300">
                {language === 'en' ? 'Front-End Development' : 'تطوير الواجهة الأمامية'}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed mb-4 group-hover:text-white/70 transition-colors duration-300">
                {language === 'en'
                  ? 'Building modern, scalable, and high-performance web applications using React, TypeScript, and clean component-based architecture.'
                  : 'بناء تطبيقات ويب حديثة وقابلة للتوسع وعالية الأداء باستخدام React و TypeScript وهندسة نظيفة قائمة على المكونات.'}
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-[10px] px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/60 group-hover:border-accent-purple/50 group-hover:bg-accent-purple/10 group-hover:text-accent-purple transition-all duration-300">React</span>
                <span className="text-[10px] px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/60 group-hover:border-accent-purple/50 group-hover:bg-accent-purple/10 group-hover:text-accent-purple transition-all duration-300">TypeScript</span>
                <span className="text-[10px] px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/60 group-hover:border-accent-purple/50 group-hover:bg-accent-purple/10 group-hover:text-accent-purple transition-all duration-300">Next.js</span>
              </div>
            </motion.div>

            {/* UI to Code Conversion */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              whileHover={{ y: -8 }}
              className="group glass-card p-6 rounded-2xl hover:border-accent-purple/50 hover:shadow-xl hover:shadow-accent-purple/20 transition-all duration-300 cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-purple/20 to-accent-blue/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300">
                <Layout size={24} className="text-accent-purple group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent-purple transition-colors duration-300">
                {language === 'en' ? 'UI to Code Conversion' : 'تحويل واجهات المستخدم إلى كود'}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed mb-4 group-hover:text-white/70 transition-colors duration-300">
                {language === 'en'
                  ? 'Converting UI/UX designs (Figma, Adobe XD) into pixel-perfect, responsive, and fully functional web interfaces.'
                  : 'تحويل تصاميم UI/UX (Figma، Adobe XD) إلى واجهات ويب دقيقة ومتجاوبة وكاملة الوظائف.'}
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-[10px] px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/60 group-hover:border-accent-purple/50 group-hover:bg-accent-purple/10 group-hover:text-accent-purple transition-all duration-300">Figma</span>
                <span className="text-[10px] px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/60 group-hover:border-accent-purple/50 group-hover:bg-accent-purple/10 group-hover:text-accent-purple transition-all duration-300">Adobe XD</span>
                <span className="text-[10px] px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/60 group-hover:border-accent-purple/50 group-hover:bg-accent-purple/10 group-hover:text-accent-purple transition-all duration-300">
                  {language === 'en' ? 'Pixel Perfect' : 'دقة البكسل'}
                </span>
              </div>
            </motion.div>

            {/* Modern UI Design */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -8 }}
              className="group glass-card p-6 rounded-2xl hover:border-accent-purple/50 hover:shadow-xl hover:shadow-accent-purple/20 transition-all duration-300 cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-purple/20 to-accent-blue/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300">
                <Palette size={24} className="text-accent-purple group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent-purple transition-colors duration-300">
                {language === 'en' ? 'Modern UI Design' : 'تصميم واجهات مستخدم حديثة'}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed mb-4 group-hover:text-white/70 transition-colors duration-300">
                {language === 'en'
                  ? 'Creating responsive layouts that work smoothly across all devices using Tailwind CSS and Bootstrap.'
                  : 'إنشاء تخطيطات متجاوبة تعمل بسلاسة عبر جميع الأجهزة باستخدام Tailwind CSS و Bootstrap.'}
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-[10px] px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/60 group-hover:border-accent-purple/50 group-hover:bg-accent-purple/10 group-hover:text-accent-purple transition-all duration-300">Tailwind CSS</span>
                <span className="text-[10px] px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/60 group-hover:border-accent-purple/50 group-hover:bg-accent-purple/10 group-hover:text-accent-purple transition-all duration-300">Bootstrap</span>
                <span className="text-[10px] px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/60 group-hover:border-accent-purple/50 group-hover:bg-accent-purple/10 group-hover:text-accent-purple transition-all duration-300">
                  {language === 'en' ? 'Responsive' : 'متجاوب'}
                </span>
              </div>
            </motion.div>

            {/* E-commerce Solutions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
              whileHover={{ y: -8 }}
              className="group glass-card p-6 rounded-2xl hover:border-accent-purple/50 hover:shadow-xl hover:shadow-accent-purple/20 transition-all duration-300 cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-purple/20 to-accent-blue/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300">
                <ShoppingBag size={24} className="text-accent-purple group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent-purple transition-colors duration-300">
                {language === 'en' ? 'E-commerce Solutions' : 'حلول التجارة الإلكترونية'}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed mb-4 group-hover:text-white/70 transition-colors duration-300">
                {language === 'en'
                  ? 'Developing clean, fast, and scalable e-commerce front-end interfaces focused on performance and user experience.'
                  : 'تطوير واجهات أمامية نظيفة وسريعة وقابلة للتوسع للتجارة الإلكترونية تركز على الأداء وتجربة المستخدم.'}
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-[10px] px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/60 group-hover:border-accent-purple/50 group-hover:bg-accent-purple/10 group-hover:text-accent-purple transition-all duration-300">WooCommerce</span>
                <span className="text-[10px] px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/60 group-hover:border-accent-purple/50 group-hover:bg-accent-purple/10 group-hover:text-accent-purple transition-all duration-300">Shopify</span>
                <span className="text-[10px] px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/60 group-hover:border-accent-purple/50 group-hover:bg-accent-purple/10 group-hover:text-accent-purple transition-all duration-300">
                  {language === 'en' ? 'Payment Gateway' : 'بوابة الدفع'}
                </span>
              </div>
            </motion.div>

            {/* Performance Optimization */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              whileHover={{ y: -8 }}
              className="group glass-card p-6 rounded-2xl hover:border-accent-purple/50 hover:shadow-xl hover:shadow-accent-purple/20 transition-all duration-300 cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-purple/20 to-accent-blue/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300">
                <Gauge size={24} className="text-accent-purple group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent-purple transition-colors duration-300">
                {language === 'en' ? 'Performance Optimization' : 'تحسين الأداء'}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed mb-4 group-hover:text-white/70 transition-colors duration-300">
                {language === 'en'
                  ? 'Improving website speed, rendering performance, and overall user experience through optimization best practices.'
                  : 'تحسين سرعة موقع الويب وأداء العرض وتجربة المستخدم الشاملة من خلال أفضل ممارسات التحسين.'}
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-[10px] px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/60 group-hover:border-accent-purple/50 group-hover:bg-accent-purple/10 group-hover:text-accent-purple transition-all duration-300">
                  {language === 'en' ? 'Lazy Loading' : 'التحميل البطيء'}
                </span>
                <span className="text-[10px] px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/60 group-hover:border-accent-purple/50 group-hover:bg-accent-purple/10 group-hover:text-accent-purple transition-all duration-300">
                  {language === 'en' ? 'Code Splitting' : 'تقسيم الكود'}
                </span>
                <span className="text-[10px] px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/60 group-hover:border-accent-purple/50 group-hover:bg-accent-purple/10 group-hover:text-accent-purple transition-all duration-300">Core Web Vitals</span>
              </div>
            </motion.div>

            {/* Maintainable Code */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35 }}
              whileHover={{ y: -8 }}
              className="group glass-card p-6 rounded-2xl hover:border-accent-purple/50 hover:shadow-xl hover:shadow-accent-purple/20 transition-all duration-300 cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-purple/20 to-accent-blue/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300">
                <GitBranch size={24} className="text-accent-purple group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent-purple transition-colors duration-300">
                {language === 'en' ? 'Maintainable Code' : 'كود قابل للصيانة'}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed mb-4 group-hover:text-white/70 transition-colors duration-300">
                {language === 'en'
                  ? 'Writing well-structured, readable, and maintainable code that makes future updates easy after delivery.'
                  : 'كتابة كود جيد التنظيم وقابل للقراءة والصيانة يجعل التحديثات المستقبلية سهلة بعد التسليم.'}
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-[10px] px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/60 group-hover:border-accent-purple/50 group-hover:bg-accent-purple/10 group-hover:text-accent-purple transition-all duration-300">
                  {language === 'en' ? 'Clean Code' : 'كود نظيف'}
                </span>
                <span className="text-[10px] px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/60 group-hover:border-accent-purple/50 group-hover:bg-accent-purple/10 group-hover:text-accent-purple transition-all duration-300">
                  {language === 'en' ? 'SOLID Principles' : 'مبادئ SOLID'}
                </span>
                <span className="text-[10px] px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/60 group-hover:border-accent-purple/50 group-hover:bg-accent-purple/10 group-hover:text-accent-purple transition-all duration-300">
                  {language === 'en' ? 'Documentation' : 'توثيق'}
                </span>
              </div>
            </motion.div>
          </div>

          {/* Pricing Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex justify-center mt-12"
          >
            <Link
              to="/pricing"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-accent-purple to-accent-blue text-white font-bold uppercase tracking-widest text-sm rounded-xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-accent-purple/30 group"
            >
              <DollarSign size={18} className="group-hover:rotate-12 transition-transform" />
              {language === 'en' ? 'View Pricing Plans' : 'عرض خطط الأسعار'}
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>


      {/* Achievements Section */}
      {/* Achievements Section */}
<section id="achievements" className="py-32 px-6 bg-white/5">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <span className="text-accent-purple font-bold uppercase tracking-[0.3em] text-[10px]">
        {language === 'en' ? 'RECOGNITIONS' : 'التكريمات'}
      </span>
      <h2 className="text-5xl md:text-6xl font-bold mt-4 mb-6 tracking-tight">
        {language === 'en' ? 'Achievements' : 'الإنجازات'}
      </h2>
      <div className="w-16 h-1 bg-gradient-to-r from-accent-purple to-accent-blue mx-auto rounded-full" />
      <p className="text-white/50 max-w-2xl mx-auto mt-6">
        {language === 'en'
          ? "Certifications and recognitions that showcase my expertise"
          : "الشهادات والتكريمات التي تعرض خبراتي"}
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-6">
      {/* Graduation Project - ITAC Award Winner - spans 2 columns */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        whileHover={{ y: -8, scale: 1.02 }}
        className="glass-card p-6 rounded-2xl hover:border-accent-purple/50 hover:shadow-xl hover:shadow-accent-purple/20 transition-all duration-300 group cursor-pointer md:col-span-2"
      >
        <div className="flex items-start gap-4">
          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent-purple/20 to-accent-blue/20 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
            <Award size={28} className="text-accent-purple group-hover:text-white transition-colors duration-300" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-bold text-white group-hover:text-accent-purple transition-colors duration-300">
              {language === 'en' 
                ? "Graduation Project | ITAC Award Winner (ITIDA)"
                : "مشروع التخرج | الفائز بجائزة ITAC (ITIDA)"}
            </h3>
            <p className="text-accent-purple text-xs font-medium mt-1">
              {language === 'en'
                ? "Integrated Smart Bag & Travel Ecosystem"
                : "الحقيبة الذكية المتكاملة والنظام البيئي للسفر"}
            </p>
            
            {/* Award & Recognition */}
            <div className="mt-3 p-3 rounded-xl bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20">
              <p className="text-yellow-400 text-xs font-semibold mb-1">
                {language === 'en' ? "🏆 Award & Recognition" : "🏆 الجائزة والتكريم"}
              </p>
              <p className="text-white/60 text-xs leading-relaxed">
                {language === 'en'
                  ? "Won the ITAC Graduation Project Support Program by ITIDA, securing a competitive grant for innovative ICT solutions meeting industry standards."
                  : "فاز ببرنامج دعم مشاريع التخرج ITAC من ITIDA، وحصل على منحة تنافسية لحلول تكنولوجيا المعلومات والاتصالات المبتكرة التي تلبي معايير الصناعة."}
              </p>
            </div>
            
            {/* IoT Engineering */}
            <div className="mt-3 p-3 rounded-xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20">
              <p className="text-blue-400 text-xs font-semibold mb-1">
                {language === 'en' ? "🔧 IoT Engineering (Smart Bag)" : "🔧 هندسة إنترنت الأشياء (الحقيبة الذكية)"}
              </p>
              <p className="text-white/60 text-xs leading-relaxed">
                {language === 'en'
                  ? "Designed and built a 'Smart Bag' prototype integrating Arduino/Raspberry Pi with features like GPS tracking, obstacle avoidance, and smart locking to enhance traveler security."
                  : "تصميم وبناء نموذج أولي للحقيبة الذكية يدمج Arduino/Raspberry Pi بميزات مثل تتبع GPS وتجنب العوائق والقفل الذكي لتعزيز أمان المسافر."}
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="text-[9px] px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300">Arduino</span>
                <span className="text-[9px] px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300">Raspberry Pi</span>
                <span className="text-[9px] px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300">
                  {language === 'en' ? "GPS Tracking" : "تتبع GPS"}
                </span>
                <span className="text-[9px] px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300">
                  {language === 'en' ? "Smart Locking" : "قفل ذكي"}
                </span>
              </div>
            </div>
            
            {/* Full-Stack Web Development */}
            <div className="mt-3 p-3 rounded-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20">
              <p className="text-purple-400 text-xs font-semibold mb-1">
                {language === 'en' ? "💻 Full-Stack Web Development" : "💻 تطوير الويب الكامل"}
              </p>
              <p className="text-white/60 text-xs leading-relaxed">
                {language === 'en'
                  ? "Developed a high-traffic travel platform using React and Node.js, featuring real-time booking management, secure user profiles, and a mobile-first responsive UI."
                  : "تطوير منصة سفر عالية الحركة باستخدام React و Node.js، وتتميز بإدارة الحجز في الوقت الفعلي وملفات تعريف المستخدمين الآمنة وواجهة مستخدم متجاوبة تعتمد على الهواتف المحمولة أولاً."}
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="text-[9px] px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300">React</span>
                <span className="text-[9px] px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300">Node.js</span>
                <span className="text-[9px] px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300">
                  {language === 'en' ? "Real-time Booking" : "حجز فوري"}
                </span>
                <span className="text-[9px] px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300">
                  {language === 'en' ? "Mobile-first UI" : "واجهة متجاوبة"}
                </span>
              </div>
            </div>
            
            {/* System Integration */}
            <div className="mt-3 p-3 rounded-xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20">
              <p className="text-green-400 text-xs font-semibold mb-1">
                {language === 'en' ? "🔗 System Integration" : "🔗 تكامل الأنظمة"}
              </p>
              <p className="text-white/60 text-xs leading-relaxed">
                {language === 'en'
                  ? "Successfully bridged the gap between hardware (IoT) and software (Web API) to create a seamless, market-ready travel experience."
                  : "سد الفجوة بين الأجهزة (إنترنت الأشياء) والبرامج (واجهة برمجة تطبيقات الويب) بنجاح لخلق تجربة سفر سلسة وجاهزة للسوق."}
              </p>
            </div>
            
            <div className="flex items-center gap-1 mt-3 text-accent-purple text-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span>{language === 'en' ? "View Project Details" : "عرض تفاصيل المشروع"}</span>
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Huawei ICT Competition - with LinkedIn link */}
      <motion.a
        href="https://www.linkedin.com/feed/update/urn:li:activity:7435760534282506240/"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        whileHover={{ y: -8, scale: 1.02 }}
        className="glass-card p-6 rounded-2xl hover:border-accent-purple/50 hover:shadow-xl hover:shadow-accent-purple/20 transition-all duration-300 group cursor-pointer block"
      >
        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent-purple/20 to-accent-blue/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300">
          <Trophy size={28} className="text-accent-purple group-hover:text-white transition-colors duration-300" />
        </div>
        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-accent-purple transition-colors duration-300">
          {language === 'en' ? "Huawei ICT Competition" : "مسابقة هواوي لتكنولوجيا المعلومات"}
        </h3>
        <p className="text-accent-purple text-xs font-medium mb-3">
          {language === 'en' ? "International Recognition" : "تقدير دولي"}
        </p>
        
        {/* Main Description */}
         <div className="mt-2 p-2 rounded-lg bg-gradient-to-r from-yellow-500/10 to-yellow-500/10 border border-yellow-500/20">
        <p className="text-white/50 text-xs leading-relaxed group-hover:text-white/70 transition-colors duration-300 mb-3">
          {language === 'en'
            ? "Participated in the prestigious Huawei ICT Competition, demonstrating expertise in cloud computing and big data technologies. Participating in this competition demonstrates a candidate's ability to handle complex, real-world ICT challenges."
            : "المشاركة في مسابقة هواوي المرموقة لتكنولوجيا المعلومات، وإظهار الخبرة في الحوسبة السحابية وتقنيات البيانات الضخمة. تثبت المشاركة في هذه المسابقة قدرة المرشح على التعامل مع تحديات تكنولوجيا المعلومات والاتصالات المعقدة في العالم الحقيقي."}
        </p>
        </div>
        {/* Cloud Track */}
        <div className="mt-3 p-2 rounded-lg bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20">
          <p className="text-blue-400 text-[10px] font-semibold mb-1">
            {language === 'en' ? "☁️ Cloud Track" : "☁️ مسار الحوسبة السحابية"}
          </p>
          <p className="text-white/50 text-[10px] leading-relaxed">
            {language === 'en'
              ? "Evaluates theoretical knowledge and hands-on laboratory skills in cloud architecture, services, and management."
              : "تقييم المعرفة النظرية والمهارات العملية في المختبر في هندسة السحابة والخدمات والإدارة."}
          </p>
        </div>
        
        {/* Big Data & AI */}
        <div className="mt-2 p-2 rounded-lg bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20">
          <p className="text-purple-400 text-[10px] font-semibold mb-1">
            {language === 'en' ? "🤖 Big Data & AI" : "🤖 البيانات الضخمة والذكاء الاصطناعي"}
          </p>
          <p className="text-white/50 text-[10px] leading-relaxed">
            {language === 'en'
              ? "Through the Innovation Competition, participants must design and implement solutions using Big Data, AI (MindSpore, ModelArts), and IoT to solve practical social or business problems."
              : "من خلال مسابقة الابتكار، يجب على المشاركين تصميم وتنفيذ حلول باستخدام البيانات الضخمة والذكاء الاصطناعي (MindSpore، ModelArts) وإنترنت الأشياء لحل المشكلات الاجتماعية أو التجارية العملية."}
          </p>
        </div>
        
        {/* Industry Standards */}
        <div className="mt-2 p-2 rounded-lg bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20">
          <p className="text-green-400 text-[10px] font-semibold mb-1">
            {language === 'en' ? "📋 Industry Standards" : "📋 معايير الصناعة"}
          </p>
          <p className="text-white/50 text-[10px] leading-relaxed">
            {language === 'en'
              ? "The competition is closely tied to Huawei Certifications (HCIA/HCIP/HCIE), ensuring that participants' skills meet rigorous global industry standards for employability."
              : "ترتبط المسابقة ارتباطاً وثيقاً بشهادات هواوي (HCIA/HCIP/HCIE)، مما يضمن أن مهارات المشاركين تلبي معايير الصناعة العالمية الصارمة للتوظيف."}
          </p>
        </div>
        
        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2 mt-3">
          <span className="text-[9px] px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300">
            {language === 'en' ? "Cloud Architecture" : "هندسة السحابة"}
          </span>
          <span className="text-[9px] px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300">
            {language === 'en' ? "Big Data" : "البيانات الضخمة"}
          </span>
          <span className="text-[9px] px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300">AI</span>
          <span className="text-[9px] px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300">MindSpore</span>
          <span className="text-[9px] px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300">ModelArts</span>
          <span className="text-[9px] px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300">IoT</span>
          <span className="text-[9px] px-2 py-0.5 rounded-full bg-green-500/20 text-green-300">HCIA/HCIP/HCIE</span>
        </div>
        
        <div className="flex items-center gap-1 mt-3 text-accent-purple text-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span>{language === 'en' ? "View Competition Details" : "عرض تفاصيل المسابقة"}</span>
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </div>
      </motion.a>
    </div>
  </div>
</section>



      {/* Testimonials Section */}


      {/* <section id="testimonials" className="py-32 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-accent-purple font-bold uppercase tracking-[0.3em] text-[10px]">
              {t("testSubtitle")}
            </span>
            <h2 className="text-5xl md:text-6xl font-bold mt-4 mb-6 tracking-tight">
              {t("testTitle")}
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-accent-purple to-accent-blue mx-auto rounded-full" />
            <p className="text-white/50 max-w-2xl mx-auto mt-6">
              {language === 'en'
                ? "What others say about my work"
                : "ماذا يقول الآخرون عن عملي"}
            </p>
          </div>

          {testimonials.length > 0 ? (
            <Swiper
              modules={[Autoplay, Pagination, Navigation, EffectCoverflow]}
              effect="coverflow"
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={1}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              navigation={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
              className="testimonials-swiper"
            >
              {testimonials.map((testimonial, i) => (
                <SwiperSlide key={i}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="glass-card p-8 rounded-3xl hover:border-accent-purple/30 transition-all group h-full"
                  >
                   
                    <div className="mb-6">
                      <div className="w-12 h-12 rounded-full bg-accent-purple/10 flex items-center justify-center">
                        <MessageSquare size={20} className="text-accent-purple" />
                      </div>
                    </div>

                   
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, j) => (
                        <Star
                          key={j}
                          size={16}
                          className={j < testimonial.rating ? "fill-accent-purple text-accent-purple" : "text-white/20"}
                        />
                      ))}
                    </div>

                  
                    <p className="text-white/60 leading-relaxed mb-6 text-sm line-clamp-4">
                      "{testimonial.content}"
                    </p>

                    {/* Client Info */}
                    {/* <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent-purple/30 to-accent-blue/30 flex items-center justify-center text-white font-bold text-lg">
                        {testimonial.initials}
                      </div>
                      <div>
                        <h4 className="font-bold text-white">{testimonial.name}</h4>
                        <p className="text-white/40 text-[11px] uppercase tracking-wider">{testimonial.role}</p>
                      </div>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            
            <div className="flex flex-col items-center justify-center text-center py-16">
              <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center text-white/20 mb-6 border border-white/10">
                <MessageSquare size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">{t("noTestimonials")}</h3>
              <p className="text-white/40 max-w-xs text-sm">{t("noTestimonialsDesc")}</p>
            </div>
          )}
        </div>

        
        <style jsx>{`
    .testimonials-swiper {
      padding-bottom: 50px !important;
    }
    .testimonials-swiper .swiper-pagination-bullet {
      background: rgba(139, 92, 246, 0.3);
      opacity: 1;
    }
    .testimonials-swiper .swiper-pagination-bullet-active {
      background: #8b5cf6;
    }
    .testimonials-swiper .swiper-button-prev,
    .testimonials-swiper .swiper-button-next {
      color: #8b5cf6;
      background: rgba(139, 92, 246, 0.1);
      width: 40px;
      height: 40px;
      border-radius: 50%;
      backdrop-filter: blur(10px);
    }
    .testimonials-swiper .swiper-button-prev:after,
    .testimonials-swiper .swiper-button-next:after {
      font-size: 18px;
    }
    .testimonials-swiper .swiper-button-prev:hover,
    .testimonials-swiper .swiper-button-next:hover {
      background: rgba(139, 92, 246, 0.2);
    }
    @media (max-width: 768px) {
      .testimonials-swiper .swiper-button-prev,
      .testimonials-swiper .swiper-button-next {
        display: none;
      }
    }
  `}</style>
      </section> */} 


<section id="testimonials" className="py-32 px-6 relative overflow-hidden">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <span className="text-accent-purple font-bold uppercase tracking-[0.3em] text-[10px]">
        {t("testSubtitle")}
      </span>
      <h2 className="text-5xl md:text-6xl font-bold mt-4 mb-6 tracking-tight">
        {t("testTitle")}
      </h2>
      <div className="w-16 h-1 bg-gradient-to-r from-accent-purple to-accent-blue mx-auto rounded-full" />
      <p className="text-white/50 max-w-2xl mx-auto mt-6">
        {language === 'en'
          ? "What others say about my work"
          : "ماذا يقول الآخرون عن عملي"}
      </p>
    </div>

    {testimonials.length > 0 ? (
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectCoverflow]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        className="testimonials-swiper"
      >
        {testimonials.map((testimonial, i) => (
          <SwiperSlide key={i}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-8 rounded-3xl hover:border-accent-purple/30 transition-all group h-full"
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <div className="w-12 h-12 rounded-full bg-accent-purple/10 flex items-center justify-center">
                  <MessageSquare size={20} className="text-accent-purple" />
                </div>
              </div>

              {/* Rating Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star
                    key={j}
                    size={16}
                    className={j < testimonial.rating ? "fill-accent-purple text-accent-purple" : "text-white/20"}
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-white/60 leading-relaxed mb-6 text-sm line-clamp-4">
                "{testimonial.content}"
              </p>

              {/* Client Info */}
              <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent-purple/30 to-accent-blue/30 flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.initials}
                </div>
                <div>
                  <h4 className="font-bold text-white">{testimonial.name}</h4>
                  <p className="text-white/40 text-[11px] uppercase tracking-wider">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    ) : (
      // Coming Soon Cards
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Coming Soon Card 1 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          whileHover={{ y: -8, scale: 1.02 }}
          className="glass-card p-8 rounded-3xl hover:border-accent-purple/50 hover:shadow-xl hover:shadow-accent-purple/20 transition-all duration-300 group cursor-pointer text-center"
        >
          {/* Coming Soon Badge */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-accent-purple to-accent-blue rounded-full">
            <span className="text-[9px] font-bold text-white uppercase tracking-wider">Coming Soon</span>
          </div>
          
          <div className="mb-6">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent-purple/20 to-accent-blue/20 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
              <MessageSquare size={28} className="text-accent-purple group-hover:text-white transition-colors" />
            </div>
          </div>

          {/* Stars Placeholder */}
          <div className="flex gap-1 justify-center mb-4">
            {[...Array(5)].map((_, j) => (
              <Star key={j} size={18} className="text-white/20" />
            ))}
          </div>

          <p className="text-white/50 text-sm leading-relaxed mb-6">
            {language === 'en'
              ? "Exciting things are happening! Testimonials from satisfied clients will appear here soon."
              : "أشياء مثيرة تحدث! ستظهر قريباً توصيات من العملاء الراضين."}
          </p>

          <div className="flex items-center justify-center gap-3 pt-4 border-t border-white/10">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent-purple/20 to-accent-blue/20 flex items-center justify-center animate-pulse">
              <MessageSquare size={20} className="text-accent-purple/50" />
            </div>
            <div className="text-left">
              <h4 className="font-bold text-white/40">Your Name Here</h4>
              <p className="text-white/20 text-[10px] uppercase tracking-wider">Client Role</p>
            </div>
          </div>
        </motion.div>

        {/* Coming Soon Card 2 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          whileHover={{ y: -8, scale: 1.02 }}
          className="glass-card p-8 rounded-3xl hover:border-accent-purple/50 hover:shadow-xl hover:shadow-accent-purple/20 transition-all duration-300 group cursor-pointer text-center relative"
        >
          <div className="mb-6">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent-purple/20 to-accent-blue/20 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
              <MessageSquare size={28} className="text-accent-purple group-hover:text-white transition-colors" />
            </div>
          </div>

          {/* Stars Placeholder */}
          <div className="flex gap-1 justify-center mb-4">
            {[...Array(5)].map((_, j) => (
              <Star key={j} size={18} className="text-white/20" />
            ))}
          </div>

          <p className="text-white/50 text-sm leading-relaxed mb-6">
            {language === 'en'
              ? "Be the first to share your experience working with me. I'd love to hear your feedback!"
              : "كن أول من يشارك تجربته في العمل معي. يسعدني سماع ملاحظاتك!"}
          </p>

          <div className="flex items-center justify-center gap-3 pt-4 border-t border-white/10">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent-purple/20 to-accent-blue/20 flex items-center justify-center group-hover:scale-110 transition-transform">
              <MessageSquare size={20} className="text-accent-purple/50" />
            </div>
            <div className="text-left">
              <h4 className="font-bold text-white/40">Be the First</h4>
              <p className="text-white/20 text-[10px] uppercase tracking-wider">Leave a Review</p>
            </div>
          </div>
        </motion.div>

        {/* Coming Soon Card 3 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          whileHover={{ y: -8, scale: 1.02 }}
          className="glass-card p-8 rounded-3xl hover:border-accent-purple/50 hover:shadow-xl hover:shadow-accent-purple/20 transition-all duration-300 group cursor-pointer text-center relative"
        >
          <div className="mb-6">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent-purple/20 to-accent-blue/20 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
              <MessageSquare size={28} className="text-accent-purple group-hover:text-white transition-colors" />
            </div>
          </div>

          {/* Stars Placeholder */}
          <div className="flex gap-1 justify-center mb-4">
            {[...Array(5)].map((_, j) => (
              <Star key={j} size={18} className="text-white/20" />
            ))}
          </div>

          <p className="text-white/50 text-sm leading-relaxed mb-6">
            {language === 'en'
              ? "Building great relationships with clients. Real testimonials are on their way!"
              : "بناء علاقات رائعة مع العملاء. الشهادات الحقيقية في الطريق!"}
          </p>

          <div className="flex items-center justify-center gap-3 pt-4 border-t border-white/10">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent-purple/20 to-accent-blue/20 flex items-center justify-center animate-pulse">
              <MessageSquare size={20} className="text-accent-purple/50" />
            </div>
            <div className="text-left">
              <h4 className="font-bold text-white/40">Coming Soon</h4>
              <p className="text-white/20 text-[10px] uppercase tracking-wider">Stay Tuned</p>
            </div>
          </div>
        </motion.div>
      </div>
    )}
  </div>

  {/* Custom CSS for Swiper */}
  <style jsx>{`
    .testimonials-swiper {
      padding-bottom: 50px !important;
    }
    .testimonials-swiper .swiper-pagination-bullet {
      background: rgba(139, 92, 246, 0.3);
      opacity: 1;
    }
    .testimonials-swiper .swiper-pagination-bullet-active {
      background: #8b5cf6;
    }
    .testimonials-swiper .swiper-button-prev,
    .testimonials-swiper .swiper-button-next {
      color: #8b5cf6;
      background: rgba(139, 92, 246, 0.1);
      width: 40px;
      height: 40px;
      border-radius: 50%;
      backdrop-filter: blur(10px);
    }
    .testimonials-swiper .swiper-button-prev:after,
    .testimonials-swiper .swiper-button-next:after {
      font-size: 18px;
    }
    .testimonials-swiper .swiper-button-prev:hover,
    .testimonials-swiper .swiper-button-next:hover {
      background: rgba(139, 92, 246, 0.2);
    }
    @media (max-width: 768px) {
      .testimonials-swiper .swiper-button-prev,
      .testimonials-swiper .swiper-button-next {
        display: none;
      }
    }
  `}</style>
</section>



      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-accent-purple font-bold uppercase tracking-[0.3em] text-[10px]">
              {language === 'en' ? "LET'S WORK TOGETHER" : "لنعمل معاً"}
            </span>
            <h2 className="text-5xl md:text-6xl font-bold mt-4 mb-6 tracking-tight">
              {language === 'en' ? "Get In Touch" : "تواصل معي"}
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-accent-purple to-accent-blue mx-auto rounded-full" />
            <p className="text-white/50 max-w-2xl mx-auto mt-6">
              {language === 'en'
                ? "Have a project in mind or looking for a skilled developer? I'm always open to new opportunities and collaborations."
                : "هل لديك مشروع في ذهنك أو تبحث عن مطور ماهر؟ أنا دائماً منفتحة على الفرص الجديدة والتعاون."}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Side - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: language === 'ar' ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -5, boxShadow: "0 20px 40px -15px rgba(139,92,246,0.3)" }}
              className="glass-card p-8 rounded-2xl border-white/5 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-white mb-6">
                {language === 'en' ? "Let's discuss your project" : "دعنا نناقش مشروعك"}
              </h3>

              <form className="space-y-5" action="https://formspree.io/f/your-form-id" method="POST">
                {/* Your Name Field */}
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder={language === 'en' ? "Your Name" : "الاسم"}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 focus:outline-none focus:border-accent-purple transition-all text-white/80 placeholder:text-white/30 text-sm"
                    required
                  />
                </div>

                {/* Your Email Field */}
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder={language === 'en' ? "Your Email" : "البريد الإلكتروني"}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 focus:outline-none focus:border-accent-purple transition-all text-white/80 placeholder:text-white/30 text-sm"
                    required
                  />
                </div>

                {/* Subject Field */}
                <div>
                  <input
                    type="text"
                    name="subject"
                    placeholder={language === 'en' ? "Subject" : "الموضوع"}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 focus:outline-none focus:border-accent-purple transition-all text-white/80 placeholder:text-white/30 text-sm"
                    required
                  />
                </div>

                {/* Your Message Field */}
                <div>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder={language === 'en' ? "Your Message" : "رسالتك"}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 focus:outline-none focus:border-accent-purple transition-all text-white/80 placeholder:text-white/30 text-sm resize-none"
                    required
                  />
                </div>

                {/* Send via WhatsApp Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(34,197,94,0.5)" }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3.5 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold uppercase tracking-[0.2em] text-[11px] rounded-xl transition-all duration-300 mb-3"
                >
                  {language === 'en' ? "Send via WhatsApp" : "إرسال عبر واتساب"}
                </motion.button>

                {/* Send via Email Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(139,92,246,0.5)" }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3.5 bg-gradient-to-r from-accent-purple to-accent-blue text-white font-bold uppercase tracking-[0.2em] text-[11px] rounded-xl transition-all duration-300"
                >
                  {language === 'en' ? "Send via Email" : "إرسال عبر البريد"}
                </motion.button>
              </form>
            </motion.div>

            {/* Right Side - Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: language === 'ar' ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              {/* Email */}
              <motion.a
                href="mailto:esraahamaza299@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, x: language === 'ar' ? -5 : 5, boxShadow: "0 10px 30px -10px rgba(139,92,246,0.3)" }}
                className="flex items-center gap-4 p-4 rounded-xl glass-card hover:border-accent-purple/30 transition-all duration-300 group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-full bg-accent-purple/10 flex items-center justify-center group-hover:bg-accent-purple/20 transition-all">
                  <Mail size={20} className="text-accent-purple" />
                </div>
                <div>
                  <p className="text-white/40 text-[10px] uppercase tracking-wider mb-0.5">
                    {language === 'en' ? "Email" : "البريد الإلكتروني"}
                  </p>
                  <p className="text-white/80 group-hover:text-accent-purple transition-colors text-sm">
                    esraahamaza299@gmail.com
                  </p>
                </div>
              </motion.a>

              {/* Phone/WhatsApp */}
              <motion.a
                href="https://wa.me/201012847580"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, x: language === 'ar' ? -5 : 5, boxShadow: "0 10px 30px -10px rgba(34,197,94,0.3)" }}
                className="flex items-center gap-4 p-4 rounded-xl glass-card hover:border-green-500/30 transition-all duration-300 group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center group-hover:bg-green-500/20 transition-all">
                  <Phone size={20} className="text-green-400" />
                </div>
                <div>
                  <p className="text-white/40 text-[10px] uppercase tracking-wider mb-0.5">
                    {language === 'en' ? "Phone/WhatsApp" : "واتساب"}
                  </p>
                  <p className="text-white/80 group-hover:text-green-400 transition-colors text-sm">
                    01012847580
                  </p>
                </div>
              </motion.a>



              {/* WhatsApp Info Message */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                whileHover={{ scale: 1.02, boxShadow: "0 10px 30px -10px rgba(34,197,94,0.2)" }}
                className="glass-card p-4 rounded-xl border border-green-500/20 bg-green-500/5 transition-all duration-300"
              >
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="text-white/60 text-xs leading-relaxed">
                      {language === 'en'
                        ? "WhatsApp opens with your message pre-filled & ready to send."
                        : "يتم فتح واتساب مع رسالتك المعدة مسبقاً وجاهزة للإرسال."}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Email Info Message */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.02, boxShadow: "0 10px 30px -10px rgba(139,92,246,0.2)" }}
                className="glass-card p-4 rounded-xl border border-accent-purple/20 bg-accent-purple/5 transition-all duration-300"
              >
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-accent-purple mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <p className="text-white/60 text-xs leading-relaxed">
                      {language === 'en'
                        ? "Email opens Gmail compose in a new tab."
                        : "يتم فتح البريد الإلكتروني في علامة تبويب جديدة."}
                    </p>
                  </div>
                </div>
              </motion.div>


            </motion.div>
          </div>
        </div>

        {/* Decorative Background Elements */}
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent-purple/20 rounded-full blur-[100px] -z-10" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-blue/20 rounded-full blur-[100px] -z-10" />
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>

      {/* Feature Modal */}
      <AnimatePresence>
        {selectedFeatureProject && (
          <FeatureModal
            project={selectedFeatureProject}
            onClose={() => setSelectedFeatureProject(null)}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
        {selectedFeatureProject && (
          <FeatureModal
            project={selectedFeatureProject}
            onClose={() => setSelectedFeatureProject(null)}
          />
        )}
      </AnimatePresence>
    </main>
  );
};

export default Home;
