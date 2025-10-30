# 🚀 Deployment Guide

Complete guide to deploying your SaaS landing page to various platforms.

## 📋 Pre-Deployment Checklist

Before deploying, make sure you've:

- [ ] Customized all content in `src/config/site.js`
- [ ] Updated logo and branding
- [ ] Changed meta tags in `index.html`
- [ ] Tested on mobile, tablet, and desktop
- [ ] Verified all links work
- [ ] Checked dark mode functionality
- [ ] Tested all modals and forms
- [ ] Run `npm run build` successfully

## 🏗️ Build Your Project

### 1. Create Production Build

```bash
npm run build
```

This creates an optimized build in the `dist/` folder.

### 2. Test Production Build Locally

```bash
npm run preview
```

Open `http://localhost:4173` to test the production build.

### 3. Verify Build

Check that:
- All pages load correctly
- Images display properly
- Modals work
- Navigation functions
- Forms submit
- Animations play smoothly

## 🌐 Deployment Platforms

### Option 1: Netlify (Recommended for Beginners)

**Method A: Drag and Drop**

1. Go to [Netlify](https://netlify.com)
2. Sign up/login
3. Drag the `dist/` folder to the deploy area
4. Your site is live! 🎉

**Method B: Git Integration** (Automatic deployments)

1. Push your code to GitHub/GitLab/Bitbucket
2. Go to [Netlify](https://netlify.com)
3. Click "New site from Git"
4. Connect your repository
5. Set build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy site"

**Custom Domain Setup:**
1. Go to Site settings → Domain management
2. Click "Add custom domain"
3. Follow DNS configuration instructions

### Option 2: Vercel

**Quick Deploy:**

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow prompts and your site is live!

**Git Integration:**

1. Go to [Vercel](https://vercel.com)
2. Click "New Project"
3. Import your Git repository
4. Vercel auto-detects Vite
5. Click "Deploy"

**Environment Variables** (if needed):
1. Go to Project Settings → Environment Variables
2. Add your variables
3. Redeploy

### Option 3: GitHub Pages

**1. Install gh-pages:**
```bash
npm install --save-dev gh-pages
```

**2. Update `vite.config.js`:**
```javascript
export default defineConfig({
  plugins: [react()],
  base: '/your-repo-name/',  // Add this line
})
```

**3. Add deploy scripts to `package.json`:**
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

**4. Deploy:**
```bash
npm run deploy
```

**5. Enable GitHub Pages:**
- Go to your repository → Settings → Pages
- Select `gh-pages` branch
- Your site will be at: `https://username.github.io/repo-name/`

### Option 4: CloudFlare Pages

1. Go to [CloudFlare Pages](https://pages.cloudflare.com/)
2. Click "Create a project"
3. Connect your Git repository
4. Set build settings:
   - Framework preset: Vite
   - Build command: `npm run build`
   - Build output directory: `dist`
5. Click "Save and Deploy"

**Custom Domain:**
- Go to Custom domains
- Add your domain
- Update DNS records as instructed

### Option 5: AWS S3 + CloudFront

**1. Create S3 Bucket:**
```bash
aws s3 mb s3://your-bucket-name
```

**2. Build and Upload:**
```bash
npm run build
aws s3 sync dist/ s3://your-bucket-name
```

**3. Enable Static Website Hosting:**
- Go to bucket → Properties → Static website hosting
- Enable it
- Set index document: `index.html`

**4. Set up CloudFront for HTTPS:**
- Create CloudFront distribution
- Point to S3 bucket
- Add custom domain and SSL certificate

### Option 6: Traditional Web Hosting

**For cPanel/shared hosting:**

1. Build your project:
```bash
npm run build
```

2. Upload `dist/` folder contents via FTP/SFTP to your web root (usually `public_html` or `www`)

3. Configure `.htaccess` for single-page app:
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

## 🔧 Advanced Configuration

### Environment Variables

**1. Create `.env` file:**
```env
VITE_API_URL=https://api.yoursite.com
VITE_GA_ID=GA-XXXXXXXX
```

**2. Use in code:**
```javascript
const apiUrl = import.meta.env.VITE_API_URL;
```

**3. Add to deployment platform:**
- Netlify: Site settings → Environment variables
- Vercel: Project settings → Environment Variables
- GitHub Actions: Repository → Settings → Secrets

### Custom Domain Setup

**1. Purchase domain** from:
- Namecheap
- Google Domains
- GoDaddy
- Cloudflare

**2. Update DNS records:**

For Netlify/Vercel:
```
Type: A
Name: @
Value: [Platform IP address]

Type: CNAME
Name: www
Value: [your-site.netlify.app or vercel.app]
```

**3. Add domain in platform:**
- Follow platform-specific instructions
- Wait for DNS propagation (up to 48 hours)
- Enable HTTPS/SSL

### HTTPS/SSL Setup

Most modern platforms (Netlify, Vercel, CloudFlare) provide free SSL automatically.

For custom setups:
- Use Let's Encrypt (free)
- Or Cloudflare (free tier includes SSL)

## 📊 Performance Optimization

### 1. Analyze Bundle Size

```bash
npm run build -- --mode analyze
```

### 2. Image Optimization

- Use WebP format
- Compress images before adding
- Use lazy loading for images below fold

### 3. Code Splitting

Already configured in Vite! Your app automatically splits code.

### 4. CDN Configuration

If using CloudFlare or AWS CloudFront:
- Enable caching for static assets
- Set cache headers
- Enable Brotli compression

## 🔄 CI/CD Setup

### GitHub Actions Example

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Netlify

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v2
    
    - name: Setup Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '18'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Build
      run: npm run build
    
    - name: Deploy to Netlify
      uses: netlify/actions/cli@master
      with:
        args: deploy --prod --dir=dist
      env:
        NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
        NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
```

## 🐛 Troubleshooting

### Build Fails

**Error: Out of memory**
```bash
NODE_OPTIONS=--max-old-space-size=4096 npm run build
```

**Module not found errors:**
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Routing Issues (404 on refresh)

Add redirect rules:

**Netlify** - Create `public/_redirects`:
```
/*    /index.html   200
```

**Vercel** - Create `vercel.json`:
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

### Assets Not Loading

Check your `base` path in `vite.config.js`:
```javascript
base: '/'  // For root domain
base: '/subfolder/'  // For subdirectory
```

### Slow Initial Load

1. Enable compression on your server
2. Use CDN for assets
3. Lazy load components
4. Optimize images

## 📱 Mobile Testing

Before going live, test on:
- iPhone (Safari)
- Android (Chrome)
- iPad (Safari)
- Various screen sizes

Use these tools:
- Chrome DevTools (Device Mode)
- BrowserStack
- Real devices if possible

## 🔐 Security Headers

Add security headers to your deployment:

**Netlify** - `netlify.toml`:
```toml
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    X-XSS-Protection = "1; mode=block"
    Referrer-Policy = "strict-origin-when-cross-origin"
```

## 📈 Post-Deployment

After deployment:

1. **Test everything again on live site**
2. **Submit to Google Search Console**
3. **Set up analytics** (Google Analytics, Plausible, etc.)
4. **Monitor performance** (Google PageSpeed Insights)
5. **Set up monitoring** (UptimeRobot, Pingdom)

## 🆘 Support

If you encounter issues:

1. Check the platform's documentation
2. Review error logs in deployment dashboard
3. Test locally with `npm run preview`
4. Check browser console for errors

---

**Congratulations!** 🎉 Your SaaS landing page is now live!
