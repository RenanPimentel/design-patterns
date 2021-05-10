import { MealBuilderProtocol } from '../interfaces/meal-builder-protocol';
import { MealDirectorProtocol } from '../interfaces/meal-director-protocol';

export class MealDirector implements MealDirectorProtocol {
  constructor(public builder: MealBuilderProtocol) {}

  construct(): this {
    this.builder.makeMeal();
    return this;
  }
}
