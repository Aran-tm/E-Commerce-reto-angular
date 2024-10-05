import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ArticleCard } from '@global/interfaces/article-card.interface';
import { SafePipe } from 'safe-pipe';

@Component({
  selector: 'app-article-card',
  standalone: true,
  imports: [RouterLink, SafePipe],
  templateUrl: './article-card.component.html',
  styles: ``,
})
export class ArticleCardComponent {
  article = input<ArticleCard>();
}
