import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { ProductListService } from 'src/app/product-list/product-list.service';
import { Product } from 'src/app/shared/models/product.interface';
import { environment } from 'environment/environment';

@Component({
  selector: 'app-admin-dashboard-products',
  templateUrl: './admin-dashboard-products.component.html',
  styleUrls: ['./admin-dashboard-products.component.scss'],
})
export class AdminDashboardProductsComponent implements OnInit {
  faEdit = faEdit;
  faTrash = faTrash;
  public products: Product[] = [];

  constructor(
    public activatedRoute: ActivatedRoute,
    private http: HttpClient,
    private productList: ProductListService
  ) {}

  ngOnInit(): void {
    this.refreshProducts();
  }

  public deleteProduct(product: Product): void {
    this.http
      .delete<void>(`${environment.api_url}products.php`, { params: { id: product.id } })
      .subscribe(() => {
        this.refreshProducts();
      });
  }

  private refreshProducts(): void {
    this.productList.getProductList().subscribe(products => {
      this.products = products;
    });
  }
}
