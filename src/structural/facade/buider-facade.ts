import { MainDishBuilder } from '../../creational/builder/classes/main-dish-builder';
import { VeganDishBuilder } from '../../creational/builder/classes/vegan-dish-builder';

export class BuilderFacade {
  private mainDishBuilder = new MainDishBuilder();
  private veganDishBuilder = new VeganDishBuilder();

  makeMeal1(): void {
    this.mainDishBuilder.reset();
    this.mainDishBuilder.makeMeal().makeBeverage().makeDesert();
    console.log(this.mainDishBuilder.meal, this.mainDishBuilder.price);
  }

  makeMeal2(): void {
    const meal = this.mainDishBuilder.makeBeverage().meal;
    console.log(meal, this.mainDishBuilder.price);
  }

  makeMeal3(): void {
    this.veganDishBuilder.reset();
    const meal3 = this.veganDishBuilder.makeMeal();
    console.log(meal3.meal, meal3.price);
  }
}
