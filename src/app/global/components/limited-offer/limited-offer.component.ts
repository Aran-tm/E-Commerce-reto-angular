import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-limited-offer',
  standalone: true,
  imports: [NgClass, RouterLink],
  templateUrl: './limited-offer.component.html',
})
export class LimitedOfferComponent {
  hideOffer: boolean = false;

  // hide offer function
  hideOfferFunction() {
    this.hideOffer = true;
  }
}
