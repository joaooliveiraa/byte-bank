import { Component, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-trasnferencia.component.html',
  styleUrls: ['./nova-trasnferencia.component.scss'],
})

export class NovaTransferenciaComponent {

  @Output() aoTransferir = new EventEmitter<any>();

  valor: number;
  destino: number;

  transferir() {

    const valorEmitir = { valor: this.valor, destino: this.destino };
    this.aoTransferir.emit(valorEmitir);
    this.limparCampos();

  }

  limparCampos() {
    this.valor = 0;
    this.destino = 0;
  }
}
