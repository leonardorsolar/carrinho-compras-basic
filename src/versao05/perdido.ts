import { IPersistencia } from "./interface-persistencia";
import { IMensagem } from "./interface-mensagem";
// import { Mensagem } from "./mensagem";
// import { Persistencia } from "./persistencia";
import { CarrinhoCompras } from "./carrinho-compras";

export class Pedido {
  constructor(readonly carrinho: CarrinhoCompras, readonly mensagem: IMensagem, readonly persistencia: IPersistencia) {}

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
