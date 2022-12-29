import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faBagShopping, faMagnifyingGlass, faUserCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-middle-inner',
  templateUrl: './middle-inner.component.html',
  styleUrls: ['./middle-inner.component.scss'],
})
export class MiddleInnerComponent {
  faMagnifyingGlass = faMagnifyingGlass;
  faBagShopping = faBagShopping;
  faUserCircle = faUserCircle;

  public searchString = '';
  public cartItemCount = 0;

  constructor(private router: Router) {}

  public search() {
    if (this.searchString) {
      this.router.navigate(['/product-list'], { queryParams: { search: this.searchString } });
      this.searchString = '';
    }
  }
}
