# ⚡ Quick Start Guide

Get your SaaS landing page up and running in 5 minutes!

## 📦 Installation (2 minutes)

```bash
# 1. Extract the template
unzip saas-landing-template.zip
cd saas-landing-template

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

Open http://localhost:5173 in your browser 🎉

## ✏️ Customize Content (3 minutes)

### Step 1: Update Site Config

Open `src/config/site.js` and edit:

```javascript
export const siteConfig = {
  hero: {
    title: "Your Product Name",        // Change this
    subtitle: "Your product description...",  // And this
    // ... update other content
  }
};
```

### Step 2: Change Colors

Open `tailwind.config.js`:

```javascript
import colors from 'tailwindcss/colors';

colors: {
  primary: colors.blue,      // Your brand color
  secondary: colors.green,   // Secondary color
  accent: colors.purple,     // Accent color
}
```

### Step 3: Update Logo

In `src/sections/Header.jsx`, find:

```jsx
<motion.a>
  TechVerz  {/* Change to your brand name */}
</motion.a>
```

## 🚀 Deploy (1 minute)

### Netlify (Easiest)

```bash
# 1. Build
npm run build

# 2. Go to netlify.com
# 3. Drag the 'dist' folder
# Done!
```

### Vercel

```bash
# 1. Install Vercel CLI
npm i -g vercel

# 2. Deploy
vercel

# Done!
```

## ✅ What's Included

- ✅ Fully responsive design
- ✅ Dark mode toggle
- ✅ Working modals (Sign In, Get Started)
- ✅ Smooth animations
- ✅ Mobile navigation
- ✅ 9 Complete sections
- ✅ SEO optimized
- ✅ Production ready

## 📚 Need More Help?

- **Full customization:** Read `CUSTOMIZATION.md`
- **Deployment details:** Read `DEPLOYMENT.md`
- **Main docs:** Read `README.md`

## 🎯 Common Customizations

**Change pricing plans:**
→ Edit `src/config/site.js` → pricing section

**Add new features:**
→ Edit `src/config/site.js` → features array

**Update testimonials:**
→ Edit `src/config/site.js` → testimonials array

**Modify hero section:**
→ Edit `src/sections/Hero.jsx`

**Connect forms:**
→ Edit `src/components/SignInModal.jsx` and `GetStartedModal.jsx`

## 💡 Pro Tips

1. **Start with content** - Update `site.js` first
2. **Then colors** - Match your brand in `tailwind.config.js`
3. **Test mobile** - Use Chrome DevTools device mode
4. **Deploy often** - Test on real hosting early

---

**Need support?** Check the documentation files or contact us!

**Enjoy building!** 🚀

