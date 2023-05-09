export class Produto {
  public readonly nome: string;
  public readonly preco: number;

  constructor(nome: string, preco: number) {
    this.nome = nome;
    this.preco = preco;
  }
  calcular() {
    this.preco + 10;
  }
}

const produto1 = new Produto("camisa", 55);
const produto2 = new Produto("livro", 22);
console.log(produto1);
