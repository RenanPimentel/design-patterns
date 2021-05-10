declare global {
  interface Array<T> {
    getRandom(): T;
  }
}

Array.prototype.getRandom = function getRandom<T>(): T {
  return this[Math.floor(Math.random() * this.length)];
};

export default 1;
