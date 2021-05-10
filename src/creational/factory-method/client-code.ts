import { CarFactory } from './factories/car-factory';
import { randomVehicleAlgorithm } from './main/random-vehicle-algorithm';
import { getRandomElement } from './utils/get-at-random';

const carFactory = new CarFactory();
const customerNames = ['Ana', 'Joana', 'Helena', 'João'];

for (let i = 0; i < 10; i++) {
  const vehicle = randomVehicleAlgorithm();
  const name = getRandomElement(customerNames);

  vehicle.pickUp(name);
  vehicle.stop();

  const newCar = carFactory.pickUp(name, `novo carro - ${i}`);
  newCar.stop();
  console.log('---');
}
