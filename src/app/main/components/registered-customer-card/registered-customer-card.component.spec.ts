import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisteredCustomerCardComponent } from './registered-customer-card.component';

describe('RegisteredCustomerCardComponent', () => {
  let component: RegisteredCustomerCardComponent;
  let fixture: ComponentFixture<RegisteredCustomerCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisteredCustomerCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RegisteredCustomerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have customer initialized null', () => {
    expect(component.customer).toBe(null);
  });
});
