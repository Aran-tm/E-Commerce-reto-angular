import { NgClass } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MessageDirective } from 'src/app/core/directives/message.directive';

@Component({
  selector: 'app-limited-offer',
  standalone: true,
  imports: [
    NgClass,
    RouterLink,
    MessageDirective,
  ],
  templateUrl: './limited-offer.component.html',
})
export class LimitedOfferComponent {
  hideOfferSignal = signal<boolean>(false);

  // hide offer function
  hideOfferFunction() {
    this.hideOfferSignal.set(true);
  }
}
