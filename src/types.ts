export interface Product {
  id: number;
  name: string;
  brand: string;
  description: string;
  price: number;
  image: string;
  category: 'skincare' | 'makeup' | 'haircare' | 'fragrance';
  stock: number;
}