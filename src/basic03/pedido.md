Exemplos de Pedido e Produto:

# Associação simples ou depedência:

class Pedido {
constructor(private produto: Produto) {}

adicionarProduto(produto: Produto) {
console.log(Adicionando ${produto.nome} ao pedido.);
}

removerProduto(produto: Produto) {
console.log(Removendo ${produto.nome} do pedido.);
}

finalizarPedido() {
console.log(Pedido finalizado!);
}
}

class Produto {
constructor(public nome: string, public preco: number) {}
}

const meuProduto = new Produto("Camisa", 49.99);
const meuPedido = new Pedido(meuProduto);
meuPedido.adicionarProduto(new Produto("Calça", 89.99));
meuPedido.removerProduto(meuProduto);
meuPedido.finalizarPedido();

# Agregação

class Pedido {
produtos: Produto[] = [];

adicionarProduto(produto: Produto) {
this.produtos.push(produto);
console.log(Adicionando ${produto.nome} ao pedido.);
}

removerProduto(produto: Produto) {
const index = this.produtos.indexOf(produto);
if (index >= 0) {
this.produtos.splice(index, 1);
console.log(Removendo ${produto.nome} do pedido.);
}
}

finalizarPedido() {
console.log(Pedido finalizado!);
}
}

class Produto {
constructor(public nome: string, public preco: number) {}
}

const meuProduto = new Produto("Camisa", 49.99);
const meuPedido = new Pedido();
meuPedido.adicionarProduto(meuProduto);
meuPedido.adicionarProduto(new Produto("Calça", 89.99));
meuPedido.removerProduto(meuProduto);
meuPedido.finalizarPedido();

# Composição

class Pedido {
constructor(public produto: Produto) {}

finalizarPedido() {
console.log(Pedido finalizado!);
}
}

class Produto {
constructor(public nome: string, public preco: number) {}
}

const meuProduto = new Produto("Camisa", 49.99);
const meuPedido = new Pedido(meuProduto);
meuPedido.finalizarPedido();
