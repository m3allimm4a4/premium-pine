import { Component, OnDestroy, OnInit } from '@angular/core';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { Category } from 'src/app/shared/models/category.interface';
import { Product } from 'src/app/shared/models/product.interface';
import { InitializationService } from 'src/app/shared/services/initialization/initialization.service';
import { ProductDetailsService } from '../product-details.service';

@Component({
  selector: 'app-product-details-sidebar',
  templateUrl: './product-details-sidebar.component.html',
  styleUrls: ['./product-details-sidebar.component.scss'],
})
export class ProductDetailsSidebarComponent implements OnInit, OnDestroy {
  faCalendar = faCalendar;
  public newProducts: Product[] = [];
  public categories: Category[] = [];

  private subscription = new Subscription();

  constructor(
    private initializationService: InitializationService,
    private productDetailsService: ProductDetailsService
  ) {}

  ngOnInit(): void {
    this.subscription.add(
      this.initializationService
        .getAllCategories()
        .subscribe(categories => (this.categories = categories.slice(0, 5)))
    );

    this.productDetailsService.getNewProducts().subscribe(products => {
      this.newProducts = products;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
