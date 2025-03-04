import axios from 'axios';

const API_URL = 'http://localhost:5000'; // Match your backend PORT

// Create axios instance with default config
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests if it exists
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  description: string;
  image: string;
  rating: number;
  stock: number;
  featured: boolean;
  createdAt: Date;
  updatedAt: Date;
}

interface AuthResponse {
  user: {
    id: number;
    name: string;
    email: string;
    role: string;
  };
  token: string;
}

export const productAPI = {
  getAllProducts: async (): Promise<Product[]> => {
    const response = await api.get('/products');
    return response.data;
  },

  createProduct: async (product: Omit<Product, 'id' | 'createdAt' | 'updatedAt'>): Promise<Product> => {
    const response = await api.post('/products', product);
    return response.data;
  },

  updateProduct: async (id: number, product: Partial<Product>): Promise<Product> => {
    const response = await api.put(`/products/${id}`, product);
    return response.data;
  },

  deleteProduct: async (id: number): Promise<void> => {
    await api.delete(`/products/${id}`);
  }
};

export const authAPI = {
  login: async (email: string, password: string): Promise<AuthResponse> => {
    try {
      const response = await api.post('/auth/login', { email, password });
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        throw new Error(error.response.data.error || 'Login failed');
      }
      throw new Error('Login failed');
    }
  },

  register: async (name: string, email: string, password: string): Promise<AuthResponse> => {
    try {
      const response = await api.post('/auth/register', { name, email, password });
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        throw new Error(error.response.data.error || 'Registration failed');
      }
      throw new Error('Registration failed');
    }
  },

  getCurrentUser: async (): Promise<AuthResponse['user'] | null> => {
    try {
      const token = localStorage.getItem('token');
      if (!token) return null;
      
      const response = await api.get('/auth/me');
      return response.data.user;
    } catch (error) {
      localStorage.removeItem('token');
      return null;
    }
  }
}; 