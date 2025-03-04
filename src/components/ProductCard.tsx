import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Star } from 'lucide-react';
import { Product } from '../services/api';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <Link to={`/product/${product.id}`} className="group">
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
        <div className="relative h-48 overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {product.stock < 5 && (
            <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
              Low Stock
            </div>
          )}
          {product.featured && (
            <div className="absolute top-2 right-2 bg-yellow-400 text-gray-900 text-xs font-bold px-2 py-1 rounded">
              Featured
            </div>
          )}
        </div>
        
        <div className="p-4">
          <div className="flex items-center mb-1">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  size={16} 
                  fill={i < Math.floor(product.rating) ? "currentColor" : "none"} 
                  className={i < Math.floor(product.rating) ? "text-yellow-400" : "text-gray-300"}
                />
              ))}
            </div>
            <span className="text-sm text-gray-600 ml-1">({product.rating})</span>
          </div>
          
          <h3 className="text-lg font-semibold text-gray-800 mb-1 line-clamp-1">{product.name}</h3>
          
          <div className="text-sm text-gray-500 mb-2">{product.category}</div>
          
          <div className="flex justify-between items-center">
            <span className="text-lg font-bold text-gray-900">₹{product.price.toFixed(2)}</span>
            
            <button 
              onClick={handleAddToCart}
              className="bg-gray-900 text-white p-2 rounded-full hover:bg-yellow-500 transition-colors"
              aria-label="Add to cart"
            >
              <ShoppingCart size={18} />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;