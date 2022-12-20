import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SliderComponent } from './slider/slider.component';
import { BannersComponent } from './banners/banners.component';
import { TrendingItemsComponent } from './trending-items/trending-items.component';

@NgModule({
  declarations: [HomeComponent, SliderComponent, BannersComponent, TrendingItemsComponent],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
