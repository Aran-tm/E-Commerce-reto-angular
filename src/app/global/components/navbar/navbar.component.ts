import { Component, inject, signal } from '@angular/core';
import { NotificationsComponent } from '../notifications/notifications.component';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { NavElement } from '@global/enums/navElement';
import { NgClass } from '@angular/common';
import { NavRoutes } from '@global/interfaces/navRoutes.interface';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NotificationsComponent, RouterLink, NgClass],
  templateUrl: './navbar.component.html',
  styles: ``,
})
export class NavbarComponent {
  showMenu = signal(false);
  currentURL: string = '';
  actRoute = inject(ActivatedRoute);
  route = inject(Router);

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

  openMenu() {
    this.showMenu.update(() => !this.showMenu);
    console.log(`Showing Menu`, this.showMenu);
  }

  ngOnInit() {
    // capturing currently url
    this.currentURL = this.route.url;
    console.log(`Ruta Actual: `, this.currentURL);
  }
}
