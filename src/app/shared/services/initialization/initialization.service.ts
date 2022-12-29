import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, switchMap, take } from 'rxjs';
import { Brand } from '../../models/brand.interface';
import { Category } from '../../models/category.interface';

@Injectable({
  providedIn: 'root',
})
export class InitializationService {
  private categories$ = new BehaviorSubject<Category[]>([]);
  private brands$ = new BehaviorSubject<Brand[]>([]);

  public getAllCategories(): Observable<Category[]> {
    if (this.categories$.value.length !== 0) {
      return this.categories$.pipe(take(1));
    }

    //request data from server
    const data: Category[] = [
      { id: 1, name: 'category 1' },
      { id: 2, name: 'category 2' },
      { id: 3, name: 'category 3' },
    ];
    return of(data).pipe(
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

    //request data from server
    const data: Brand[] = [
      { id: 1, name: 'brand 1' },
      { id: 2, name: 'brand 2' },
      { id: 3, name: 'brand 3' },
    ];
    return of(data).pipe(
      switchMap(brands => {
        this.brands$.next(brands);
        return this.brands$.pipe(take(1));
      })
    );
  }
}
