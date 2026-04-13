import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  Sun,
  Moon,
  Heart,
} from 'lucide-react';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import CV from './pages/CV';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { ThemeProvider, useTheme } from './context/ThemeContext';

// Animated Logo Component - Bigger React Style with EA
const AnimatedLogo = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative flex items-center justify-center group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
     {/* React-style rotating rings background - Bigger */}
<motion.div
  className="absolute inset-0"
  animate={{ rotate: isHovered ? 360 : 0 }}
  transition={{ duration: 2, repeat: isHovered ? Infinity : 0, ease: "linear" }}
>
  <svg className="w-full h-full" viewBox="0 0 120 120">
    {/* Outer orbit rings - thicker and more visible */}
    <ellipse 
      cx="60" cy="60" rx="50" ry="20" 
      fill="none" 
      stroke="rgba(139, 92, 246, 0.5)" 
      strokeWidth="3"
      transform="rotate(0, 60, 60)"
    />
    <ellipse 
      cx="60" cy="60" rx="50" ry="20" 
      fill="none" 
      stroke="rgba(139, 92, 246, 0.5)" 
      strokeWidth="3"
      transform="rotate(60, 60, 60)"
    />
    <ellipse 
      cx="60" cy="60" rx="50" ry="20" 
      fill="none" 
      stroke="rgba(139, 92, 246, 0.5)" 
      strokeWidth="3"
      transform="rotate(120, 60, 60)"
    />
    
    {/* Middle decorative rings */}
    <ellipse 
      cx="60" cy="60" rx="35" ry="14" 
      fill="none" 
      stroke="rgba(59, 130, 246, 0.35)" 
      strokeWidth="2"
      transform="rotate(30, 60, 60)"
    />
    <ellipse 
      cx="60" cy="60" rx="35" ry="14" 
      fill="none" 
      stroke="rgba(59, 130, 246, 0.35)" 
      strokeWidth="2"
      transform="rotate(90, 60, 60)"
    />
    <ellipse 
      cx="60" cy="60" rx="35" ry="14" 
      fill="none" 
      stroke="rgba(59, 130, 246, 0.35)" 
      strokeWidth="2"
      transform="rotate(150, 60, 60)"
    />
    
    {/* Inner small rings */}
    <ellipse 
      cx="60" cy="60" rx="20" ry="8" 
      fill="none" 
      stroke="rgba(139, 92, 246, 0.25)" 
      strokeWidth="1.5"
      transform="rotate(15, 60, 60)"
    />
    <ellipse 
      cx="60" cy="60" rx="20" ry="8" 
      fill="none" 
      stroke="rgba(139, 92, 246, 0.25)" 
      strokeWidth="1.5"
      transform="rotate(75, 60, 60)"
    />
    <ellipse 
      cx="60" cy="60" rx="20" ry="8" 
      fill="none" 
      stroke="rgba(139, 92, 246, 0.25)" 
      strokeWidth="1.5"
      transform="rotate(135, 60, 60)"
    />
  </svg>
</motion.div>

      {/* EA Text with React-style dot - Bigger */}
      <div className="relative flex items-center justify-center gap-1.5 z-10">
        <motion.span 
          className="text-3xl md:text-4xl font-black tracking-tight text-gradient-mixed"
          animate={{ 
            scale: isHovered ? [1, 1.2, 1] : 1,
            rotate: isHovered ? [0, 10, -10, 0] : 0
          }}
          transition={{ duration: 0.5 }}
        >
          E
        </motion.span>
        {/* <motion.div
          animate={{ 
            scale: isHovered ? [1, 2, 1] : 1,
            backgroundColor: isHovered ? "#8b5cf6" : "rgba(139, 92, 246, 0.6)"
          }}
          transition={{ duration: 0.3, repeat: isHovered ? Infinity : 0, repeatDelay: 0.5 }}
          className="w-2 h-2 rounded-full bg-accent-purple/60"
        /> */}
        <motion.span 
          className="text-3xl md:text-4xl font-black tracking-tight text-gradient-mixed"
          animate={{ 
            scale: isHovered ? [1, 1.2, 1] : 1,
            rotate: isHovered ? [0, -10, 10, 0] : 0
          }}
          transition={{ duration: 0.5 }}
        >
          A
        </motion.span>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('home'), href: '/' },
    { name: t('about'), href: '/#about' },
    { name: t('education'), href: '/#education' },
    { name: t('skills'), href: '/#skills' },
    { name: t('experience'), href: '/#experience' },
    { name: t('services'), href: '/#services' },
    { name: t('projects'), href: '/#projects' },
    { name: t('achievements'), href: '/#achievements' },
    { name: t('testimonials'), href: '/#testimonials' }, 
  ];
  const contactHref = '/#contact';

  const handleLinkClick = (href: string) => {
    setIsMobileMenuOpen(false);
    if (href.startsWith('/#')) {
      const id = href.split('#')[1];
      if (location.pathname === '/') {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/' && !location.hash;
    if (href.startsWith('/#')) return location.hash === href.substring(1);
    return location.pathname === href;
  };



  // Add this animated logo component inside your Navbar component or outside as a separate component
const AnimatedLogo = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative flex items-center justify-center group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Letters Container */}
      <div className="relative flex items-baseline">
        {/* Letter E */}
        <motion.span 
          className="text-xl font-black tracking-tight text-gradient-mixed"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          E
        </motion.span>
        
        {/* Letter A */}
        <motion.span 
          className="text-xl font-black tracking-tight text-gradient-mixed"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          A
        </motion.span>
      </div>

      {/* Amazon-style Smile Arrow (drawing animation) */}
      <motion.div
        className="absolute -bottom-3 left-0 right-0 flex justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      >
        <svg 
          width="28" 
          height="8" 
          viewBox="0 0 28 8" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="text-accent-purple"
        >
          {/* Curved smile line */}
          <motion.path
            d="M2 5.5C7 2.5 11 1.5 14 1.5C17 1.5 21 2.5 26 5.5"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: isHovered ? 1 : 0, 
              opacity: isHovered ? 1 : 0 
            }}
            transition={{ duration: 0.6, ease: "easeInOut", delay: 0.1 }}
          />
          
          {/* Arrow tip */}
          <motion.path
            d="M23.5 4L26 5.5L24 7"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            initial={{ opacity: 0, pathLength: 0 }}
            animate={{ 
              opacity: isHovered ? 1 : 0, 
              pathLength: isHovered ? 1 : 0 
            }}
            transition={{ duration: 0.4, delay: 0.5 }}
          />
        </svg>
      </motion.div>
    </div>
  );
};

return (
  <div className="fixed top-6 left-0 w-full z-50 px-6">
    {/* Left side - Animated Logo */}
    <motion.div
      className="hidden md:flex fixed left-8 top-6 items-center justify-center w-14 h-14 rounded-full border border-accent-purple/40 bg-gradient-to-br from-accent-purple/20 to-accent-blue/20 backdrop-blur-xl z-50"
      whileHover={{ scale: 1.05, rotate: 3 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
    >
      <Link
        to="/"
        onClick={() => handleLinkClick('/')}
        className="flex items-center justify-center w-full h-full"
        aria-label="Home"
      >
        <AnimatedLogo />
      </Link>
    </motion.div>

    {/* Centered Navbar */}
    <div className="flex justify-center">
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="bg-[#0a0a1a]/80 backdrop-blur-xl border border-white/10 rounded-full px-6 py-2 flex items-center gap-2 shadow-2xl"
      >
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => handleLinkClick(link.href)}
              className={`px-4 py-2 text-[13px] font-medium transition-all rounded-full ${
                isActive(link.href) 
                  ? 'bg-gradient-to-r from-accent-purple/20 to-accent-blue/20 text-white border border-accent-purple/30' 
                  : 'text-white/60 hover:text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </motion.nav>
      
    </div>

    {/* Right side - Contact Button, Theme, Language */}
    <div className="fixed right-8 top-6 flex items-center gap-3 z-50">
      {/* Contact Me Button */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link
          to={contactHref}
          onClick={() => handleLinkClick(contactHref)}
          className="inline-flex px-4 py-2 rounded-full font-bold text-xs border border-cyan-400/70 text-cyan-300 hover:bg-cyan-400/10 transition-colors whitespace-nowrap bg-[#0a0a1a]/80 backdrop-blur-xl"
        >
          {language === 'en' ? 'Contact Me' : 'تواصل معي'}
        </Link>
      </motion.div>

      {/* Theme Toggle */}
      <motion.button
        onClick={toggleTheme}
        className="w-10 h-10 rounded-full border border-accent-purple/30 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/5 transition-all bg-[#0a0a1a]/80 backdrop-blur-xl"
        whileHover={{ scale: 1.1, rotate: 180 }}
        whileTap={{ scale: 0.9 }}
      >
        {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
      </motion.button>
      
      {/* Language Toggle */}
      <motion.button
        onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
        className="w-10 h-10 rounded-full border border-accent-purple/30 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/5 transition-all font-bold text-xs bg-[#0a0a1a]/80 backdrop-blur-xl"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {language === 'en' ? 'AR' : 'EN'}
      </motion.button>
    </div>

  
  </div>
);
};

// Add  back to top button
const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-gradient-to-r from-accent-purple to-accent-blue text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
          aria-label="Back to top"
        >
          <svg 
            className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

const Footer = () => {
  const { t, language } = useLanguage();
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(124);

  const handleLike = () => {
    if (isLiked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setIsLiked(!isLiked);
  };

  return (
    <footer className="py-16 px-6 border-t border-white/10 bg-gradient-to-b from-transparent to-white/5">
      <div className="max-w-6xl mx-auto">
        {/* Top Section - 3 Columns: LET'S WORK | Logo | WHO AM I */}
        <div className="grid md:grid-cols-3 gap-8 items-center mb-12">
          {/* LEFT COLUMN - LET'S WORK TOGETHER */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={language === 'ar' ? 'text-right' : 'text-left'}
          >
            <h3 className="text-accent-purple font-bold text-sm uppercase tracking-[0.3em] mb-3">
              {language === 'en' ? "LET'S WORK TOGETHER!" : "لنعمل معاً!"}
            </h3>
            <p className="text-white/60 text-sm leading-relaxed">
              {language === 'en'
                ? "Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions."
                : "لا تتردد في التواصل معي. أنا دائماً منفتح لمناقشة المشاريع الجديدة والأفكار الإبداعية أو الفرص لأكون جزءاً من رؤيتك."}
            </p>
          </motion.div>

          {/* CENTER - Animated Logo with HTML Tags */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ 
              type: "spring", 
              stiffness: 260, 
              damping: 20,
              delay: 0.2
            }}
            whileHover={{ 
              scale: 1.1,
              rotate: 360,
              transition: { duration: 0.5, type: "spring", stiffness: 300 }
            }}
            className="flex justify-center"
          >
            <Link 
              to="/" 
              className="inline-flex items-center justify-center gap-1 px-4 py-3 rounded-2xl border border-accent-purple/40 bg-gradient-to-br from-accent-purple/20 to-accent-blue/20 hover:border-accent-purple/70 transition-all duration-300 shadow-lg hover:shadow-accent-purple/30"
            >
              {/* <span className="text-accent-purple text-lg font-mono">&lt;</span> */}
              {/* <span className="text-xl font-black tracking-tight text-gradient-mixed">EA</span> */}
              {/* <span className="text-accent-purple text-lg font-mono">/&gt;</span> */}
              <AnimatedLogo />
            </Link>
          </motion.div>

         
        {/* Left side - Bigger Animated React-style Logo */}
{/* <motion.div
  className="hidden md:flex fixed left-8 top-6 items-center justify-center w-16 h-16 rounded-full border border-accent-purple/40 bg-gradient-to-br from-accent-purple/20 to-accent-blue/20 backdrop-blur-xl z-50"
  whileHover={{ scale: 1.05, rotate: 3 }}
  transition={{ type: "spring", stiffness: 300, damping: 15 }}
>
  <Link
    to="/"
    onClick={() => handleLinkClick('/')}
    className="flex items-center justify-center w-full h-full"
    aria-label="Home"
  >
    <AnimatedLogo />
  </Link>
</motion.div> */}

          {/* RIGHT COLUMN - WHO AM I */}
         {/* RIGHT COLUMN - WHO AM I */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ delay: 0.1 }}
  className={language === 'ar' ? 'text-left md:text-left' : 'text-left md:text-right'}
>
  <h3 className="text-accent-purple font-bold text-sm uppercase tracking-[0.3em] mb-3">
    {language === 'en' ? "WHO AM I?" : "من أنا؟"}
  </h3>
  <p className="text-white/60 text-sm leading-relaxed">
    {language === 'en' ? (
      <>
        I'm a <span className="text-white font-medium">Full-Stack Developer & WordPress Expert</span>, 
        passionate and dedicated to my work. I have acquired the skills and knowledge necessary 
        to design and develop user-friendly, visually appealing, and scalable digital experiences 
        that make your project a success.
      </>
    ) : (
      <>
        أنا <span className="text-white font-medium">مطورة واجهات كاملة وخبيرة ووردبريس</span>، 
        شغوفة ومخلصة لعملي. لقد اكتسبت المهارات والمعرفة اللازمة لتصميم وتطوير تجارب رقمية 
        سهلة الاستخدام وجذابة بصرياً وقابلة للتوسع تجعل مشروعك ناجحاً.
      </>
    )}
  </p>
</motion.div>
        </div>

        {/* Social Links Section */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <motion.a
            href="https://github.com/56642esraa"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5, scale: 1.05 }}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/60 hover:text-white hover:border-accent-purple/50 hover:bg-accent-purple/10 transition-all duration-300"
          >
            <Github size={16} />
            <span className="text-xs">GitHub</span>
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/esra2ali/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5, scale: 1.05 }}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/60 hover:text-white hover:border-accent-purple/50 hover:bg-accent-purple/10 transition-all duration-300"
          >
            <Linkedin size={16} />
            <span className="text-xs">LinkedIn</span>
          </motion.a>
          <motion.a
            href="https://wa.me/201012847580"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5, scale: 1.05 }}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/60 hover:text-white hover:border-green-500/50 hover:bg-green-500/10 transition-all duration-300"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            </svg>
            <span className="text-xs">WhatsApp</span>
          </motion.a>
          <motion.a
            href="mailto:esraahamaza299@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5, scale: 1.05 }}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/60 hover:text-white hover:border-accent-purple/50 hover:bg-accent-purple/10 transition-all duration-300"
          >
            <Mail size={16} />
            <span className="text-xs">Email</span>
          </motion.a>
        </div>

       

        {/* Divider with animation */}
        <motion.div 
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: "100%", opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-6"
        />

        {/* Bottom Section - Privacy, Terms, Copyright */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-white/20 text-[10px] uppercase tracking-widest"
          >
            © 2026 Esraa Ali. {language === 'en' ? 'Portfolio.' : 'بورتفوليو.'}
          </motion.p>
        </div>
      </div>
    </footer>
  );
};


function AppContent() {
  const { theme } = useTheme();

  return (
    <div className={`${theme === 'light' ? 'bg-bg-light text-slate-900' : 'bg-bg-dark text-white'} font-sans selection:bg-accent-purple/30 selection:text-white min-h-screen flex flex-col transition-colors duration-300`}>
      <Navbar />
      
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/cv" element={<CV />} />
        </Routes>
      </div>
      <BackToTop />

      <Footer />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Router>
          <AppContent />
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;