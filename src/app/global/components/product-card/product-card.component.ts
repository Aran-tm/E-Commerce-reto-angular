import { Component, input } from '@angular/core';
import { ProductCard } from '@global/models/product-card.interface';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styles: ``,
})
export class ProductCardComponent {
  // product card item
  card = input<ProductCard>();
}
