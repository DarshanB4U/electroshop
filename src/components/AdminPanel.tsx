import React, { useState } from 'react';
import { Product } from '../services/api';
import { categories as initialCategories } from '../data/products';
import { useProducts } from '../context/ProductsContext';

const AdminPanel: React.FC = () => {
  const { products, addProduct, deleteProduct } = useProducts();
  const [newProduct, setNewProduct] = useState<Omit<Product, 'id' | 'createdAt' | 'updatedAt'>>({
    name: '',
    category: '',
    price: 0,
    description: '',
    image: '',
    rating: 0,
    stock: 0,
    featured: false
  });

  const handleAddProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addProduct(newProduct);
      setNewProduct({
        name: '',
        category: '',
        price: 0,
        description: '',
        image: '',
        rating: 0,
        stock: 0,
        featured: false
      });
    } catch (error) {
      console.error('Error adding product:', error);
      alert('Failed to add product');
    }
  };

  const handleDeleteProduct = async (id: number) => {
    try {
      await deleteProduct(id);
    } catch (error) {
      console.error('Error deleting product:', error);
      alert('Failed to delete product');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Product Management</h1>

      {/* Product Form */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Add New Product</h2>
        <form onSubmit={handleAddProduct} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label className="mb-1 text-gray-700">Product Name</label>
              <input
                type="text"
                value={newProduct.name}
                onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
                placeholder="Enter product name"
                className="border p-2 rounded"
                required
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-1 text-gray-700">Price (₹)</label>
              <input
                type="number"
                value={newProduct.price}
                onChange={(e) => setNewProduct({...newProduct, price: Number(e.target.value)})}
                placeholder="Enter price in USD"
                min="0"
                step="0.01"
                className="border p-2 rounded"
                required
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-1 text-gray-700">Category</label>
              <select
                value={newProduct.category}
                onChange={(e) => setNewProduct({...newProduct, category: e.target.value})}
                className="border p-2 rounded"
                required
              >
                <option value="">Select Category</option>
                {initialCategories.filter(cat => cat !== "All").map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col">
              <label className="mb-1 text-gray-700">Stock Quantity</label>
              <input
                type="number"
                value={newProduct.stock}
                onChange={(e) => setNewProduct({...newProduct, stock: Number(e.target.value)})}
                placeholder="Enter available quantity"
                min="0"
                className="border p-2 rounded"
                required
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-1 text-gray-700">Image URL</label>
              <input
                type="url"
                value={newProduct.image}
                onChange={(e) => setNewProduct({...newProduct, image: e.target.value})}
                placeholder="Enter image URL"
                className="border p-2 rounded"
                required
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-1 text-gray-700">Rating (0-5)</label>
              <input
                type="number"
                value={newProduct.rating}
                onChange={(e) => setNewProduct({...newProduct, rating: Number(e.target.value)})}
                placeholder="Enter rating from 0 to 5"
                min="0"
                max="5"
                step="0.1"
                className="border p-2 rounded"
                required
              />
            </div>

            <div className="flex flex-col col-span-2">
              <label className="mb-1 text-gray-700">Product Description</label>
              <textarea
                value={newProduct.description}
                onChange={(e) => setNewProduct({...newProduct, description: e.target.value})}
                placeholder="Enter product description"
                className="border p-2 rounded h-24"
                required
              />
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={newProduct.featured}
                onChange={(e) => setNewProduct({...newProduct, featured: e.target.checked})}
                className="border rounded w-4 h-4"
                id="featured"
              />
              <label htmlFor="featured" className="text-gray-700">Featured Product</label>
            </div>

            <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
              Add Product
            </button>
          </div>
        </form>
      </div>

      {/* Products List */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Current Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="border rounded p-4">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-2 rounded" />
              <h3 className="font-semibold">{product.name}</h3>
              <p className="text-gray-600">Category: {product.category}</p>
              <p className="text-green-600 font-semibold">₹{product.price}</p>
              <p className="text-sm text-gray-500">Stock: {product.stock}</p>
              <p className="text-sm text-gray-500">Rating: {product.rating}</p>
              <p className="text-sm">{product.featured ? "Featured" : "Not Featured"}</p>
              <button
                onClick={() => handleDeleteProduct(product.id)}
                className="bg-red-500 text-white px-3 py-1 rounded mt-2"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel; 