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
  public filteredTrendingItems: Product[] = [];
  public categories: Category[] = [];
  public activeCategory: Category = {} as Category;
  public showTab = false;

  private trendingItems: Product[] = [];

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.homeService.getTrendingItems().subscribe(trendingItems => {
      trendingItems.forEach(item => {
        const category = this.categories.find(c => c.id === item.category.id);
        if (!category) {
          this.categories.push(item.category);
        }
      });
      this.trendingItems = trendingItems;
      this.activeCategory = this.categories[0];
      this.filterTrendingItems();
    });
  }

  switchCategory(category: Category) {
    this.activeCategory = category;
    this.filterTrendingItems();
  }

  private filterTrendingItems() {
    this.showTab = false;
    this.filteredTrendingItems = this.trendingItems.filter(
      item => item.category.id === this.activeCategory.id
    );
    this.showTab = true;
  }
}
