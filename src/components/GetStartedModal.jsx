import { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Briefcase, ArrowRight } from 'lucide-react';
import { Modal } from './Modal';
import { Button } from './Button';
import toast from 'react-hot-toast';

export const GetStartedModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    plan: 'professional',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('🎉 Welcome aboard! Check your email for next steps.');
    onClose();
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Start Your Free Trial">
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name Input */}
        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
            Full Name
          </label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              required
              className="w-full pl-11 pr-4 py-3 rounded-lg border-2 border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all outline-none"
            />
          </div>
        </div>

        {/* Email Input */}
        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
            Work Email
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@company.com"
              required
              className="w-full pl-11 pr-4 py-3 rounded-lg border-2 border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all outline-none"
            />
          </div>
        </div>

        {/* Company Input */}
        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
            Company Name
          </label>
          <div className="relative">
            <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Acme Inc."
              required
              className="w-full pl-11 pr-4 py-3 rounded-lg border-2 border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all outline-none"
            />
          </div>
        </div>

        {/* Plan Selection */}
        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
            Choose Your Plan
          </label>
          <select
            name="plan"
            value={formData.plan}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all outline-none"
          >
            <option value="starter">Starter - $29/month</option>
            <option value="professional">Professional - $79/month (Recommended)</option>
            <option value="enterprise">Enterprise - $199/month</option>
          </select>
        </div>

        {/* Features List */}
        <div className="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-lg p-4 space-y-2">
          <p className="font-semibold text-slate-900 dark:text-white mb-2">
            Your 14-day free trial includes:
          </p>
          <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
            <li className="flex items-center gap-2">
              <span className="text-green-500">✓</span> Full access to all features
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-500">✓</span> No credit card required
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-500">✓</span> Cancel anytime
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-500">✓</span> Dedicated support
            </li>
          </ul>
        </div>

        {/* Submit Button */}
        <Button type="submit" variant="primary" className="w-full">
          Start Free Trial
          <ArrowRight size={20} />
        </Button>

        {/* Terms */}
        <p className="text-xs text-center text-slate-500 dark:text-slate-400">
          By signing up, you agree to our{' '}
          <a href="#" className="text-primary-500 hover:text-primary-600">
            Terms of Service
          </a>{' '}
          and{' '}
          <a href="#" className="text-primary-500 hover:text-primary-600">
            Privacy Policy
          </a>
        </p>
      </form>
    </Modal>
  );
};

