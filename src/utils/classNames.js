import classnames from 'classnames';

/**
 * Utility wrapper around the classnames library
 * Simplifies conditional class application in components
 * 
 * @param {...any} args - Class names or conditional objects
 * @returns {string} Combined class string
 * 
 * @example
 * cn('base-class', { 'active': isActive }, optionalClass)
 */
export const cn = (...args) => {
  return classnames(...args);
};

export default cn;


