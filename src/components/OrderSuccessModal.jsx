import { useState } from 'react';
import Modal from './Modal';
import { copyToClipboard, formatDate } from '../utils/helpers';
import cn from '../utils/classNames';

/**
 * Order success modal component
 * Displays order confirmation with copy-to-clipboard functionality
 */
const OrderSuccessModal = ({ isOpen, onClose, order }) => {
  const [copied, setCopied] = useState(false);

  if (!order) return null;

  const handleCopyOrderId = async () => {
    const success = await copyToClipboard(order.orderId);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="md">
      <div className="text-center py-6">
        {/* Success Icon */}
        <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 animate-bounce-subtle">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        {/* Success Message */}
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Order Placed Successfully!</h2>
        <p className="text-gray-600 mb-6">
          Thank you for your order. We'll contact you shortly to confirm the details.
        </p>

        {/* Order ID */}
        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <div className="text-sm text-gray-600 mb-2">Order ID</div>
          <div className="flex items-center justify-center space-x-2">
            <code className="text-lg font-mono font-semibold text-primary-600">
              {order.orderId}
            </code>
            <button
              onClick={handleCopyOrderId}
              className={cn(
                'p-2 rounded-lg transition-all',
                copied
                  ? 'bg-green-100 text-green-600'
                  : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
              )}
              title="Copy Order ID"
            >
              {copied ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Order Details */}
        <div className="text-left bg-white border border-gray-200 rounded-lg p-4 mb-6 space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Date:</span>
            <span className="font-medium">{formatDate(order.date)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Customer:</span>
            <span className="font-medium">{order.customerName}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Email:</span>
            <span className="font-medium">{order.email}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Total Items:</span>
            <span className="font-medium">{order.items.reduce((sum, item) => sum + item.quantity, 0)}</span>
          </div>
          <div className="border-t pt-3 flex justify-between">
            <span className="font-semibold">Total Amount:</span>
            <span className="font-bold text-primary-600 text-lg">
              Rs. {order.totalAmount.toLocaleString('en-PK')}
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={() => {
              onClose();
              window.location.href = '/order-history';
            }}
            className="flex-1 btn-outline"
          >
            View Order History
          </button>
          <button
            onClick={() => {
              onClose();
              window.location.href = '/shop';
            }}
            className="flex-1 btn-primary"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default OrderSuccessModal;



