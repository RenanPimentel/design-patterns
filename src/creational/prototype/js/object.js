const personPrototype = {
  firstName: 'Renan',
  lastName: 'Pimentel',
  age: 17,

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

const person = Object.create(personPrototype);

person.firstName = 'Shadow of firstName in prototype';

console.log(Object.getPrototypeOf(person));
console.log(person.getFullName());
