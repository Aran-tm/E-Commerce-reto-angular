import { Routes } from '@angular/router';
import { AuthLayoutComponent } from '../global/components/layouts/auth-layout-component/auth-layout.component';
import { NotFoundComponent } from '@pages/others/components/not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'sign-in',
    pathMatch: 'full',
  },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('@pages/auth/auth.routes').then(
            (authRoutes) => authRoutes.authRoutes
          ),
      },
    ],
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
