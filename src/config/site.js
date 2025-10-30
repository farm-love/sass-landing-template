/**
 * 🎨 SITE CONFIGURATION
 * 
 * This is the MAIN file for customizing your template!
 * Change all text, pricing, features, testimonials here.
 * 
 * 📝 CUSTOMIZATION TIP:
 * - Search & replace "LaunchPad" with your product name
 * - Update all text to match your brand
 * - Change pricing to your actual prices
 * - Add real testimonials
 */

export const siteConfig = {
  // 🏷️ BRAND INFORMATION
  name: "TechVerz", // 👈 Your brand name
  description: "Next-generation platform that transforms businesses through cutting-edge technology and innovation",
  url: "https://techverz.com", // 👈 Your domain
  
  // 🦸 HERO SECTION (First thing visitors see!)
  hero: {
    badge: "✨ Powered by AI - Trusted by 50,000+ Teams",
    title: "Build The Future with",
    highlightedTitle: "TechVerz",
    subtitle: "The ultimate all-in-one platform combining AI, automation, and analytics. Transform your business operations in days, not months. Experience the next generation of enterprise software.",
    primaryCTA: "Get Started Free →",
    secondaryCTA: "Watch Demo",
  },

  // ✨ FEATURES SECTION (Bento Grid Layout)
  // 💡 TIP: First and 4th features are displayed larger
  // Available icons: Check lucide.dev for all icon names
  features: [
    {
      icon: "Zap", // 👈 Change icon name from lucide.dev
      title: "Lightning Fast", // 👈 Feature headline
      description: "Experience blazing-fast performance with our optimized infrastructure built for speed.",
    },
    {
      icon: "Shield",
      title: "Enterprise Security",
      description: "Bank-level security with end-to-end encryption to keep your data safe and secure.",
    },
    {
      icon: "Users",
      title: "Team Collaboration",
      description: "Work together seamlessly with real-time collaboration tools and shared workspaces.",
    },
    {
      icon: "Layers",
      title: "Easy Integration",
      description: "Connect with 100+ apps and services. Set up in minutes, not hours.",
    },
    {
      icon: "BarChart3",
      title: "Advanced Analytics",
      description: "Make data-driven decisions with powerful insights and beautiful dashboards.",
    },
    {
      icon: "Globe",
      title: "Global CDN",
      description: "Deliver content instantly worldwide with our globally distributed network.",
    },
  ],

  stats: [
    { value: "50K+", label: "Active Users" },
    { value: "99.9%", label: "Uptime SLA" },
    { value: "150+", label: "Countries" },
    { value: "24/7", label: "Support" },
  ],

  pricing: [
    {
      name: "Starter",
      price: { monthly: 29, yearly: 290 },
      description: "Perfect for individuals and small teams getting started.",
      features: [
        "Up to 5 team members",
        "10GB storage",
        "Basic analytics",
        "Email support",
        "Mobile app access",
      ],
      popular: false,
    },
    {
      name: "Professional",
      price: { monthly: 79, yearly: 790 },
      description: "For growing businesses that need advanced features.",
      features: [
        "Up to 20 team members",
        "100GB storage",
        "Advanced analytics",
        "Priority support",
        "Custom integrations",
        "API access",
        "Advanced security",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: { monthly: 199, yearly: 1990 },
      description: "For large organizations with custom needs.",
      features: [
        "Unlimited team members",
        "Unlimited storage",
        "Custom analytics",
        "24/7 phone support",
        "Dedicated account manager",
        "Custom contracts",
        "SSO & SAML",
        "Advanced compliance",
      ],
      popular: false,
    },
  ],

  testimonials: [
    {
      name: "Sarah Johnson",
      role: "CEO at TechFlow",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      content: "LaunchPad has completely transformed how our team works. The intuitive interface and powerful features have increased our productivity by 300%.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Product Manager at InnovateCo",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
      content: "We've tried many platforms, but LaunchPad stands out. The customer support is exceptional and the features are exactly what we needed.",
      rating: 5,
    },
    {
      name: "Emma Williams",
      role: "Founder at StartupHub",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
      content: "The best investment we've made for our business. Easy to use, powerful features, and the ROI has been incredible.",
      rating: 5,
    },
  ],

  faqs: [
    {
      question: "How does the free trial work?",
      answer: "You get full access to all Professional plan features for 14 days. No credit card required. Cancel anytime.",
    },
    {
      question: "Can I change plans later?",
      answer: "Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any charges.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for Enterprise plans.",
    },
    {
      question: "Is my data secure?",
      answer: "Absolutely. We use bank-level 256-bit encryption, regular security audits, and are SOC 2 Type II certified. Your data is backed up daily.",
    },
    {
      question: "Do you offer refunds?",
      answer: "Yes! We offer a 30-day money-back guarantee. If you're not satisfied, we'll refund you in full, no questions asked.",
    },
    {
      question: "Can I cancel my subscription?",
      answer: "Yes, you can cancel anytime from your account settings. Your access continues until the end of your billing period.",
    },
  ],

  footer: {
    tagline: "Build something amazing today.",
    links: {
      product: [
        { name: "Features", href: "#features" },
        { name: "Pricing", href: "#pricing" },
        { name: "Security", href: "#" },
        { name: "Roadmap", href: "#" },
      ],
      company: [
        { name: "About", href: "#" },
        { name: "Blog", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Press", href: "#" },
      ],
      resources: [
        { name: "Documentation", href: "#" },
        { name: "Help Center", href: "#" },
        { name: "API Reference", href: "#" },
        { name: "Community", href: "#" },
      ],
      legal: [
        { name: "Privacy", href: "#" },
        { name: "Terms", href: "#" },
        { name: "Cookie Policy", href: "#" },
        { name: "Licenses", href: "#" },
      ],
    },
    socials: [
      { name: "Twitter", icon: "Twitter", href: "#" },
      { name: "GitHub", icon: "Github", href: "#" },
      { name: "LinkedIn", icon: "Linkedin", href: "#" },
      { name: "Discord", icon: "MessageCircle", href: "#" },
    ],
  },
};

