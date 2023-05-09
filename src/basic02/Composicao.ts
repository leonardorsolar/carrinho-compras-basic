class TipoA {
  private b: TipoB;

  constructor() {
    this.b = new TipoB();
  }

  methodA() {
    console.log(this.b.methodB());
  }
}

class TipoB {
  methodB() {
    return "método B";
  }
}

const tipoA = new TipoA();
tipoA.methodA(); // Hello from B!
