import { Directive, HostListener } from '@angular/core';

// decorator for directives
@Directive({
  selector: '[appMessageDirective]',
  standalone: true,
})
export class MessageDirective {
  constructor() {}

  // listening mouse event
  @HostListener('click', ['$event'])
  onClick(event: MouseEvent) {
    alert(`Limited Offer Closed`);
  }
}
