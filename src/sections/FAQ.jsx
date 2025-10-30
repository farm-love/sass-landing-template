import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { Container } from '../components/Container';
import { SectionTitle } from '../components/SectionTitle';
import { Button } from '../components/Button';
import { siteConfig } from '../config/site';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const FAQItem = ({ faq, index }) => {
  const [isOpen, setIsOpen] = useState(index === 0); // First item open by default

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className="group"
    >
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.01 }}
        className={`w-full p-6 md:p-8 flex items-start justify-between gap-6 text-left rounded-2xl transition-all ${
          isOpen
            ? 'bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-950/30 dark:to-secondary-950/30 shadow-lg'
            : 'bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700/50 shadow-md'
        } border-2 ${
          isOpen ? 'border-primary-500' : 'border-slate-200 dark:border-slate-700'
        } mb-4`}
      >
        <div className="flex-1">
          <h3 className={`text-xl md:text-2xl font-black mb-2 transition-colors ${
            isOpen
              ? 'bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent'
              : 'text-slate-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400'
          }`}>
            {faq.question}
          </h3>
          
          <AnimatePresence>
            {isOpen && (
              <motion.p
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg font-medium overflow-hidden"
              >
                {faq.answer}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* Animated Icon */}
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all ${
            isOpen
              ? 'bg-gradient-to-br from-primary-500 to-secondary-500 text-white'
              : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 group-hover:bg-slate-200 dark:group-hover:bg-slate-600'
          }`}
        >
          {isOpen ? <Minus size={24} strokeWidth={3} /> : <Plus size={24} strokeWidth={3} />}
        </motion.div>
      </motion.button>
    </motion.div>
  );
};

export const FAQ = () => {
  const { ref, inView } = useScrollAnimation();

  return (
    <section id="faq" className="py-24 md:py-40 bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-primary-500/10 dark:bg-primary-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-secondary-500/10 dark:bg-secondary-500/5 rounded-full blur-3xl" />
      </div>

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <SectionTitle
            badge="❓ FAQ"
            title="Got questions? We've got answers"
            subtitle="Everything you need to know about TechVerz. Can't find what you're looking for? Our support team is here 24/7."
            className="mb-16"
          />
        </motion.div>

        <div ref={ref} className="max-w-4xl mx-auto">
          {/* FAQ Items */}
          <div className="mb-12">
            {siteConfig.faqs.map((faq, index) => (
              <FAQItem key={index} faq={faq} index={index} />
            ))}
          </div>

          {/* Contact CTA - Enhanced */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="text-center"
          >
            <div className="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-slate-800 dark:to-slate-900 rounded-3xl p-10 md:p-12 border-2 border-primary-200 dark:border-slate-700 shadow-2xl">
              {/* Icon */}
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary-500 to-secondary-500 text-white mb-6 shadow-2xl shadow-primary-500/30"
              >
                <HelpCircle size={40} strokeWidth={2.5} />
              </motion.div>

              <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-4">
                Still have questions?
              </h3>
              <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 font-medium">
                Can't find the answer you're looking for? Our friendly support team is ready to help.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button variant="primary" size="lg" className="shadow-xl shadow-primary-500/30">
                  Contact Support →
                </Button>
                <Button variant="outline" size="lg">
                  Schedule a Call
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
