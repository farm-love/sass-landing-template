/**
 * 🧲 MAGNETIC BUTTON COMPONENT
 * 
 * Button that follows the mouse cursor (magnetic effect)
 * Creates a premium, interactive feel
 */

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

export const MagneticButton = ({ children, className = '', ...props }) => {
  const buttonRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const button = buttonRef.current;
    if (!button) return;

    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    setPosition({ x: x * 0.3, y: y * 0.3 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.button
      ref={buttonRef}
      type="button"
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-bold rounded-xl bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 text-white shadow-2xl shadow-primary-500/50 hover:shadow-primary-500/70 transition-shadow ${className}`}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 opacity-0 hover:opacity-100 transition-opacity duration-300" />
    </motion.button>
  );
};

