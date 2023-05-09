class Pessoa {
  nome: string;
  dataNascimento: Date;

  constructor(nome: string, data: string) {
    this.nome = nome;
    this.dataNascimento = new Date();
  }

  CalcularIdade(): number {
    let dataAtual = new Date();
    let idade = dataAtual.getFullYear() - this.dataNascimento.getFullYear();
    return idade;
  }
}
