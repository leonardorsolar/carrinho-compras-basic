import { Produto } from "./produto";

type StatusPedido = "aberto" | "fechado";
type ItensCarrinho = { nome: string; preco: number };

export class CarrinhoCompras {
  private readonly itens: Produto[] = [];

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

  fecharCarrinho(): void {
    console.log(this.itens.length);
    if (this.carrinhoVazio()) {
      console.log("o carrinho está vazio");
      return;
    }

    this.messagem(`Seu pedido total de ${this.total()} foi recebido`);
    this.salvarPedido();
    this.clear();
  }

  carrinhoVazio(): boolean {
    return this.itens.length === 0;
  }

  salvarPedido(): void {
    console.log("Pedido salvo com sucesso");
  }

  messagem(msg: string): void {
    console.log("Mensagem enviada:", msg);
  }

  clear(): void {
    console.log("Carrinho de compras limpo");
    this.itens.length = 0;
  }
}
