import { NovaTransferenciaComponent } from './nova-transferencia/nova-trasnferencia.component';
import { ExtratoComponent } from './extrato/extrato.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'extrato', pathMatch: 'full'}, //Para caso não achar nenhuma rota
  { path: 'extrato', component: ExtratoComponent },
  { path: 'nova-transferencia', component: NovaTransferenciaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
