import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <Zap className="h-8 w-8 text-yellow-400" />
              <span className="ml-2 text-xl font-bold">ElectroShop</span>
            </div>
            <p className="text-gray-400 mb-4">
              Your one-stop destination for premium electronics and tech gadgets.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-white transition-colors">Products</Link>
              </li>
              <li>
                <Link to="/cart" className="text-gray-400 hover:text-white transition-colors">Cart</Link>
              </li>
              <li>
                <Link to="#" className="text-gray-400 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="#" className="text-gray-400 hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products?category=TVs" className="text-gray-400 hover:text-white transition-colors">TVs</Link>
              </li>
              <li>
                <Link to="/products?category=Cameras" className="text-gray-400 hover:text-white transition-colors">Cameras</Link>
              </li>
              <li>
                <Link to="/products?category=Audio" className="text-gray-400 hover:text-white transition-colors">Audio</Link>
              </li>
              <li>
                <Link to="/products?category=Computers" className="text-gray-400 hover:text-white transition-colors">Computers</Link>
              </li>
              <li>
                <Link to="/products?category=Phones" className="text-gray-400 hover:text-white transition-colors">Phones</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-yellow-400 mr-2 mt-0.5" />
                <span className="text-gray-400">123 Tech Street, Digital City, 10001</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-yellow-400 mr-2" />
                <span className="text-gray-400">(123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-yellow-400 mr-2" />
                <span className="text-gray-400">info@electroshop.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} ElectroShop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;