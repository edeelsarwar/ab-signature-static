import { useLocalStorage } from './useLocalStorage';

/**
 * Custom hook for managing shopping cart
 * Provides methods to add, remove, update cart items
 * Persists cart data in localStorage
 * 
 * @returns {Object} Cart state and methods
 */
export const useCart = () => {
  const [cartItems, setCartItems] = useLocalStorage('ab-signature-cart', []);

  /**
   * Add item to cart or update quantity if exists
   * @param {Object} product - Product to add
   * @param {number} quantity - Quantity to add
   */
  const addToCart = (product, quantity = 1) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(item => item.id === product.id);
      
      if (existingItem) {
        // Update quantity of existing item
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      
      // Add new item
      return [...prevItems, { ...product, quantity }];
    });
  };

  /**
   * Remove item from cart
   * @param {number} productId - Product ID to remove
   */
  const removeFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter(item => item.id !== productId));
  };

  /**
   * Update item quantity
   * @param {number} productId - Product ID to update
   * @param {number} quantity - New quantity
   */
  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }

    setCartItems((prevItems) =>
      prevItems.map(item =>
        item.id === productId
          ? { ...item, quantity }
          : item
      )
    );
  };

  /**
   * Clear all items from cart
   */
  const clearCart = () => {
    setCartItems([]);
  };

  /**
   * Get total items count in cart
   * @returns {number} Total items count
   */
  const getCartCount = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  /**
   * Get cart total price
   * @returns {number} Total price
   */
  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  /**
   * Check if product is in cart
   * @param {number} productId - Product ID to check
   * @returns {boolean} Whether product is in cart
   */
  const isInCart = (productId) => {
    return cartItems.some(item => item.id === productId);
  };

  /**
   * Get item quantity from cart
   * @param {number} productId - Product ID
   * @returns {number} Quantity in cart
   */
  const getItemQuantity = (productId) => {
    const item = cartItems.find(item => item.id === productId);
    return item ? item.quantity : 0;
  };

  return {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartCount,
    getCartTotal,
    isInCart,
    getItemQuantity,
  };
};

export default useCart;


