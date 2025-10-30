import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote, Sparkles } from 'lucide-react';
import { Container } from '../components/Container';
import { SectionTitle } from '../components/SectionTitle';
import { siteConfig } from '../config/site';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const { ref, inView } = useScrollAnimation();

  const testimonials = siteConfig.testimonials;

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const navigate = (newDirection) => {
    setDirection(newDirection);
    if (newDirection === 1) {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    } else {
      setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    }
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
  };

  return (
    <section id="testimonials" className="py-24 md:py-40 bg-gradient-to-b from-white via-slate-50 to-white dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 overflow-hidden relative">
      {/* Background Decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary-500/10 dark:bg-primary-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-10 w-72 h-72 bg-secondary-500/10 dark:bg-secondary-500/5 rounded-full blur-3xl" />
      </div>

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <SectionTitle
            badge="💬 Testimonials"
            title="Loved by industry leaders"
            subtitle="Don't just take our word for it. Here's what TechVerz users have to say about transforming their business."
            className="mb-20"
          />
        </motion.div>

        <div ref={ref} className="max-w-5xl mx-auto relative">
          {/* Decorative Quote */}
          <motion.div
            animate={{ rotate: [0, 5, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -top-12 -left-8 md:-left-16 text-primary-500/20 dark:text-primary-500/10 z-0"
          >
            <Quote size={120} fill="currentColor" />
          </motion.div>

          <div className="relative min-h-[500px] md:min-h-[400px]">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.3 },
                  scale: { duration: 0.3 },
                }}
                className="absolute inset-0"
              >
                {/* Enhanced Card with 3D Effect */}
                <div className="relative">
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-3xl blur-2xl" />
                  
                  {/* Main Card */}
                  <div className="relative bg-white dark:bg-slate-800 rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-slate-200 dark:border-slate-700 backdrop-blur-xl">
                    {/* Rating Stars */}
                    <div className="flex gap-1.5 mb-6">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ delay: i * 0.1, type: 'spring' }}
                        >
                          <Star
                            size={28}
                            fill="#FCD34D"
                            className="text-yellow-400 drop-shadow-lg"
                          />
                        </motion.div>
                      ))}
                    </div>

                    {/* Quote Content */}
                    <blockquote className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-100 mb-8 leading-relaxed">
                      "{testimonials[currentIndex].content}"
                    </blockquote>

                    {/* Author Info - Enhanced */}
                    <div className="flex items-center gap-5">
                      {/* Avatar with Glow */}
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full blur-md opacity-50" />
                        <img
                          src={testimonials[currentIndex].image}
                          alt={testimonials[currentIndex].name}
                          className="relative w-20 h-20 rounded-full border-4 border-white dark:border-slate-700 shadow-2xl object-cover"
                        />
                        {/* Verified Badge */}
                        <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center shadow-lg">
                          <Sparkles size={14} className="text-white" />
                        </div>
                      </div>

                      {/* Name and Role */}
                      <div>
                        <div className="font-black text-2xl bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
                          {testimonials[currentIndex].name}
                        </div>
                        <div className="text-slate-600 dark:text-slate-400 font-semibold text-lg">
                          {testimonials[currentIndex].role}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls - Enhanced */}
          <div className="flex items-center justify-center gap-6 mt-12">
            <motion.button
              whileHover={{ scale: 1.1, x: -5 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => navigate(-1)}
              className="p-4 rounded-full bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 text-slate-700 dark:text-slate-300 hover:from-primary-500 hover:to-secondary-500 hover:text-white transition-all shadow-lg"
            >
              <ChevronLeft size={28} strokeWidth={3} />
            </motion.button>

            {/* Dots Indicator - Enhanced */}
            <div className="flex gap-3">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  whileHover={{ scale: 1.2 }}
                  className={`h-3 rounded-full transition-all shadow-lg ${
                    index === currentIndex
                      ? 'w-12 bg-gradient-to-r from-primary-500 to-secondary-500 shadow-primary-500/50'
                      : 'w-3 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400 dark:hover:bg-slate-600'
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => navigate(1)}
              className="p-4 rounded-full bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 text-slate-700 dark:text-slate-300 hover:from-primary-500 hover:to-secondary-500 hover:text-white transition-all shadow-lg"
            >
              <ChevronRight size={28} strokeWidth={3} />
            </motion.button>
          </div>
        </div>
      </Container>
    </section>
  );
};
