import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartTableComponent } from './cart/cart-table/cart-table.component';
import { CartTotalAmountComponent } from './cart/cart-total-amount/cart-total-amount.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ContactUsFormComponent } from './contact-us/contact-us-form/contact-us-form.component';
import { ContactUsInfoComponent } from './contact-us/contact-us-info/contact-us-info.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { BannersComponent } from './home/banners/banners.component';
import { HomeComponent } from './home/home.component';
import { SliderComponent } from './home/slider/slider.component';
import { TrendingItemsComponent } from './home/trending-items/trending-items.component';
import { ProductDetailsSidebarComponent } from './product-details/product-details-sidebar/product-details-sidebar.component';
import { ProductDetailsSocialLinksComponent } from './product-details/product-details-social-links/product-details-social-links.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListSidebarComponent } from './product-list/product-list-sidebar/product-list-sidebar.component';
import { ProductListTopbarComponent } from './product-list/product-list-topbar/product-list-topbar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { BreadcrumbsComponent } from './shared/components/breadcrumbs/breadcrumbs.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeaderInnerComponent } from './shared/components/header/header-inner/header-inner.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { HeaderShoppingListComponent } from './shared/components/header/middle-inner/header-shopping-list/header-shopping-list.component';
import { MiddleInnerComponent } from './shared/components/header/middle-inner/middle-inner.component';
import { TopbarComponent } from './shared/components/header/topbar/topbar.component';
import { ItemCardComponent } from './shared/components/product-card/product-card.component';
import { ModalContentComponent } from './shared/components/modal-content/modal-content.component';
import { AuthComponent } from './auth/auth.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminHeaderComponent } from './admin-dashboard/admin-header/admin-header.component';
import { AdminDashboardHomeComponent } from './admin-dashboard/admin-dashboard-home/admin-dashboard-home.component';
import { AdminDashboardCategoriesComponent } from './admin-dashboard/admin-dashboard-categories/admin-dashboard-categories.component';
import { AdminDashboardCategoriesDetailsComponent } from './admin-dashboard/admin-dashboard-categories/admin-dashboard-categories-details/admin-dashboard-categories-details.component';
import { AdminDashboardOrdersComponent } from './admin-dashboard/admin-dashboard-orders/admin-dashboard-orders.component';
import { AdminDashboardOrdersDetailsComponent } from './admin-dashboard/admin-dashboard-orders/admin-dashboard-orders-details/admin-dashboard-orders-details.component';
import { AdminDashboardProductsComponent } from './admin-dashboard/admin-dashboard-products/admin-dashboard-products.component';
import { AdminDashboardProductsDetailsComponent } from './admin-dashboard/admin-dashboard-products/admin-dashboard-products-details/admin-dashboard-products-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopbarComponent,
    MiddleInnerComponent,
    HeaderInnerComponent,
    FooterComponent,
    BannersComponent,
    SliderComponent,
    TrendingItemsComponent,
    ItemCardComponent,
    HomeComponent,
    SliderComponent,
    BannersComponent,
    ContactUsComponent,
    BreadcrumbsComponent,
    ContactUsFormComponent,
    ContactUsInfoComponent,
    ProductListComponent,
    ProductListSidebarComponent,
    ProductListTopbarComponent,
    ProductDetailsComponent,
    HeaderShoppingListComponent,
    ProductDetailsSidebarComponent,
    ProductDetailsSocialLinksComponent,
    CartComponent,
    CartTableComponent,
    CartTotalAmountComponent,
    CheckoutComponent,
    ModalContentComponent,
    AuthComponent,
    AdminDashboardComponent,
    AdminHeaderComponent,
    AdminDashboardHomeComponent,
    AdminDashboardCategoriesComponent,
    AdminDashboardCategoriesDetailsComponent,
    AdminDashboardOrdersComponent,
    AdminDashboardOrdersDetailsComponent,
    AdminDashboardProductsComponent,
    AdminDashboardProductsDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
