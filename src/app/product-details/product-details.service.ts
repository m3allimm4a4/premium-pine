import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../shared/models/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductDetailsService {
  public getProductDetails(productId: number): Observable<Product> {
    const products: Product[] = [
      {
        id: 1,
        name: 'product 1',
        price: 10,
        cardImageUrl: '/assets/images/550x750.png',
        cardhoverImageUrl: '/assets/images/550x750.png',
        mainImageUrl: 'https://via.placeholder.com/950x460',
        category: { id: 1, name: 'category 1' },
        brand: { id: 2, name: 'brand 2' },
        createdDate: new Date(2018, 11, 24),
        description: `What a crazy time. I have five children in colleghigh school graduates.jpge or
                    pursing post graduate studies Each of my children attends college far from home,
                    the closest of which is more than 800 miles away. While I miss being with my
                    older children, I know that a college experience can be the source of great
                    growth and experience can be the source of source of great growth and can
                    provide them with even greater in future.`,
      },
      {
        id: 2,
        name: 'product 9',
        price: 12,
        cardImageUrl: '/assets/images/550x750.png',
        cardhoverImageUrl: '/assets/images/550x750.png',
        mainImageUrl: 'https://via.placeholder.com/950x460',
        category: { id: 1, name: 'category 1' },
        brand: { id: 1, name: 'brand 1' },
        createdDate: new Date(2018, 11, 24),
        description: `What a crazy time. I have five children in colleghigh school graduates.jpge or
                    pursing post graduate studies Each of my children attends college far from home,
                    the closest of which is more than 800 miles away. While I miss being with my
                    older children, I know that a college experience can be the source of great
                    growth and experience can be the source of source of great growth and can
                    provide them with even greater in future.`,
      },
      {
        id: 3,
        name: 'product 2',
        price: 163,
        cardImageUrl: '/assets/images/550x750.png',
        cardhoverImageUrl: '/assets/images/550x750.png',
        mainImageUrl: 'https://via.placeholder.com/950x460',
        category: { id: 1, name: 'category 1' },
        brand: { id: 1, name: 'brand 1' },
        createdDate: new Date(2018, 11, 24),
        description: `What a crazy time. I have five children in colleghigh school graduates.jpge or
                    pursing post graduate studies Each of my children attends college far from home,
                    the closest of which is more than 800 miles away. While I miss being with my
                    older children, I know that a college experience can be the source of great
                    growth and experience can be the source of source of great growth and can
                    provide them with even greater in future.`,
      },
      {
        id: 4,
        name: 'product 3',
        price: 53,
        cardImageUrl: '/assets/images/550x750.png',
        cardhoverImageUrl: '/assets/images/550x750.png',
        mainImageUrl: 'https://via.placeholder.com/950x460',
        category: { id: 2, name: 'category 2' },
        brand: { id: 2, name: 'brand 2' },
        createdDate: new Date(2018, 11, 24),
        description: `What a crazy time. I have five children in colleghigh school graduates.jpge or
                    pursing post graduate studies Each of my children attends college far from home,
                    the closest of which is more than 800 miles away. While I miss being with my
                    older children, I know that a college experience can be the source of great
                    growth and experience can be the source of source of great growth and can
                    provide them with even greater in future.`,
      },
      {
        id: 5,
        name: 'product 4',
        price: 13,
        cardImageUrl: '/assets/images/550x750.png',
        cardhoverImageUrl: '/assets/images/550x750.png',
        mainImageUrl: 'https://via.placeholder.com/950x460',
        category: { id: 2, name: 'category 2' },
        brand: { id: 2, name: 'brand 2' },
        createdDate: new Date(2018, 11, 24),
        description: `What a crazy time. I have five children in colleghigh school graduates.jpge or
                    pursing post graduate studies Each of my children attends college far from home,
                    the closest of which is more than 800 miles away. While I miss being with my
                    older children, I know that a college experience can be the source of great
                    growth and experience can be the source of source of great growth and can
                    provide them with even greater in future.`,
      },
      {
        id: 6,
        name: 'product 5',
        price: 20,
        cardImageUrl: '/assets/images/550x750.png',
        cardhoverImageUrl: '/assets/images/550x750.png',
        mainImageUrl: 'https://via.placeholder.com/950x460',
        category: { id: 2, name: 'category 2' },
        brand: { id: 2, name: 'brand 2' },
        createdDate: new Date(2018, 11, 24),
        description: `What a crazy time. I have five children in colleghigh school graduates.jpge or
                    pursing post graduate studies Each of my children attends college far from home,
                    the closest of which is more than 800 miles away. While I miss being with my
                    older children, I know that a college experience can be the source of great
                    growth and experience can be the source of source of great growth and can
                    provide them with even greater in future.`,
      },
    ];
    const product = products.find(p => p.id === productId);
    if (product) return of(product);
    return of();
  }

  public getNewProducts() {
    const products: Product[] = [
      {
        id: 1,
        name: 'product 1',
        price: 10,
        cardImageUrl: '/assets/images/550x750.png',
        cardhoverImageUrl: '/assets/images/550x750.png',
        category: { id: 1, name: 'category 1' },
        brand: { id: 2, name: 'brand 2' },
        createdDate: new Date(2018, 11, 24),
      },
      {
        id: 2,
        name: 'product 9',
        price: 12,
        cardImageUrl: '/assets/images/550x750.png',
        cardhoverImageUrl: '/assets/images/550x750.png',
        category: { id: 1, name: 'category 1' },
        brand: { id: 1, name: 'brand 1' },
        createdDate: new Date(2018, 11, 24),
      },
      {
        id: 3,
        name: 'product 2',
        price: 163,
        cardImageUrl: '/assets/images/550x750.png',
        cardhoverImageUrl: '/assets/images/550x750.png',
        category: { id: 1, name: 'category 1' },
        brand: { id: 1, name: 'brand 1' },
        createdDate: new Date(2018, 11, 24),
      },
    ];
    return of(products);
  }
}
