import { IMensagem } from "./interface-mensagem";

export class Mensagem implements IMensagem {
  enviarMessagem(msg: string): void {
    console.log("Mensagem enviada:", msg);
  }
}
