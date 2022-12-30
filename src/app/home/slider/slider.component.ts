import { Component, OnInit } from '@angular/core';
import { SliderItem } from 'src/app/shared/models/slider.interface';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {
  public sliderItems: SliderItem[] = [];

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.homeService.getSlider().subscribe(slider => {
      this.sliderItems = slider;
    });
  }
}
