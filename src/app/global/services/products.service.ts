import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  http = inject(HttpClient);

  getProductList() {
    return this.http.get<any>(`${environment.apiUrlBase}/wacangaproducts`);
  }
}
