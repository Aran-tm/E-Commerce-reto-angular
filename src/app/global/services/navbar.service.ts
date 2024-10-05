import { Injectable } from '@angular/core';
import { NavElement } from '@global/enums/navElement';
import { NavRoutes } from '@global/interfaces/navRoutes.interface';

@Injectable({
  providedIn: 'root',
})
export class NavbarService {
  constructor() {}

  navRoutes: NavRoutes[] = [
    {
      id: 1,
      name: NavElement.HOME,
      route: '/home',
    },
    {
      id: 2,
      name: NavElement.SHOP,
      route: '/shop',
    },
    {
      id: 3,
      name: NavElement.PRODUCT,
      route: '/products',
    },
    {
      id: 4,
      name: NavElement.ABOUT_US,
      route: '/about-us',
    },
  ];
}
