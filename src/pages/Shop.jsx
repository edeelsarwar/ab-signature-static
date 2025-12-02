import { useState, useEffect, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products, getProductsByCategory, searchProducts } from '../data/sampleProducts';
import ProductCard from '../components/ProductCard';
import Filters from '../components/Filters';
import SearchBar from '../components/SearchBar';
import { scrollToTop } from '../utils/helpers';

/**
 * Shop page component
 * Features: Product listing, filtering, sorting, search
 */
const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || '');
  const [sortBy, setSortBy] = useState('default');
  const [searchQuery, setSearchQuery] = useState('');

  // Apply filters and search
  useEffect(() => {
    let result = [...products];

    // Filter by category
    if (selectedCategory) {
      result = getProductsByCategory(selectedCategory);
    }

    // Filter by search query
    if (searchQuery) {
      const searchResults = searchProducts(searchQuery);
      const searchIds = searchResults.map(p => p.id);
      result = result.filter(p => searchIds.includes(p.id));
    }

    // Sort products
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'rating':
        result.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
      default:
        // Keep default order
        break;
    }

    setFilteredProducts(result);
    scrollToTop();
  }, [selectedCategory, sortBy, searchQuery]);

  // Update category from URL params
  useEffect(() => {
    const category = searchParams.get('category') || '';
    setSelectedCategory(category);
  }, [searchParams]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    if (category) {
      setSearchParams({ category });
    } else {
      setSearchParams({});
    }
  };

  const handleSearch = useCallback((query) => {
    setSearchQuery(query);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container-custom">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Shop Our Collection
          </h1>
          <p className="text-gray-600">
            Browse through our premium selection of unstitched fabrics
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <SearchBar onSearch={handleSearch} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24">
              <Filters
                selectedCategory={selectedCategory}
                onCategoryChange={handleCategoryChange}
                sortBy={sortBy}
                onSortChange={setSortBy}
              />
            </div>
          </aside>

          {/* Products Grid */}
          <main className="lg:col-span-3">
            {/* Results Info */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-gray-600">
                Showing <span className="font-semibold">{filteredProducts.length}</span> products
              </p>
              
              {/* Mobile Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="lg:hidden px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="default">Default</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name: A to Z</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <svg className="w-24 h-24 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">No products found</h3>
                <p className="text-gray-500 mb-6">
                  {searchQuery 
                    ? `No results for "${searchQuery}". Try a different search term.`
                    : 'Try adjusting your filters or search criteria.'
                  }
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory('');
                    setSearchQuery('');
                    setSearchParams({});
                  }}
                  className="btn-primary"
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Shop;



