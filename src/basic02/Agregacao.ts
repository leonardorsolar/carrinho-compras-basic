class A {
  private b: B[];

  constructor() {
    this.b = [];
  }

  addB(item: B) {
    this.b.push(item);
  }

  method() {
    this.b.forEach((b) => {
      console.log(b.sayHello());
    });
  }
}

class B {
  sayHello() {
    return "Hello from B!";
  }
}

const myB1 = new B();
const myB2 = new B();
const myA = new A();
myA.addB(myB1);
myA.addB(myB2);
myA.method(); // Hello from B! Hello from B!

// Agora, em vez de passar uma instância de B para a classe A no momento da criação, criamos instâncias separadas de B (myB1 e myB2) e as adicionamos à instância da classe A usando o método addB. A classe A agora tem uma coleção de objetos B que podem ser iterados pelo método method.

// Com isso, temos uma relação de associação de agregação entre as classes A e B, onde a classe A contém uma coleção de objetos B, mas a instância de cada objeto B é criada separadamente e injetada na instância de A.
