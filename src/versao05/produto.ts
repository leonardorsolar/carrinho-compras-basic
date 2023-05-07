export class Produto {
  public readonly nome: string;
  public readonly preco: number;

  constructor(nome: string, preco: number) {
    this.nome = nome;
    this.preco = preco;
  }
}
