import { Customer } from '../customer/customer';
import { Vehicle } from './vehicle';

export class EnterpriseVehicle implements Vehicle {
  private readonly _customer: Customer;

  constructor(public name: string, customer: Customer) {
    this._customer = customer;
  }

  pickUp(): string {
    return `${this.name} está buscando ${this._customer.name}`;
  }
}
