import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../shared/models/product.interface';
import { SortBy } from './models/sort-by.enum';

@Injectable({
  providedIn: 'root',
})
export class ProductListService {
  public getProductList(
    categoryId: number,
    brandId: number,
    searchString: string
  ): Observable<Product[]> {
    let products: Product[] = [
      {
        id: 1,
        name: 'product 1',
        price: 10,
        cardImageUrl: '/assets/images/550x750.png',
        cardhoverImageUrl: '/assets/images/550x750.png',
        category: { id: 1, name: 'category 1' },
        brand: { id: 2, name: 'brand 2' },
      },
      {
        id: 2,
        name: 'product 9',
        price: 12,
        cardImageUrl: '/assets/images/550x750.png',
        cardhoverImageUrl: '/assets/images/550x750.png',
        category: { id: 1, name: 'category 1' },
        brand: { id: 1, name: 'brand 1' },
      },
      {
        id: 3,
        name: 'product 2',
        price: 163,
        cardImageUrl: '/assets/images/550x750.png',
        cardhoverImageUrl: '/assets/images/550x750.png',
        category: { id: 1, name: 'category 1' },
        brand: { id: 1, name: 'brand 1' },
      },
      {
        id: 4,
        name: 'product 3',
        price: 53,
        cardImageUrl: '/assets/images/550x750.png',
        cardhoverImageUrl: '/assets/images/550x750.png',
        category: { id: 2, name: 'category 2' },
        brand: { id: 2, name: 'brand 2' },
      },
      {
        id: 5,
        name: 'product 4',
        price: 13,
        cardImageUrl: '/assets/images/550x750.png',
        cardhoverImageUrl: '/assets/images/550x750.png',
        category: { id: 2, name: 'category 2' },
        brand: { id: 2, name: 'brand 2' },
      },
      {
        id: 6,
        name: 'product 5',
        price: 20,
        cardImageUrl: '/assets/images/550x750.png',
        cardhoverImageUrl: '/assets/images/550x750.png',
        category: { id: 2, name: 'category 2' },
        brand: { id: 2, name: 'brand 2' },
      },
    ];

    if (categoryId) {
      products = products.filter(product => product.category.id === categoryId);
    }
    if (brandId) {
      products = products.filter(product => product.brand.id === brandId);
    }
    if (searchString) {
      products = products.filter(product => product.name.includes(searchString));
    }
    return of(products);
  }

  public sortProductList(productList: Product[], sortBy: SortBy): Product[] {
    const products = [...productList];
    switch (sortBy) {
      case SortBy.name:
        products.sort((a, b) => {
          if (a.name < b.name) {
            return -1;
          }
          if (a.name > b.name) {
            return 1;
          }
          return 0;
        });
        break;
      case SortBy.price:
        products.sort((a, b) => {
          if (a.price < b.price) {
            return -1;
          }
          if (a.price > b.price) {
            return 1;
          }
          return 0;
        });
        break;
    }
    return products;
  }
}
