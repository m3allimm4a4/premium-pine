import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Category } from 'src/app/shared/models/category.interface';
import { InitializationService } from 'src/app/shared/services/initialization/initialization.service';
import { environment } from 'src/environment/environment';

@Component({
  selector: 'app-admin-dashboard-categories-details',
  templateUrl: './admin-dashboard-categories-details.component.html',
  styleUrls: ['./admin-dashboard-categories-details.component.scss'],
})
export class AdminDashboardCategoriesDetailsComponent implements OnInit {
  public category: Category = {
    id: 0,
    name: '',
  };
  public isEditMode = false;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private http: HttpClient,
    private initializationService: InitializationService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      if (!id) {
        return;
      }
      this.isEditMode = true;
      this.initializationService.getCategoryDetails(id).subscribe(c => {
        this.category = c;
      });
    });
  }

  public onSubmit(): void {
    let request$: Observable<void>;
    if (this.isEditMode) {
      request$ = this.http.put<void>(`${environment.api_url}categories.php`, this.category);
    } else {
      request$ = this.http.post<void>(`${environment.api_url}categories.php`, this.category);
    }
    request$.subscribe(() => {
      this.router.navigate(['../'], { relativeTo: this.activatedRoute });
    });
  }
}
