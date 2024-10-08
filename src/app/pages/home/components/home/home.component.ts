import { Component, inject } from '@angular/core';
import { LimitedOfferComponent } from '@global/components/limited-offer/limited-offer.component';
import { NavbarComponent } from '@global/components/navbar/navbar.component';
import { CarrouselComponent } from '@global/components/carrousel/carrousel.component';
import { BannerGridComponent } from '@global/components/banner-grid/banner-grid.component';
import { ProductListComponent } from '@global/components/product-list/product-list.component';
import { ValuesComponent } from '@global/components/values/values.component';
import { BannerPricesComponent } from '@global/components/banner-prices/prices-banner.component';
import { BlogSectionComponent } from '@global/components/blog-section/blog-section.component';
import { SectionsTitleComponent } from '@global/components/sections-title/sections-title.component';
import { NewArrivalsComponent } from '@global/components/new-arrivals/new-arrivals.component';
import { NewsletterComponent } from '@global/components/newsletter/newsletter.component';
import { FooterComponent } from '@global/components/footer/footer.component';
import { SearchbarComponent } from '@global/components/searchbar/searchbar.component';
import { AppStore } from '@core/store/app.store';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    LimitedOfferComponent,
    NavbarComponent,
    CarrouselComponent,
    BannerGridComponent,
    ProductListComponent,
    ValuesComponent,
    BannerPricesComponent,
    BlogSectionComponent,
    SectionsTitleComponent,
    NewArrivalsComponent,
    SearchbarComponent,
    NewsletterComponent,
    FooterComponent,
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  searchbarText: string = '';
  store = inject(AppStore);

  searchbarInputText(searchbarString: string) {
    this.searchbarText = searchbarString;
    console.log(`Obtaining searchbar text: `, this.searchbarText);
  }

  ngOnInit() {
    console.log(`Is User Logged`, this.store.userIsLogged());
  }
}
