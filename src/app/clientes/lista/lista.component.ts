import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientesService } from 'src/app/clientes.service';
import { Cliente } from '../clientes';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  clientes: Cliente[] = [];

  constructor(
    private service: ClientesService,
    private router: Router,) { }

  ngOnInit(): void {
    this.service.getClientes()
    .subscribe(response => {
      this.clientes = response;
    });
  }

  novoCadastro(): void {
    this.router.navigate(['clientes-form']);
  }

}
