import { Link } from 'react-router-dom';

/**
 * 404 Not Found page component
 */
const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-16">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white rounded-xl shadow-md p-12">
            {/* 404 Illustration */}
            <div className="mb-8">
              <h1 className="text-9xl font-bold text-primary-600 mb-4">404</h1>
              <svg className="w-32 h-32 mx-auto text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>

            {/* Error Message */}
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Page Not Found
            </h2>
            <p className="text-gray-600 mb-8">
              Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/" className="btn-primary">
                Go to Home
              </Link>
              <Link to="/shop" className="btn-outline">
                Browse Products
              </Link>
            </div>

            {/* Quick Links */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-600 mb-4">You might be interested in:</p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link to="/shop" className="text-sm text-primary-600 hover:text-primary-700 font-medium">
                  Shop
                </Link>
                <span className="text-gray-300">•</span>
                <Link to="/about" className="text-sm text-primary-600 hover:text-primary-700 font-medium">
                  About Us
                </Link>
                <span className="text-gray-300">•</span>
                <Link to="/contact" className="text-sm text-primary-600 hover:text-primary-700 font-medium">
                  Contact
                </Link>
                <span className="text-gray-300">•</span>
                <Link to="/order-history" className="text-sm text-primary-600 hover:text-primary-700 font-medium">
                  Order History
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;



