import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transferencia } from '../models/transferencia.model';

@Injectable({
  providedIn: 'root',
})
export class TransferenciaService {
 private listaTransferencia: any[];
 private url = 'http://localhost:3000/transferencias';

  constructor(private HttpClient: HttpClient) {
    this.listaTransferencia =[];
  }

  get transferencias(){
    return this.listaTransferencia;
  }

  todas(): Observable<Transferencia[]> {
    return this.HttpClient.get<Transferencia[]>(this.url);
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
