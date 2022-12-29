import { Category } from 'src/app/shared/models/category.interface';
import { Product } from 'src/app/shared/models/product.interface';

export interface TrendingItems {
  categories: Category[];
  products: Product[];
}
