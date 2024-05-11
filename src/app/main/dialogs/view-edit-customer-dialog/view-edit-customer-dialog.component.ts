import { Component, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

import { CustomerFormComponent } from '@app/main/components/customer-form/customer-form.component';
import { DialogViewEditCustomerDataInterface } from '@app/main/interfaces/dialogs.interface';
import { CustomerService } from '@app/main/services/customer.service';

@Component({
  selector: 'app-view-edit-customer-dialog',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, CustomerFormComponent],
  templateUrl: './view-edit-customer-dialog.component.html',
})
export class ViewEditCustomerDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogViewEditCustomerDataInterface,
    private _dialogRef: MatDialogRef<ViewEditCustomerDialogComponent>,
    private _customerService: CustomerService
  ) {}

  onShouldCloseDialogAfterCustomerUpdated() {
    this._dialogRef.close();
  }
}
