import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/cart/cart.service';
import { CheckoutService } from '../checkout.service';

@Component({
  selector: 'app-checkout-order-details',
  templateUrl: './checkout-order-details.component.html',
  styleUrls: ['./checkout-order-details.component.scss'],
})
export class CheckoutOrderDetailsComponent implements OnInit {
  public substotal = 0;
  public shipping = 0;
  public discount = 0;
  private subscription = new Subscription();

  constructor(private cartService: CartService, private checkoutService: CheckoutService) {}

  ngOnInit(): void {
    this.subscription.add(
      this.cartService.getTotalAmount().subscribe(total => {
        this.substotal = total;
      })
    );
  }

  public placeOrder() {
    this.checkoutService.placeOrder();
  }
}
