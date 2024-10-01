import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-limited-offer',
  standalone: true,
  imports: [NgClass],
  templateUrl: './limited-offer.component.html',
})
export class LimitedOfferComponent {
  hideOffer: boolean = false;

  // hide offer function
  hideOfferFunction() {
    this.hideOffer = true;
  }
}
