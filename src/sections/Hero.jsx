import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Sparkles, Zap, Shield, Rocket } from 'lucide-react';
import { Button } from '../components/Button';
import { Container } from '../components/Container';
import { GetStartedModal } from '../components/GetStartedModal';
import { siteConfig } from '../config/site';

export const Hero = () => {
  const [showGetStarted, setShowGetStarted] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-purple-50/30 to-cyan-50/30 dark:from-slate-950 dark:via-purple-950/30 dark:to-slate-950">
      {/* Animated Background with better visibility */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        
        {/* Gradient Orbs with improved colors */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-primary-400/40 to-primary-600/40 dark:from-primary-500/30 dark:to-primary-700/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute bottom-20 right-10 w-[30rem] h-[30rem] bg-gradient-to-br from-secondary-400/40 to-secondary-600/40 dark:from-secondary-500/30 dark:to-secondary-700/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-accent-400/30 to-accent-600/30 dark:from-accent-500/20 dark:to-accent-700/20 rounded-full blur-3xl"
        />
      </div>

      <Container className="relative z-10 pt-32 pb-20">
        <div className="w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="text-center lg:text-left w-full">
              {/* Badge with 3D effect */}
              <div className="mb-8">
                <motion.span
                  whileHover={{ scale: 1.05, rotateZ: 2 }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold text-sm shadow-lg shadow-primary-500/30 dark:shadow-primary-500/20"
                >
                  <Sparkles size={16} className="animate-pulse" />
                  {siteConfig.hero.badge}
                </motion.span>
              </div>

              {/* Heading with better contrast */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-6 leading-tight">
                <span className="text-slate-900 dark:text-white">
                  {siteConfig.hero.title}
                </span>
                <br />
                <span className="bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 dark:from-primary-400 dark:via-secondary-400 dark:to-accent-400 bg-clip-text text-transparent">
                  {siteConfig.hero.highlightedTitle}
                </span>
              </h1>

              {/* Subtitle with better visibility */}
              <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-200 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
                {siteConfig.hero.subtitle}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12">
                <Button 
                  variant="primary" 
                  size="lg"
                  onClick={() => setShowGetStarted(true)}
                  className="shadow-xl shadow-primary-500/30 hover:shadow-2xl hover:shadow-primary-500/40"
                >
                  {siteConfig.hero.primaryCTA}
                  <ArrowRight size={20} />
                </Button>
                <Button variant="outline" size="lg" className="border-2 border-slate-800 dark:border-slate-200">
                  <Play size={20} />
                  {siteConfig.hero.secondaryCTA}
                </Button>
              </div>

              {/* Social Proof with better colors */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 text-sm text-slate-700 dark:text-slate-300 font-medium">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-400 to-secondary-400 border-2 border-white dark:border-slate-950 shadow-lg"
                      />
                    ))}
                  </div>
                  <span className="font-semibold">50,000+ users</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-yellow-500 text-lg">★★★★★</span>
                  <span className="font-semibold">4.9/5 rating</span>
                </div>
              </div>
            </div>

            {/* Right Column - 3D Interactive Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative hidden lg:block"
            >
              {/* Main 3D Card */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotateY: [0, 5, 0],
                  rotateX: [0, 5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                style={{ transformStyle: 'preserve-3d' }}
                className="relative"
              >
                {/* Glass Card */}
                <div className="relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-slate-200/50 dark:border-slate-700/50">
                  {/* Top Bar */}
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>

                  {/* Content Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    {/* Feature Cards */}
                    {[
                      { icon: Zap, color: 'from-yellow-400 to-orange-500', label: 'Fast' },
                      { icon: Shield, color: 'from-green-400 to-emerald-500', label: 'Secure' },
                      { icon: Rocket, color: 'from-purple-400 to-pink-500', label: 'Scalable' },
                      { icon: Sparkles, color: 'from-cyan-400 to-blue-500', label: 'Modern' },
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.05, rotateZ: 5 }}
                        className={`bg-gradient-to-br ${item.color} rounded-xl p-6 text-white shadow-lg`}
                      >
                        <item.icon size={32} className="mb-2" />
                        <p className="font-bold text-sm">{item.label}</p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Stats Bar */}
                  <div className="bg-gradient-to-r from-primary-500/10 to-secondary-500/10 dark:from-primary-500/20 dark:to-secondary-500/20 rounded-xl p-4">
                    <div className="flex items-center justify-between text-sm">
                      <div>
                        <p className="text-slate-600 dark:text-slate-400 font-medium">Performance</p>
                        <p className="text-2xl font-bold text-slate-900 dark:text-white">98%</p>
                      </div>
                      <div className="h-12 w-24 bg-gradient-to-t from-primary-500 to-secondary-500 rounded-lg"></div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <motion.div
                  animate={{
                    y: [0, -15, 0],
                    x: [0, 10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl shadow-2xl flex items-center justify-center text-white font-bold text-3xl"
                  style={{ transform: 'translateZ(50px)' }}
                >
                  ⚡
                </motion.div>

                <motion.div
                  animate={{
                    y: [0, 15, 0],
                    x: [0, -10, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 0.5,
                  }}
                  className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-br from-secondary-400 to-secondary-600 rounded-2xl shadow-2xl flex items-center justify-center text-white font-bold text-2xl"
                  style={{ transform: 'translateZ(30px)' }}
                >
                  🚀
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </Container>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-slate-600 dark:border-slate-400 rounded-full flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-slate-600 dark:bg-slate-400 rounded-full"
          />
        </div>
      </motion.div>

      {/* Get Started Modal */}
      <GetStartedModal isOpen={showGetStarted} onClose={() => setShowGetStarted(false)} />
    </section>
  );
};
