import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
import { formatPrice } from '../utils/helpers';
import QuantitySelector from '../components/QuantitySelector';

/**
 * Shopping cart page component
 * Features: Cart items list, quantity update, remove items, checkout
 */
const Cart = () => {
  const navigate = useNavigate();
  const { cartItems, updateQuantity, removeFromCart, getCartTotal, clearCart } = useCart();

  const subtotal = getCartTotal();
  const shipping = subtotal > 0 ? 250 : 0; // Flat shipping rate
  const total = subtotal + shipping;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-xl shadow-md p-12">
              <svg className="w-24 h-24 mx-auto text-gray-300 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Your cart is empty</h2>
              <p className="text-gray-600 mb-8">
                Looks like you haven't added any items to your cart yet. Start shopping to fill it up!
              </p>
              <Link to="/shop" className="btn-primary">
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container-custom">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Shopping Cart
          </h1>
          <button
            onClick={clearCart}
            className="text-red-600 hover:text-red-700 font-medium transition-colors"
          >
            Clear Cart
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="p-6">
                  <div className="flex flex-col sm:flex-row gap-6">
                    {/* Product Image */}
                    <Link
                      to={`/product/${item.id}`}
                      className="flex-shrink-0 w-full sm:w-32 h-32 bg-gray-100 rounded-lg overflow-hidden"
                    >
                      <img
                        src={item.images[0]}
                        alt={item.name}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </Link>

                    {/* Product Details */}
                    <div className="flex-grow">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <Link
                            to={`/product/${item.id}`}
                            className="text-lg font-semibold text-gray-900 hover:text-primary-600 transition-colors"
                          >
                            {item.name}
                          </Link>
                          <p className="text-sm text-gray-600 mt-1">SKU: {item.sku}</p>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-gray-400 hover:text-red-600 transition-colors p-1"
                          aria-label="Remove item"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>

                      {/* Price and Quantity */}
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-4">
                        <div className="text-xl font-bold text-primary-600">
                          {formatPrice(item.price)}
                        </div>
                        <QuantitySelector
                          quantity={item.quantity}
                          onQuantityChange={(newQuantity) => updateQuantity(item.id, newQuantity)}
                        />
                      </div>

                      {/* Subtotal */}
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">Subtotal:</span>
                          <span className="text-lg font-semibold text-gray-900">
                            {formatPrice(item.price * item.quantity)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-700">
                  <span>Subtotal:</span>
                  <span className="font-semibold">{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Shipping:</span>
                  <span className="font-semibold">{formatPrice(shipping)}</span>
                </div>
                <div className="border-t pt-4 flex justify-between items-center">
                  <span className="text-lg font-bold text-gray-900">Total:</span>
                  <span className="text-2xl font-bold text-primary-600">
                    {formatPrice(total)}
                  </span>
                </div>
              </div>

              <button
                onClick={() => navigate('/order')}
                className="w-full btn-primary mb-3"
              >
                Proceed to Order
              </button>

              <Link
                to="/shop"
                className="block text-center text-primary-600 hover:text-primary-700 font-medium transition-colors"
              >
                ← Continue Shopping
              </Link>

              {/* Info */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="space-y-3 text-sm text-gray-600">
                  <div className="flex items-start space-x-2">
                    <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Free returns within 7 days</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Secure checkout</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Quality guaranteed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;



