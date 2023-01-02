import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { faRemove } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { CartItem } from 'src/app/shared/models/cart-item.interface';
import { CartService } from 'src/app/cart/cart.service';

@Component({
  selector: 'app-header-shopping-list',
  templateUrl: './header-shopping-list.component.html',
  styleUrls: ['./header-shopping-list.component.scss'],
})
export class HeaderShoppingListComponent implements OnInit, OnDestroy {
  faRemove = faRemove;

  @Output() cartItemsCountChange = new EventEmitter<number>();

  public cartItems: CartItem[] = [];
  public totalAmount = 0;

  private subsciptions = new Subscription();

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.subsciptions.add(
      this.cartService.getItems$().subscribe(cartItems => {
        this.cartItems = cartItems;
        this.cartItemsCountChange.emit(cartItems.length);
      })
    );
    this.subsciptions.add(
      this.cartService.getTotalAmount$().subscribe(total => {
        this.totalAmount = total;
      })
    );
  }

  ngOnDestroy(): void {
    this.subsciptions.unsubscribe();
  }

  public removeItemFromCart(cartItem: CartItem) {
    this.cartService.removeItem(cartItem);
  }
}
