import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { switchMap } from 'rxjs';
import { Product } from '../shared/models/product.interface';
import { CartService } from '../cart/cart.service';
import { ProductDetailsService } from './product-details.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  faCalendar = faCalendar;

  public product: Product = {} as Product;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productDetailsService: ProductDetailsService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap
      .pipe(
        switchMap(paramsMap => {
          const id = Number(paramsMap.get('id'));
          return this.productDetailsService.getProductDetails(id);
        })
      )
      .subscribe(product => {
        this.product = product;
      });
  }

  public addToCart() {
    this.cartService.addItem(this.product);
  }
}
