import { inject, signal } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserData } from '@core/data/loginData.enum';
import { AuthService } from '@core/services/auth.service';
import { AppStore } from '@core/store/app.store';
import { ToastrService } from 'ngx-toastr';

// canActivate guard function
export const authGuard: CanActivateFn = async (route, state) => {
  const router = inject(Router);
  const authService = inject(AuthService);
  const store = inject(AppStore);
  const toastSvc = inject(ToastrService);

  if (
    authService.data.userData === UserData.NAME &&
    authService.data.password === UserData.PASSWORD
  ) {
    store.signIn();
    return true;
  } else {
    router.navigate(['/sign-in']);
    toastSvc.error('Invalid Credentials', '3legant. Shop');
    return false;
  }
};
