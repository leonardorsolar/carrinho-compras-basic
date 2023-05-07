import { IPersistencia } from "./interface-persistencia";

export class Persistencia implements IPersistencia {
  salvarPedido(): void {
    console.log("Pedido salvo com sucesso");
  }
}
