import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingCart, Star, Truck, ShieldCheck, ArrowLeft } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useProducts } from '../context/ProductsContext';
import ProductGrid from '../components/ProductGrid';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const { products } = useProducts();
  const [quantity, setQuantity] = useState(1);
  
  const product = products.find(p => p.id === Number(id));
  
  const relatedProducts = products
    .filter(p => p.category === product?.category && p.id !== product?.id)
    .slice(0, 4);
  
  useEffect(() => {
    // Reset quantity when product changes
    setQuantity(1);
    // Scroll to top when product changes
    window.scrollTo(0, 0);
  }, [id]);
  
  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h2>
        <p className="text-gray-600 mb-6">The product you're looking for doesn't exist or has been removed.</p>
        <Link 
          to="/products" 
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800 transition-colors"
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          Back to Products
        </Link>
      </div>
    );
  }
  
  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
  };
  
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link 
          to="/products" 
          className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6"
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          Back to Products
        </Link>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Product Image */}
          <div className="bg-gray-100 rounded-lg overflow-hidden">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-contain object-center"
              style={{ maxHeight: '500px' }}
            />
          </div>
          
          {/* Product Details */}
          <div>
            <div className="mb-2">
              <span className="inline-block bg-gray-200 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">
                {product.category}
              </span>
              {product.stock < 5 && (
                <span className="inline-block bg-red-100 text-red-800 text-sm font-medium px-3 py-1 rounded-full ml-2">
                  Low Stock: {product.stock} left
                </span>
              )}
            </div>
            
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
            
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={20} 
                    fill={i < Math.floor(product.rating) ? "currentColor" : "none"} 
                    className={i < Math.floor(product.rating) ? "text-yellow-400" : "text-gray-300"}
                  />
                ))}
              </div>
              <span className="text-gray-600 ml-2">{product.rating} out of 5</span>
            </div>
            
            <p className="text-3xl font-bold text-gray-900 mb-6">₹{product.price.toFixed(2)}</p>
            
            <div className="border-t border-b border-gray-200 py-6 mb-6">
              <p className="text-gray-700 mb-4">{product.description}</p>
              
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center">
                  <Truck className="h-5 w-5 text-green-600 mr-2" />
                  <span className="text-sm text-gray-600">Free shipping over ₹99</span>
                </div>
                <div className="flex items-center">
                  <ShieldCheck className="h-5 w-5 text-green-600 mr-2" />
                  <span className="text-sm text-gray-600">2-Year Warranty</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center mb-6">
              <label htmlFor="quantity" className="mr-4 text-gray-700 font-medium">Quantity:</label>
              <div className="flex items-center border border-gray-300 rounded-md">
                <button 
                  onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                  className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                >
                  -
                </button>
                <input
                  type="number"
                  id="quantity"
                  min="1"
                  max={product.stock}
                  value={quantity}
                  onChange={(e) => setQuantity(Math.min(product.stock, Math.max(1, parseInt(e.target.value) || 1)))}
                  className="w-12 text-center border-x border-gray-300 py-1 focus:outline-none"
                />
                <button 
                  onClick={() => setQuantity(prev => Math.min(product.stock, prev + 1))}
                  className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                >
                  +
                </button>
              </div>
            </div>
            
            <button
              onClick={handleAddToCart}
              disabled={product.stock === 0}
              className={`w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white ${
                product.stock === 0 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-gray-900 hover:bg-gray-800'
              } transition-colors mb-4`}
            >
              <ShoppingCart className="mr-2 h-5 w-5" />
              {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
            </button>
          </div>
        </div>
        
        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Products</h2>
            <ProductGrid products={relatedProducts} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetailPage;