import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailsRoutingModule } from './product-details-routing.module';
import { ProductDetailsComponent } from './product-details.component';
import { ProductDetailsSidebarComponent } from './product-details-sidebar/product-details-sidebar.component';
import { ProductDetailsSocialLinksComponent } from './product-details-social-links/product-details-social-links.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ProductDetailsComponent,
    ProductDetailsSidebarComponent,
    ProductDetailsSocialLinksComponent,
  ],
  imports: [
    CommonModule,
    ProductDetailsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    NgbModule,
    SharedModule,
  ],
})
export class ProductDetailsModule {}
