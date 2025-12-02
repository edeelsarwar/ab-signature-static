import { categories } from '../data/sampleProducts';
import cn from '../utils/classNames';

/**
 * Filter component for shop page
 * Provides category filtering and sort options
 */
const Filters = ({ selectedCategory, onCategoryChange, sortBy, onSortChange }) => {
  const sortOptions = [
    { value: 'default', label: 'Default' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'name', label: 'Name: A to Z' },
    { value: 'rating', label: 'Highest Rated' },
  ];

  return (
    <div className="bg-white rounded-xl shadow-md p-6 space-y-6">
      {/* Categories */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
        <div className="space-y-2">
          <button
            onClick={() => onCategoryChange('')}
            className={cn(
              'w-full text-left px-4 py-2 rounded-lg transition-colors',
              selectedCategory === ''
                ? 'bg-primary-50 text-primary-600 font-semibold'
                : 'text-gray-700 hover:bg-gray-100'
            )}
          >
            All Products
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={cn(
                'w-full text-left px-4 py-2 rounded-lg transition-colors',
                selectedCategory === category.id
                  ? 'bg-primary-50 text-primary-600 font-semibold'
                  : 'text-gray-700 hover:bg-gray-100'
              )}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Sort By */}
      <div className="border-t pt-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Sort By</h3>
        <select
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        >
          {sortOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      {/* Price Range Info */}
      <div className="border-t pt-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Price Range</h3>
        <p className="text-sm text-gray-600">
          Displaying products from Rs. 1,799 to Rs. 8,999
        </p>
      </div>
    </div>
  );
};

export default Filters;



