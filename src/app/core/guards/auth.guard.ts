import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserData } from '@core/data/loginData.enum';
import { AuthService } from '@core/services/auth.service';

// canActivate guard function
export const authGuard: CanActivateFn = async (route, state) => {
  const router = inject(Router);
  const authService = inject(AuthService);

  if (
    authService.data.userData === UserData.NAME &&
    authService.data.password === UserData.PASSWORD
  ) {
    return true;
  } else {
    router.navigate(['/sign-in']);
    return false;
  }
};
