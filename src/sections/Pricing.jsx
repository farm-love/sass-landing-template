import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';
import { Container } from '../components/Container';
import { SectionTitle } from '../components/SectionTitle';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { siteConfig } from '../config/site';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);
  const { ref, inView } = useScrollAnimation();

  return (
    <section id="pricing" className="py-20 md:py-32 bg-slate-50 dark:bg-slate-800/50">
      <Container>
        <SectionTitle
          badge="💰 Pricing"
          title="Choose the perfect plan"
          subtitle="Simple, transparent pricing that grows with you. Try any plan free for 14 days."
          className="mb-12"
        />

        {/* Billing Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="flex items-center justify-center gap-4 mb-16"
        >
          <span className={`text-lg font-medium ${!isYearly ? 'text-slate-900 dark:text-white' : 'text-slate-500'}`}>
            Monthly
          </span>
          <button
            onClick={() => setIsYearly(!isYearly)}
            className={`relative w-16 h-8 rounded-full transition-colors ${
              isYearly ? 'bg-primary-500' : 'bg-slate-300 dark:bg-slate-700'
            }`}
          >
            <motion.div
              animate={{ x: isYearly ? 32 : 4 }}
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              className="absolute top-1 w-6 h-6 bg-white rounded-full shadow-lg"
            />
          </button>
          <span className={`text-lg font-medium ${isYearly ? 'text-slate-900 dark:text-white' : 'text-slate-500'}`}>
            Yearly
            <span className="ml-2 text-sm text-green-600 dark:text-green-400">Save 20%</span>
          </span>
        </motion.div>

        {/* Pricing Cards */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {siteConfig.pricing.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className={`relative ${plan.popular ? 'md:-mt-4 md:mb-0' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="flex items-center gap-1 px-4 py-1.5 bg-gradient-to-r from-primary-500 to-accent-500 text-white text-sm font-semibold rounded-full shadow-lg">
                    <Sparkles size={14} />
                    Most Popular
                  </span>
                </div>
              )}
              
              <Card
                className={`h-full flex flex-col relative ${
                  plan.popular
                    ? 'border-2 border-primary-500 shadow-2xl shadow-primary-500/30 bg-gradient-to-br from-primary-50/50 to-secondary-50/50 dark:from-primary-950/30 dark:to-secondary-950/30'
                    : 'bg-white dark:bg-slate-800'
                }`}
                hover={true}
              >
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    {plan.description}
                  </p>
                </div>

                <div className="text-center mb-8">
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-slate-900 dark:text-white">
                      ${isYearly ? plan.price.yearly : plan.price.monthly}
                    </span>
                    <span className="text-slate-600 dark:text-slate-400 ml-2">
                      /{isYearly ? 'year' : 'month'}
                    </span>
                  </div>
                  {isYearly && (
                    <p className="text-sm text-green-600 dark:text-green-400 mt-2">
                      Save ${plan.price.monthly * 12 - plan.price.yearly}/year
                    </p>
                  )}
                </div>

                <ul className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700 dark:text-slate-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={plan.popular ? 'primary' : 'outline'}
                  className={`w-full ${plan.popular ? 'shadow-lg shadow-primary-500/30' : ''}`}
                >
                  Get Started
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-slate-600 dark:text-slate-400 mb-4">
            All plans include:
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-600 dark:text-slate-400">
            <span className="flex items-center gap-2">
              ✓ 14-day free trial
            </span>
            <span className="flex items-center gap-2">
              ✓ No credit card required
            </span>
            <span className="flex items-center gap-2">
              ✓ Cancel anytime
            </span>
            <span className="flex items-center gap-2">
              ✓ 30-day money-back guarantee
            </span>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

