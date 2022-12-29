import { Brand } from './brand.interface';
import { Category } from './category.interface';

export interface Product {
  id: number;
  name: string;
  cardImageUrl: string;
  cardhoverImageUrl?: string;
  mainImageUrl?: string;
  price: number;
  oldPrice?: number;
  category: Category;
  brand: Brand;
  createdDate?: Date;
  description?: string;
}
