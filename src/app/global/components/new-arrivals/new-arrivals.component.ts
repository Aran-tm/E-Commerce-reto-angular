import { Component } from '@angular/core';
import { SectionsTitleComponent } from '../sections-title/sections-title.component';

@Component({
  selector: 'app-new-arrivals',
  standalone: true,
  imports: [SectionsTitleComponent],
  templateUrl: './new-arrivals.component.html',
  styles: ``,
})
export class NewArrivalsComponent {
  title = 'New Arrivals';
  more = 'More Products';
}
