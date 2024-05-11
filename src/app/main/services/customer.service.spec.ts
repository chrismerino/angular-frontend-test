import { TestBed } from '@angular/core/testing';

import { CustomerService } from './customer.service';
import { Customer } from '../interfaces/costumer.interface';

describe('CostumerService', () => {
  let service: CustomerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerService);
  });

  afterEach(() => {
    service.customers$.next([]);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have 0 customers on init', () => {
    expect(service.customers$.value.length).toBe(0);
  });

  it('should add the new customer to the customers array', () => {
    const TEST_INITIAL_CUSTOMER: Customer = {
      country: 'El Salvador',
      id: '1',
      firstName: 'Cristian',
      lastName: 'Merino',
      birthDate: '1950-01-01',
      gender: 'Male',
      cellPhone: '12345678',
      homePhone: '00001234',
      addressHome: 'My Home Address',
      profession: 'Software Developer',
      incomes: '$',
    };

    service.saveNewCustomer({ customer: TEST_INITIAL_CUSTOMER });

    expect(service.customers$.value.length).toBe(1);
  });

  it('should remove the new customer from the customers array', () => {
    const TEST_ID = '1';

    const TEST_INITIAL_CUSTOMER: Customer = {
      country: 'El Salvador',
      id: TEST_ID,
      firstName: 'Cristian',
      lastName: 'Merino',
      birthDate: '1950-01-01',
      gender: 'Male',
      cellPhone: '12345678',
      homePhone: '00001234',
      addressHome: 'My Home Address',
      profession: 'Software Developer',
      incomes: '$',
    };

    service.saveNewCustomer({ customer: TEST_INITIAL_CUSTOMER });
    service.deleteCustomer({ id: TEST_ID });

    expect(service.customers$.value.length).toBe(0);
  });

  it('should find an existing customer by its id', () => {
    const TEST_ID = '45';

    const TEST_INITIAL_CUSTOMER: Customer = {
      country: 'El Salvador',
      id: TEST_ID,
      firstName: 'Cristian',
      lastName: 'Merino',
      birthDate: '1950-01-01',
      gender: 'Male',
      cellPhone: '12345678',
      homePhone: '00001234',
      addressHome: 'My Home Address',
      profession: 'Software Developer',
      incomes: '$',
    };

    service.saveNewCustomer({ customer: TEST_INITIAL_CUSTOMER });

    const customerSearchResult = service.getCustomerById({ id: TEST_ID });
    expect(customerSearchResult).not.toBeUndefined();
    expect(customerSearchResult).toEqual(TEST_INITIAL_CUSTOMER);
  });

  it('should update the existing customer by its id', () => {
    const TEST_ID = '1';

    const TEST_INITIAL_CUSTOMER: Customer = {
      country: 'El Salvador',
      id: TEST_ID,
      firstName: 'Cristian',
      lastName: 'Merino',
      birthDate: '1950-01-01',
      gender: 'Male',
      cellPhone: '12345678',
      homePhone: '00001234',
      addressHome: 'My Home Address',
      profession: 'Software Developer',
      incomes: '$',
    };

    service.saveNewCustomer({ customer: TEST_INITIAL_CUSTOMER });

    const TEST_UPDATE_CUSTOMER: Customer = {
      country: 'Japan',
      id: TEST_ID,
      firstName: 'Cristian',
      lastName: 'Merino',
      birthDate: '1950-01-01',
      gender: 'Male',
      cellPhone: '12345678',
      homePhone: '00001234',
      addressHome: 'My Home Address',
      profession: 'Astronaut',
      incomes: '$',
    };

    service.updateExistingCustomer({ customer: TEST_UPDATE_CUSTOMER });
    const customerSearchResult = service.getCustomerById({ id: TEST_ID });

    expect(customerSearchResult).not.toBeUndefined();
    expect(customerSearchResult).not.toEqual(TEST_INITIAL_CUSTOMER);
    expect(customerSearchResult).toEqual(TEST_UPDATE_CUSTOMER);
  });
});
