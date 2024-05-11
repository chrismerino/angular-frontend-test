import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmCustomerDeletionDialogComponent } from './confirm-customer-deletion-dialog.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

describe('ConfirmCustomerDeletionDialogComponent', () => {
  let component: ConfirmCustomerDeletionDialogComponent;
  let fixture: ComponentFixture<ConfirmCustomerDeletionDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmCustomerDeletionDialogComponent],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ConfirmCustomerDeletionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
