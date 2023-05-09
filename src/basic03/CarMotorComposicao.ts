class Car {
  engine: Engine;

  constructor() {
    this.engine = new Engine();
  }
}

class Engine {
  start() {
    console.log("Engine started.");
  }
}

const myCar = new Car();
myCar.engine.start(); // Engine started.

// Neste exemplo, temos uma classe Car que tem uma propriedade engine que representa o motor do carro. A classe Engine representa o motor do carro e tem um método start que inicia o motor.

// A instância da classe Engine é criada dentro do construtor da classe Car, o que significa que o motor faz parte do carro. Isso é uma relação de composição, onde a classe Car "tem um" motor.

// Ao final, podemos chamar o método start diretamente na instância do motor, que foi criada dentro da instância do carro. Isso significa que o motor está diretamente ligado ao carro e não pode ser usado em outras situações independentes do carro.

// Assim, temos uma relação de composição entre Car e Engine, onde a classe Car "tem um" motor e o motor é criado exclusivamente para o carro.
