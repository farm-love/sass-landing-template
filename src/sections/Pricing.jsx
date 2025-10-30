import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles, Zap } from 'lucide-react';
import { Container } from '../components/Container';
import { SectionTitle } from '../components/SectionTitle';
import { Button } from '../components/Button';
import { TiltCard } from '../components/TiltCard';
import { siteConfig } from '../config/site';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);
  const { ref, inView } = useScrollAnimation();

  return (
    <section id="pricing" className="py-24 md:py-40 bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/30 dark:bg-primary-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-500/30 dark:bg-secondary-500/20 rounded-full blur-3xl"
        />
      </div>

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <SectionTitle
            badge="💰 Pricing"
            title="Choose your power level"
            subtitle="Simple, transparent pricing. All plans include 14-day free trial. No credit card required."
            className="mb-12"
          />
        </motion.div>

        {/* Billing Toggle - Enhanced */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="flex items-center justify-center gap-4 mb-20"
        >
          <span className={`text-xl font-bold transition-colors ${!isYearly ? 'text-slate-900 dark:text-white' : 'text-slate-400 dark:text-slate-600'}`}>
            Monthly
          </span>
          <motion.button
            onClick={() => setIsYearly(!isYearly)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`relative w-20 h-10 rounded-full transition-all shadow-lg ${
              isYearly ? 'bg-gradient-to-r from-primary-500 to-secondary-500' : 'bg-slate-300 dark:bg-slate-700'
            }`}
          >
            <motion.div
              animate={{ x: isYearly ? 40 : 4 }}
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              className="absolute top-1 w-8 h-8 bg-white rounded-full shadow-xl"
            />
          </motion.button>
          <span className={`text-xl font-bold transition-colors ${isYearly ? 'text-slate-900 dark:text-white' : 'text-slate-400 dark:text-slate-600'}`}>
            Yearly
            <span className="ml-2 px-3 py-1 text-sm bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full shadow-lg">
              Save 20%
            </span>
          </span>
        </motion.div>

        {/* Pricing Cards - STUNNING */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {siteConfig.pricing.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className={`relative ${plan.popular ? 'md:-mt-8 md:mb-0' : ''}`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-20"
                >
                  <span className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 text-white text-sm font-black rounded-full shadow-2xl">
                    <Sparkles size={16} className="animate-pulse" />
                    MOST POPULAR
                    <Zap size={16} className="animate-pulse" />
                  </span>
                </motion.div>
              )}
              
              <TiltCard
                className={`h-full flex flex-col relative overflow-hidden ${
                  plan.popular
                    ? 'border-4 border-primary-500 shadow-2xl shadow-primary-500/50 bg-gradient-to-br from-white via-primary-50/30 to-secondary-50/30 dark:from-slate-800 dark:via-primary-950/30 dark:to-secondary-950/30'
                    : 'border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-xl'
                } rounded-3xl p-8`}
              >
                {/* Glow Effect for Popular */}
                {plan.popular && (
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-secondary-500/10 to-accent-500/10 animate-pulse-slow" />
                )}

                <div className="relative z-10">
                  {/* Plan Name */}
                  <div className="text-center mb-6">
                    <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-3">
                      {plan.name}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 font-medium text-lg">
                      {plan.description}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="text-center mb-8">
                    <div className="flex items-baseline justify-center mb-2">
                      <span className={`text-6xl font-black ${plan.popular ? 'bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent' : 'text-slate-900 dark:text-white'}`}>
                        ${isYearly ? plan.price.yearly : plan.price.monthly}
                      </span>
                      <span className="text-slate-600 dark:text-slate-400 ml-3 text-xl font-bold">
                        /{isYearly ? 'year' : 'month'}
                      </span>
                    </div>
                    {isYearly && (
                      <p className="text-base font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                        💰 Save ${plan.price.monthly * 12 - plan.price.yearly} per year!
                      </p>
                    )}
                  </div>

                  {/* Features */}
                  <ul className="space-y-4 mb-8 flex-grow">
                    {plan.features.map((feature, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                        className="flex items-start gap-3"
                      >
                        <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${plan.popular ? 'bg-gradient-to-br from-primary-500 to-secondary-500' : 'bg-green-500'} shadow-lg`}>
                          <Check size={16} className="text-white" strokeWidth={3} />
                        </div>
                        <span className="text-slate-700 dark:text-slate-300 font-medium text-base">
                          {feature}
                        </span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      variant={plan.popular ? 'primary' : 'outline'}
                      className={`w-full py-4 text-lg font-black ${plan.popular ? 'shadow-2xl shadow-primary-500/40 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 hover:shadow-primary-500/60' : ''}`}
                    >
                      {plan.popular ? '🚀 Start Free Trial' : 'Get Started'}
                    </Button>
                  </motion.div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges - Enhanced */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-20 text-center"
        >
          <p className="text-slate-600 dark:text-slate-400 mb-6 text-lg font-semibold">
            Every plan includes:
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 text-base font-bold text-slate-700 dark:text-slate-300">
            <span className="flex items-center gap-2 bg-white dark:bg-slate-800 px-6 py-3 rounded-full shadow-lg border border-slate-200 dark:border-slate-700">
              ✓ 14-day free trial
            </span>
            <span className="flex items-center gap-2 bg-white dark:bg-slate-800 px-6 py-3 rounded-full shadow-lg border border-slate-200 dark:border-slate-700">
              ✓ No credit card required
            </span>
            <span className="flex items-center gap-2 bg-white dark:bg-slate-800 px-6 py-3 rounded-full shadow-lg border border-slate-200 dark:border-slate-700">
              ✓ Cancel anytime
            </span>
            <span className="flex items-center gap-2 bg-white dark:bg-slate-800 px-6 py-3 rounded-full shadow-lg border border-slate-200 dark:border-slate-700">
              ✓ 30-day money-back
            </span>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};
