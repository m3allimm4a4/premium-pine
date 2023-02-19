import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  faAngleDown,
  faAngleUp,
  faBagShopping,
  faMagnifyingGlass,
  faUserCircle,
} from '@fortawesome/free-solid-svg-icons';
import { Category } from 'src/app/shared/models/category.interface';
import { InitializationService } from 'src/app/shared/services/initialization/initialization.service';

@Component({
  selector: 'app-middle-inner',
  templateUrl: './middle-inner.component.html',
  styleUrls: ['./middle-inner.component.scss'],
})
export class MiddleInnerComponent implements OnInit {
  faMagnifyingGlass = faMagnifyingGlass;
  faBagShopping = faBagShopping;
  faUserCircle = faUserCircle;
  categoriesAngle = faAngleDown;

  public searchString = '';
  public cartItemCount = 0;
  public categories: Category[] = [];
  public navbarCollapsed = true;
  public categoriesCollapsed = true;

  constructor(private router: Router, private initService: InitializationService) {}

  ngOnInit(): void {
    this.initService.getAllCategories().subscribe(categories => {
      this.categories = categories;
    });
  }

  public onCategoriesClick() {
    this.categoriesAngle = this.categoriesCollapsed ? faAngleUp : faAngleDown;
    this.categoriesCollapsed = !this.categoriesCollapsed;
  }

  public search() {
    if (this.searchString) {
      this.router.navigate(['/product-list'], { queryParams: { search: this.searchString } });
      this.searchString = '';
    }
  }
}
