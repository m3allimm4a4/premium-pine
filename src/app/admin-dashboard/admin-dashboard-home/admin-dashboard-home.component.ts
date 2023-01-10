import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/home/home.service';
import { SliderItem } from 'src/app/shared/models/slider.interface';

@Component({
  selector: 'app-admin-dashboard-home',
  templateUrl: './admin-dashboard-home.component.html',
  styleUrls: ['./admin-dashboard-home.component.scss'],
})
export class AdminDashboardHomeComponent implements OnInit {
  public sliderItems: SliderItem[] = [];

  constructor(private http: HttpClient, private homeService: HomeService) {}

  ngOnInit(): void {
    this.homeService.getSlider().subscribe(slider => {
      this.sliderItems = slider;
    });
  }

  onSliderUpdate(slider: SliderItem) {}
}
