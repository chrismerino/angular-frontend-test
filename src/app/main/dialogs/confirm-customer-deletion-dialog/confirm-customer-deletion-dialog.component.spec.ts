import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmCustomerDeletionDialogComponent } from './confirm-customer-deletion-dialog.component';

describe('ConfirmCustomerDeletionDialogComponent', () => {
  let component: ConfirmCustomerDeletionDialogComponent;
  let fixture: ComponentFixture<ConfirmCustomerDeletionDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmCustomerDeletionDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConfirmCustomerDeletionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
