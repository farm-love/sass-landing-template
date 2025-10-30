import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { Container } from '../components/Container';
import { SectionTitle } from '../components/SectionTitle';
import { siteConfig } from '../config/site';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const FAQItem = ({ faq, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="border-b border-slate-200 dark:border-slate-700 last:border-0"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-start justify-between gap-4 text-left group"
      >
        <span className="text-lg font-semibold text-slate-900 dark:text-white group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors">
          {faq.question}
        </span>
        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 group-hover:bg-primary-100 dark:group-hover:bg-primary-900/30 group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors">
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </span>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-slate-600 dark:text-slate-400 leading-relaxed">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export const FAQ = () => {
  const { ref, inView } = useScrollAnimation();

  return (
    <section id="faq" className="py-20 md:py-32 bg-slate-50 dark:bg-slate-800/50">
      <Container>
        <SectionTitle
          badge="❓ FAQ"
          title="Frequently asked questions"
          subtitle="Everything you need to know about LaunchPad. Can't find what you're looking for? Reach out to our support team."
          className="mb-16"
        />

        <div ref={ref} className="max-w-3xl mx-auto">
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-lg">
            {siteConfig.faqs.map((faq, index) => (
              <FAQItem key={index} faq={faq} index={index} />
            ))}
          </div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="text-center mt-12"
          >
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              Still have questions?
            </p>
            <a
              href="#"
              className="text-primary-500 hover:text-primary-600 font-semibold inline-flex items-center gap-2 group"
            >
              Contact our support team
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

