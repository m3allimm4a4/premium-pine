import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { TrendingItemsComponent } from './trending-items/trending-items.component';
import { BannersComponent } from './banners/banners.component';
import { SliderComponent } from './slider/slider.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [HomeComponent, TrendingItemsComponent, BannersComponent, SliderComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FontAwesomeModule,
    NgbModule,
    SharedModule,
    FormsModule,
  ],
})
export class HomeModule {}
