class Person {
  name: string;
  pets: Pet[];

  constructor(name: string) {
    this.name = name;
    this.pets = [];
  }

  addPet(pet: Pet) {
    this.pets.push(pet);
  }
}

class Pet {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const john = new Person("John");
const buddy = new Pet("Buddy");
const whiskers = new Pet("Whiskers");

john.addPet(buddy);
john.addPet(whiskers);

console.log(`${john.name} has ${john.pets.length} pets.`); // John has 2 pets.

// Neste exemplo, temos uma classe Person que tem uma propriedade pets que representa os animais de estimação da pessoa. A classe Pet representa um animal de estimação genérico.

// Cada instância da classe Person pode ter um ou mais animais de estimação, que são adicionados através do método addPet. Ao final, a mensagem exibida no console indica quantos animais de estimação a pessoa tem.

// Assim, temos uma relação de agregação entre Person e Pet, onde a classe Person "tem vários" animais de estimação. A classe Pet não depende da classe Person para existir e pode ser usada por outras classes também.
