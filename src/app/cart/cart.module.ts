import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CartRoutingModule } from './cart-routing.module';
import { CartTableComponent } from './cart-table/cart-table.component';
import { CartTotalAmountComponent } from './cart-total-amount/cart-total-amount.component';
import { CartComponent } from './cart.component';

@NgModule({
  declarations: [CartComponent, CartTableComponent, CartTotalAmountComponent],
  imports: [
    CommonModule,
    CartRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    NgbModule,
  ],
})
export class CartModule {}
