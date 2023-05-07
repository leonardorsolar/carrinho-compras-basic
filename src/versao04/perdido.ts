import { Mensagem } from "./mensagem";
import { CarrinhoCompras } from "./carrinho-compras";
import { Persistencia } from "./persistencia";

export class Pedido {
  constructor(readonly carrinho: CarrinhoCompras, readonly mensagem: Mensagem, readonly persistencia: Persistencia) {}

  fecharCarrinho(): void {
    console.log(this.carrinho.itens.length);
    if (this.carrinhoVazio()) {
      console.log("o carrinho está vazio");
      return;
    }

    this.mensagem.enviarMessagem(`Seu pedido total de ${this.carrinho.total()} foi recebido`);
    this.persistencia.salvarPedido();
    this.carrinho.clear();
  }

  carrinhoVazio(): boolean {
    return this.carrinho.itens.length === 0;
  }
}
