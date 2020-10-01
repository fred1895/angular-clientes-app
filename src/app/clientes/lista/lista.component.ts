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
  clienteSelecionado: Cliente;
  mensagemSucesso: string;
  mensagemErro: string;

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
    this.router.navigate(['clientes/form']);
  }

  preparaDelecao(cliente: Cliente): void{
    this.clienteSelecionado = cliente;
  }

  deletaCliente(): void{
    this.service.
    deletar(this.clienteSelecionado)
    .subscribe( response => {
      this.mensagemSucesso = "Cliente deletado com sucesso";
      this.ngOnInit();
    }, erroResponse => {
      this.mensagemErro = "Ocorreu um erro ao deletar o cliente.";
    })

  }

}
