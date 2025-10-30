import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Zap } from 'lucide-react';
import { Container } from '../components/Container';
import { Button } from '../components/Button';
import { GetStartedModal } from '../components/GetStartedModal';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const CTA = () => {
  const [showGetStarted, setShowGetStarted] = useState(false);
  const { ref, inView } = useScrollAnimation();

  return (
    <section className="py-20 md:py-32 bg-white dark:bg-slate-900 overflow-hidden">
      <Container>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="relative rounded-3xl bg-gradient-to-br from-primary-500 via-secondary-500 to-accent-500 p-12 md:p-16 text-center overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
          </div>

          {/* Floating Elements */}
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute top-10 left-10 text-white/20"
          >
            <Zap size={60} />
          </motion.div>
          <motion.div
            animate={{
              y: [0, 20, 0],
              rotate: [0, -5, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute bottom-10 right-10 text-white/20"
          >
            <Shield size={60} />
          </motion.div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              Ready to get started?
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-xl md:text-2xl text-white/90 mb-10"
            >
              Join thousands of teams already using LaunchPad to build amazing products.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
            >
              <Button
                variant="secondary"
                size="lg"
                onClick={() => setShowGetStarted(true)}
                className="bg-white text-primary-600 hover:bg-slate-100 shadow-2xl"
              >
                Start Free Trial
                <ArrowRight size={20} />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white/10"
              >
                Schedule Demo
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap items-center justify-center gap-6 text-white/80 text-sm"
            >
              <span className="flex items-center gap-2">
                ✓ No credit card required
              </span>
              <span className="flex items-center gap-2">
                ✓ 14-day free trial
              </span>
              <span className="flex items-center gap-2">
                ✓ Cancel anytime
              </span>
            </motion.div>
          </div>
        </motion.div>
      </Container>

      {/* Get Started Modal */}
      <GetStartedModal isOpen={showGetStarted} onClose={() => setShowGetStarted(false)} />
    </section>
  );
};

