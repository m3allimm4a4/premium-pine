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

  public updateBanner(banner: Banner): Observable<Banner> {
    const formData = new FormData();
    formData.set('title', banner.title);
    formData.set('subtitle', banner.subtitle);
    formData.set('url', banner.url);
    formData.set('imageFile', banner.imageFile as File);
    return this.http.put<Banner>(`${environment.api_url}banners/${banner.id}`, formData);
  }

  public updateSlider(slider: SliderItem): Observable<SliderItem> {
    const formData = new FormData();
    formData.set('title', slider.title);
    formData.set('subtitle', slider.subtitle);
    formData.set('description', slider.description);
    formData.set('url', slider.url);
    formData.set('imageFile', slider.imageFile as File);
    return this.http.put<SliderItem>(`${environment.api_url}slider/${slider.id}`, formData);
  }
}
