import { Routes } from '@angular/router';

export const homeRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('./components/home/home.component').then(
            (c) => c.HomeComponent
          ),
      },
    ],
  },
];
