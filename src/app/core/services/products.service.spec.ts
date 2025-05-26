import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { ProductsService } from './products.service';

describe('ProductsService', () => {
  let service: ProductsService;

  // Pruebas con Jazmine + Karma, para comprobar que el servicio existe
  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientModule]});
    service = TestBed.inject(ProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  /** Aqui estoy testeando la llamada a la funcion
   *  para probar que se esten trayendo objetos correctamente */
  it('Retorna el listado de productos', () => {
    expect(service.getProductList()).toBeTruthy();
  });
});
