import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export const CustomCursor = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <motion.div
        className="custom-cursor hidden lg:block"
        animate={{ x: mousePos.x - 16, y: mousePos.y - 16 }}
        transition={{ type: 'spring', damping: 20, stiffness: 250, mass: 0.5 }}
      />
      <motion.div
        className="custom-cursor-dot hidden lg:block"
        animate={{ x: mousePos.x - 3, y: mousePos.y - 3 }}
        transition={{ type: 'spring', damping: 30, stiffness: 1000, mass: 0.1 }}
      />
    </>
  );
};

export const Badge = ({ children, color = 'purple' }: { children: React.ReactNode, color?: 'purple' | 'blue' }) => (
  <div className={`inline-flex items-center px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] border ${color === 'purple' ? 'border-accent-purple/30 bg-accent-purple/5 text-accent-purple' : 'border-accent-blue/30 bg-accent-blue/5 text-accent-blue'}`}>
    {children}
  </div>
);

export const SectionHeading = ({ title, subtitle, color = 'purple' }: { title: string, subtitle?: string, color?: 'purple' | 'blue' }) => (
  <div className="text-center mb-16">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`text-4xl md:text-5xl font-bold mb-4 ${color === 'purple' ? 'text-gradient-purple' : 'text-gradient-mixed'}`}
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-white/40 text-sm tracking-wide"
      >
        {subtitle}
      </motion.p>
    )}
    <div className={`h-1 w-12 mx-auto mt-4 rounded-full ${color === 'purple' ? 'bg-accent-purple' : 'bg-accent-blue'}`} />
  </div>
);
