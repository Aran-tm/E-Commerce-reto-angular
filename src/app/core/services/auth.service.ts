import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  data?: any;

  // fetching data input
  sendUserData(data: any) {
    this.data = data;
    console.log('Datos recibidos:', data);
    console.log(`New Data: `, this.data);
  }
}
