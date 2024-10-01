import { Component } from '@angular/core';
import { ImagesComponent } from './images/images.component';
import { BannerComponent } from './banner/banner.component';

@Component({
  selector: 'app-carrousel',
  standalone: true,
  imports: [ImagesComponent, BannerComponent],
  templateUrl: './carrousel.component.html',
})
export class CarrouselComponent {}
