import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-gray-900 text-white">
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1550009158-9ebf69173e03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
          alt="Electronics" 
          className="w-full h-full object-cover opacity-30"
        />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Next-Gen Electronics for the Modern Lifestyle
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Discover cutting-edge technology, premium gadgets, and smart devices that enhance your everyday experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/products" 
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-yellow-400 hover:bg-yellow-500 transition-colors"
            >
              Shop Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              to="#featured" 
              className="inline-flex items-center justify-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white hover:bg-opacity-10 transition-colors"
            >
              Featured Products
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;