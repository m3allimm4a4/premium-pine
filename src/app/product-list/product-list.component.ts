import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../shared/models/product.interface';
import { FilterBy } from './models/filter-by.enum';
import { SortBy } from './models/sort-by.enum';
import { ProductListService } from './product-list.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  public productList: Product[] = [];
  public filteredProductList: Product[] = [];
  public sortBy = SortBy.name;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productListService: ProductListService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.queryParamMap.subscribe(paramMap => {
      const categoryId = Number(paramMap.get(FilterBy.category));
      const brandId = Number(paramMap.get(FilterBy.brand));
      const searchString = paramMap.get(FilterBy.search) || '';

      this.productListService.getProductList(categoryId, brandId, searchString).subscribe(data => {
        console.log(data);
        this.productList = data;
        this.productList = this.productListService.sortProductList(this.productList, this.sortBy);
      });
    });
  }

  public onSortChange(sortBy: SortBy): void {
    this.sortBy = sortBy;
    this.productList = this.productListService.sortProductList(this.productList, sortBy);
  }
}
