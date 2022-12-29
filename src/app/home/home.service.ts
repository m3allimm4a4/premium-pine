import { Injectable } from '@angular/core';
import { Observable, of, switchMap, timeout, timer } from 'rxjs';
import { Product } from 'src/app/shared/models/product.interface';
import { Category } from '../shared/models/category.interface';
import { TrendingItems } from './models/trending-items.iterface';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  public getTrendingItems(category?: Category): Observable<TrendingItems> {
    const products: Product[] = [
      {
        id: 123456789,
        cardImageUrl: 'assets/images/550x750.png',
        cardhoverImageUrl: 'assets/images/550x750.png',
        name: 'test',
        price: 50.5,
        category: { id: 1, name: 'category 1' },
        brand: { id: 1, name: 'brand 1' },
      },
      {
        id: 123456723,
        cardImageUrl: 'assets/images/550x750.png',
        cardhoverImageUrl: 'assets/images/550x750.png',
        name: 'test2',
        price: 50.5,
        category: { id: 1, name: 'category 1' },
        brand: { id: 1, name: 'brand 1' },
      },
      {
        id: 123456765,
        cardImageUrl: 'assets/images/550x750.png',
        cardhoverImageUrl: 'assets/images/550x750.png',
        name: 'test3',
        price: 50.5,
        category: { id: 1, name: 'category 1' },
        brand: { id: 1, name: 'brand 1' },
      },
      {
        id: 123456566,
        cardImageUrl: 'assets/images/550x750.png',
        cardhoverImageUrl: 'assets/images/550x750.png',
        name: 'test4',
        price: 50.5,
        category: { id: 2, name: 'category 2' },
        brand: { id: 1, name: 'brand 1' },
      },
      {
        id: 123646566,
        cardImageUrl: 'assets/images/550x750.png',
        cardhoverImageUrl: 'assets/images/550x750.png',
        name: 'test5',
        price: 50.5,
        category: { id: 2, name: 'category 2' },
        brand: { id: 1, name: 'brand 1' },
      },
      {
        id: 122356566,
        cardImageUrl: 'assets/images/550x750.png',
        cardhoverImageUrl: 'assets/images/550x750.png',
        name: 'test6',
        price: 50.5,
        category: { id: 2, name: 'category 2' },
        brand: { id: 1, name: 'brand 1' },
      },
    ];

    const categories: Category[] = [
      { id: 1, name: 'Men' },
      { id: 2, name: 'Women' },
    ];
    return timer(3000).pipe(switchMap(() => of({ products, categories })));
  }
}
