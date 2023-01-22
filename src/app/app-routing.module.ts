import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'contact-us',
    loadChildren: () => import('./contact-us/contact-us.module').then(m => m.ContactUsModule),
  },
  {
    path: 'product-list',
    loadChildren: () => import('./product-list/product-list.module').then(m => m.ProductListModule),
  },
  {
    path: 'product-details/:id',
    loadChildren: () =>
      import('./product-details/product-details.module').then(m => m.ProductDetailsModule),
  },
  {
    path: 'cart',
    loadChildren: () => import('./cart/cart.module').then(m => m.CartModule),
  },
  {
    path: 'checkout',
    loadChildren: () => import('./checkout/checkout.module').then(m => m.CheckoutModule),
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: 'admin-dashboard',
    loadChildren: () =>
      import('./admin-dashboard/admin-dashboard.module').then(m => m.AdminDashboardModule),
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
