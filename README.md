# AB-Signature - Premium Unstitched Fabrics Catalog

A beautiful, modern, and fully responsive static React application built with Vite for showcasing and ordering unstitched fabrics. This project features a complete e-commerce-like experience with shopping cart, order form, and order history - all running entirely client-side using localStorage.

![AB-Signature](https://via.placeholder.com/800x400/e5604e/ffffff?text=AB-Signature)

## 🌟 Features

### Core Functionality
- **Home Page**: Hero section, featured categories, and featured products
- **Shop Page**: Product listing with filters, search, and sorting
- **Product Detail**: Image gallery, specifications, and add to cart
- **Shopping Cart**: Manage items, update quantities, and view totals
- **Order Form**: Complete checkout with form validation
- **Order History**: View all past orders stored in localStorage
- **About & Contact Pages**: Company information and contact form

### Technical Features
- ⚡ Built with Vite for lightning-fast development
- ⚛️ React 18 with hooks-only approach
- 🎨 Tailwind CSS for beautiful, responsive styling
- 🛣️ React Router for client-side routing
- 💾 localStorage for cart and order persistence
- 📱 Mobile-first responsive design
- ♿ Keyboard accessible components
- 🎭 Smooth animations and transitions
- 🔍 Client-side search and filtering

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. **Clone or navigate to the project directory**
   ```bash
   cd "AB Signature -static"
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

   The application will open automatically at `http://localhost:3000`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality

## 📁 Project Structure

```
AB Signature -static/
├── public/                  # Static assets
├── src/
│   ├── components/         # Reusable components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── ProductCard.jsx
│   │   ├── ProductGallery.jsx
│   │   ├── Modal.jsx
│   │   ├── QuantitySelector.jsx
│   │   ├── Filters.jsx
│   │   ├── SearchBar.jsx
│   │   ├── LoadingSpinner.jsx
│   │   └── OrderSuccessModal.jsx
│   ├── pages/              # Page components
│   │   ├── Home.jsx
│   │   ├── Shop.jsx
│   │   ├── Product.jsx
│   │   ├── Cart.jsx
│   │   ├── Order.jsx
│   │   ├── OrderHistory.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   └── NotFound.jsx
│   ├── data/               # Static data
│   │   └── sampleProducts.js
│   ├── hooks/              # Custom React hooks
│   │   ├── useLocalStorage.js
│   │   └── useCart.js
│   ├── utils/              # Utility functions
│   │   ├── classNames.js
│   │   └── helpers.js
│   ├── App.jsx             # Main app component
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🎨 Customization

### Changing Product Data

Edit `/src/data/sampleProducts.js` to modify products:

```javascript
{
  id: 1,
  name: 'Product Name',
  category: 'cotton', // cotton, lawn, silk, or chiffon
  price: 2499,
  sku: 'ABC-001-CTN',
  description: 'Product description...',
  colors: ['Color1', 'Color2'],
  images: [
    'https://example.com/image1.jpg',
    'https://example.com/image2.jpg',
  ],
  featured: true,
  tags: ['Tag1', 'Tag2'],
  rating: 4.8,
  inStock: true,
}
```

### Adding New Categories

1. Update categories in `/src/data/sampleProducts.js`:
   ```javascript
   export const categories = [
     { id: 'new-category', name: 'New Category', slug: 'new-category' },
     // ... existing categories
   ];
   ```

2. Add products with the new category ID

### Changing Product Images

Replace image URLs in `sampleProducts.js` with:
- Your own image URLs
- Images from `/public` folder (e.g., `/images/product.jpg`)
- Placeholder services like:
  - `https://via.placeholder.com/600x800`
  - `https://images.unsplash.com/...`

### Styling Customization

Modify Tailwind configuration in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Your custom color palette
      },
    },
  },
}
```

Update global styles in `src/index.css`.

## 🎯 Key Features Explained

### Shopping Cart
- Stored in localStorage with the key `ab-signature-cart`
- Persists across browser sessions
- Automatic quantity management
- Real-time total calculation

### Order Management
- Orders stored in localStorage with key `ab-signature-orders`
- Generates unique order IDs
- Complete order history with details
- Copy order ID to clipboard feature

### Form Validation
- Client-side validation for all forms
- Email and phone number format validation
- Required field checking
- Real-time error feedback

### Responsive Design
- Mobile-first approach
- Breakpoints: xs (475px), sm (640px), md (768px), lg (1024px), xl (1280px), 2xl (1536px)
- Touch-friendly interfaces
- Optimized for all screen sizes

## 🔧 Technical Details

### State Management
- React hooks (useState, useEffect)
- Custom hooks for cart and localStorage
- No external state management library needed

### Routing
- React Router v6
- Client-side navigation
- Scroll to top on route change
- 404 error handling

### Performance
- Lazy loading images
- Debounced search input
- Optimized re-renders
- Vite's fast HMR (Hot Module Replacement)

## 📦 Building for Production

1. **Create production build**
   ```bash
   npm run build
   ```

2. **Preview production build**
   ```bash
   npm run preview
   ```

3. **Deploy**
   - Upload the `dist` folder to any static hosting service
   - Supports: Netlify, Vercel, GitHub Pages, AWS S3, etc.

### Deployment Tips

**Netlify/Vercel:**
- Build command: `npm run build`
- Publish directory: `dist`
- Add redirect rules for SPA routing

**GitHub Pages:**
- Update `vite.config.js` with base path
- Use GitHub Actions for automatic deployment

## 🎨 Design Decisions

### Color Scheme
- Primary: Warm red/coral tones (#e5604e)
- Neutral: Grays for text and backgrounds
- Semantic colors for success, warning, error states

### Typography
- System font stack for optimal performance
- Clear hierarchy with size and weight variations

### User Experience
- Smooth transitions and animations
- Clear call-to-action buttons
- Informative empty states
- Loading and success feedback

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Kill the process using port 3000
npx kill-port 3000
# Or use a different port
npm run dev -- --port 3001
```

### Build Errors
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Styles Not Loading
```bash
# Ensure Tailwind is processing correctly
npm run dev
# Check browser console for errors
```

## 📝 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

This is a demonstration project. Feel free to:
- Fork and modify for your own use
- Submit issues for bugs
- Suggest improvements

## 📄 License

This project is open source and available for personal and commercial use.

## 🙏 Acknowledgments

- Built with [Vite](https://vitejs.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Heroicons](https://heroicons.com/)
- Product images from [Unsplash](https://unsplash.com/)

## 📞 Support

For questions or support:
- Email: info@ab-signature.com
- Phone: +92 300 1234567

---

**Built with ❤️ by AB-Signature Team**



