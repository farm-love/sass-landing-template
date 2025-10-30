import { motion } from 'framer-motion';

export const SectionTitle = ({ 
  badge, 
  title, 
  subtitle, 
  centered = true,
  className = '' 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`${centered ? 'text-center' : ''} ${className}`}
    >
      {badge && (
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-block px-4 py-2 mb-4 text-sm font-semibold rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400"
        >
          {badge}
        </motion.span>
      )}
      
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-slate-900 dark:text-white">
        {title}
      </h2>
      
      {subtitle && (
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

