import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

import { Customer } from '@app/main/interfaces/costumer.interface';
import { CustomerService } from '@app/main/services/customer.service';

import { RegisteredCustomerCardComponent } from '@app/main/components/registered-customer-card/registered-customer-card.component';

@Component({
  selector: 'app-registered-customer-list',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    RegisteredCustomerCardComponent,
  ],
  templateUrl: './registered-customer-list.component.html',
})
export class RegisteredCustomerListComponent {
  registeredCustomers: Customer[] = [];

  constructor(private _customerService: CustomerService) {
    this._customerService?.customers$.subscribe((response) => {
      this.registeredCustomers = response;
    });
  }
}
