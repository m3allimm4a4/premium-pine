import { Brand } from './brand.interface';
import { Category } from './category.interface';

export interface Product {
  id: number;
  name: string;
  cardImageUrl?: string;
  cardHoverImageUrl?: string;
  mainImageUrl?: string;
  price: number;
  oldPrice?: number;
  category: Category;
  brand: Brand;
  createdDate?: Date;
  description?: string;
}

export interface ProductResponse {
  id: number;
  name: string;
  cardImageUrl: string;
  cardHoverImageUrl?: string;
  mainImageUrl?: string;
  price: number;
  oldPrice?: number;
  category: Category;
  brand: Brand;
  createdDate: number;
  description?: string;
}

export interface ProductCreate {
  name: string;
  price: number;
  oldPrice: number;
  categoryId: number;
  brandId: number;
  createdDate: number;
  description: string;
}
