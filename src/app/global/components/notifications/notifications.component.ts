import { Component, inject, OnInit } from '@angular/core';
import { AppStore } from '@core/store/app.store';

@Component({
  selector: 'app-shop-notifications',
  standalone: true,
  imports: [],
  templateUrl: './notifications.component.html',
  styles: ``,
})
export class NotificationsComponent implements OnInit {
  private readonly store = inject(AppStore);
  numberOfNotifications = this.store.productsCount();

  ngOnInit() {
    console.log(`Quantity of products: `, this.numberOfNotifications);
  }
}
