import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CartItem } from '../shared/models/cart-item.interface';
import { Product } from '../shared/models/product.interface';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems$ = new BehaviorSubject<CartItem[]>([]);

  public getItems(): Observable<CartItem[]> {
    return this.cartItems$.asObservable();
  }

  public addItem(product: Product): void {
    const cartItems = this.cartItems$.value;
    const item = cartItems.find(p => p.product.id === product.id);
    if (item) {
      item.quantity++;
    } else {
      cartItems.push({ product: product, quantity: 1 });
    }
    this.cartItems$.next(cartItems);
  }

  public removeItem(item: CartItem) {
    const cartItems = this.cartItems$.value;
    const index = cartItems.findIndex(p => p.product.id === item.product.id);
    if (index === -1) return;

    cartItems.splice(index, 1);
    this.cartItems$.next(cartItems);
  }
}
