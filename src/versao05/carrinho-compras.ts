import { Produto } from "./produto";

type StatusPedido = "aberto" | "fechado";
type ItensCarrinho = { nome: string; preco: number };

export class CarrinhoCompras {
  readonly itens: Produto[] = [];

  adicicionarItem(produto: Produto): void {
    console.log(produto);
    this.itens.push(produto);
  }

  removerItem(index: number): void {
    this.itens.splice(index, 1);
  }

  total(): number {
    return this.itens.reduce((soma, valor) => soma + valor.preco, 0);
  }

  clear(): void {
    console.log("Carrinho de compras limpo");
    this.itens.length = 0;
  }
}
