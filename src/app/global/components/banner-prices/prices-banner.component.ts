import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-prices-banner',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './banner-prices.component.html',
})
export class BannerPricesComponent {}
