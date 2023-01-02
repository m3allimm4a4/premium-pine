import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';
import { CartService } from '../cart/cart.service';
import { OrderResponse } from '../shared/models/order.interface';

@Injectable({
  providedIn: 'root',
})
export class CheckoutService {
  constructor(private http: HttpClient, private cartService: CartService) {}

  public placeOrder(
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    city: string,
    address1: string,
    address2: string
  ): Observable<number> {
    const subtotal = this.cartService.getTotalAmount();
    const discount = 0;
    const newOrder: OrderResponse = {
      firstName,
      lastName,
      email,
      phone,
      city,
      address1,
      address2,
      subtotal: subtotal,
      total: subtotal - discount,
      discount: discount,
      createdDate: new Date().valueOf(),
      items: this.cartService.getItems(),
    };
    return this.http.post<number>(`${environment.api_url}orders.php`, newOrder);
  }
}
