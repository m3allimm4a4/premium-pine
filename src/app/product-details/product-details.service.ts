import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'environment/environment';
import { Product, ProductCreate, ProductResponse } from '../shared/models/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductDetailsService {
  constructor(private http: HttpClient) {}

  public getProductDetails(productId: number): Observable<Product> {
    return this.http.get<ProductResponse>(`${environment.api_url}products/${productId}`).pipe(
      map(product => {
        return {
          ...product,
          createdDate: new Date(product.createdDate),
        };
      })
    );
  }

  public getNewProducts(): Observable<Product[]> {
    return this.http
      .get<ProductResponse[]>(`${environment.api_url}products`, { params: { newProducts: 1 } })
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

  public createOrUpdateProduct(product: ProductCreate, id?: number): Observable<void> {
    const formData = new FormData();
    formData.set('name', product.name);
    formData.set('price', product.price.toString());
    formData.set('oldPrice', product.oldPrice.toString());
    formData.set('description', product.description);
    formData.set('mainImage', product.mainImage);
    formData.set('cardImage', product.cardImage);
    formData.set('cardHoverImage', product.cardHoverImage);
    formData.set('createdDate', product.createdDate.toString());
    formData.set('trending', `${product.trending ? 1 : 0}`);
    formData.set('brandId', product.brandId.toString());
    formData.set('categoryId', product.categoryId.toString());

    return this.http.post<void>(
      `${environment.api_url}products.php${id ? `?id=${id}` : ''}`,
      formData
    );
  }
}
