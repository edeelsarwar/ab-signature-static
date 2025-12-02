import { useState } from 'react';
import { Link } from 'react-router-dom';
import { formatPrice } from '../utils/helpers';
import cn from '../utils/classNames';

/**
 * Product card component for displaying product preview
 * Shows product image, name, price, and tags
 * Used in grid layouts on Shop and Home pages
 */
const ProductCard = ({ product, className }) => {
  const { id, name, price, images, tags, inStock, rating } = product;
  const [imageError, setImageError] = useState(false);
  const [imageSrc, setImageSrc] = useState(images && images.length > 0 ? images[0] : '');

  // Fallback image if main image fails to load
  const fallbackImage = 'https://via.placeholder.com/600x800/e5604e/ffffff?text=' + encodeURIComponent(name);

  const handleImageError = () => {
    if (!imageError) {
      setImageError(true);
      setImageSrc(fallbackImage);
    }
  };

  return (
    <Link
      to={`/product/${id}`}
      className={cn(
        'group bg-white rounded-xl shadow-md overflow-hidden product-card',
        className
      )}
    >
      {/* Product Image */}
      <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            loading="lazy"
            onError={handleImageError}
            onLoad={() => setImageError(false)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-200">
            <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        )}
        
        {/* Stock Badge */}
        {!inStock && (
          <div className="absolute top-3 right-3 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
            Out of Stock
          </div>
        )}

        {/* Rating */}
        {rating && (
          <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-gray-900 text-xs font-semibold px-2 py-1 rounded-full flex items-center space-x-1">
            <svg className="w-3 h-3 text-yellow-400 fill-current" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
            <span>{rating}</span>
          </div>
        )}

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
          <span className="text-white font-semibold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
            View Details
          </span>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-primary-600 transition-colors">
          {name}
        </h3>
        
        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-3">
            {tags.slice(0, 2).map((tag, index) => (
              <span
                key={index}
                className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Price */}
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-primary-600">
            {formatPrice(price)}
          </span>
          <button
            className="text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors"
            onClick={(e) => {
              e.preventDefault();
              // This will be handled by the Link navigation
            }}
          >
            View →
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;

