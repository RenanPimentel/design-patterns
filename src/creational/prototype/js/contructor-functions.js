function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}

const personPrototype = {
  firstName: 'Renan',
  lastName: 'Pimentel',
  age: 17,

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

Person.prototype = personPrototype;
Person.prototype.constructor = Person;

function SubPerson(firstName, lastName, age) {
  Person.call(this, firstName, lastName, age);
  this.fromSubFunction = 'doasjdosd';
}

SubPerson.prototype = Person.prototype;
SubPerson.prototype.constructor = SubPerson;

const person = new SubPerson('Joao', 'da Silva', 25);

console.log(person.getFullName());
console.log(person);
console.log(Object.getPrototypeOf(person));
