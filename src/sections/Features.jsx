import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { Container } from '../components/Container';
import { SectionTitle } from '../components/SectionTitle';
import { siteConfig } from '../config/site';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const FeatureCard = ({ feature, index }) => {
  const Icon = Icons[feature.icon];
  const isLarge = index === 0 || index === 3;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className={`group relative bg-gradient-to-br from-white to-slate-50/50 dark:from-slate-800 dark:to-slate-900/50 backdrop-blur-sm border-2 border-slate-200 dark:border-slate-700 rounded-3xl p-8 overflow-hidden transition-all duration-300 hover:border-primary-500/50 hover:shadow-2xl hover:shadow-primary-500/10 ${
        isLarge ? 'md:col-span-2 md:row-span-2' : ''
      }`}
    >
      {/* Gradient Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-secondary-500/5 to-accent-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Animated Background Circles */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.03, 0.08, 0.03],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full blur-3xl"
      />

      <div className="relative z-10">
        {/* Icon Container with 3D Effect */}
        <motion.div
          whileHover={{ rotateY: 180 }}
          transition={{ duration: 0.6 }}
          style={{ transformStyle: 'preserve-3d' }}
          className={`inline-flex items-center justify-center rounded-2xl bg-gradient-to-br from-primary-500 to-secondary-500 text-white shadow-lg shadow-primary-500/30 mb-6 ${
            isLarge ? 'w-20 h-20' : 'w-16 h-16'
          }`}
        >
          <Icon size={isLarge ? 36 : 28} />
        </motion.div>

        {/* Content */}
        <h3 className={`font-bold mb-3 text-slate-900 dark:text-white ${
          isLarge ? 'text-3xl' : 'text-xl'
        }`}>
          {feature.title}
        </h3>
        
        <p className={`text-slate-600 dark:text-slate-300 leading-relaxed ${
          isLarge ? 'text-lg' : 'text-base'
        }`}>
          {feature.description}
        </p>

        {/* Decorative Element */}
        {isLarge && (
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute bottom-8 right-8 w-24 h-24 bg-gradient-to-br from-accent-400/20 to-secondary-400/20 rounded-full blur-2xl"
          />
        )}

        {/* Hover Arrow */}
        <motion.div
          initial={{ x: -10, opacity: 0 }}
          whileHover={{ x: 0, opacity: 1 }}
          className="flex items-center gap-2 mt-4 text-primary-600 dark:text-primary-400 font-semibold"
        >
          Learn more
          <Icons.ArrowRight size={16} />
        </motion.div>
      </div>
    </motion.div>
  );
};

export const Features = () => {
  const { ref, inView } = useScrollAnimation();

  return (
    <section id="features" className="py-20 md:py-32 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-40 dark:opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary-500/20 rounded-full blur-3xl" />
      </div>

      <Container className="relative z-10">
        <SectionTitle
          badge="✨ Powerful Features"
          title="Everything you need to succeed"
          subtitle="Built with cutting-edge technology to give you the competitive edge you need."
          className="mb-16"
        />

        {/* Bento Grid Layout */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-fr">
          {siteConfig.features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: '99.9%', label: 'Uptime', color: 'from-green-500 to-emerald-500' },
            { value: '<100ms', label: 'Response Time', color: 'from-blue-500 to-cyan-500' },
            { value: '24/7', label: 'Support', color: 'from-purple-500 to-pink-500' },
            { value: '150+', label: 'Integrations', color: 'from-orange-500 to-red-500' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-10 group-hover:opacity-20 rounded-2xl transition-opacity`} />
              <div className="relative bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-2xl p-6 text-center">
                <div className={`text-4xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-slate-600 dark:text-slate-400">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};
