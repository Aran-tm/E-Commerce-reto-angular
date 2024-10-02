import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sections-title',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './sections-title.component.html',
  styles: ``,
})
export class SectionsTitleComponent {
  title = input<string>();
  more = input<string>();
}
