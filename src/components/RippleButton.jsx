/**
 * 🌊 RIPPLE BUTTON COMPONENT
 * 
 * Button with Material Design-style ripple effect on click
 * Creates a premium, interactive feel
 * 
 * Usage:
 * <RippleButton variant="primary" onClick={handleClick}>
 *   Click Me
 * </RippleButton>
 * 
 * Customization:
 * - Change ripple color in the span background
 * - Adjust duration for faster/slower effect
 */

import { useState } from 'react';
import { motion } from 'framer-motion';

export const RippleButton = ({ 
  children, 
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  ...props 
}) => {
  const [ripples, setRipples] = useState([]);

  const baseStyles = 'font-semibold rounded-lg transition-all duration-300 inline-flex items-center justify-center gap-2 relative overflow-hidden';
  
  const variants = {
    primary: 'bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white shadow-lg shadow-primary-500/50 hover:shadow-xl hover:shadow-primary-500/60',
    secondary: 'bg-gradient-to-r from-secondary-500 to-secondary-600 hover:from-secondary-600 hover:to-secondary-700 text-white shadow-lg shadow-secondary-500/50 hover:shadow-xl hover:shadow-secondary-500/60',
    outline: 'border-2 border-primary-500 text-primary-500 dark:text-primary-400 hover:bg-primary-500 hover:text-white',
    ghost: 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const handleClick = (e) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newRipple = {
      x,
      y,
      id: Date.now(),
    };

    setRipples([...ripples, newRipple]);

    // Remove ripple after animation
    setTimeout(() => {
      setRipples((prevRipples) => prevRipples.filter((r) => r.id !== newRipple.id));
    }, 600);

    if (onClick) onClick(e);
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={handleClick}
      {...props}
    >
      {/* Ripple Effects */}
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute bg-white/30 rounded-full pointer-events-none animate-ping"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: '10px',
            height: '10px',
            transform: 'translate(-50%, -50%)',
            animationDuration: '0.6s',
          }}
        />
      ))}
      
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
};

