import { Component, Inject } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { DialogAskBeforeDeleteDataInterface } from '@app/main/interfaces/dialogs.interface';
import { CustomerService } from '@app/main/services/customer.service';

@Component({
  selector: 'app-confirm-customer-deletion-dialog',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  templateUrl: './confirm-customer-deletion-dialog.component.html',
})
export class ConfirmCustomerDeletionDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogAskBeforeDeleteDataInterface,
    private _dialogRef: MatDialogRef<ConfirmCustomerDeletionDialogComponent>,
    private _customerService: CustomerService,
    private _snackBar: MatSnackBar
  ) {}

  onConfirmDeleteCustomer() {
    if (this?.data?.id) {
      this._customerService?.deleteCustomer({ id: this?.data?.id });
      this._snackBar.open('Cliente eliminado', '', { duration: 1500 });
      this._dialogRef.close('borrar');
    }
  }
}
