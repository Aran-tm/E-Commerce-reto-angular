import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  http = inject(HttpClient);
  errorMessage: string = '';

  getProductList() {
    // correct domain: `${environment.apiUrlBase}/products`  wrong domain just for interceptors testing
    return this.http.get<any>(`${environment.apiUrlBase}/wacangaproducts`);
  }
}
