import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environment/environment';
import { Product, ProductResponse } from '../shared/models/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductDetailsService {
  constructor(private http: HttpClient) {}

  public getProductDetails(productId: number): Observable<Product> {
    return this.http
      .get<ProductResponse>(`${environment.api_url}product-details.php`, {
        params: { id: productId },
      })
      .pipe(
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
      .get<ProductResponse[]>(`${environment.api_url}products.php`, { params: { newProducts: 1 } })
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
}
