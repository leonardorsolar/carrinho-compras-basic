import { CarrinhoCompras } from "./carrinho-compras";
import { Produto } from "./produto";

export class Pedido {
  constructor(readonly carrinho: CarrinhoCompras) {}

  fecharCarrinho(): void {
    console.log(this.carrinho.itens.length);
    if (this.carrinhoVazio()) {
      console.log("o carrinho está vazio");
      return;
    }

    this.messagem(`Seu pedido total de ${this.carrinho.total()} foi recebido`);
    this.salvarPedido();
    this.carrinho.clear();
  }

  carrinhoVazio(): boolean {
    return this.carrinho.itens.length === 0;
  }

  salvarPedido(): void {
    console.log("Pedido salvo com sucesso");
  }

  messagem(msg: string): void {
    console.log("Mensagem enviada:", msg);
  }
}
