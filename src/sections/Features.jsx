import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { Container } from '../components/Container';
import { SectionTitle } from '../components/SectionTitle';
import { TiltCard } from '../components/TiltCard';
import { siteConfig } from '../config/site';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const FeatureCard = ({ feature, index }) => {
  const Icon = Icons[feature.icon];
  const isLarge = index === 0 || index === 3;

  return (
    <TiltCard
      className={`group relative bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 rounded-3xl p-8 overflow-hidden transition-all duration-300 hover:border-primary-500 hover:shadow-2xl hover:shadow-primary-500/20 ${
        isLarge ? 'md:col-span-2 md:row-span-2' : ''
      }`}
    >
      {/* Animated Gradient Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-secondary-500/10 to-accent-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />

      {/* Floating Orb */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full blur-3xl"
      />

      <div className="relative z-10">
        {/* Icon with 3D Effect */}
        <motion.div
          whileHover={{ rotateY: 360, scale: 1.1 }}
          transition={{ duration: 0.8 }}
          style={{ transformStyle: 'preserve-3d' }}
          className={`inline-flex items-center justify-center rounded-2xl bg-gradient-to-br from-primary-500 via-secondary-500 to-accent-500 text-white shadow-2xl shadow-primary-500/40 mb-6 ${
            isLarge ? 'w-24 h-24' : 'w-18 h-18 p-4'
          }`}
        >
          <Icon size={isLarge ? 40 : 32} strokeWidth={2.5} />
        </motion.div>

        {/* Content */}
        <h3 className={`font-black mb-4 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent ${
          isLarge ? 'text-4xl' : 'text-2xl'
        }`}>
          {feature.title}
        </h3>
        
        <p className={`text-slate-600 dark:text-slate-300 leading-relaxed font-medium ${
          isLarge ? 'text-xl' : 'text-base'
        }`}>
          {feature.description}
        </p>

        {/* Hover Arrow */}
        <motion.div
          initial={{ x: -10, opacity: 0 }}
          whileHover={{ x: 0, opacity: 1 }}
          className="flex items-center gap-2 mt-6 text-primary-600 dark:text-primary-400 font-bold text-lg"
        >
          Explore →
        </motion.div>
      </div>
    </TiltCard>
  );
};

export const Features = () => {
  const { ref, inView } = useScrollAnimation();

  return (
    <section id="features" className="py-24 md:py-40 bg-gradient-to-b from-white via-slate-50 to-white dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-primary-500/20 dark:bg-primary-500/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-secondary-500/20 dark:bg-secondary-500/10 rounded-full blur-3xl animate-pulse-slow" />
      </div>

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <SectionTitle
            badge="✨ Powerful Features"
            title="Everything you need to dominate"
            subtitle="Built with cutting-edge technology to give you the competitive edge. No compromises, just results."
            className="mb-20"
          />
        </motion.div>

        {/* Bento Grid Layout */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-fr mb-20">
          {siteConfig.features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>

        {/* Enhanced Stats Bar with Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: '99.9%', label: 'Uptime', icon: Icons.Zap, color: 'from-green-500 to-emerald-500' },
            { value: '<100ms', label: 'Response Time', icon: Icons.Rocket, color: 'from-blue-500 to-cyan-500' },
            { value: '24/7', label: 'Support', icon: Icons.Headphones, color: 'from-purple-500 to-pink-500' },
            { value: '150+', label: 'Integrations', icon: Icons.Layers, color: 'from-orange-500 to-red-500' },
          ].map((stat, index) => {
            const StatIcon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.08, y: -5 }}
                className="relative group cursor-pointer"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-10 group-hover:opacity-20 rounded-2xl transition-all duration-300 group-hover:blur-xl`} />
                <div className="relative bg-white dark:bg-slate-800 backdrop-blur-sm border-2 border-slate-200 dark:border-slate-700 group-hover:border-transparent rounded-2xl p-6 text-center shadow-lg group-hover:shadow-2xl transition-all">
                  <div className="flex justify-center mb-3">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.color} text-white shadow-lg`}>
                      <StatIcon size={24} />
                    </div>
                  </div>
                  <div className={`text-5xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                    {stat.value}
                  </div>
                  <div className="text-sm font-bold text-slate-700 dark:text-slate-300">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
};
