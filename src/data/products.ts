import { Product } from '../types';

export const products: Product[] = [
  {
    id: 1,
    name: "Radiance Renewal Serum",
    brand: "LuxGlow",
    description: "Advanced vitamin C serum for bright, youthful skin",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=500",
    category: "skincare",
    stock: 50
  },
  {
    id: 2,
    name: "Silk Foundation SPF 30",
    brand: "Elegance",
    description: "Lightweight, buildable coverage with sun protection",
    price: 42.99,
    image: "https://images.unsplash.com/photo-1631730359585-38a4935cbec4?auto=format&fit=crop&q=80&w=500",
    category: "makeup",
    stock: 75
  },
  {
    id: 3,
    name: "Repair & Shine Hair Mask",
    brand: "Pure Locks",
    description: "Deep conditioning treatment for damaged hair",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&fit=crop&q=80&w=500",
    category: "haircare",
    stock: 60
  },
  {
    id: 4,
    name: "Rose Garden Eau de Parfum",
    brand: "Bloom",
    description: "Elegant floral fragrance with lasting power",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=500",
    category: "fragrance",
    stock: 40
  },
  {
    id: 5,
    name: "Hydrating Night Cream",
    brand: "LuxGlow",
    description: "Rich moisturizer for overnight skin repair",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1614859324967-3df02393e96f?auto=format&fit=crop&q=80&w=500",
    category: "skincare",
    stock: 65
  },
  // ... continuing with more products to complete 30 items
];