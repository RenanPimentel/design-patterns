import { EnterpriseCustomerVehicleFactory } from './factories/enterprise-customer-vehicle-factory';
import { IndividualCustomerVehicleFactory } from './factories/individual-customer-vehicle-factory';

const enterpriseFactory = new EnterpriseCustomerVehicleFactory();
const individualFactory = new IndividualCustomerVehicleFactory();

const enterpriseCustomer = enterpriseFactory.createCustomer('Renan');
const individualCustomer = individualFactory.createCustomer('Sinhorini');

const enterpriseCar = enterpriseFactory.createVehicle(
  'enterprise car',
  enterpriseCustomer.name,
);
const individualCar = individualFactory.createVehicle(
  'individual car',
  individualCustomer.name,
);

console.log(`enterprise: ${enterpriseCar.pickUp()}`);
console.log(`individual: ${individualCar.pickUp()}`);
