import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, Github, Chrome } from 'lucide-react';
import { Modal } from './Modal';
import { Button } from './Button';
import toast from 'react-hot-toast';

export const SignInModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Sign in successful! (Demo mode)');
    onClose();
  };

  const handleSocialLogin = (provider) => {
    toast.success(`${provider} login clicked! (Demo mode)`);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Welcome Back">
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Email Input */}
        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
            Email Address
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
              className="w-full pl-11 pr-4 py-3 rounded-lg border-2 border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all outline-none"
            />
          </div>
        </div>

        {/* Password Input */}
        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
            Password
          </label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              className="w-full pl-11 pr-4 py-3 rounded-lg border-2 border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all outline-none"
            />
          </div>
        </div>

        {/* Remember & Forgot */}
        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2 text-slate-600 dark:text-slate-400 cursor-pointer">
            <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-primary-500 focus:ring-primary-500" />
            Remember me
          </label>
          <button type="button" className="text-primary-500 hover:text-primary-600 font-medium">
            Forgot password?
          </button>
        </div>

        {/* Submit Button */}
        <Button type="submit" variant="primary" className="w-full">
          Sign In
        </Button>

        {/* Divider */}
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-200 dark:border-slate-600"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white dark:bg-slate-800 text-slate-500">Or continue with</span>
          </div>
        </div>

        {/* Social Login */}
        <div className="grid grid-cols-2 gap-3">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="button"
            onClick={() => handleSocialLogin('Google')}
            className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg border-2 border-slate-200 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-medium transition-all"
          >
            <Chrome size={20} />
            Google
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="button"
            onClick={() => handleSocialLogin('GitHub')}
            className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg border-2 border-slate-200 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-medium transition-all"
          >
            <Github size={20} />
            GitHub
          </motion.button>
        </div>

        {/* Sign Up Link */}
        <p className="text-center text-sm text-slate-600 dark:text-slate-400 mt-4">
          Don't have an account?{' '}
          <button type="button" className="text-primary-500 hover:text-primary-600 font-medium">
            Sign up
          </button>
        </p>
      </form>
    </Modal>
  );
};

