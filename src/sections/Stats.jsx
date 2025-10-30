import { motion } from 'framer-motion';
import { Container } from '../components/Container';
import { siteConfig } from '../config/site';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useCounter } from '../hooks/useCounter';
import { TrendingUp, Users, Globe, Clock } from 'lucide-react';

const StatCard = ({ stat, index, inView }) => {
  const extractNumber = (value) => {
    const match = value.match(/\d+/);
    return match ? parseInt(match[0]) : 0;
  };

  const number = extractNumber(stat.value);
  const count = useCounter(number, 2000, 0, inView);
  const suffix = stat.value.replace(/\d+/, '');

  const icons = [Users, TrendingUp, Globe, Clock];
  const Icon = icons[index];

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.05 }}
      className="relative group"
    >
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all opacity-0 group-hover:opacity-100" />
      
      {/* Card */}
      <div className="relative bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-3xl p-8 text-center">
        {/* Icon */}
        <motion.div
          whileHover={{ rotate: 360, scale: 1.2 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-secondary-500 text-white mb-4 shadow-lg shadow-primary-500/30"
        >
          <Icon size={28} />
        </motion.div>

        {/* Number */}
        <div className="text-5xl md:text-6xl font-black mb-2">
          <span className="bg-gradient-to-r from-white via-primary-200 to-white bg-clip-text text-transparent">
            {count}{suffix}
          </span>
        </div>

        {/* Label */}
        <div className="text-white/90 text-lg font-semibold">{stat.label}</div>

        {/* Progress Bar */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
          className="mt-4 h-2 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full origin-left"
        />
      </div>
    </motion.div>
  );
};

export const Stats = () => {
  const { ref, inView } = useScrollAnimation();

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 dark:from-slate-950 dark:via-purple-950 dark:to-slate-950 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        {/* Floating Orbs */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-20 left-10 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-500/20 rounded-full blur-3xl"
        />
      </div>

      <Container className="relative z-10" ref={ref}>
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white font-semibold text-sm">
              📊 Trusted Worldwide
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
            Powering teams globally
          </h2>

          <p className="text-xl text-white/80 max-w-2xl mx-auto font-medium">
            Join the fastest-growing community of innovators building the future
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {siteConfig.stats.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} inView={inView} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-white/80 text-lg mb-6">
            Ready to be part of something amazing?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white text-slate-900 font-bold rounded-xl shadow-2xl hover:shadow-white/20 transition-all"
          >
            Get Started for Free →
          </motion.button>
        </div>
      </Container>
    </section>
  );
};
