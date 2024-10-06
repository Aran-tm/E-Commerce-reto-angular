import { Routes } from '@angular/router';
import { signUpGuard } from 'src/app/core/guards/sign-up.guard';

export const authRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'sign-in',
        loadComponent: () =>
          import('./components/sign-in/sign-in.component').then(
            (c) => c.SignInComponent
          ),
      },
      {
        canDeactivate: [signUpGuard],
        path: 'sign-up',
        loadComponent: () =>
          import('./components/sign-up/sign-up.component').then(
            (c) => c.SignUpComponent
          ),
      },
    ],
  },
];
