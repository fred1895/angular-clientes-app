import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ClientesService } from 'src/app/clientes.service';
import { Cliente } from '../clientes';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css']
})
export class ClientesFormComponent implements OnInit {

  cliente: Cliente;
  success: boolean = false;
  erros: String[];
  id: number;

  constructor(
    private service: ClientesService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { 
    this.cliente = new Cliente();
  }

  onSubmit() {
    if (this.id) {
      this.service
      .atualizar(this.cliente)
      .subscribe(response => {
        this.success = true;
        this.erros = null;
      }, erroResponse => {
        this.erros = ["Erro ao atualizar cliente."]
      })      
    } else {
      this.service.salvar(this.cliente)
    .subscribe(response => {
      this.success = true;
      this.erros = null;
      this.cliente = response;
      console.log(response);
    }, error => {
      this.erros = error.error.erros;
      this.success = false; 
      console.log(error.error.erros);
    })
    }
  }

  voltarParaListagem(): void {
    this.router.navigate(['/clientes/lista']);
  }

  ngOnInit(): void {
    let params : Observable<Params> = this.activatedRoute.params;
    params.subscribe( urlParams => {
      this.id = urlParams['id'];
      if (this.id) {
        this.service
        .getClienteById(this.id)
        .subscribe(
          response => {
          this.cliente = response;
        }, errorResponse => {
          this.cliente = new Cliente();
        })  
      }
    })
  }

}
