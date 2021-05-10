import { MealCompositeProtocol } from '../interfaces/meal-composite-protocol';

export class MealBox implements MealCompositeProtocol {
  private readonly _children: MealCompositeProtocol[] = [];

  add(...meals: MealCompositeProtocol[]): void {
    this._children.push(...meals);
  }

  getPrice(): number {
    return this._children.reduce((acc, meal) => acc + meal.getPrice(), 0);
  }
}
