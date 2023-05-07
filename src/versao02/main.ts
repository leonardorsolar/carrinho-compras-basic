import { CarrinhoCompras } from "./carrinho-compras";
import { Produto } from "./produto";

const produto01 = new Produto("camisa", 55);
const produto02 = new Produto("livro", 22);
const carrinhoCompras = new CarrinhoCompras();
carrinhoCompras.adicicionarItem(produto01);
carrinhoCompras.adicicionarItem(produto02);
console.log(carrinhoCompras);
carrinhoCompras.fecharCarrinho();
