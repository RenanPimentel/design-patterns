export interface Prototype {
  clone(): Prototype;
}

export class Person implements Prototype {
  constructor(
    public firstName: string,
    public lastName: string,
    public age: number,
    public addresses: Address[] = [],
  ) {}

  clone(): Person {
    const newPerson = new Person(this.firstName, this.lastName, this.age);
    newPerson.addresses = this.addresses.map((item) => item.clone());
    return newPerson;
  }

  addAddress(address: Address): void {
    this.addresses.push(address);
  }
}

export class Address implements Prototype {
  constructor(public street: string, public number: number) {}

  clone(): Address {
    return new Address(this.street, this.number);
  }
}

const person1 = new Person('Renan', 'Sinhorini', 17);
person1.addAddress(new Address('Flamengo', 55));

const person2 = person1.clone();
person2.firstName = 'Person2';
person2.lastName = 'Person2';

person1.addresses[0].street = 'bla bla bla';

console.log(person1);
console.log(person2);
console.log(person2.addresses);
