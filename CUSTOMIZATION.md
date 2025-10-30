# 🎨 Customization Guide

This guide will help you customize the LaunchPad template to match your brand and requirements.

## 📋 Table of Contents

1. [Changing Colors](#changing-colors)
2. [Updating Content](#updating-content)
3. [Customizing Components](#customizing-components)
4. [Adding/Removing Sections](#addingremoving-sections)
5. [Modifying Animations](#modifying-animations)
6. [Changing Fonts](#changing-fonts)
7. [Adding Images](#adding-images)

---

## 🎨 Changing Colors

### Primary Colors

All colors are defined in `tailwind.config.js`. To change the primary color scheme:

```javascript
// tailwind.config.js
colors: {
  primary: {
    DEFAULT: '#8B5CF6',  // Change this to your brand color
    500: '#8B5CF6',
    600: '#7C3AED',
    // ... other shades
  },
  secondary: {
    DEFAULT: '#06B6D4',  // Change secondary color
    // ...
  },
  accent: {
    DEFAULT: '#EC4899',  // Change accent color
    // ...
  },
}
```

### Quick Color Customization

For a quick brand makeover, just change these three values:
- **Primary**: Main brand color (buttons, links)
- **Secondary**: Supporting color (gradients, accents)
- **Accent**: Highlight color (special elements)

### Gradient Backgrounds

Modify gradient backgrounds in `tailwind.config.js`:

```javascript
backgroundImage: {
  'gradient-primary': 'linear-gradient(135deg, #YOUR_COLOR1 0%, #YOUR_COLOR2 50%, #YOUR_COLOR3 100%)',
}
```

---

## 📝 Updating Content

All content is centralized in one file for easy editing:

### Site Configuration

Edit `src/config/site.js`:

```javascript
export const siteConfig = {
  name: "Your Product Name",        // Change product name
  description: "Your description",  // Update description
  
  hero: {
    badge: "🎉 Your Badge Text",
    title: "Your Main Headline",
    highlightedTitle: "Highlighted Part",
    subtitle: "Your compelling subtitle...",
    primaryCTA: "Get Started Free",
    secondaryCTA: "Watch Demo",
  },
  
  // ... more configuration
}
```

### Features Section

Update features in `src/config/site.js`:

```javascript
features: [
  {
    icon: "Zap",              // Icon name from Lucide React
    title: "Your Feature",
    description: "Feature description...",
  },
  // Add more features
],
```

**Available Icons**: Browse all icons at [lucide.dev](https://lucide.dev)

### Pricing Plans

Customize pricing in `src/config/site.js`:

```javascript
pricing: [
  {
    name: "Plan Name",
    price: { monthly: 29, yearly: 290 },
    description: "Plan description",
    features: [
      "Feature 1",
      "Feature 2",
      // ...
    ],
    popular: false,  // Set true to highlight
  },
],
```

### Testimonials

Add your testimonials:

```javascript
testimonials: [
  {
    name: "Customer Name",
    role: "Job Title at Company",
    image: "https://your-image-url.com/avatar.jpg",
    content: "Their testimonial...",
    rating: 5,
  },
],
```

**Tip**: Use [DiceBear](https://dicebear.com/) for free avatar placeholders.

### FAQ Items

Update FAQs:

```javascript
faqs: [
  {
    question: "Your question?",
    answer: "Your detailed answer...",
  },
],
```

---

## 🔧 Customizing Components

### Button Variants

Modify button styles in `src/components/Button.jsx`:

```javascript
const variants = {
  primary: 'your-custom-classes',
  secondary: 'your-custom-classes',
  // Add new variants
};
```

### Card Styles

Customize cards in `src/components/Card.jsx`:

```javascript
// Change default styling
const gradientStyles = gradient 
  ? 'your-glass-effect-classes' 
  : 'your-card-classes';
```

---

## ➕ Adding/Removing Sections

### Removing a Section

In `src/App.jsx`, simply comment out or delete:

```javascript
<main>
  <Hero />
  <Features />
  {/* <Stats /> */}  {/* Section removed */}
  <Pricing />
  // ...
</main>
```

### Adding a New Section

1. **Create the section file**: `src/sections/YourSection.jsx`

```javascript
import { Container } from '../components/Container';
import { SectionTitle } from '../components/SectionTitle';

export const YourSection = () => {
  return (
    <section className="py-20 bg-white dark:bg-slate-900">
      <Container>
        <SectionTitle
          badge="✨ Badge"
          title="Your Title"
          subtitle="Your subtitle"
        />
        {/* Your content */}
      </Container>
    </section>
  );
};
```

2. **Import and add to App.jsx**:

```javascript
import { YourSection } from './sections/YourSection';

// In the component:
<main>
  {/* ... other sections */}
  <YourSection />
</main>
```

### Reordering Sections

Simply rearrange the order in `src/App.jsx`:

```javascript
<main>
  <Hero />
  <Pricing />      {/* Moved up */}
  <Features />     {/* Moved down */}
  // ...
</main>
```

---

## 🎭 Modifying Animations

### Animation Speed

Adjust animation durations in section files:

```javascript
// In any section component
<motion.div
  transition={{ duration: 0.6 }}  // Change from 0.6 to your preference
>
```

### Disable Animations

To disable animations globally, replace `motion` components with regular `div`:

```javascript
// Before
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
>

// After
<div>
```

### Custom Animations

Add custom animations in `tailwind.config.js`:

```javascript
animation: {
  'your-animation': 'your-animation 3s ease-in-out infinite',
},
keyframes: {
  'your-animation': {
    '0%, 100%': { transform: 'translateY(0)' },
    '50%': { transform: 'translateY(-20px)' },
  },
}
```

---

## 🔤 Changing Fonts

### Google Fonts

1. **Add to `index.html`**:

```html
<head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Your+Font:wght@400;600;700&display=swap" rel="stylesheet">
</head>
```

2. **Update `tailwind.config.js`**:

```javascript
theme: {
  extend: {
    fontFamily: {
      sans: ['Your Font', 'system-ui', 'sans-serif'],
    },
  },
}
```

### Custom Fonts

1. Add font files to `public/fonts/`
2. Import in `src/index.css`:

```css
@font-face {
  font-family: 'Your Font';
  src: url('/fonts/your-font.woff2') format('woff2');
}
```

---

## 🖼️ Adding Images

### Product Screenshots

1. Add images to `public/images/`
2. Reference in your components:

```javascript
<img src="/images/your-screenshot.png" alt="Description" />
```

### Optimizing Images

Before adding images:
- Use WebP format when possible
- Compress images (use [TinyPNG](https://tinypng.com/))
- Recommended max size: 1920px width
- Use lazy loading for below-fold images

### Background Images

Add to `src/index.css` or inline styles:

```css
.hero-bg {
  background-image: url('/images/hero-bg.jpg');
  background-size: cover;
  background-position: center;
}
```

---

## 🎯 Quick Customization Checklist

- [ ] Update brand colors in `tailwind.config.js`
- [ ] Change all content in `src/config/site.js`
- [ ] Replace logo text in `Header.jsx`
- [ ] Update meta tags in `index.html`
- [ ] Add your product images
- [ ] Customize CTA button text
- [ ] Update social media links in footer
- [ ] Add your contact email
- [ ] Test in light and dark mode
- [ ] Test on mobile devices

---

## 💡 Pro Tips

1. **Start with content**: Update `src/config/site.js` first
2. **Colors second**: Match your brand in `tailwind.config.js`
3. **Test frequently**: Run `npm run dev` and check changes live
4. **Mobile first**: Always test responsive design
5. **Dark mode**: Test both themes thoroughly
6. **Performance**: Keep animations smooth, optimize images

---

## 🆘 Need Help?

- The template uses standard React patterns
- Tailwind CSS docs: [tailwindcss.com](https://tailwindcss.com)
- Framer Motion docs: [framer.com/motion](https://www.framer.com/motion/)
- Lucide icons: [lucide.dev](https://lucide.dev)

Happy customizing! 🎨

