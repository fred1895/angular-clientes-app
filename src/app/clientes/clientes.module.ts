import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesFormComponent } from './clientes-form/clientes-form.component';
import { FormsModule } from '@angular/forms';
import { ListaComponent } from './lista/lista.component';


@NgModule({
  declarations: [ClientesFormComponent, ListaComponent],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    FormsModule,
  ], exports: [
    ClientesFormComponent,
    ListaComponent,
  ]
})
export class ClientesModule { }
