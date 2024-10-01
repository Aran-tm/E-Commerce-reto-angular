import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LimitedOfferComponent } from './limited-offer.component';

describe('LimitedOfferComponent', () => {
  let component: LimitedOfferComponent;
  let fixture: ComponentFixture<LimitedOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LimitedOfferComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LimitedOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
