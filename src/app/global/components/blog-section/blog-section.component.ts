import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SectionsTitleComponent } from '../sections-title/sections-title.component';

@Component({
  selector: 'app-blog-section',
  standalone: true,
  imports: [RouterLink, SectionsTitleComponent],
  templateUrl: './blog-section.component.html',
  styles: ``,
})
export class BlogSectionComponent {
  title = 'Articles';
  more = 'More Articles';
}
