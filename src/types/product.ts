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
}

export interface Category {
  id: string;
  name: string;
} 