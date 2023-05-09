class Conta {
  numeroDaConta: number;
  titular: string;
  saldo: number;
  constructor(numeroDaConta: number, titular: string, saldo: number) {
    this.numeroDaConta = numeroDaConta;
    this.titular = titular;
    this.saldo = saldo;
  }
  consultaSaldo(): string {
    return `O seu saldo atual é: ${this.saldo}`;
  }
}
