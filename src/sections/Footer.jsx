import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { Container } from '../components/Container';
import { siteConfig } from '../config/site';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="text-3xl font-black bg-gradient-to-r from-primary-400 via-secondary-400 to-accent-400 bg-clip-text text-transparent mb-4">
              TechVerz
            </div>
            <p className="text-slate-400 mb-6 max-w-xs text-lg">
              {siteConfig.footer.tagline}
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {siteConfig.footer.socials.map((social, index) => {
                const Icon = Icons[social.icon];
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary-500 transition-colors"
                  >
                    <Icon size={18} />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Links */}
          {Object.entries(siteConfig.footer.links).map(([category, links], index) => (
            <div key={index}>
              <h4 className="font-semibold text-white mb-4 capitalize">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.href}
                      className="text-slate-400 hover:text-primary-400 transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="border-t border-slate-800 pt-8 mb-8">
          <div className="max-w-md mx-auto text-center">
            <h4 className="font-semibold text-white mb-2">
              Subscribe to our newsletter
            </h4>
            <p className="text-slate-400 text-sm mb-4">
              Get the latest updates, articles, and resources delivered to your inbox.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-primary-500"
              />
              <button className="px-6 py-2 rounded-lg bg-primary-500 text-white font-semibold hover:bg-primary-600 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-400">
          <p>
            © {currentYear} TechVerz. All rights reserved. Built with passion & cutting-edge tech.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-primary-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary-400 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-primary-400 transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

