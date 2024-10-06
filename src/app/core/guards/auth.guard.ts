import { CanActivateFn } from '@angular/router';

// canActivate guard function
export const authGuard: CanActivateFn = (route, state) => {
  return true;
};
