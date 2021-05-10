import { Vehicle } from '../vehicles/vehicle';

export abstract class VehicleFactory {
  abstract getVehicle(vehicleName: string): Vehicle; // factory method

  pickUp(customerName: string, vehicleName: string): Vehicle {
    const vehicle = this.getVehicle(vehicleName);
    vehicle.pickUp(customerName);
    return vehicle;
  }
}
