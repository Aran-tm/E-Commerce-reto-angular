import { NavbarService } from '@global/services/navbar.service';
import { NavRoutes } from './../../models/navRoutes.interface';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  navbar = inject(NavbarService);
  navRoutes: NavRoutes[] = [];

  ngOnInit() {
    this.navRoutes = this.navbar.navRoutes;
  }
}
