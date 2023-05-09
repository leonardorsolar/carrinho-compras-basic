class ClasseA {
  constructor(private b: ClasseB) {}

  metodoA() {
    console.log(this.b.metodoA());
  }
}

class ClasseB {
  metodoA() {
    return "metodo B";
  }
}

const minhaB = new ClasseB();
const minhaA = new ClasseA(minhaB);
minhaA.metodoA(); // metodo B

// Neste exemplo, a classe A recebe uma instância da classe B como parâmetro de seu construtor. Isso significa que a classe A depende da classe B para executar seu método method. A injeção de dependência é um padrão de design que ajuda a tornar o código mais flexível e fácil de testar, ao separar a criação dos objetos e sua utilização.

// Ao chamar o método method na instância da classe A, o console exibirá a mensagem "Hello from B!", que é retornada pelo método sayHello da instância da classe B. Isso significa que a classe A está usando a classe B para realizar uma determinada tarefa.

// Assim, temos uma relação de injeção de dependência entre A e B, onde a classe A depende da classe B para executar uma tarefa específica, mas a instância da classe B é criada e injetada em A em um momento separado de sua utilização.
