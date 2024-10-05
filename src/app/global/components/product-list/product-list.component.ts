import { environment } from 'src/environments/environment';
import { Component, inject, OnInit, signal } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ProductState } from '@global/enums/productStates';
import { ProductDiscount } from '@global/enums/productDiscount';
import { ProductsService } from '@global/services/products.service';
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
          this.haveError.set(true);
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
}
