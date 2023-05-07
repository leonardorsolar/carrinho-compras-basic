import { CarrinhoCompras } from './carrinho-compras';

const carrinhoCompras = new CarrinhoCompras()
carrinhoCompras.adicicionarItem({nome:'camisa', preco: 55})
carrinhoCompras.adicicionarItem({nome:'livro', preco: 22})
carrinhoCompras.fecharCarrinho()
