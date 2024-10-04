// interceptor based function (Angular Standalone Components)
import { HttpInterceptorFn } from '@angular/common/http';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  console.log(`------Interceptor------`);
  console.log(`Request: `, req);

  const modifiedRequest = req.clone({
    headers: req.headers.set('Error404', 'Page Not Founded'),
  });

  return next(modifiedRequest);
};
