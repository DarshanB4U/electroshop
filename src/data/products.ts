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

export const products: Product[] = [
  {
    id: 1,
    name: "Ultra HD Smart TV 55\"",
    category: "TVs",
    price: 699.99,
    description: "Experience stunning 4K resolution and smart features for all your entertainment needs.",
    image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    rating: 4.7,
    stock: 15,
    featured: true
  },
  {
    id: 2,
    name: "Professional DSLR Camera",
    category: "Cameras",
    price: 1299.99,
    description: "Capture stunning photos and videos with this professional-grade DSLR camera.",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    rating: 4.9,
    stock: 8,
    featured: true
  },
  {
    id: 3,
    name: "Wireless Noise-Cancelling Headphones",
    category: "Audio",
    price: 249.99,
    description: "Premium wireless headphones with active noise cancellation for immersive audio experience.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    rating: 4.8,
    stock: 20,
    featured: true
  },
  {
    id: 4,
    name: "Gaming Laptop 15.6\"",
    category: "Computers",
    price: 1499.99,
    description: "High-performance gaming laptop with dedicated graphics and fast refresh rate display.",
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    rating: 4.6,
    stock: 12,
    featured: true
  },
  {
    id: 5,
    name: "Smartphone Pro Max",
    category: "Phones",
    price: 999.99,
    description: "Latest flagship smartphone with advanced camera system and all-day battery life.",
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    rating: 4.9,
    stock: 25,
    featured: true
  },
  {
    id: 6,
    name: "Wireless Earbuds",
    category: "Audio",
    price: 129.99,
    description: "True wireless earbuds with premium sound quality and long battery life.",
    image: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    rating: 4.5,
    stock: 30,
    featured: false
  },
  {
    id: 7,
    name: "Smart Watch Series 7",
    category: "Wearables",
    price: 349.99,
    description: "Advanced smartwatch with health monitoring features and always-on display.",
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    rating: 4.7,
    stock: 18,
    featured: false
  },
  {
    id: 8,
    name: "Ultra-Wide Gaming Monitor 34\"",
    category: "Monitors",
    price: 599.99,
    description: "Immersive ultra-wide curved gaming monitor with high refresh rate.",
    image: "https://images.unsplash.com/photo-1616763355548-1b606f439f86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    rating: 4.8,
    stock: 10,
    featured: false
  },
  {
    id: 9,
    name: "Wireless Gaming Mouse",
    category: "Accessories",
    price: 79.99,
    description: "High-precision wireless gaming mouse with customizable RGB lighting.",
    image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    rating: 4.6,
    stock: 22,
    featured: false
  },
  {
    id: 10,
    name: "Portable Bluetooth Speaker",
    category: "Audio",
    price: 89.99,
    description: "Waterproof portable speaker with powerful sound and long battery life.",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    rating: 4.5,
    stock: 28,
    featured: false
  },
  {
    id: 11,
    name: "4K Action Camera",
    category: "Cameras",
    price: 299.99,
    description: "Waterproof 4K action camera for capturing all your adventures.",
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    rating: 4.4,
    stock: 15,
    featured: false
  },
  {
    id: 12,
    name: "Mechanical Gaming Keyboard",
    category: "Accessories",
    price: 129.99,
    description: "Mechanical gaming keyboard with customizable RGB lighting and programmable keys.",
    image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    rating: 4.7,
    stock: 20,
    featured: false
  },
  
];

export const categories = [
  "All",
  "TVs",
  "Cameras",
  "Audio",
  "Computers",
  "Phones",
  "Wearables",
  "Monitors",
  "Accessories"
];