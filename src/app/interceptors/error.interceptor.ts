import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const errorHandlerInterceptor: HttpInterceptorFn = (req, next) => {
  console.log(`------Error Interceptor------`);
  console.log(`------Solicitud------`, req);

  // cloning request and adding header
  const clonedRequest = req.clone({
    setHeaders: {
      'X-Custom-Header': 'handling-errors',
    },
  });

  return next(clonedRequest).pipe(
    catchError((error: HttpErrorResponse) => {
      let errorMessage = '';

      if (error.error instanceof ErrorEvent) {
        errorMessage = `Error: ${error.error.message}`;
      } else {
        errorMessage = `Error code: ${error.status}, message: ${error.message}`;

        if (error.status === 404) {
          console.error('Error 404: Recurso no encontrado');
        } else if (error.status === 500) {
          console.error('Error 500: Error interno del servidor');
        } else if (error.status === 0) {
          console.error('Error 0 UNKNOWN');
        }
      }

      return throwError(() => errorMessage);
    })
  );
};
