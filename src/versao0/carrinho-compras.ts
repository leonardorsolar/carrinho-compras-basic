export class CarrinhoCompras {
  readonly itens: string[];

  constructor() {
    this.itens = [];
  }

  adicicionarItem(item: any): void {
    console.log(item);
    this.itens.push(item);
  }
}

const carrinhoCompras = new CarrinhoCompras();
carrinhoCompras.adicicionarItem({ nome: "camisa", preco: 55 });
carrinhoCompras.adicicionarItem({ nome: "livro", preco: 22 });
console.log(carrinhoCompras);
