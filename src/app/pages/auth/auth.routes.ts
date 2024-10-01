import { Routes } from '@angular/router';

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
          path: 'sign-up',
          loadComponent: () =>
          import('./components/sign-up/sign-up.component').then(
              (c) => c.SignUpComponent
          ),
      },
    ],
  },
];
