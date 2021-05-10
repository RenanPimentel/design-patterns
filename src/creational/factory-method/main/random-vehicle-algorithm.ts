import { BicycleFactory } from '../factories/bicycle-factory';
import { CarFactory } from '../factories/car-factory';
import { Vehicle } from '../vehicles/vehicle';
import '../utils/array';

export function randomVehicleAlgorithm(): Vehicle {
  const carFactory = new CarFactory();
  const car1 = carFactory.getVehicle('Fusca');
  const car2 = carFactory.getVehicle('Celta Preto');

  const bikeFactory = new BicycleFactory();
  const bike = bikeFactory.getVehicle('Bicicleta');

  const vehicles = [car1, car2, bike];

  return vehicles.getRandom();
}
