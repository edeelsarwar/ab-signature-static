import { Link } from 'react-router-dom';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { formatPrice, formatDate } from '../utils/helpers';

/**
 * Order history page component
 * Displays all past orders from localStorage
 */
const OrderHistory = () => {
  const [orderHistory] = useLocalStorage('ab-signature-orders', []);

  if (orderHistory.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Order History
          </h1>
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-xl shadow-md p-12">
              <svg className="w-24 h-24 mx-auto text-gray-300 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">No orders yet</h2>
              <p className="text-gray-600 mb-8">
                You haven't placed any orders yet. Start shopping to see your order history here!
              </p>
              <Link to="/shop" className="btn-primary">
                Start Shopping
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
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          Order History
        </h1>

        <div className="space-y-6">
          {orderHistory.map((order) => (
            <div key={order.orderId} className="bg-white rounded-xl shadow-md overflow-hidden">
              {/* Order Header */}
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-lg font-semibold text-gray-900">
                        Order #{order.orderId}
                      </h3>
                      <span className={`badge ${
                        order.status === 'completed' ? 'badge-success' :
                        order.status === 'pending' ? 'badge-warning' :
                        'badge-primary'
                      }`}>
                        {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">
                      Placed on {formatDate(order.date)}
                    </p>
                  </div>
                  <div className="text-left md:text-right">
                    <p className="text-sm text-gray-600">Total Amount</p>
                    <p className="text-2xl font-bold text-primary-600">
                      {formatPrice(order.totalAmount)}
                    </p>
                  </div>
                </div>
              </div>

              {/* Order Items */}
              <div className="p-6">
                <h4 className="font-semibold text-gray-900 mb-4">Order Items</h4>
                <div className="space-y-4">
                  {order.items.map((item, index) => (
                    <div key={index} className="flex gap-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                      <div className="flex-grow">
                        <h5 className="font-semibold text-gray-900">{item.name}</h5>
                        <p className="text-sm text-gray-600">SKU: {item.sku}</p>
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-sm text-gray-600">Qty: {item.quantity}</span>
                          <span className="font-semibold text-primary-600">
                            {formatPrice(item.price * item.quantity)}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Shipping Info */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-3">Shipping Information</h4>
                  <div className="text-sm text-gray-700 space-y-1">
                    <p><strong>Name:</strong> {order.customerName}</p>
                    <p><strong>Email:</strong> {order.email}</p>
                    <p><strong>Phone:</strong> {order.phone}</p>
                    <p><strong>Address:</strong> {order.address}, {order.city}, {order.postalCode}</p>
                    {order.notes && (
                      <p><strong>Notes:</strong> {order.notes}</p>
                    )}
                  </div>
                </div>

                {/* Order Summary */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex justify-between items-center text-gray-700 mb-2">
                    <span>Subtotal:</span>
                    <span className="font-semibold">{formatPrice(order.subtotal)}</span>
                  </div>
                  <div className="flex justify-between items-center text-gray-700 mb-3">
                    <span>Shipping:</span>
                    <span className="font-semibold">{formatPrice(order.shipping)}</span>
                  </div>
                  <div className="flex justify-between items-center border-t pt-3">
                    <span className="font-bold text-gray-900">Total:</span>
                    <span className="text-xl font-bold text-primary-600">
                      {formatPrice(order.totalAmount)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Back Button */}
        <div className="mt-8 text-center">
          <Link to="/shop" className="btn-outline">
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderHistory;



