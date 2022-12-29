import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/shared/models/category.interface';
import { Product } from 'src/app/shared/models/product.interface';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-trending-items',
  templateUrl: './trending-items.component.html',
  styleUrls: ['./trending-items.component.scss'],
})
export class TrendingItemsComponent implements OnInit {
  public trendingProducts: Product[] = [];
  public categories: Category[] = [];
  public activeCategory: Category = {} as Category;
  public showTab = false;

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.homeService.getTrendingItems().subscribe(trendingItems => {
      this.trendingProducts = trendingItems.products;
      this.categories = trendingItems.categories;
      this.activeCategory = this.categories[0];
      this.showTab = true;
    });
  }

  switchCategory(category: Category) {
    this.activeCategory = category;
    this.showTab = false;
    this.homeService.getTrendingItems(category).subscribe(trendingItems => {
      this.trendingProducts = trendingItems.products;
      this.showTab = true;
    });
  }
}
