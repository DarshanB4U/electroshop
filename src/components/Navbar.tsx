import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Menu, X, Search, Zap } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

const Navbar: React.FC = () => {
  const { getCartCount } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const { isAuthenticated, user, logout } = useAuth();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/products?search=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <nav className="bg-gray-900 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Zap className="h-8 w-8 text-yellow-400" />
              <span className="ml-2 text-xl font-bold">ElectroShop</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="py-1 px-4 pr-10 rounded-full bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 w-64"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit" className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <Search className="h-5 w-5 text-gray-400" />
              </button>
            </form>
            <Link to="/" className="hover:text-yellow-400 transition-colors">Home</Link>
            <Link to="/products" className="hover:text-yellow-400 transition-colors">Products</Link>
            <Link to="/cart" className="relative hover:text-yellow-400 transition-colors">
              <ShoppingCart className="h-6 w-6" />
              {getCartCount() > 0 && (
                <span className="absolute -top-2 -right-2 bg-yellow-400 text-gray-900 rounded-full h-5 w-5 flex items-center justify-center text-xs font-bold">
                  {getCartCount()}
                </span>
              )}
            </Link>
            {isAuthenticated ? (
              <>
                <span className="text-gray-300">Welcome, {user?.name}</span>
                <button 
                  onClick={logout}
                  className="hover:text-yellow-400 transition-colors"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link to="/login" className="hover:text-yellow-400 transition-colors">
                Login
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Link to="/cart" className="relative mr-4 hover:text-yellow-400 transition-colors">
              <ShoppingCart className="h-6 w-6" />
              {getCartCount() > 0 && (
                <span className="absolute -top-2 -right-2 bg-yellow-400 text-gray-900 rounded-full h-5 w-5 flex items-center justify-center text-xs font-bold">
                  {getCartCount()}
                </span>
              )}
            </Link>
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <form onSubmit={handleSearch} className="relative mb-3">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full py-2 px-4 pr-10 rounded-full bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit" className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <Search className="h-5 w-5 text-gray-400" />
              </button>
            </form>
            <Link 
              to="/" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/products" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;