import { Customer } from '../customer/customer';

export interface Vehicle {
  name: string;
  customer?: Customer;
  pickUp(): string;
}
