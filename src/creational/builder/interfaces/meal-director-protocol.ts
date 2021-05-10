import { MealBuilderProtocol } from './meal-builder-protocol';

export interface MealDirectorProtocol {
  builder: MealBuilderProtocol;
  construct(): this;
}
