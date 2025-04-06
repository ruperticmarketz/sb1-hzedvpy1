import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <div className="relative h-48">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <div className="text-sm text-gray-500 mb-1">{product.brand}</div>
        <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold">€{product.price}</span>
          <button className="bg-pink-600 text-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-pink-700 transition-colors">
            <ShoppingCart size={18} />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};