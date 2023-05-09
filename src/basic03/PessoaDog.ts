class Person01 {
  name: string;
  age: number;
  pet: Pet01;

  constructor(name: string, age: number, pet: Pet01) {
    this.name = name;
    this.age = age;
    this.pet = pet;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    this.pet.makeSound();
  }
}

class Pet01 {
  name: string;
  sound: string;

  constructor(name: string, sound: string) {
    this.name = name;
    this.sound = sound;
  }

  makeSound() {
    console.log(`${this.name} ${this.sound}!`);
  }
}

const myDog = new Pet01("Buddy", "barks");
const myCat = new Pet01("Whiskers", "meows");

const john01 = new Person01("John", 30, myDog);
john01.sayHello();

const sarah = new Person01("Sarah", 25, myCat);
sarah.sayHello();

// Nesta nova implementação, a classe Pet agora possui uma propriedade sound que representa o som que o animal faz, e o método makeSound é implementado diretamente na classe.

// A classe Person continua a ter uma propriedade pet, que agora é uma instância da classe Pet. A relação entre Person e Pet continua a ser de composição, onde a classe Person "tem um" animal de estimação.

// Assim, temos uma implementação mais simples e direta, sem a necessidade de uma classe abstrata para definir o comportamento comum entre as classes Dog e Cat.
