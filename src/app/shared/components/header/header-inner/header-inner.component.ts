import { Component, Inject, Input, OnInit, PLATFORM_ID } from '@angular/core';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { Category } from 'src/app/shared/models/category.interface';
import { InitializationService } from 'src/app/shared/services/initialization/initialization.service';

@Component({
  selector: 'app-header-inner',
  templateUrl: './header-inner.component.html',
  styleUrls: ['./header-inner.component.scss'],
})
export class HeaderInnerComponent implements OnInit {
  faAngleDown = faAngleDown;
  @Input() currentPage = '';

  public categories: Category[] = [];

  constructor(
    private initService: InitializationService,
    @Inject(PLATFORM_ID) private platformId: string
  ) {}

  ngOnInit(): void {
    this.initService.getAllCategories().subscribe(categories => {
      this.categories = categories;
    });
  }
}
