class Autenticacao {
  nome: string;
  senha: number;
  constructor(nome: string, senha: number) {
    this.nome = nome;
    this.senha = senha;
  }

  autenticando(nome: string, senha: number) {
    if (nome == "leonardo" && senha == 123456) {
      return true;
    } else {
      return false;
    }
  }
}
