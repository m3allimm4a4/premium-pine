import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../shared/shared.module';
import { ProductListRoutingModule } from './product-list-routing.module';
import { ProductListSidebarComponent } from './product-list-sidebar/product-list-sidebar.component';
import { ProductListTopbarComponent } from './product-list-topbar/product-list-topbar.component';
import { ProductListComponent } from './product-list.component';

@NgModule({
  declarations: [ProductListComponent, ProductListSidebarComponent, ProductListTopbarComponent],
  imports: [
    CommonModule,
    ProductListRoutingModule,
    FormsModule,
    FontAwesomeModule,
    NgbModule,
    SharedModule,
  ],
})
export class ProductListModule {}
