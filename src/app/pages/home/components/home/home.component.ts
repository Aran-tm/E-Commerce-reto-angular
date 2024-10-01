import { Component } from '@angular/core';
import { LimitedOfferComponent } from "../../../../global/components/limited-offer/limited-offer.component";
import { NavbarComponent } from "../../../../global/components/navbar/navbar.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LimitedOfferComponent, NavbarComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {}
