import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
import { categories } from '../data/sampleProducts';
import cn from '../utils/classNames';

/**
 * Main navigation bar component
 * Features: Sticky header, mobile menu, cart count, category dropdown
 */
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { getCartCount } = useCart();
  const location = useLocation();
  const cartCount = getCartCount();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
    setIsCategoriesOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsCategoriesOpen(false);
  };

  const isActiveLink = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className={cn(
      'sticky top-0 z-50 bg-white transition-all duration-300',
      isScrolled ? 'shadow-md' : 'shadow-sm'
    )}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-primary-400 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">AB</span>
            </div>
            <span className="text-xl md:text-2xl font-bold text-gray-900">
              AB-Signature
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className={cn(
                'font-medium transition-colors',
                isActiveLink('/') ? 'text-primary-600' : 'text-gray-700 hover:text-primary-600'
              )}
            >
              Home
            </Link>
            <Link
              to="/shop"
              className={cn(
                'font-medium transition-colors',
                isActiveLink('/shop') ? 'text-primary-600' : 'text-gray-700 hover:text-primary-600'
              )}
            >
              Shop
            </Link>
            
            {/* Categories Dropdown */}
            <div className="relative">
              <button
                className="font-medium text-gray-700 hover:text-primary-600 transition-colors flex items-center space-x-1"
                onMouseEnter={() => setIsCategoriesOpen(true)}
                onMouseLeave={() => setIsCategoriesOpen(false)}
              >
                <span>Categories</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isCategoriesOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg py-2 animate-fadeIn"
                  onMouseEnter={() => setIsCategoriesOpen(true)}
                  onMouseLeave={() => setIsCategoriesOpen(false)}
                >
                  {categories.map((category) => (
                    <Link
                      key={category.id}
                      to={`/shop?category=${category.id}`}
                      className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/about"
              className={cn(
                'font-medium transition-colors',
                isActiveLink('/about') ? 'text-primary-600' : 'text-gray-700 hover:text-primary-600'
              )}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={cn(
                'font-medium transition-colors',
                isActiveLink('/contact') ? 'text-primary-600' : 'text-gray-700 hover:text-primary-600'
              )}
            >
              Contact
            </Link>
          </div>

          {/* Cart and Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <Link to="/cart" className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200 animate-slideIn">
            <div className="flex flex-col space-y-3">
              <Link
                to="/"
                className={cn(
                  'px-4 py-2 rounded-lg font-medium transition-colors',
                  isActiveLink('/') ? 'bg-primary-50 text-primary-600' : 'text-gray-700 hover:bg-gray-100'
                )}
              >
                Home
              </Link>
              <Link
                to="/shop"
                className={cn(
                  'px-4 py-2 rounded-lg font-medium transition-colors',
                  isActiveLink('/shop') ? 'bg-primary-50 text-primary-600' : 'text-gray-700 hover:bg-gray-100'
                )}
              >
                Shop
              </Link>
              
              {/* Mobile Categories */}
              <div className="pl-4">
                <div className="text-sm font-semibold text-gray-500 mb-2">Categories</div>
                {categories.map((category) => (
                  <Link
                    key={category.id}
                    to={`/shop?category=${category.id}`}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    {category.name}
                  </Link>
                ))}
              </div>

              <Link
                to="/about"
                className={cn(
                  'px-4 py-2 rounded-lg font-medium transition-colors',
                  isActiveLink('/about') ? 'bg-primary-50 text-primary-600' : 'text-gray-700 hover:bg-gray-100'
                )}
              >
                About
              </Link>
              <Link
                to="/contact"
                className={cn(
                  'px-4 py-2 rounded-lg font-medium transition-colors',
                  isActiveLink('/contact') ? 'bg-primary-50 text-primary-600' : 'text-gray-700 hover:bg-gray-100'
                )}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;



