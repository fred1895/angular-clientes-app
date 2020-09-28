import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/clientes.service';
import { Cliente } from '../clientes';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  clientes: Cliente[] = [];

  constructor(private service: ClientesService) { }

  ngOnInit(): void {
    this.clientes = this.service.getMockClientes();
  }

}
