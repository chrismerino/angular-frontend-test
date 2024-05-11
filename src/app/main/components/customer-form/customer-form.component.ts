import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar } from '@angular/material/snack-bar';

import { CustomerService } from '@app/main/services/customer.service';

@Component({
  selector: 'app-customer-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatSelectModule,
  ],
  templateUrl: './customer-form.component.html',
})
export class CustomerFormComponent implements OnInit {
  @Input() existingCustomerId?: number | string | null = null;
  @Output() customerUpdated = new EventEmitter<void>();

  newCustomerForm = new FormGroup({
    country: new FormControl('', [Validators.required]),
    id: new FormControl('', [Validators.required]),
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    birthDate: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    cellPhone: new FormControl('', [Validators.required]),
    homePhone: new FormControl('', [Validators.required]),
    addressHome: new FormControl('', [Validators.required]),
    profession: new FormControl('', [Validators.required]),
    incomes: new FormControl('', [Validators.required]),
  });

  genders: string[] = ['Mujer', 'Hombre', 'Otro'];

  constructor(
    private _customerService: CustomerService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    if (this.existingCustomerId) {
      const existingCustomer = this._customerService?.getCustomerById({
        id: this.existingCustomerId,
      });

      if (existingCustomer) {
        this.newCustomerForm.setValue(existingCustomer);
      }
    }
  }

  onSubmit() {
    if (this.newCustomerForm.invalid) {
      this.newCustomerForm.markAllAsTouched();
      return;
    }

    if (this.existingCustomerId) {
      // Update Customer
      const updatedCustomer: any = {
        ...this.newCustomerForm.value,
      };

      this._customerService.updateExistingCustomer({
        customer: updatedCustomer,
      });

      this._snackBar.open(
        'El registro ha sido actualizado exitosamente',
        undefined,
        {
          duration: 2500,
        }
      );

      this.customerUpdated.emit(); // To close notify the dialog it can be closed now.
    } else {
      // Create New Customer

      const isCustomerIdAlreadyRegistered =
        this._customerService.getCustomerById({
          id: this.newCustomerForm.value?.id,
        });

      if (isCustomerIdAlreadyRegistered) {
        this._snackBar.open('El ID ya ha sido registrado', undefined, {
          duration: 1500,
        });
      } else {
        const newCustomer: any = {
          ...this.newCustomerForm.value,
        };

        this._customerService.saveNewCustomer({ customer: newCustomer });

        this.newCustomerForm.reset();
        this.newCustomerForm.markAsPristine();
        this.newCustomerForm.markAsUntouched();

        this._snackBar.open(
          'El Cliente ha sido registrado exitosamente',
          undefined,
          { duration: 2000 }
        );
      }
    }
  }
}
