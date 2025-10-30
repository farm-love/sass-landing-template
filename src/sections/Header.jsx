import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { Button } from '../components/Button';
import { Container } from '../components/Container';
import { SignInModal } from '../components/SignInModal';
import { GetStartedModal } from '../components/GetStartedModal';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  const [showGetStarted, setShowGetStarted] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl shadow-2xl border-b border-slate-200 dark:border-slate-800'
          : 'bg-white/80 dark:bg-transparent backdrop-blur-lg'
      }`}
    >
      <Container>
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.a
            href="#"
            className="text-3xl font-black bg-gradient-to-r from-primary-400 via-secondary-400 to-accent-400 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            TechVerz
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-slate-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-semibold text-base"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="p-3 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 text-white shadow-lg shadow-primary-500/30 hover:shadow-xl hover:shadow-primary-500/40 transition-all"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </motion.button>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setShowSignIn(true);
                }}
              >
                Sign In
              </Button>
              <Button 
                variant="primary" 
                size="sm" 
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setShowGetStarted(true);
                }}
              >
                Get Started
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-3 rounded-xl bg-gradient-to-br from-slate-900 to-slate-700 dark:from-slate-800 dark:to-slate-900 text-white shadow-lg"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-6 border-t border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl"
          >
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-slate-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-bold py-3 px-4 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  {item.name}
                </a>
              ))}
              <div className="flex flex-col gap-2 pt-4 border-t border-slate-200 dark:border-slate-700">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setShowSignIn(true);
                  }}
                >
                  Sign In
                </Button>
                <Button 
                  variant="primary" 
                  size="sm" 
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setShowGetStarted(true);
                  }}
                >
                  Get Started
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </Container>

      {/* Modals */}
      <SignInModal isOpen={showSignIn} onClose={() => setShowSignIn(false)} />
      <GetStartedModal isOpen={showGetStarted} onClose={() => setShowGetStarted(false)} />
    </motion.header>
  );
};

