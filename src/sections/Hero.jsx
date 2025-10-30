import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Sparkles, Zap, Shield, Rocket, TrendingUp, Users, Star } from 'lucide-react';
import { MagneticButton } from '../components/MagneticButton';
import { ParticleBackground } from '../components/ParticleBackground';
import { AnimatedTitle } from '../components/AnimatedTitle';
import { Container } from '../components/Container';
import { GetStartedModal } from '../components/GetStartedModal';
import { siteConfig } from '../config/site';

export const Hero = () => {
  const [showGetStarted, setShowGetStarted] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
      {/* Particle Background */}
      <ParticleBackground />

      {/* Animated Mesh Gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
        
        {/* Animated Orbs */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-primary-500/40 to-primary-700/40 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute bottom-20 right-10 w-[35rem] h-[35rem] bg-gradient-to-br from-secondary-500/40 to-secondary-700/40 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-accent-500/30 to-accent-700/30 rounded-full blur-3xl"
        />
      </div>

      <Container className="relative z-10 pt-32 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8 inline-block"
            >
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary-500/20 via-secondary-500/20 to-accent-500/20 backdrop-blur-xl border border-white/20 text-white font-semibold text-sm shadow-2xl">
                <Sparkles size={18} className="animate-pulse" />
                {siteConfig.hero.badge}
              </div>
            </motion.div>

            {/* Main Headline - STUNNING ANIMATED */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black mb-8 leading-tight">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-white drop-shadow-2xl"
              >
                <AnimatedTitle>
                  {siteConfig.hero.title}
                </AnimatedTitle>
              </motion.div>
              <br />
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.8, type: 'spring' }}
                className="relative inline-block"
              >
                <span className="relative z-10 bg-gradient-to-r from-primary-400 via-secondary-400 to-accent-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                  {siteConfig.hero.highlightedTitle}
                </span>
                {/* Glow effect */}
                <motion.span
                  animate={{
                    opacity: [0.4, 0.8, 0.4],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-primary-400 via-secondary-400 to-accent-400 blur-2xl -z-10"
                />
              </motion.div>
            </h1>

            {/* Subtitle - Enhanced */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl lg:text-3xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed font-medium"
            >
              {siteConfig.hero.subtitle}
            </motion.p>

            {/* CTA Buttons - Magnetic Effect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
            >
              <MagneticButton onClick={() => setShowGetStarted(true)}>
                {siteConfig.hero.primaryCTA}
                <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
              </MagneticButton>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-4 text-lg font-bold rounded-xl border-2 border-white/30 text-white backdrop-blur-xl hover:bg-white/10 transition-all shadow-xl"
              >
                <Play size={24} />
                {siteConfig.hero.secondaryCTA}
              </motion.button>
            </motion.div>

            {/* Enhanced Social Proof */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-wrap items-center justify-center gap-12 text-slate-300"
            >
              <div className="flex items-center gap-3">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-400 to-secondary-400 border-2 border-slate-950 shadow-xl"
                    />
                  ))}
                </div>
                <div className="text-left">
                  <p className="text-white font-bold text-lg">50,000+</p>
                  <p className="text-sm text-slate-400">Active Users</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="flex gap-1">
                  {[1,2,3,4,5].map((i) => (
                    <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <div className="text-left">
                  <p className="text-white font-bold text-lg">4.9/5</p>
                  <p className="text-sm text-slate-400">Rating</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <TrendingUp className="w-8 h-8 text-green-400" />
                <div className="text-left">
                  <p className="text-white font-bold text-lg">300%</p>
                  <p className="text-sm text-slate-400">Growth Rate</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* 3D Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative max-w-6xl mx-auto"
          >
            {/* Glowing background */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary-500/30 to-transparent blur-3xl -z-10" />
            
            {/* Main dashboard */}
            <div className="relative">
              <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-2xl rounded-3xl border border-white/10 shadow-2xl overflow-hidden">
                {/* Window controls */}
                <div className="flex items-center gap-2 px-6 py-4 border-b border-white/10">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>

                {/* Dashboard content */}
                <div className="p-8">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    {[
                      { icon: Users, label: 'Users', value: '45.2K', color: 'from-blue-400 to-cyan-400' },
                      { icon: TrendingUp, label: 'Revenue', value: '$128K', color: 'from-green-400 to-emerald-400' },
                      { icon: Zap, label: 'Performance', value: '98.5%', color: 'from-yellow-400 to-orange-400' },
                      { icon: Shield, label: 'Security', value: '100%', color: 'from-purple-400 to-pink-400' },
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.05, rotateY: 5 }}
                        className={`bg-gradient-to-br ${item.color} rounded-2xl p-6 text-white shadow-xl`}
                      >
                        <item.icon className="w-8 h-8 mb-3" />
                        <p className="text-3xl font-bold mb-1">{item.value}</p>
                        <p className="text-sm opacity-90">{item.label}</p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Chart placeholder */}
                  <div className="bg-gradient-to-br from-slate-700/50 to-slate-800/50 rounded-2xl p-8 h-64 flex items-end gap-2">
                    {[40, 70, 45, 80, 60, 95, 75, 85, 65, 90, 70, 100].map((height, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${height}%` }}
                        transition={{ delay: i * 0.1, duration: 0.5 }}
                        className="flex-1 bg-gradient-to-t from-primary-500 to-secondary-500 rounded-lg"
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-8 -right-8 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl p-6 shadow-2xl backdrop-blur-xl hidden lg:block"
              >
                <Rocket className="w-12 h-12 text-white" />
              </motion.div>

              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -bottom-8 -left-8 bg-gradient-to-br from-accent-500 to-pink-500 rounded-2xl p-6 shadow-2xl backdrop-blur-xl hidden lg:block"
              >
                <Zap className="w-12 h-12 text-white" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-white rounded-full"
          />
        </div>
      </motion.div>

      {/* Get Started Modal */}
      <GetStartedModal isOpen={showGetStarted} onClose={() => setShowGetStarted(false)} />
    </section>
  );
};
