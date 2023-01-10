import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminDashboardHomeComponent } from './admin-dashboard/admin-dashboard-home/admin-dashboard-home.component';
import { AuthComponent } from './auth/auth.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AdminDashboardCategoriesComponent } from './admin-dashboard/admin-dashboard-categories/admin-dashboard-categories.component';
import { AdminDashboardCategoriesDetailsComponent } from './admin-dashboard/admin-dashboard-categories/admin-dashboard-categories-details/admin-dashboard-categories-details.component';
import { AdminDashboardOrdersComponent } from './admin-dashboard/admin-dashboard-orders/admin-dashboard-orders.component';
import { AdminDashboardOrdersDetailsComponent } from './admin-dashboard/admin-dashboard-orders/admin-dashboard-orders-details/admin-dashboard-orders-details.component';
import { AdminDashboardProductsComponent } from './admin-dashboard/admin-dashboard-products/admin-dashboard-products.component';
import { AdminDashboardProductsDetailsComponent } from './admin-dashboard/admin-dashboard-products/admin-dashboard-products-details/admin-dashboard-products-details.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
  },
  {
    path: 'contact-us',
    component: ContactUsComponent,
  },
  {
    path: 'product-list',
    component: ProductListComponent,
  },
  {
    path: 'product-details/:id',
    component: ProductDetailsComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
  },
  {
    path: 'login',
    component: AuthComponent,
  },
  {
    path: 'admin-dashboard',
    component: AdminDashboardComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: AdminDashboardHomeComponent,
      },
      {
        path: 'categories',
        component: AdminDashboardCategoriesComponent,
      },
      {
        path: 'categories/:id',
        component: AdminDashboardCategoriesDetailsComponent,
      },
      {
        path: 'orders',
        component: AdminDashboardOrdersComponent,
      },
      {
        path: 'orders/:id',
        component: AdminDashboardOrdersDetailsComponent,
      },
      {
        path: 'products',
        component: AdminDashboardProductsComponent,
      },
      {
        path: 'products/:id',
        component: AdminDashboardProductsDetailsComponent,
      },
    ],
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
