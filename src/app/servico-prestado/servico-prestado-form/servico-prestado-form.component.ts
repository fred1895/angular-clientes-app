import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/clientes.service';
import { Cliente } from 'src/app/clientes/clientes';
import { ServicoPrestadoService } from 'src/app/servico-prestado.service';
import { ServicoPrestado } from '../servicoPrestado';

@Component({
  selector: 'app-servico-prestado-form',
  templateUrl: './servico-prestado-form.component.html',
  styleUrls: ['./servico-prestado-form.component.css']
})
export class ServicoPrestadoFormComponent implements OnInit {

  success: boolean = false;
  erros: String[];
  clientes: Cliente[] = [];
  servicoPrestado: ServicoPrestado;

  constructor(
    private clienteService: ClientesService,
    private servicoPrestadoService: ServicoPrestadoService,
    ) { 
      this.servicoPrestado = new ServicoPrestado();
    }

  ngOnInit(): void {
    this.clienteService
    .getClientes()
    .subscribe( response => {
      this.clientes = response;
    })
  }

  onSubmit(): void {    
    this.servicoPrestadoService
    .salvar(this.servicoPrestado)
    .subscribe(response => {
      this.success = true;
      this.erros = null;
      this.servicoPrestado = new ServicoPrestado();
      console.log(response);
    }, error => {
      this.erros = error.error.erros;
      this.success = false; 
      console.log(error.error.erros);
    })      
  }



}
