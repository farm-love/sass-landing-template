/**
 * ✨ ANIMATED TITLE COMPONENT
 * 
 * Creates stunning text animations with gradient effects
 * Multiple animation styles available
 */

import { motion } from 'framer-motion';

export const AnimatedTitle = ({ children, className = '' }) => {
  // Split text into words for animation
  const words = children.split(' ');

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.span
      style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.5rem' }}
      variants={container}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {words.map((word, index) => (
        <motion.span
          variants={child}
          style={{ display: 'inline-block' }}
          key={index}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
};

/**
 * ✨ GRADIENT ANIMATED TITLE
 * 
 * Title with animated gradient that flows across the text
 */
export const GradientAnimatedTitle = ({ children, className = '' }) => {
  return (
    <motion.span
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.8,
        type: 'spring',
        damping: 15,
      }}
      className={`relative inline-block ${className}`}
    >
      {/* Main text */}
      <span className="relative z-10 inline-block">
        {children}
      </span>
      
      {/* Animated gradient underline */}
      <motion.span
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{
          delay: 0.5,
          duration: 0.8,
          ease: 'easeOut',
        }}
        className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-primary-400 via-secondary-400 to-accent-400 origin-left blur-sm"
      />
    </motion.span>
  );
};

/**
 * ✨ REVEAL ANIMATED TITLE
 * 
 * Title that reveals letter by letter
 */
export const RevealAnimatedTitle = ({ children, className = '' }) => {
  const letters = Array.from(children);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: 0.2,
      },
    },
  };

  const child = {
    hidden: {
      opacity: 0,
      y: 20,
      rotateX: -90,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 200,
      },
    },
  };

  return (
    <motion.span
      style={{ display: 'inline-block' }}
      variants={container}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          variants={child}
          style={{ 
            display: 'inline-block',
            transformStyle: 'preserve-3d',
            whiteSpace: letter === ' ' ? 'pre' : 'normal'
          }}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.span>
  );
};

