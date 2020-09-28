import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/clientes.service';
import { Cliente } from '../clientes';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css']
})
export class ClientesFormComponent implements OnInit {

  cliente: Cliente;

  constructor(private service: ClientesService) { 
    this.cliente = new Cliente();
  }

  onSubmit() {
    this.service.salvar(this.cliente)
    .subscribe(response => {
      console.log(response);
    })
  }

  ngOnInit(): void {

  }

}
