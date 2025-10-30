import { motion } from 'framer-motion';
import { useState } from 'react';

export const GlowCard = ({ children, className = '' }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      className={`relative rounded-2xl p-[2px] bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      whileHover={{ scale: 1.02 }}
    >
      {isHovering && (
        <motion.div
          className="absolute rounded-full bg-white/30 blur-xl pointer-events-none"
          style={{
            width: '200px',
            height: '200px',
            top: mousePosition.y - 100,
            left: mousePosition.x - 100,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      )}
      <div className="relative rounded-2xl bg-white dark:bg-slate-900 p-6 h-full">
        {children}
      </div>
    </motion.div>
  );
};

