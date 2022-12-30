import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environment/environment';
import { Product, ProductResponse } from '../shared/models/product.interface';
import { Banner } from '../shared/models/banner.interface';
import { SliderItem } from '../shared/models/slider.interface';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private http: HttpClient) {}

  public getTrendingItems(): Observable<Product[]> {
    return this.http
      .get<ProductResponse[]>(`${environment.api_url}products.php`, {
        params: { trending: 1 },
      })
      .pipe(
        map(products => {
          return products.map(product => {
            return {
              ...product,
              createdDate: new Date(product.createdDate),
            };
          });
        })
      );
  }

  public getBanners(): Observable<Banner[]> {
    return this.http.get<Banner[]>(`${environment.api_url}banners.php`);
  }

  public getSlider(): Observable<SliderItem[]> {
    return this.http.get<SliderItem[]>(`${environment.api_url}slider.php`);
  }
}
