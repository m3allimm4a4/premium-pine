import { Injectable } from '@angular/core';
import { Observable, of, switchMap, take } from 'rxjs';
import { CartService } from '../cart/cart.service';

@Injectable({
  providedIn: 'root',
})
export class CheckoutService {
  constructor(private cartService: CartService) {}

  public placeOrder(): Observable<void> {
    return this.cartService.getItems().pipe(
      take(1),
      switchMap(cartItems => {
        return of();
      })
    );
  }
}
