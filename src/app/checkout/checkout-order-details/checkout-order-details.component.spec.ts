import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutOrderDetailsComponent } from './checkout-order-details.component';

describe('CheckoutOrderDetailsComponent', () => {
  let component: CheckoutOrderDetailsComponent;
  let fixture: ComponentFixture<CheckoutOrderDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckoutOrderDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckoutOrderDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
