import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerPricesComponent } from './prices-banner.component';

describe('BannerPricesComponent', () => {
  let component: BannerPricesComponent;
  let fixture: ComponentFixture<BannerPricesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerPricesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BannerPricesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
