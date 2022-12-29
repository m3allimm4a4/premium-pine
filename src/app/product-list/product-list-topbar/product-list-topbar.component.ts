import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DropdownItem } from 'src/app/shared/models/dropdown-item.interface';
import { SortBy } from '../models/sort-by.enum';

@Component({
  selector: 'app-product-list-topbar',
  templateUrl: './product-list-topbar.component.html',
  styleUrls: ['./product-list-topbar.component.scss'],
})
export class ProductListTopbarComponent {
  @Output() sortChange = new EventEmitter<SortBy>();

  public sortItems: DropdownItem[] = [
    { value: SortBy.name, name: 'Name' },
    { value: SortBy.price, name: 'Price' },
  ];
  public selectedSortItem: DropdownItem = this.sortItems[0];

  public onSortFilterChange(sortBy: DropdownItem) {
    this.sortChange.emit(sortBy.value);
  }
}
