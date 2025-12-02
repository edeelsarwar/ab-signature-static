import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { getProductById, products } from '../data/sampleProducts';
import { useCart } from '../hooks/useCart';
import { formatPrice } from '../utils/helpers';
import ProductGallery from '../components/ProductGallery';
import QuantitySelector from '../components/QuantitySelector';
import ProductCard from '../components/ProductCard';
import Modal from '../components/Modal';

/**
 * Product detail page component
 * Features: Image gallery, product details, add to cart, order form modal
 */
const Product = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = getProductById(id);
  const { addToCart, isInCart, getItemQuantity } = useCart();
  
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState('');
  const [showOrderModal, setShowOrderModal] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  useEffect(() => {
    if (!product) {
      navigate('/shop');
      return;
    }
    if (product.colors && product.colors.length > 0) {
      setSelectedColor(product.colors[0]);
    }
  }, [product, navigate]);

  if (!product) {
    return null;
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const handleOrderNow = () => {
    addToCart(product, quantity);
    navigate('/order');
  };

  // Get related products (same category, different product)
  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const inCart = isInCart(product.id);
  const cartQuantity = getItemQuantity(product.id);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container-custom">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Link to="/" className="hover:text-primary-600">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-primary-600">Shop</Link>
          <span>/</span>
          <span className="text-gray-900 font-medium">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Gallery */}
          <div>
            <ProductGallery images={product.images} productName={product.name} />
          </div>

          {/* Product Info */}
          <div>
            <div className="bg-white rounded-xl shadow-md p-8">
              {/* Product Title and SKU */}
              <div className="mb-6">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {product.name}
                </h1>
                <p className="text-gray-600">SKU: {product.sku}</p>
              </div>

              {/* Rating */}
              {product.rating && (
                <div className="flex items-center space-x-2 mb-6">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <span className="font-semibold text-gray-700">{product.rating}</span>
                </div>
              )}

              {/* Price */}
              <div className="mb-6">
                <span className="text-4xl font-bold text-primary-600">
                  {formatPrice(product.price)}
                </span>
              </div>

              {/* Stock Status */}
              <div className="mb-6">
                {product.inStock ? (
                  <span className="inline-flex items-center space-x-2 text-green-600 font-semibold">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>In Stock</span>
                  </span>
                ) : (
                  <span className="inline-flex items-center space-x-2 text-red-600 font-semibold">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    <span>Out of Stock</span>
                  </span>
                )}
              </div>

              {/* Description */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Description</h3>
                <p className="text-gray-700 leading-relaxed">{product.description}</p>
              </div>

              {/* Colors */}
              {product.colors && product.colors.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Available Colors</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.colors.map((color) => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={`px-4 py-2 rounded-lg border-2 font-medium transition-all ${
                          selectedColor === color
                            ? 'border-primary-600 bg-primary-50 text-primary-600'
                            : 'border-gray-300 text-gray-700 hover:border-primary-300'
                        }`}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Tags */}
              {product.tags && product.tags.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.tags.map((tag, index) => (
                      <span key={index} className="badge-primary">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity Selector */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Quantity</h3>
                <QuantitySelector
                  quantity={quantity}
                  onQuantityChange={setQuantity}
                />
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                  className="w-full btn-outline flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  <span>{addedToCart ? 'Added to Cart!' : 'Add to Cart'}</span>
                </button>

                <button
                  onClick={handleOrderNow}
                  disabled={!product.inStock}
                  className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Order Now
                </button>

                {inCart && (
                  <div className="text-center text-sm text-gray-600">
                    {cartQuantity} {cartQuantity === 1 ? 'item' : 'items'} in cart
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
              Related Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default Product;



