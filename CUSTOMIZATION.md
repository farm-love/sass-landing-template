# 🎨 Customization Guide

This guide will help you customize the template to match your brand and requirements.

## 📝 Content Customization

### 1. Site Configuration

All main content is centralized in `src/config/site.js`. Edit this file to update:

```javascript
export const siteConfig = {
  hero: {
    badge: "✨ Powered by AI - Trusted by 50,000+ Teams",
    title: "Build The Future with",
    highlightedTitle: "TechVerz",
    subtitle: "The ultimate all-in-one platform combining AI, automation, and analytics...",
    primaryCTA: "Get Started Free",
    secondaryCTA: "Watch Demo"
  },
  
  features: [
    {
      icon: "Zap",
      title: "Your Feature Title",
      description: "Your feature description..."
    },
    // Add more features...
  ],
  
  pricing: {
    // Your pricing plans...
  },
  
  testimonials: [
    // Your customer testimonials...
  ],
  
  faq: [
    // Your FAQ items...
  ]
};
```

### 2. Update Logo & Branding

**Header Logo** (`src/sections/Header.jsx`):
```jsx
<motion.a
  href="#"
  className="text-3xl font-black bg-gradient-to-r from-primary-400 via-secondary-400 to-accent-400 bg-clip-text text-transparent"
>
  YourBrand  {/* Change this */}
</motion.a>
```

**Footer** (`src/sections/Footer.jsx`):
- Update company name
- Update social media links
- Update footer links

### 3. Meta Tags & SEO

Edit `index.html`:

```html
<title>Your SaaS Product Name</title>
<meta name="description" content="Your description here" />
<meta property="og:title" content="Your SaaS Product" />
<meta property="og:description" content="Your description" />
```

## 🎨 Design Customization

### 1. Color Scheme

Edit `tailwind.config.js`:

```javascript
colors: {
  // Change these to your brand colors
  primary: colors.purple,    // Main brand color
  secondary: colors.pink,    // Secondary color
  accent: colors.cyan,       // Accent color
}
```

**Available Color Options:**
- `colors.blue`
- `colors.green`
- `colors.purple`
- `colors.pink`
- `colors.orange`
- `colors.red`
- `colors.teal`
- `colors.cyan`

### 2. Typography

**Change Fonts** (edit `index.css`):

```css
@import url('https://fonts.googleapis.com/css2?family=Your+Font:wght@400;500;600;700;800;900&display=swap');

* {
  font-family: 'Your Font', sans-serif;
}
```

**Font Sizes** (in Tailwind classes):
- Headlines: `text-6xl` to `text-9xl`
- Body: `text-base` to `text-2xl`
- Small text: `text-sm` to `text-xs`

### 3. Spacing & Layout

**Container Width** (`src/components/Container.jsx`):
```jsx
className={`mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl ${className}`}
// Change max-w-7xl to: max-w-6xl, max-w-5xl, etc.
```

**Section Padding**:
```jsx
className="py-24 md:py-40"  // Vertical padding
// Adjust py-24 and py-40 to your preference
```

## 🔧 Component Customization

### 1. Modify Hero Section

**Change Dashboard Mockup** (`src/sections/Hero.jsx`):
- Update stats cards (lines 217-232)
- Modify chart data (line 237)
- Change floating icons (lines 251-265)

**Remove Particle Background**:
```jsx
// Comment out or remove this line:
<ParticleBackground />
```

### 2. Customize Features Section

**Change Grid Layout** (`src/sections/Features.jsx`):
```jsx
// Current: 1 column mobile, 2 tablet, 3 desktop
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

// Option: 2 columns everywhere
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
```

**Add More Features**:
Edit `src/config/site.js` and add to the features array:
```javascript
{
  icon: "IconName",  // From lucide-react
  title: "Feature Title",
  description: "Feature description..."
}
```

### 3. Pricing Plans

Edit `src/config/site.js`:
```javascript
pricing: {
  plans: [
    {
      name: "Starter",
      price: "29",
      description: "Perfect for getting started",
      features: [
        "Feature 1",
        "Feature 2",
        // Add more features...
      ],
      highlighted: false
    },
    // Add more plans...
  ]
}
```

### 4. Modals

**Sign In Modal** (`src/components/SignInModal.jsx`):
- Connect to your authentication API
- Update form fields
- Modify social login providers

**Get Started Modal** (`src/components/GetStartedModal.jsx`):
- Update form fields
- Connect to your backend/CRM
- Modify plan selection

## 🖼️ Images & Assets

### 1. Add Your Logo

Replace `public/vite.svg` with your logo:
1. Add your logo file to `public/` folder
2. Update `index.html`:
```html
<link rel="icon" type="image/png" href="/your-logo.png" />
```

### 2. Add Background Images

**Hero Background**:
```jsx
<div className="absolute inset-0">
  <img 
    src="/your-background.jpg" 
    alt="Background" 
    className="w-full h-full object-cover opacity-30"
  />
</div>
```

### 3. Add Team/Product Images

Create an `assets` folder and import:
```jsx
import productImage from './assets/product.png';

<img src={productImage} alt="Product" />
```

## 🎭 Animations

### 1. Disable Animations

If you want simpler animations or better performance:

**Remove Motion Components**:
```jsx
// Change this:
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
>

// To this:
<div>
```

### 2. Adjust Animation Speed

**Framer Motion durations**:
```jsx
transition={{ duration: 0.5 }}  // Faster
transition={{ duration: 1.5 }}  // Slower
```

### 3. Custom Animations

Add your own animations:
```jsx
<motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ type: "spring", stiffness: 100 }}
>
```

## 🌓 Dark Mode

### 1. Change Default Theme

Edit `src/context/ThemeContext.jsx`:
```jsx
const [theme, setTheme] = useState('dark');  // 'light' or 'dark'
```

### 2. Disable Dark Mode

Remove the theme toggle button from `Header.jsx` and set theme to 'light'.

### 3. Custom Dark Mode Colors

In your components, use Tailwind dark mode:
```jsx
className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
```

## 📱 Mobile Optimization

### 1. Hide Elements on Mobile

```jsx
className="hidden md:block"     // Hide on mobile, show on desktop
className="md:hidden"           // Show on mobile, hide on desktop
```

### 2. Responsive Text

```jsx
className="text-2xl md:text-4xl lg:text-6xl"  // Scales with screen size
```

### 3. Mobile Menu

Customize in `src/sections/Header.jsx`:
- Change menu items
- Update styles
- Modify animation

## 🔗 Navigation

### 1. Add New Sections

1. Create section component in `src/sections/`
2. Import in `App.jsx`
3. Add to navigation array in `Header.jsx`:

```jsx
const navItems = [
  { name: 'Features', href: '#features' },
  { name: 'Your Section', href: '#your-section' },  // Add this
];
```

### 2. External Links

Change navigation to external links:
```jsx
<a href="https://yoursite.com/page" target="_blank" rel="noopener">
  Link Text
</a>
```

## 🎯 Call-to-Action Buttons

### 1. Update CTAs

In any component:
```jsx
<Button 
  variant="primary"  // or "ghost", "outline", "secondary"
  size="lg"         // or "md", "sm"
  onClick={yourFunction}
>
  Your Button Text
</Button>
```

### 2. Connect Forms

Update modal submit handlers:
```jsx
const handleSubmit = async (e) => {
  e.preventDefault();
  
  // Your API call here
  await fetch('your-api-endpoint', {
    method: 'POST',
    body: JSON.stringify(formData)
  });
  
  toast.success('Success!');
  onClose();
};
```

## 📊 Analytics Integration

### Add Google Analytics

In `index.html`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🎨 Advanced Customization

### 1. Add New Components

1. Create file in `src/components/YourComponent.jsx`
2. Export the component
3. Import and use in your sections

### 2. Custom Hooks

Create in `src/hooks/useYourHook.js`:
```javascript
export const useYourHook = () => {
  // Your custom hook logic
  return { /* your values */ };
};
```

### 3. Add Pages

For multi-page sites, install React Router:
```bash
npm install react-router-dom
```

Then set up routing in `App.jsx`.

---

Need more help? Check the React, Tailwind CSS, and Framer Motion documentation.
