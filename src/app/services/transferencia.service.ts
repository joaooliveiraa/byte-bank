import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TransferenciaService {
 private listaTransferencia: any[];

  constructor() {
    this.listaTransferencia =[];
  }

  get transferencias(){
    return this.listaTransferencia;
  }

  adicionar(transferencia: any) {

    this.tratarDados(transferencia);

    this.transferencias.push(transferencia);

  }

  private tratarDados(transferencia: any) {
    /*Aqui poderia ser tratado as regras de negocio
    como por ex. somente deixar transferir até as 00:00 ou algo do tipo.
    */
    transferencia.data = new Date();
  }
}
