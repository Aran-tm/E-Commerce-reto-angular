import { environment } from 'src/environments/environment';
import { Component, inject, OnInit } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ProductState } from '@global/enums/productStates';
import { ProductDiscount } from '@global/enums/productDiscount';
import { ProductsService } from '@global/services/products.service';
import { ExtraProductDetails } from '@global/interfaces/extraProductDetails.interface';
import { ProductCard } from '@global/interfaces/product-card.interface';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent implements OnInit {
  public errorMessage: string = '';
  listProduct?: ProductCard[] = [];
  private productService = inject(ProductsService);

  exProdDetails: ExtraProductDetails[] = [
    {
      state: ProductState.NEW,
      discount: ProductDiscount.HALF,
    },
  ];

  ngOnInit() {
    console.log(`URL Products: `, environment.apiUrlBase);

    this.productService.getProductList().subscribe((res) => {
      this.listProduct = res;
      this.errorMessage = this.productService.errorMessage;
      console.log(`Product List: `, this.listProduct);
      console.log(`This Error Message: `, this.errorMessage);
    });
  }
}
