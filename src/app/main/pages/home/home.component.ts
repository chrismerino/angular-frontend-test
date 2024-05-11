import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

import { RegisteredCustomerListComponent } from '@app/main/components/registered-customer-list/registered-customer-list.component';
import { CustomerFormComponent } from '@app/main/components/customer-form/customer-form.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    MatButtonModule,
    RegisteredCustomerListComponent,
    CustomerFormComponent,
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent {}
