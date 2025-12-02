import cn from '../utils/classNames';

/**
 * Quantity selector component with increment/decrement buttons
 * Used in product detail and cart pages
 */
const QuantitySelector = ({ quantity, onQuantityChange, min = 1, max = 99, className }) => {
  const handleDecrement = () => {
    if (quantity > min) {
      onQuantityChange(quantity - 1);
    }
  };

  const handleIncrement = () => {
    if (quantity < max) {
      onQuantityChange(quantity + 1);
    }
  };

  const handleInputChange = (e) => {
    const value = parseInt(e.target.value) || min;
    const clampedValue = Math.max(min, Math.min(max, value));
    onQuantityChange(clampedValue);
  };

  return (
    <div className={cn('flex items-center space-x-2', className)}>
      <button
        onClick={handleDecrement}
        disabled={quantity <= min}
        className="w-10 h-10 rounded-lg border-2 border-gray-300 hover:border-primary-600 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:border-gray-300 flex items-center justify-center font-semibold text-gray-700 hover:text-primary-600 transition-colors"
        aria-label="Decrease quantity"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
        </svg>
      </button>

      <input
        type="number"
        value={quantity}
        onChange={handleInputChange}
        min={min}
        max={max}
        className="w-16 h-10 text-center border-2 border-gray-300 rounded-lg font-semibold focus:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-200"
      />

      <button
        onClick={handleIncrement}
        disabled={quantity >= max}
        className="w-10 h-10 rounded-lg border-2 border-gray-300 hover:border-primary-600 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:border-gray-300 flex items-center justify-center font-semibold text-gray-700 hover:text-primary-600 transition-colors"
        aria-label="Increase quantity"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
      </button>
    </div>
  );
};

export default QuantitySelector;



