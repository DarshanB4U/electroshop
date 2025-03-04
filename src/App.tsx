import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { ProductsProvider } from './context/ProductsContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import AdminPanel from './components/AdminPanel';
import LoginForm from './components/LoginForm';
import { AuthProvider } from './context/AuthContext';
import RegisterForm from './components/RegisterForm';

function App() {
  return (
    <AuthProvider>
      <Router>
        <ProductsProvider>
          <CartProvider>
            <div className="flex flex-col min-h-screen">
              <Navbar />
              <main className="flex-grow">
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/products" element={<ProductsPage />} />
                  <Route path="/product/:id" element={<ProductDetailPage />} />
                  <Route path="/cart" element={<CartPage />} />
                  <Route path="/admin" element={<AdminPanel />} />
                  <Route path="/login" element={<LoginForm />} />
                  <Route path="/register" element={<RegisterForm />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </CartProvider>
        </ProductsProvider>
      </Router>
    </AuthProvider>
  );
}

export default App;