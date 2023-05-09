class Pedido {
  constructor(private produto: Produto) {}

  getTotal(): number {
    let total = 0;
    total = this.produto.preco;
    return total;
  }
}

class Produto {
  constructor(public nome: string, public preco: number) {}
}

const produto1 = new Produto("Camiseta", 50);
const produtosPedido = [produto1];
const pedido = new Pedido(produto1);
console.log(pedido.getTotal()); // saída: 50
