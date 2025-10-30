import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
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
    }, 5000);

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
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-white dark:bg-slate-900 overflow-hidden">
      <Container>
        <SectionTitle
          badge="💬 Testimonials"
          title="Loved by thousands of users"
          subtitle="See what our customers have to say about their experience with LaunchPad."
          className="mb-16"
        />

        <div ref={ref} className="max-w-4xl mx-auto relative">
          {/* Quote Icon */}
          <div className="absolute -top-8 -left-4 md:-left-12 text-primary-500/20 dark:text-primary-500/10">
            <Quote size={80} fill="currentColor" />
          </div>

          <div className="relative min-h-[400px] md:min-h-[300px]">
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
                  opacity: { duration: 0.2 },
                }}
                className="absolute inset-0"
              >
                <div className="bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-800/50 rounded-3xl p-8 md:p-12 shadow-xl border border-slate-200 dark:border-slate-700">
                  {/* Rating */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={20}
                        fill="#FCD34D"
                        className="text-yellow-400"
                      />
                    ))}
                  </div>

                  {/* Content */}
                  <blockquote className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 mb-8 leading-relaxed">
                    "{testimonials[currentIndex].content}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-16 h-16 rounded-full border-4 border-white dark:border-slate-700 shadow-lg"
                    />
                    <div>
                      <div className="font-bold text-lg text-slate-900 dark:text-white">
                        {testimonials[currentIndex].name}
                      </div>
                      <div className="text-slate-600 dark:text-slate-400">
                        {testimonials[currentIndex].role}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => navigate(-1)}
              className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            >
              <ChevronLeft size={24} />
            </motion.button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? 'w-8 bg-primary-500'
                      : 'w-2 bg-slate-300 dark:bg-slate-700'
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => navigate(1)}
              className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            >
              <ChevronRight size={24} />
            </motion.button>
          </div>
        </div>
      </Container>
    </section>
  );
};

