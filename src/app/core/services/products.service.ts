import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { from, mergeMap, Observable, toArray } from 'rxjs';
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

  mergeMapMethod(ids: number[]): Observable<number[]> {
    return from(ids).pipe(
      mergeMap((id) =>
        this.http.get<number>(`${environment.apiUrlBase}/products/${id}`)
      ),
      toArray()
    );
  }
}
