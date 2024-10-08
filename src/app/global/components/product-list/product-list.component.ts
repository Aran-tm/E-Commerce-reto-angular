import { environment } from 'src/environments/environment';
import { Component, inject, input, OnInit, signal } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ProductState } from '@global/enums/productStates';
import { ProductDiscount } from '@global/enums/productDiscount';
import { ProductsService } from 'src/app/core/services/products.service';
import { ExtraProductDetails } from '@global/interfaces/extraProductDetails.interface';
import { ProductCard } from '@global/interfaces/product-card.interface';
import { ErrorMessageComponent } from '../error-message/error-message.component';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductCardComponent, ErrorMessageComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent implements OnInit {
  public haveError = signal<boolean>(false);
  errorMessage: string = '';
  listProduct?: ProductCard[] = [];
  private productService = inject(ProductsService);
  searchbarText = input<string>();
  productsID: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // just for get 10 products
  result: string = '';

  exProdDetails: ExtraProductDetails[] = [
    {
      state: ProductState.NEW,
      discount: ProductDiscount.HALF,
    },
  ];

  ngOnInit() {
    console.log(`URL Products: `, environment.apiUrlBase);

    this.productService
      .getProductList()
      .pipe(
        catchError((error: any) => {
          // showing message error to user
          this.haveError.update(() => true);
          this.errorMessage = error;

          // returning error for others uses
          return throwError(() => new Error('Service Error'));
        })
      )
      .subscribe({
        next: (res) => {
          this.listProduct = res;
        },
        error: (err) => {
          console.error('Subscribe error:', err);
        },
      });
  }

  showTenProducts() {
    this.productService.mergeMapMethod(this.productsID).subscribe(
      (result) => {
        this.listProduct = result
        console.log(`Merge Map`, this.listProduct);
      },
      (error) => {
        console.error('Error:', error);
        this.result = 'Error occurred';
        console.log(`Error Result`, this.result);
      }
    );
  }
}
