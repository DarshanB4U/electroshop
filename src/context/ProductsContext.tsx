import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Product, productAPI } from '../services/api';

interface ProductsContextType {
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  addProduct: (product: Omit<Product, 'id' | 'createdAt' | 'updatedAt'>) => Promise<void>;
  deleteProduct: (id: number) => Promise<void>;
  fetchProducts: () => Promise<void>;
}

const ProductsContext = createContext<ProductsContextType | undefined>(undefined);

export const ProductsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);

  const fetchProducts = async () => {
    try {
      const data = await productAPI.getAllProducts();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const addProduct = async (productData: Omit<Product, 'id' | 'createdAt' | 'updatedAt'>) => {
    try {
      const newProduct = await productAPI.createProduct(productData);
      setProducts(prev => [...prev, newProduct]);
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  const deleteProduct = async (id: number) => {
    try {
      await productAPI.deleteProduct(id);
      setProducts(prev => prev.filter(product => product.id !== id));
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductsContext.Provider value={{ 
      products, 
      setProducts, 
      addProduct, 
      deleteProduct,
      fetchProducts
    }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductsContext);
  if (context === undefined) {
    throw new Error('useProducts must be used within a ProductsProvider');
  }
  return context;
}; 