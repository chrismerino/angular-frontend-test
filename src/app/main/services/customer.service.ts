import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Customer } from '@app/main/interfaces/costumer.interface';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  public customers$ = new BehaviorSubject<Customer[]>([]);

  public updateExistingCustomer({ customer }: { customer: Customer }) {
    const customerIndex = this.customers$.value.findIndex(
      (c) => c?.id === customer?.id
    );

    if (customerIndex !== -1) {
      this.customers$.next([
        ...this.customers$.value.slice(0, customerIndex),
        customer,
        ...this.customers$.value.slice(customerIndex + 1),
      ]);
    }
  }

  public saveNewCustomer({ customer }: { customer: Customer }) {
    this.customers$.next([...this.customers$.value, customer]);
  }

  public deleteCustomer({ id }: { id: string | number }) {
    this.customers$.next(
      this.customers$.value.filter((customer) => customer?.id !== id)
    );
  }

  public getCustomerById({
    id,
  }: {
    id: string | number | null | undefined;
  }): Customer | undefined {
    if (!id) return;
    return this.customers$.value.find((customer) => customer?.id === id);
  }
}
