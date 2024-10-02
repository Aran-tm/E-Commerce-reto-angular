import { Component } from '@angular/core';
import { NewArrivalsTitleComponent } from "../new-arrivals-title/new-arrivals-title.component";

@Component({
  selector: 'app-new-arrivals',
  standalone: true,
  imports: [NewArrivalsTitleComponent],
  templateUrl: './new-arrivals.component.html',
  styles: ``,
})
export class NewArrivalsComponent {}
