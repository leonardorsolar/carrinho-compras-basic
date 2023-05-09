//associação simples ou associação de dependência

class Carro {
  dirigir() {
    const motor = new Motor();
    motor.start();
    console.log("Driving...");
  }
}

class Motor {
  start() {
    console.log("Engine started.");
  }
}

const meuCarro = new Carro();
meuCarro.dirigir(); // Engine started. Driving...

// Neste exemplo, a classe Car depende da classe Engine para iniciar
//o motor quando o carro começa a se mover. No entanto, não há uma
//relação forte entre elas, pois a classe Engine pode ser usada em
//outras situações além de iniciar o motor do carro.

// Assim, temos uma relação de dependência entre Car e Engine,
//onde a classe Car depende da classe Engine para executar uma
//tarefa específica, mas a classe Engine pode ser usada em outras situações também.
