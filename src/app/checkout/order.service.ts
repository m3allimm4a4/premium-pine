import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'environment/environment';
import { CartService } from '../cart/cart.service';
import { Order, OrderResponse } from '../shared/models/order.interface';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
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
    return this.http.post<number>(`${environment.api_url}orders`, newOrder);
  }

  public getAllOrders(): Observable<Order[]> {
    return this.http.get<OrderResponse[]>(`${environment.api_url}orders`).pipe(
      map(orders => {
        return orders.map(order => {
          return {
            ...order,
            createdDate: new Date(order.createdDate),
          };
        });
      })
    );
  }

  public getOrder(orderId: number): Observable<Order> {
    return this.http.get<OrderResponse>(`${environment.api_url}orders/${orderId}`).pipe(
      map(order => {
        return {
          ...order,
          createdDate: new Date(order.createdDate),
        };
      })
    );
  }
}
