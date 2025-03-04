import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, ArrowRight, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

const CartPage: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();
  
  if (cart.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <div className="bg-white p-8 rounded-lg shadow-sm">
          <div className="inline-flex items-center justify-center h-24 w-24 rounded-full bg-gray-100 text-gray-400 mb-6">
            <ShoppingCart className="h-12 w-12" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Cart is Empty</h2>
          <p className="text-gray-600 mb-6">Looks like you haven't added any products to your cart yet.</p>
          <Link 
            to="/products" 
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800 transition-colors"
          >
            Start Shopping
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Your Cart</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <ul className="divide-y divide-gray-200">
                {cart.map(item => (
                  <li key={item.id} className="p-6">
                    <div className="flex flex-col sm:flex-row">
                      <div className="sm:flex-shrink-0 mb-4 sm:mb-0">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-full sm:w-32 h-32 object-cover rounded-md"
                        />
                      </div>
                      <div className="sm:ml-6 flex-1">
                        <div className="flex justify-between">
                          <div>
                            <h3 className="text-lg font-medium text-gray-900">
                              <Link to={`/product/${item.id}`} className="hover:text-yellow-600">
                                {item.name}
                              </Link>
                            </h3>
                            <p className="mt-1 text-sm text-gray-500">{item.category}</p>
                            <p className="mt-1 text-sm font-medium text-gray-900">₹{item.price.toFixed(2)}</p>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-gray-400 hover:text-red-500"
                          >
                            <Trash2 className="h-5 w-5" />
                          </button>
                        </div>
                        <div className="mt-4 flex items-center">
                          <label htmlFor={`quantity-${item.id}`} className="mr-2 text-sm text-gray-600">
                            Qty:
                          </label>
                          <div className="flex items-center border border-gray-300 rounded-md">
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                            >
                              -
                            </button>
                            <input
                              type="number"
                              id={`quantity-${item.id}`}
                              min="1"
                              max={item.stock}
                              value={item.quantity}
                              onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                              className="w-12 text-center border-x border-gray-300 py-1 focus:outline-none"
                            />
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                            >
                              +
                            </button>
                          </div>
                          <span className="ml-auto font-medium">
                            ₹{(item.price * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                <button
                  onClick={clearCart}
                  className="text-sm text-red-600 hover:text-red-800 font-medium"
                >
                  Clear Cart
                </button>
              </div>
            </div>
          </div>
          
          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Order Summary</h2>
              
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">₹{getCartTotal().toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium">
                    {getCartTotal() >= 99 ? 'Free' : '₹10.00'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span className="font-medium">₹{(getCartTotal() * 0.1).toFixed(2)}</span>
                </div>
                <div className="border-t border-gray-200 pt-4 flex justify-between">
                  <span className="text-lg font-bold">Total</span>
                  <span className="text-lg font-bold">
                    ₹{(getCartTotal() + (getCartTotal() >= 99 ? 0 : 10) + (getCartTotal() * 0.1)).toFixed(2)}
                  </span>
                </div>
              </div>
              
              <button
                className="mt-6 w-full bg-gray-900 text-white py-3 px-4 rounded-md hover:bg-gray-800 transition-colors"
              >
                Proceed to Checkout
              </button>
              
              <div className="mt-6">
                <Link 
                  to="/products" 
                  className="text-yellow-600 hover:text-yellow-700 flex items-center justify-center"
                >
                  <ArrowRight className="mr-2 h-5 w-5 transform rotate-180" />
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;