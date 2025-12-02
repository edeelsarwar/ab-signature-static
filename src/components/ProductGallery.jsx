import { useState } from 'react';
import cn from '../utils/classNames';

/**
 * Product image gallery component
 * Displays main image with thumbnails
 * Allows clicking thumbnails to change main image
 */
const ProductGallery = ({ images, productName }) => {
  const [selectedImage, setSelectedImage] = useState(0);

  if (!images || images.length === 0) {
    return (
      <div className="aspect-[3/4] bg-gray-200 rounded-xl flex items-center justify-center">
        <span className="text-gray-400">No image available</span>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative aspect-[3/4] bg-gray-100 rounded-xl overflow-hidden">
        <img
          src={images[selectedImage]}
          alt={`${productName} - View ${selectedImage + 1}`}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.src = `https://via.placeholder.com/600x800/e5604e/ffffff?text=${encodeURIComponent(productName)}`;
          }}
        />
        
        {/* Navigation Arrows for Main Image */}
        {images.length > 1 && (
          <>
            <button
              onClick={() => setSelectedImage((prev) => (prev === 0 ? images.length - 1 : prev - 1))}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all"
              aria-label="Previous image"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => setSelectedImage((prev) => (prev === images.length - 1 ? 0 : prev + 1))}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all"
              aria-label="Next image"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}

        {/* Image Counter */}
        {images.length > 1 && (
          <div className="absolute bottom-4 right-4 bg-black/60 text-white text-sm px-3 py-1 rounded-full">
            {selectedImage + 1} / {images.length}
          </div>
        )}
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-3">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={cn(
                'relative aspect-square rounded-lg overflow-hidden border-2 transition-all',
                selectedImage === index
                  ? 'border-primary-600 ring-2 ring-primary-200'
                  : 'border-gray-200 hover:border-primary-300'
              )}
            >
              <img
                src={image}
                alt={`${productName} thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = `https://via.placeholder.com/150x150/e5604e/ffffff?text=Image`;
                }}
              />
              {selectedImage === index && (
                <div className="absolute inset-0 bg-primary-600/10"></div>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductGallery;

