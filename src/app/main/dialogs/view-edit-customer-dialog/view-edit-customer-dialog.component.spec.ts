import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEditCustomerDialogComponent } from './view-edit-customer-dialog.component';

describe('ViewEditCustomerDialogComponent', () => {
  let component: ViewEditCustomerDialogComponent;
  let fixture: ComponentFixture<ViewEditCustomerDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewEditCustomerDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewEditCustomerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
