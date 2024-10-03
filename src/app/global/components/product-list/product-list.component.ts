import { Component, inject } from '@angular/core';
import { ProductCard } from '@global/models/product-card.interface';
import { ProductCardComponent } from '../product-card/product-card.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ExtraProductDetails } from '@global/models/extraProductDetails.interface';
import { ProductState } from '@global/enums/productStates';
import { ProductDiscount } from '@global/enums/productDiscount';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductCardComponent, HttpClientModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent {
  http = inject(HttpClient);
  URL_PRODUCTS = `${environment.domain}/products`;
  listProduct: ProductCard[] = [];
  exProdDetails: ExtraProductDetails[] = [
    {
      state: ProductState.NEW,
      discount: ProductDiscount.HALF,
    },
  ];

  ngOnInit() {
    console.log(`URL Products: `, this.URL_PRODUCTS);

    this.http.get<any>(this.URL_PRODUCTS).subscribe(
      (data) => {
        this.listProduct = data; // Asigna la data obtenida a la propiedad listProduct
        console.log(`Productos From Fake API`, this.listProduct);
      },
      (error) => {
        console.error('Error catching datas', error); // Manejo de errores
      }
    );
  }
}
