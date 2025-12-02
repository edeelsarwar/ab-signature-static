// Sample product data for AB-Signature unstitched fabric catalog
// Each product represents a fabric piece with multiple images, colors, and details

export const categories = [
  { id: 'cotton', name: 'Unstitched Cotton', slug: 'cotton' },
  { id: 'lawn', name: 'Lawn', slug: 'lawn' },
  { id: 'silk', name: 'Silk', slug: 'silk' },
  { id: 'chiffon', name: 'Chiffon', slug: 'chiffon' },
];

export const products = [
  {
    id: 1,
    name: 'Premium Cotton Cambric',
    category: 'cotton',
    price: 2499,
    sku: 'ABC-001-CTN',
    description: 'High-quality premium cotton cambric fabric perfect for summer wear. Breathable, soft, and comfortable with excellent color retention. Ideal for casual and semi-formal stitching.',
    colors: ['White', 'Beige', 'Sky Blue', 'Mint Green'],
    images: [
      'https://picsum.photos/600/800?random=1',
      'https://picsum.photos/600/800?random=11',
      'https://picsum.photos/600/800?random=12',
    ],
    featured: true,
    tags: ['Summer Collection', 'Breathable', 'Premium'],
    rating: 4.8,
    inStock: true,
  },
  {
    id: 2,
    name: 'Luxury Lawn Print',
    category: 'lawn',
    price: 3299,
    sku: 'ABS-002-LWN',
    description: 'Exquisite lawn fabric featuring intricate floral prints and delicate embroidery. Perfect for spring and summer collections with vibrant colors that stand out.',
    colors: ['Coral Pink', 'Royal Blue', 'Emerald Green'],
    images: [
      'https://picsum.photos/600/800?random=2',
      'https://picsum.photos/600/800?random=21',
      'https://picsum.photos/600/800?random=22',
    ],
    featured: true,
    tags: ['Printed', 'Summer', 'Floral'],
    rating: 4.9,
    inStock: true,
  },
  {
    id: 3,
    name: 'Elegant Silk Collection',
    category: 'silk',
    price: 5999,
    sku: 'ABS-003-SLK',
    description: 'Pure silk fabric with a lustrous finish, perfect for formal occasions and festive wear. Features rich texture and sophisticated drape that enhances any design.',
    colors: ['Maroon', 'Navy Blue', 'Black', 'Golden'],
    images: [
      'https://picsum.photos/600/800?random=3',
      'https://picsum.photos/600/800?random=31',
      'https://picsum.photos/600/800?random=32',
    ],
    featured: true,
    tags: ['Premium', 'Formal', 'Luxury'],
    rating: 5.0,
    inStock: true,
  },
  {
    id: 4,
    name: 'Chiffon Delight',
    category: 'chiffon',
    price: 2799,
    sku: 'ABS-004-CHF',
    description: 'Lightweight chiffon fabric with elegant flow and sheer beauty. Perfect for evening wear and special occasions with delicate embellishments.',
    colors: ['Peach', 'Lavender', 'Ivory'],
    images: [
      'https://picsum.photos/600/800?random=4',
      'https://picsum.photos/600/800?random=41',
      'https://picsum.photos/600/800?random=42',
    ],
    featured: false,
    tags: ['Lightweight', 'Evening Wear', 'Elegant'],
    rating: 4.6,
    inStock: true,
  },
  {
    id: 5,
    name: 'Cotton Voile Summer',
    category: 'cotton',
    price: 1899,
    sku: 'ABS-005-CTN',
    description: 'Soft cotton voile fabric perfect for casual summer outfits. Light weight with excellent breathability and smooth texture makes it ideal for daily wear.',
    colors: ['Yellow', 'Aqua', 'Peach', 'White'],
    images: [
      'https://picsum.photos/600/800?random=5',
      'https://picsum.photos/600/800?random=51',
      'https://picsum.photos/600/800?random=52',
    ],
    featured: false,
    tags: ['Casual', 'Daily Wear', 'Affordable'],
    rating: 4.5,
    inStock: true,
  },
  {
    id: 6,
    name: 'Royal Lawn Embroidered',
    category: 'lawn',
    price: 4599,
    sku: 'ABS-006-LWN',
    description: 'Premium lawn with intricate embroidery work and stone embellishments. This collection features traditional patterns with modern color combinations.',
    colors: ['Red', 'Teal', 'Purple'],
    images: [
      'https://picsum.photos/600/800?random=6',
      'https://picsum.photos/600/800?random=61',
      'https://picsum.photos/600/800?random=62',
    ],
    featured: false,
    tags: ['Embroidered', 'Traditional', 'Premium'],
    rating: 4.7,
    inStock: true,
  },
  {
    id: 7,
    name: 'Silk Organza Special',
    category: 'silk',
    price: 6799,
    sku: 'ABS-007-SLK',
    description: 'Delicate silk organza with transparent texture and crisp finish. Perfect for creating layered looks and formal evening wear with elegant draping.',
    colors: ['Champagne', 'Rose Gold', 'Silver'],
    images: [
      'https://picsum.photos/600/800?random=7',
      'https://picsum.photos/600/800?random=71',
      'https://picsum.photos/600/800?random=72',
    ],
    featured: false,
    tags: ['Luxury', 'Formal', 'Transparent'],
    rating: 4.9,
    inStock: false,
  },
  {
    id: 8,
    name: 'Digital Print Lawn',
    category: 'lawn',
    price: 2999,
    sku: 'ABS-008-LWN',
    description: 'Contemporary digital print lawn fabric featuring modern geometric and abstract patterns. High-resolution prints with fade-resistant colors.',
    colors: ['Multi-color', 'Blue Mix', 'Pink Mix'],
    images: [
      'https://picsum.photos/600/800?random=8',
      'https://picsum.photos/600/800?random=81',
      'https://picsum.photos/600/800?random=82',
    ],
    featured: true,
    tags: ['Modern', 'Digital Print', 'Trendy'],
    rating: 4.4,
    inStock: true,
  },
  {
    id: 9,
    name: 'Pure Cotton Jacquard',
    category: 'cotton',
    price: 3499,
    sku: 'ABS-009-CTN',
    description: 'Textured cotton jacquard with woven patterns and raised designs. Offers a rich look with excellent quality and durability for special occasions.',
    colors: ['Cream', 'Brown', 'Olive Green'],
    images: [
      'https://picsum.photos/600/800?random=9',
      'https://picsum.photos/600/800?random=91',
      'https://picsum.photos/600/800?random=92',
    ],
    featured: false,
    tags: ['Textured', 'Special Occasion', 'Quality'],
    rating: 4.6,
    inStock: true,
  },
  {
    id: 10,
    name: 'Chiffon Embellished',
    category: 'chiffon',
    price: 3899,
    sku: 'ABS-010-CHF',
    description: 'Premium chiffon with delicate sequin and bead work. Features hand-embellished borders and intricate detailing perfect for festive occasions.',
    colors: ['Black', 'Wine Red', 'Emerald'],
    images: [
      'https://picsum.photos/600/800?random=10',
      'https://picsum.photos/600/800?random=101',
      'https://picsum.photos/600/800?random=102',
    ],
    featured: false,
    tags: ['Embellished', 'Festive', 'Hand Work'],
    rating: 4.8,
    inStock: true,
  },
  {
    id: 11,
    name: 'Summer Lawn Basic',
    category: 'lawn',
    price: 1799,
    sku: 'ABS-011-LWN',
    description: 'Simple and elegant plain lawn fabric in solid colors. Perfect base for customization and ideal for creating your own designs with embroidery or prints.',
    colors: ['White', 'Off White', 'Black', 'Grey', 'Pink'],
    images: [
      'https://picsum.photos/600/800?random=11',
      'https://picsum.photos/600/800?random=111',
      'https://picsum.photos/600/800?random=112',
    ],
    featured: false,
    tags: ['Basic', 'Solid Color', 'Versatile'],
    rating: 4.3,
    inStock: true,
  },
  {
    id: 12,
    name: 'Banarsi Silk Premium',
    category: 'silk',
    price: 8999,
    sku: 'ABS-012-SLK',
    description: 'Authentic Banarsi silk with traditional brocade work and metallic threads. This luxurious fabric is perfect for weddings and grand celebrations.',
    colors: ['Red Gold', 'Green Gold', 'Blue Gold'],
    images: [
      'https://picsum.photos/600/800?random=12',
      'https://picsum.photos/600/800?random=121',
      'https://picsum.photos/600/800?random=122',
    ],
    featured: true,
    tags: ['Wedding', 'Traditional', 'Brocade'],
    rating: 5.0,
    inStock: true,
  },
];

// Helper function to get products by category
export const getProductsByCategory = (categoryId) => {
  if (!categoryId) return products;
  return products.filter(p => p.category === categoryId);
};

// Helper function to get featured products
export const getFeaturedProducts = () => {
  return products.filter(p => p.featured);
};

// Helper function to get product by ID
export const getProductById = (id) => {
  return products.find(p => p.id === parseInt(id));
};

// Helper function to search products
export const searchProducts = (query) => {
  const lowerQuery = query.toLowerCase();
  return products.filter(p => 
    p.name.toLowerCase().includes(lowerQuery) ||
    p.description.toLowerCase().includes(lowerQuery) ||
    p.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
  );
};

