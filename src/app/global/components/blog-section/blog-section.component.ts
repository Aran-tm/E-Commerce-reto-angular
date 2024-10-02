import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SectionsTitleComponent } from '../sections-title/sections-title.component';
import { ArticleCard } from '@global/models/article-card.interface';
import { ArticleCardComponent } from '../article-card/article-card.component';

@Component({
  selector: 'app-blog-section',
  standalone: true,
  imports: [RouterLink, SectionsTitleComponent, ArticleCardComponent],
  templateUrl: './blog-section.component.html',
  styles: ``,
})
export class BlogSectionComponent {
  title = 'Articles';
  more = 'More Articles';

  articleCards: ArticleCard[] = [
    {
      id: 1,
      image: '/assets/images/png/articles/1.png',
      description: '7 ways to decor your home',
      readMoreText: 'Read More',
      readMoreIcon: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.16666 10H15.8333" stroke="#6C7275" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M10.8333 15L15.8333 10" stroke="#6C7275" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M10.8333 5L15.8333 10" stroke="#6C7275" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    `,
    },
    {
      id: 2,
      image: '/assets/images/png/articles/2.png',
      description: 'Kitchen organization',
      readMoreText: 'Read More',
      readMoreIcon: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.16666 10H15.8333" stroke="#6C7275" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M10.8333 15L15.8333 10" stroke="#6C7275" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M10.8333 5L15.8333 10" stroke="#6C7275" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    `,
    },
    {
      id: 3,
      image: '/assets/images/png/articles/3.png',
      description: 'Decor your bedroom',
      readMoreText: 'Read More',
      readMoreIcon: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.16666 10H15.8333" stroke="#6C7275" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M10.8333 15L15.8333 10" stroke="#6C7275" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M10.8333 5L15.8333 10" stroke="#6C7275" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    `,
    },
  ];
}
