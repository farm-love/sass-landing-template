# 🚀 Deployment Guide

This guide covers deploying your LaunchPad template to various hosting platforms.

## 📋 Table of Contents

1. [Preparing for Deployment](#preparing-for-deployment)
2. [Vercel (Recommended)](#vercel-recommended)
3. [Netlify](#netlify)
4. [GitHub Pages](#github-pages)
5. [Custom Server](#custom-server)
6. [Environment Variables](#environment-variables)
7. [Post-Deployment Checklist](#post-deployment-checklist)

---

## 🛠️ Preparing for Deployment

### 1. Test Production Build Locally

Before deploying, always test the production build:

```bash
# Build the project
npm run build

# Preview the production build
npm run preview
```

Visit `http://localhost:4173` and test all features.

### 2. Optimize Images

- Compress all images using [TinyPNG](https://tinypng.com/)
- Use WebP format when possible
- Images in `public/` folder will be served as-is

### 3. Update Configuration

- Set correct URLs in `src/config/site.js`
- Update meta tags in `index.html`
- Add your analytics code (Google Analytics, etc.)

---

## ▲ Vercel (Recommended)

Vercel is the recommended platform (created by Vite's team).

### Method 1: Deploy from GitHub

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/your-repo.git
   git push -u origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel auto-detects Vite settings
   - Click "Deploy"

### Method 2: Deploy with Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Build Settings

Vercel auto-detects these, but you can verify:
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

---

## 🌊 Netlify

### Method 1: Deploy from GitHub

1. **Push to GitHub** (same as Vercel)

2. **Deploy on Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect to GitHub and select your repo
   - Use these settings:
     - **Build command**: `npm run build`
     - **Publish directory**: `dist`
   - Click "Deploy site"

### Method 2: Drag & Drop

1. **Build locally**
   ```bash
   npm run build
   ```

2. **Deploy**
   - Go to [app.netlify.com/drop](https://app.netlify.com/drop)
   - Drag the `dist` folder onto the page

### Method 3: Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy

# Deploy to production
netlify deploy --prod
```

### _redirects File

For proper routing, create `public/_redirects`:

```
/*    /index.html   200
```

---

## 📘 GitHub Pages

### Using `gh-pages` Package

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update `vite.config.js`**
   ```javascript
   export default defineConfig({
     plugins: [react()],
     base: '/your-repo-name/',  // Add this line
   })
   ```

3. **Add deploy scripts to `package.json`**
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

5. **Configure GitHub Pages**
   - Go to your repository settings
   - Navigate to "Pages"
   - Select `gh-pages` branch
   - Save

Your site will be at: `https://yourusername.github.io/your-repo-name/`

---

## 🖥️ Custom Server

### Using Node.js

1. **Install serve**
   ```bash
   npm install -g serve
   ```

2. **Build the project**
   ```bash
   npm run build
   ```

3. **Serve**
   ```bash
   serve -s dist -p 3000
   ```

### Using Nginx

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Copy files to server**
   ```bash
   scp -r dist/* user@yourserver:/var/www/html/
   ```

3. **Nginx config** (`/etc/nginx/sites-available/your-site`)
   ```nginx
   server {
     listen 80;
     server_name yourdomain.com;
     root /var/www/html;
     index index.html;

     location / {
       try_files $uri $uri/ /index.html;
     }

     # Enable gzip
     gzip on;
     gzip_types text/plain text/css application/json application/javascript text/xml application/xml text/javascript;
   }
   ```

4. **Restart Nginx**
   ```bash
   sudo systemctl restart nginx
   ```

### Using Apache

**.htaccess** in `public/` folder:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

---

## 🔐 Environment Variables

If you need environment variables:

### Development

Create `.env` file:
```
VITE_API_URL=https://api.example.com
VITE_APP_NAME=LaunchPad
```

### Access in Code

```javascript
const apiUrl = import.meta.env.VITE_API_URL;
```

### Production

**Vercel**: Add in Project Settings → Environment Variables

**Netlify**: Add in Site Settings → Environment Variables

**GitHub Pages**: Not supported (use build-time variables)

---

## ✅ Post-Deployment Checklist

After deploying, verify:

- [ ] All pages load correctly
- [ ] Images display properly
- [ ] Smooth scrolling works
- [ ] Dark mode toggle functions
- [ ] All links work (navigation, footer, CTAs)
- [ ] Forms submit (if you added them)
- [ ] Mobile responsive design
- [ ] Performance (run Lighthouse test)
- [ ] SEO meta tags are correct
- [ ] Favicon displays
- [ ] No console errors

---

## 🚀 Performance Optimization

### After Deployment

1. **Test with Lighthouse**
   - Open Chrome DevTools
   - Go to "Lighthouse" tab
   - Run audit
   - Aim for 90+ scores

2. **Enable CDN** (most hosts do this automatically)
   - Vercel: Automatic global CDN
   - Netlify: Automatic global CDN

3. **Enable HTTPS**
   - Vercel: Automatic
   - Netlify: Automatic
   - Custom server: Use Let's Encrypt

4. **Add Analytics**
   - Google Analytics
   - Plausible
   - Fathom

### Performance Tips

```javascript
// In index.html, add before </body>
<script defer src="analytics.js"></script>
```

---

## 🌐 Custom Domain

### Vercel

1. Go to Project Settings → Domains
2. Add your domain
3. Update DNS records as shown
4. Wait for DNS propagation (up to 48 hours)

### Netlify

1. Go to Domain Settings
2. Add custom domain
3. Update your DNS:
   ```
   Type: A
   Name: @
   Value: 75.2.60.5
   ```
4. Wait for SSL certificate (automatic)

---

## 🐛 Common Issues

### Build Fails

**Problem**: Dependencies missing
```bash
# Solution: Clean install
rm -rf node_modules package-lock.json
npm install
```

### 404 on Refresh

**Problem**: SPA routing not configured

**Solution**: 
- Vercel: Add `vercel.json`
  ```json
  {
    "rewrites": [{ "source": "/(.*)", "destination": "/" }]
  }
  ```
- Netlify: Add `_redirects` (see above)

### Images Not Loading

**Problem**: Wrong image paths

**Solution**: Use absolute paths
```javascript
// Wrong
<img src="./image.jpg" />

// Correct
<img src="/images/image.jpg" />
```

---

## 📊 Monitoring

### Recommended Tools

1. **Vercel Analytics** (if using Vercel)
2. **Google Analytics** - User behavior
3. **Sentry** - Error tracking
4. **Uptime Robot** - Uptime monitoring

---

## 🔄 Updates and Maintenance

### Updating Your Site

1. Make changes locally
2. Test with `npm run dev`
3. Commit and push to GitHub
4. Auto-deploys (if set up)

OR manually:
```bash
npm run build
vercel --prod  # or netlify deploy --prod
```

---

## 💡 Pro Tips

1. **Always test locally first** with `npm run build && npm run preview`
2. **Use Git branches** for major changes
3. **Enable auto-deploy** from your main branch
4. **Monitor performance** regularly
5. **Keep dependencies updated** but test thoroughly

---

## 🆘 Need Help?

- Vercel Docs: [vercel.com/docs](https://vercel.com/docs)
- Netlify Docs: [docs.netlify.com](https://docs.netlify.com)
- Vite Deployment: [vitejs.dev/guide/static-deploy](https://vitejs.dev/guide/static-deploy.html)

Happy deploying! 🚀

