import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Brand } from 'src/app/shared/models/brand.interface';
import { Category } from 'src/app/shared/models/category.interface';
import { InitializationService } from 'src/app/shared/services/initialization/initialization.service';
import { FilterBy } from '../models/filter-by.enum';

@Component({
  selector: 'app-product-list-sidebar',
  templateUrl: './product-list-sidebar.component.html',
  styleUrls: ['./product-list-sidebar.component.scss'],
})
export class ProductListSidebarComponent implements OnInit {
  FilterBy = FilterBy;
  @Output() filter = new EventEmitter<FilterBy[]>();

  public categories: Category[] = [];
  public brands: Brand[] = [];

  constructor(
    public activatedRoute: ActivatedRoute,
    private router: Router,
    private initService: InitializationService
  ) {}

  ngOnInit(): void {
    this.initService.getAllCategories().subscribe(data => {
      this.categories = data;
    });

    this.initService.getAllBrands().subscribe(data => {
      this.brands = data;
    });
  }

  public clearFilter() {
    this.router.navigate([], { relativeTo: this.activatedRoute });
  }
}
