import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ProductGrid from '../components/ProductGrid';
import { categories, Product } from '../data/products';
import { Filter, SlidersHorizontal } from 'lucide-react';
import { useProducts } from '../context/ProductsContext';

const ProductsPage: React.FC = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const categoryParam = queryParams.get('category');
  const { products } = useProducts();
  
  const [selectedCategory, setSelectedCategory] = useState<string>(categoryParam || 'All');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000000]);
  const [sortBy, setSortBy] = useState<string>('featured');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    let filtered = [...products];
    
    // Add search filter
    if (searchQuery) {
      filtered = filtered.filter(product => 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }
    
    // Filter by price range
    filtered = filtered.filter(
      product => product.price >= priceRange[0] && product.price <= priceRange[1]
    );
    
    // Sort products
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'featured':
      default:
        filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
    }
    
    setFilteredProducts(filtered);
  }, [selectedCategory, priceRange, sortBy, products, searchQuery]);
  
  useEffect(() => {
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [categoryParam]);
  
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const search = params.get('search');
    if (search) {
      setSearchQuery(search);
    }
  }, [location]);

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };
  
  console.log('Current products:', products);
  console.log('Filtered products:', filteredProducts);

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-4 md:mb-0">All Products</h1>
          
          <div className="flex items-center">
            <div className="mr-4">
              <label htmlFor="sort" className="sr-only">Sort by</label>
              <select
                id="sort"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm rounded-md"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
            
            <button
              onClick={toggleFilters}
              className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 md:hidden"
            >
              <Filter className="h-5 w-5 mr-2" />
              Filters
            </button>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters - Desktop */}
          <div className="hidden md:block w-64 bg-white p-6 rounded-lg shadow-sm">
            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-900 mb-3 flex items-center">
                <SlidersHorizontal className="h-5 w-5 mr-2" />
                Filters
              </h3>
              <hr className="mb-4" />
              
              <div className="mb-6">
                <h4 className="font-medium text-gray-700 mb-2">Categories</h4>
                <div className="space-y-2">
                  {categories.map(category => (
                    <div key={category} className="flex items-center">
                      <input
                        id={`category-${category}`}
                        name="category"
                        type="radio"
                        checked={selectedCategory === category}
                        onChange={() => setSelectedCategory(category)}
                        className="h-4 w-4 text-yellow-600 focus:ring-yellow-500 border-gray-300"
                      />
                      <label htmlFor={`category-${category}`} className="ml-3 text-sm text-gray-600">
                        {category}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-700 mb-2">Price Range</h4>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">₹{priceRange[0]}</span>
                    <span className="text-sm text-gray-500">₹{priceRange[1]}</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="1000000"
                    step="100"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Filters - Mobile */}
          {showFilters && (
            <div className="md:hidden bg-white p-6 rounded-lg shadow-sm mb-6">
              <div className="mb-6">
                <h3 className="text-lg font-medium text-gray-900 mb-3 flex items-center">
                  <SlidersHorizontal className="h-5 w-5 mr-2" />
                  Filters
                </h3>
                <hr className="mb-4" />
                
                <div className="mb-6">
                  <h4 className="font-medium text-gray-700 mb-2">Categories</h4>
                  <div className="space-y-2">
                    {categories.map(category => (
                      <div key={category} className="flex items-center">
                        <input
                          id={`mobile-category-${category}`}
                          name="mobile-category"
                          type="radio"
                          checked={selectedCategory === category}
                          onChange={() => setSelectedCategory(category)}
                          className="h-4 w-4 text-yellow-600 focus:ring-yellow-500 border-gray-300"
                        />
                        <label htmlFor={`mobile-category-${category}`} className="ml-3 text-sm text-gray-600">
                          {category}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">Price Range</h4>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">₹{priceRange[0]}</span>
                      <span className="text-sm text-gray-500">₹{priceRange[1]}</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="1000000"
                      step="100"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Product Grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
                <p className="text-gray-600">Try adjusting your filters to find what you're looking for.</p>
              </div>
            ) : (
              <>
                <p className="text-gray-600 mb-6">{filteredProducts.length} products found</p>
                <ProductGrid products={filteredProducts} />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;