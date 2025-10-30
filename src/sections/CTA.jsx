import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Zap, Sparkles, Rocket } from 'lucide-react';
import { Container } from '../components/Container';
import { MagneticButton } from '../components/MagneticButton';
import { GetStartedModal } from '../components/GetStartedModal';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const CTA = () => {
  const [showGetStarted, setShowGetStarted] = useState(false);
  const { ref, inView } = useScrollAnimation();

  return (
    <section className="py-24 md:py-40 bg-white dark:bg-slate-900 overflow-hidden">
      <Container>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="relative rounded-[3rem] bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 dark:from-slate-950 dark:via-purple-950 dark:to-slate-950 p-12 md:p-20 text-center overflow-hidden shadow-2xl"
        >
          {/* Animated Background Grid */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
          </div>

          {/* Animated Orbs */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute top-10 left-10 w-96 h-96 bg-primary-500/30 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.5,
            }}
            className="absolute bottom-10 right-10 w-96 h-96 bg-secondary-500/30 rounded-full blur-3xl"
          />

          {/* Floating Icons */}
          <motion.div
            animate={{
              y: [0, -30, 0],
              rotate: [0, 10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute top-10 left-10 md:left-20 text-primary-400/30"
          >
            <Rocket size={80} strokeWidth={1.5} />
          </motion.div>
          <motion.div
            animate={{
              y: [0, 30, 0],
              rotate: [0, -10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute bottom-10 right-10 md:right-20 text-secondary-400/30"
          >
            <Zap size={80} strokeWidth={1.5} />
          </motion.div>
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 15, 0],
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.3,
            }}
            className="absolute top-1/2 right-10 text-accent-400/30 hidden lg:block"
          >
            <Shield size={70} strokeWidth={1.5} />
          </motion.div>

          <div className="relative z-10 max-w-4xl mx-auto">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white font-bold mb-8 shadow-2xl"
            >
              <Sparkles size={20} className="animate-pulse" />
              Limited Time Offer - 50% Off First 3 Months
            </motion.div>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight"
            >
              Ready to <span className="bg-gradient-to-r from-primary-400 via-secondary-400 to-accent-400 bg-clip-text text-transparent">transform</span> your business?
            </motion.h2>
            
            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-2xl md:text-3xl text-white/90 mb-12 font-medium leading-relaxed"
            >
              Join 50,000+ teams already using TechVerz to build the future. Start your free trial today - no credit card required.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10"
            >
              <MagneticButton onClick={() => setShowGetStarted(true)} className="text-xl px-12 py-5 shadow-2xl">
                Start Free Trial
                <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
              </MagneticButton>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-12 py-5 text-xl font-bold rounded-xl border-3 border-white text-white backdrop-blur-xl hover:bg-white/10 transition-all shadow-2xl"
              >
                Watch Demo
              </motion.button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap items-center justify-center gap-8 text-white/80 text-lg font-semibold"
            >
              <span className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center shadow-lg">
                  ✓
                </div>
                No credit card required
              </span>
              <span className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center shadow-lg">
                  ✓
                </div>
                14-day free trial
              </span>
              <span className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center shadow-lg">
                  ✓
                </div>
                Cancel anytime
              </span>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="mt-12 flex items-center justify-center gap-3"
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-14 h-14 rounded-full bg-gradient-to-br from-primary-400 to-secondary-400 border-4 border-slate-900 shadow-xl"
                  />
                ))}
              </div>
              <div className="text-left">
                <p className="text-white font-bold text-xl">Join 50,000+ users</p>
                <p className="text-white/70 text-sm">who transformed their workflow</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </Container>

      {/* Get Started Modal */}
      <GetStartedModal isOpen={showGetStarted} onClose={() => setShowGetStarted(false)} />
    </section>
  );
};
