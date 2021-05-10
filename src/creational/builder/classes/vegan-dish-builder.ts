import { MealBuilderProtocol } from '../interfaces/meal-builder-protocol';
import { MealBox } from './meal-box';
import { Bean, Beverage, Rice } from './meals';

export class VeganDishBuilder implements MealBuilderProtocol {
  private _meal: MealBox = new MealBox();

  reset(): this {
    this._meal = new MealBox();
    return this;
  }

  makeMeal(): this {
    const rice = new Rice('Arroz', 5);
    const beans = new Bean('Feijão', 10);

    this._meal.add(rice, beans);

    return this;
  }

  makeBeverage(): this {
    const beverage = new Beverage('Bebida', 6);
    this._meal.add(beverage);
    return this;
  }

  get price(): number {
    return this._meal.getPrice();
  }

  get meal(): MealBox {
    return this._meal;
  }
}
