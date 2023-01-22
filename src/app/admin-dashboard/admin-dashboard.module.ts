import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminDashboardCategoriesDetailsComponent } from './admin-dashboard-categories/admin-dashboard-categories-details/admin-dashboard-categories-details.component';
import { AdminDashboardCategoriesComponent } from './admin-dashboard-categories/admin-dashboard-categories.component';
import { AdminDashboardHomeComponent } from './admin-dashboard-home/admin-dashboard-home.component';
import { AdminDashboardOrdersDetailsComponent } from './admin-dashboard-orders/admin-dashboard-orders-details/admin-dashboard-orders-details.component';
import { AdminDashboardOrdersComponent } from './admin-dashboard-orders/admin-dashboard-orders.component';
import { AdminDashboardProductsDetailsComponent } from './admin-dashboard-products/admin-dashboard-products-details/admin-dashboard-products-details.component';
import { AdminDashboardProductsComponent } from './admin-dashboard-products/admin-dashboard-products.component';
import { AdminDashboardRoutingModule } from './admin-dashboard-routing.module';
import { AdminDashboardComponent } from './admin-dashboard.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';

@NgModule({
  declarations: [
    AdminDashboardComponent,
    AdminDashboardHomeComponent,
    AdminDashboardCategoriesComponent,
    AdminDashboardCategoriesDetailsComponent,
    AdminDashboardOrdersComponent,
    AdminDashboardOrdersDetailsComponent,
    AdminDashboardProductsComponent,
    AdminDashboardProductsDetailsComponent,
    AdminHeaderComponent,
  ],
  imports: [
    CommonModule,
    AdminDashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule,
    NgbModule,
  ],
})
export class AdminDashboardModule {}
