import { motion } from 'framer-motion';

export const Card = ({ 
  children, 
  className = '', 
  hover = true,
  gradient = false,
  ...props 
}) => {
  const baseStyles = 'rounded-2xl p-6 transition-all duration-300';
  const hoverStyles = hover ? 'hover:transform hover:-translate-y-2' : '';
  const gradientStyles = gradient 
    ? 'bg-gradient-to-br from-white/50 to-white/30 dark:from-slate-800/50 dark:to-slate-900/30 backdrop-blur-sm border border-white/20 dark:border-slate-700/50' 
    : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700';

  return (
    <motion.div
      whileHover={hover ? { y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' } : {}}
      className={`${baseStyles} ${hoverStyles} ${gradientStyles} ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
};

