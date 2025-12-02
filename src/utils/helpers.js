/**
 * Format price to currency string
 * @param {number} price - Price in smallest currency unit (e.g., cents/paisa)
 * @returns {string} Formatted price string
 */
export const formatPrice = (price) => {
  return `Rs. ${price.toLocaleString('en-PK')}`;
};

/**
 * Generate a random order ID
 * @returns {string} Random order ID
 */
export const generateOrderId = () => {
  const timestamp = Date.now().toString(36);
  const random = Math.random().toString(36).substring(2, 8);
  return `ABS-${timestamp}-${random}`.toUpperCase();
};

/**
 * Copy text to clipboard
 * @param {string} text - Text to copy
 * @returns {Promise<boolean>} Success status
 */
export const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    // Fallback for older browsers
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand('copy');
      document.body.removeChild(textArea);
      return true;
    } catch (error) {
      document.body.removeChild(textArea);
      return false;
    }
  }
};

/**
 * Format date to readable string
 * @param {Date|string} date - Date object or string
 * @returns {string} Formatted date string
 */
export const formatDate = (date) => {
  const d = new Date(date);
  return d.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
};

/**
 * Validate email format
 * @param {string} email - Email to validate
 * @returns {boolean} Validation result
 */
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validate phone number (Pakistan format)
 * @param {string} phone - Phone number to validate
 * @returns {boolean} Validation result
 */
export const isValidPhone = (phone) => {
  // Accepts formats: 03001234567, +923001234567, 3001234567
  const phoneRegex = /^(\+92|92|0)?[0-9]{10}$/;
  return phoneRegex.test(phone.replace(/[\s-]/g, ''));
};

/**
 * Scroll to top of page smoothly
 */
export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

/**
 * Debounce function to limit function calls
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} Debounced function
 */
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};


