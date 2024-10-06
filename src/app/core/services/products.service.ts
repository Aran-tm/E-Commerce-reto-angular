import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ProductCard } from '@global/interfaces/product-card.interface';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  http = inject(HttpClient);
  errorMessage: string = '';

  getProductList(): Observable<any> {
    // correct domain: `${environment.apiUrlBase}/products`  wrong domain just for interceptors testing
    return this.http.get<any>(`${environment.apiUrlBase}/products`);
  }
}
