import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private errorSubject = new Subject<string>();
  error$ = this.errorSubject.asObservable();

  showError(mensaje: string) {
    this.errorSubject.next(mensaje);
  }
}
