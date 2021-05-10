import { MainDishBuilder } from './classes/main-dish-builder';
import { MealDirector } from './classes/meal-director';
import { VeganDishBuilder } from './classes/vegan-dish-builder';

const mainDishBuilder = new MainDishBuilder();

const meal1 = mainDishBuilder.makeMeal().makeBeverage().makeDesert();
console.log(meal1.price);

mainDishBuilder.reset();

const meal2 = mainDishBuilder.makeBeverage();
console.log(meal2.meal);

const veganDishBuilder = new VeganDishBuilder();

const meal3 = veganDishBuilder.makeMeal();
console.log(meal3.price);
console.log(meal3.meal);

const mealDirector = new MealDirector(mainDishBuilder);

mealDirector.construct();

console.log(mealDirector.builder);
