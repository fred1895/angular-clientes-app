import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/clientes.service';
import { Cliente } from 'src/app/clientes/clientes';

@Component({
  selector: 'app-servico-prestado-form',
  templateUrl: './servico-prestado-form.component.html',
  styleUrls: ['./servico-prestado-form.component.css']
})
export class ServicoPrestadoFormComponent implements OnInit {

  clientes: Cliente[] = [];

  constructor(
    private clienteService: ClientesService,
    ) { }

  ngOnInit(): void {
    this.clienteService
    .getClientes()
    .subscribe( response => {
      this.clientes = response;
    })
  }

  onSubmit(): void {    
    console.log("submit");
  }



}
