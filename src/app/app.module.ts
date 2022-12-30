import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartTableComponent } from './cart/cart-table/cart-table.component';
import { CartTotalAmountComponent } from './cart/cart-total-amount/cart-total-amount.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutFormComponent } from './checkout/checkout-form/checkout-form.component';
import { CheckoutOrderDetailsComponent } from './checkout/checkout-order-details/checkout-order-details.component';
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
    CheckoutFormComponent,
    CheckoutOrderDetailsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
