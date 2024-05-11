import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';

import { Customer } from '@app/main/interfaces/costumer.interface';
import { ConfirmCustomerDeletionDialogComponent } from '@app/main/dialogs/confirm-customer-deletion-dialog/confirm-customer-deletion-dialog.component';
import {
  DialogAskBeforeDeleteDataInterface,
  DialogViewEditCustomerDataInterface,
} from '@app/main/interfaces/dialogs.interface';
import { CustomerService } from '@app/main/services/customer.service';
import { ViewEditCustomerDialogComponent } from '@app/main/dialogs/view-edit-customer-dialog/view-edit-customer-dialog.component';

@Component({
  selector: 'app-registered-customer-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './registered-customer-card.component.html',
})
export class RegisteredCustomerCardComponent {
  @Input() customer: Customer | null = null;

  constructor(
    public dialog: MatDialog,
    private _customerService: CustomerService
  ) {}

  onShouldOpenViewEditDialog() {
    if (this.customer?.id) {
      const data: DialogViewEditCustomerDataInterface = {
        id: this.customer?.id,
      };

      this.dialog.open(ViewEditCustomerDialogComponent, {
        width: '45%',
        height: 'auto',
        data,
      });
    }
  }

  onShouldAskBeforeDeletion() {
    if (this.customer?.id) {
      const data: DialogAskBeforeDeleteDataInterface = {
        id: this.customer?.id,
      };

      const dialogRef = this.dialog.open(
        ConfirmCustomerDeletionDialogComponent,
        {
          width: '30%',
          height: 'auto',
          data,
        }
      );

      dialogRef.afterClosed().subscribe((result) => {
        if (result === 'borrar' && this.customer?.id) {
          this._customerService.deleteCustomer({ id: this.customer?.id });
        }
      });
    }
  }
}
