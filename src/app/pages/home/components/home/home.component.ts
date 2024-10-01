import { Component } from '@angular/core';
import { LimitedOfferComponent } from '@global/components/limited-offer/limited-offer.component';
import { NavbarComponent } from '@global/components/navbar/navbar.component';
import { CarrouselComponent } from '@global/components/carrousel/carrousel.component';
import { BannerGridComponent } from '@global/components/banner-grid/banner-grid.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    LimitedOfferComponent,
    NavbarComponent,
    CarrouselComponent,
    BannerGridComponent,
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent {}
