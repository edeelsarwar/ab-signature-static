import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { formatPrice, isValidEmail, isValidPhone, generateOrderId } from '../utils/helpers';
import OrderSuccessModal from '../components/OrderSuccessModal';

/**
 * Order form page component
 * Features: Customer info form, order summary, form validation
 */
const Order = () => {
  const navigate = useNavigate();
  const { cartItems, getCartTotal, clearCart } = useCart();
  const [orderHistory, setOrderHistory] = useLocalStorage('ab-signature-orders', []);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    notes: '',
  });

  const [errors, setErrors] = useState({});
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [completedOrder, setCompletedOrder] = useState(null);

  const subtotal = getCartTotal();
  const shipping = 250;
  const total = subtotal + shipping;

  // Redirect if cart is empty
  if (cartItems.length === 0) {
    navigate('/cart');
    return null;
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!isValidPhone(formData.phone)) {
      newErrors.phone = 'Invalid phone number';
    }

    if (!formData.address.trim()) {
      newErrors.address = 'Address is required';
    }

    if (!formData.city.trim()) {
      newErrors.city = 'City is required';
    }

    if (!formData.postalCode.trim()) {
      newErrors.postalCode = 'Postal code is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Create order object
    const order = {
      orderId: generateOrderId(),
      date: new Date().toISOString(),
      customerName: formData.name,
      email: formData.email,
      phone: formData.phone,
      address: formData.address,
      city: formData.city,
      postalCode: formData.postalCode,
      notes: formData.notes,
      items: cartItems.map(item => ({
        id: item.id,
        name: item.name,
        sku: item.sku,
        price: item.price,
        quantity: item.quantity,
        image: item.images[0],
      })),
      subtotal,
      shipping,
      totalAmount: total,
      status: 'pending',
    };

    // Save to order history
    setOrderHistory([order, ...orderHistory]);
    
    // Clear cart
    clearCart();

    // Show success modal
    setCompletedOrder(order);
    setShowSuccessModal(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container-custom">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          Complete Your Order
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Order Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-md p-6 md:p-8">
              {/* Contact Information */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  Contact Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="form-label">
                      Full Name <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`form-input ${errors.name ? 'border-red-500' : ''}`}
                      placeholder="John Doe"
                    />
                    {errors.name && <p className="form-error">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="form-label">
                      Email <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`form-input ${errors.email ? 'border-red-500' : ''}`}
                      placeholder="john@example.com"
                    />
                    {errors.email && <p className="form-error">{errors.email}</p>}
                  </div>

                  <div className="md:col-span-2">
                    <label className="form-label">
                      Phone Number <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`form-input ${errors.phone ? 'border-red-500' : ''}`}
                      placeholder="+92 300 1234567"
                    />
                    {errors.phone && <p className="form-error">{errors.phone}</p>}
                  </div>
                </div>
              </div>

              {/* Shipping Address */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  Shipping Address
                </h2>
                <div className="space-y-6">
                  <div>
                    <label className="form-label">
                      Street Address <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className={`form-input ${errors.address ? 'border-red-500' : ''}`}
                      placeholder="123 Main Street, Apartment 4B"
                    />
                    {errors.address && <p className="form-error">{errors.address}</p>}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="form-label">
                        City <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        className={`form-input ${errors.city ? 'border-red-500' : ''}`}
                        placeholder="Karachi"
                      />
                      {errors.city && <p className="form-error">{errors.city}</p>}
                    </div>

                    <div>
                      <label className="form-label">
                        Postal Code <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        name="postalCode"
                        value={formData.postalCode}
                        onChange={handleInputChange}
                        className={`form-input ${errors.postalCode ? 'border-red-500' : ''}`}
                        placeholder="75500"
                      />
                      {errors.postalCode && <p className="form-error">{errors.postalCode}</p>}
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Notes */}
              <div className="mb-8">
                <label className="form-label">
                  Additional Notes (Optional)
                </label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  rows={4}
                  className="form-input"
                  placeholder="Any special instructions or requests..."
                />
              </div>

              {/* Submit Button */}
              <button type="submit" className="w-full btn-primary text-lg">
                Place Order
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>

              {/* Items */}
              <div className="space-y-4 mb-6 max-h-64 overflow-y-auto">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-3">
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-grow">
                      <h3 className="text-sm font-semibold text-gray-900 line-clamp-1">
                        {item.name}
                      </h3>
                      <p className="text-xs text-gray-600">Qty: {item.quantity}</p>
                      <p className="text-sm font-semibold text-primary-600">
                        {formatPrice(item.price * item.quantity)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Totals */}
              <div className="border-t pt-4 space-y-3">
                <div className="flex justify-between text-gray-700">
                  <span>Subtotal:</span>
                  <span className="font-semibold">{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Shipping:</span>
                  <span className="font-semibold">{formatPrice(shipping)}</span>
                </div>
                <div className="border-t pt-3 flex justify-between items-center">
                  <span className="text-lg font-bold text-gray-900">Total:</span>
                  <span className="text-2xl font-bold text-primary-600">
                    {formatPrice(total)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      <OrderSuccessModal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        order={completedOrder}
      />
    </div>
  );
};

export default Order;



