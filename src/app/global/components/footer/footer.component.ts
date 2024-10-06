import { NavbarService } from 'src/app/core/services/navbar.service';
import { Component, inject } from '@angular/core';
import { NavRoutes } from '@global/interfaces/navRoutes.interface';

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
