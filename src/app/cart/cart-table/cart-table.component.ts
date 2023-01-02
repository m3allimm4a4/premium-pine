import { Component, OnDestroy, OnInit } from '@angular/core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { CartItem } from 'src/app/shared/models/cart-item.interface';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-table',
  templateUrl: './cart-table.component.html',
  styleUrls: ['./cart-table.component.scss'],
})
export class CartTableComponent implements OnInit, OnDestroy {
  faTrash = faTrash;
  public cartItems: CartItem[] = [];

  private subscription = new Subscription();

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.getItems$().subscribe(items => {
      this.cartItems = items;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  public removeItem(item: CartItem) {
    this.cartService.removeItem(item);
  }
}
