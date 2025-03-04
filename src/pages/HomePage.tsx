import React from 'react';
import Hero from '../components/Hero';
import ProductGrid from '../components/ProductGrid';
import { useProducts } from '../context/ProductsContext';
import { ArrowRight, Truck, ShieldCheck, RotateCcw, HeadphonesIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  const { products } = useProducts();
  const featuredProducts = products.filter(product => product.featured);
  
  return (
    <div>
      <Hero />
      
      {/* Featured Products */}
      <section id="featured" className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Featured Products</h2>
            <Link to="/products" className="text-yellow-600 hover:text-yellow-700 flex items-center">
              View All <ArrowRight className="ml-1 h-5 w-5" />
            </Link>
          </div>
          <ProductGrid products={featuredProducts} />
        </div>
      </section>
      
      {/* Categories */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link to="/products?category=TVs" className="group">
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-lg hover:-translate-y-1">
                <div className="h-40 bg-gray-200 relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1593784991095-a205069470b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" 
                    alt="TVs" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-gray-900">TVs</h3>
                </div>
              </div>
            </Link>
            <Link to="/products?category=Cameras" className="group">
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-lg hover:-translate-y-1">
                <div className="h-40 bg-gray-200 relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" 
                    alt="Cameras" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-gray-900">Cameras</h3>
                </div>
              </div>
            </Link>
            <Link to="/products?category=Audio" className="group">
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-lg hover:-translate-y-1">
                <div className="h-40 bg-gray-200 relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" 
                    alt="Audio" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-gray-900">Audio</h3>
                </div>
              </div>
            </Link>
            <Link to="/products?category=Phones" className="group">
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-lg hover:-translate-y-1">
                <div className="h-40 bg-gray-200 relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1598327105666-5b89351aff97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" 
                    alt="Phones" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-gray-900">Phones</h3>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Features */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Shop With Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-yellow-100 text-yellow-600 mb-4">
                <Truck className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Free Shipping</h3>
              <p className="text-gray-600">On all orders over ₹99</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-yellow-100 text-yellow-600 mb-4">
                <ShieldCheck className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">2-Year Warranty</h3>
              <p className="text-gray-600">On all our products</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-yellow-100 text-yellow-600 mb-4">
                <RotateCcw className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">30-Day Returns</h3>
              <p className="text-gray-600">Hassle-free return policy</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-yellow-100 text-yellow-600 mb-4">
                <HeadphonesIcon className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600">Expert assistance anytime</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Newsletter */}
      <section className="py-12 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest product announcements, exclusive offers, and tech tips.
          </p>
          <form className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-3 rounded-l-md focus:outline-none text-gray-900"
              required
            />
            <button
              type="submit"
              className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-r-md font-medium hover:bg-yellow-500 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default HomePage;