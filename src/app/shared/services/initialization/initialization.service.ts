import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, switchMap, take } from 'rxjs';
import { environment } from 'src/environment/environment';
import { Brand } from '../../models/brand.interface';
import { Category } from '../../models/category.interface';

@Injectable({
  providedIn: 'root',
})
export class InitializationService {
  private categories$ = new BehaviorSubject<Category[]>([]);
  private brands$ = new BehaviorSubject<Brand[]>([]);

  constructor(private http: HttpClient) {}

  public getAllCategories(): Observable<Category[]> {
    if (this.categories$.value.length !== 0) {
      return this.categories$.pipe(take(1));
    }

    return this.http.get<Category[]>(`${environment.api_url}categories.php`).pipe(
      switchMap(categories => {
        this.categories$.next(categories);
        return this.categories$.pipe(take(1));
      })
    );
  }

  public getAllBrands(): Observable<Brand[]> {
    if (this.brands$.value.length !== 0) {
      return this.brands$.pipe(take(1));
    }

    return this.http.get<Brand[]>(`${environment.api_url}brands.php`).pipe(
      switchMap(brands => {
        this.brands$.next(brands);
        return this.brands$.pipe(take(1));
      })
    );
  }
}
