import './array';

export function getRandomElement<T>(arr: Array<T>): T {
  return arr.getRandom();
}
