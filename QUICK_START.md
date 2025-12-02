# Quick Start Guide - AB-Signature

## 🚀 Get Started in 3 Steps

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

The app will automatically open at `http://localhost:3000`

### 3. Start Building!

That's it! The application is now running and you can:
- Browse products at `/shop`
- View product details
- Add items to cart
- Place orders
- View order history

## 📝 Quick Commands

```bash
# Development
npm run dev          # Start dev server (port 3000)

# Production
npm run build        # Build for production
npm run preview      # Preview production build

# Code Quality
npm run lint         # Check code with ESLint
```

## 🎨 Quick Customization

### Change Product Data
Edit: `src/data/sampleProducts.js`

### Change Colors
Edit: `tailwind.config.js` (primary color palette)

### Change Logo/Brand
Edit: `src/components/Navbar.jsx` and `src/components/Footer.jsx`

## 📦 What's Included

✅ Complete React application with Vite
✅ 12 sample products across 4 categories
✅ Full shopping cart functionality
✅ Order form with validation
✅ Order history (localStorage)
✅ Responsive design (mobile-first)
✅ Search and filter products
✅ Product image gallery
✅ Smooth animations
✅ SEO-friendly routing

## 🔧 Troubleshooting

### Port 3000 Already in Use?
```bash
npm run dev -- --port 3001
```

### Need to Clear Cache?
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build Errors?
Make sure you have Node.js 16+ installed:
```bash
node --version
```

## 📱 Test on Mobile

1. Start dev server: `npm run dev`
2. Find your local IP: `ifconfig` or `ipconfig`
3. Access from mobile: `http://YOUR_IP:3000`

## 🌐 Deploy to Production

### Netlify (Easiest)
1. Push to GitHub
2. Connect to Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow prompts

### Manual Deploy
1. Build: `npm run build`
2. Upload `dist/` folder to any static host

## 💡 Tips

- Product images are from Unsplash (free to use)
- All data is stored in browser localStorage
- No backend required - fully static
- Cart persists across sessions
- Mobile responsive out of the box

## 📚 Learn More

See `README.md` for detailed documentation.

## 🆘 Need Help?

Check the main README.md file or contact:
- Email: info@ab-signature.com
- The codebase is well-commented for easy understanding

---

**Happy Coding! 🎉**



