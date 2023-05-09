# Associação simples ou depedência:

class Pessoa {
constructor(private conta: ContaBancaria) {}

exibirSaldo() {
console.log(Saldo: R$ ${this.conta.saldo.toFixed(2)});
}
}

class ContaBancaria {
saldo: number;

constructor(saldoInicial: number) {
this.saldo = saldoInicial;
}

depositar(valor: number) {
this.saldo += valor;
}

sacar(valor: number) {
if (this.saldo >= valor) {
this.saldo -= valor;
} else {
console.log("Saldo insuficiente.");
}
}
}

# Agregação:

class Pessoa {
contas: ContaBancaria[];

constructor() {
this.contas = [];
}

adicionarConta(conta: ContaBancaria) {
this.contas.push(conta);
}

exibirSaldo() {
let total = 0;
this.contas.forEach(conta => {
total += conta.saldo;
});
console.log(Saldo total: R$ ${total.toFixed(2)});
}
}

class ContaBancaria {
saldo: number;

constructor(saldoInicial: number) {
this.saldo = saldoInicial;
}

depositar(valor: number) {
this.saldo += valor;
}

sacar(valor: number) {
if (this.saldo >= valor) {
this.saldo -= valor;
} else {
console.log("Saldo insuficiente.");
}
}
}

# Composição:

class Pessoa {
conta: ContaBancaria;

constructor(saldoInicial: number) {
this.conta = new ContaBancaria(saldoInicial);
}

exibirSaldo() {
console.log(Saldo: R$ ${this.conta.saldo.toFixed(2)});
}
}

class ContaBancaria {
saldo: number;

constructor(saldoInicial: number) {
this.saldo = saldoInicial;
}

depositar(valor: number) {
this.saldo += valor;
}

sacar(valor: number) {
if (this.saldo >= valor) {
this.saldo -= valor;
} else {
console.log("Saldo insuficiente.");
}
}
}
