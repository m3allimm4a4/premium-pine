import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Category } from 'src/app/shared/models/category.interface';
import { InitializationService } from 'src/app/shared/services/initialization/initialization.service';
import { environment } from 'environment/environment';

@Component({
  selector: 'app-admin-dashboard-categories',
  templateUrl: './admin-dashboard-categories.component.html',
  styleUrls: ['./admin-dashboard-categories.component.scss'],
})
export class AdminDashboardCategoriesComponent implements OnInit {
  faEdit = faEdit;
  faTrash = faTrash;
  public categories: Category[] = [];

  constructor(
    public activatedRoute: ActivatedRoute,
    public http: HttpClient,
    private initializationService: InitializationService
  ) {}

  ngOnInit(): void {
    this.refreshCategories();
  }

  public deleteCategory(category: Category): void {
    this.http.delete<void>(`${environment.api_url}categories/${category.id}`).subscribe(() => {
      this.refreshCategories();
    });
  }

  private refreshCategories(): void {
    this.initializationService.refreshCategories().subscribe(categories => {
      this.categories = categories;
    });
  }
}
