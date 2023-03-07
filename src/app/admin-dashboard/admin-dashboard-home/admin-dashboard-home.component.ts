import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/home/home.service';
import { Banner } from 'src/app/shared/models/banner.interface';
import { SliderItem } from 'src/app/shared/models/slider.interface';

@Component({
  selector: 'app-admin-dashboard-home',
  templateUrl: './admin-dashboard-home.component.html',
  styleUrls: ['./admin-dashboard-home.component.scss'],
})
export class AdminDashboardHomeComponent implements OnInit {
  public sliderItems: SliderItem[] = [];
  public banners: Banner[] = [];

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.refreshSlider();
    this.refreshBanners();
  }

  onSliderUpdate(slider: SliderItem): void {
    if (slider.title && slider.subtitle && slider.description && slider.url && slider.imageFile) {
      this.homeService.updateSlider(slider).subscribe(() => {
        this.refreshSlider();
      });
    }
  }

  onBannerUpdate(banner: Banner): void {
    if (banner.title && banner.subtitle && banner.url && banner.imageFile) {
      this.homeService.updateBanner(banner).subscribe(() => {
        this.refreshBanners();
      });
    }
  }

  public onFileChange(event: Event, item: Banner | SliderItem): void {
    const fileList = (event.target as HTMLInputElement).files;
    if (fileList && fileList.length > 0) {
      const file = fileList[0];
      item.imageFile = file;
    }
  }

  private refreshBanners(): void {
    this.homeService.getBanners().subscribe(banners => {
      this.banners = banners;
    });
  }

  private refreshSlider(): void {
    this.homeService.getSlider().subscribe(slider => {
      this.sliderItems = slider;
    });
  }
}
