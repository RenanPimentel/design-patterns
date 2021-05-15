import { Customer } from '../customer/customer';
import { IndividualCustomer } from '../customer/individual-customer';
import { IndividualVehicle } from '../vehicle/indivual-vehicle';
import { Vehicle } from '../vehicle/vehicle';
import { CreateVehicleCustomer } from './customer-vehicle-factory';

export class IndividualCustomerVehicleFactory implements CreateVehicleCustomer {
  createCustomer(customerName: string): Customer {
    return new IndividualCustomer(customerName);
  }

  createVehicle(vehicleName: string, customerName: string): Vehicle {
    const customer = this.createCustomer(customerName);
    return new IndividualVehicle(vehicleName, customer);
  }
}
