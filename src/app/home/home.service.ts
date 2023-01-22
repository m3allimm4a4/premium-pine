import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environment/environment';
import { Observable } from 'rxjs';
import { Banner } from '../shared/models/banner.interface';
import { Product } from '../shared/models/product.interface';
import { SliderItem } from '../shared/models/slider.interface';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private http: HttpClient) {}

  public getTrendingItems(): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.api_url}products`, {
      params: { trending: 1 },
    });
  }

  public getBanners(): Observable<Banner[]> {
    return this.http.get<Banner[]>(`${environment.api_url}banners`);
  }

  public getSlider(): Observable<SliderItem[]> {
    return this.http.get<SliderItem[]>(`${environment.api_url}slider`);
  }
}
