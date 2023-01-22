import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { ModalContentComponent } from './components/modal-content/modal-content.component';
import { ProductCardComponent } from './components/product-card/product-card.component';

@NgModule({
  declarations: [BreadcrumbsComponent, ModalContentComponent, ProductCardComponent],
  imports: [CommonModule, RouterModule, FontAwesomeModule],
  exports: [BreadcrumbsComponent, ModalContentComponent, ProductCardComponent],
})
export class SharedModule {}
