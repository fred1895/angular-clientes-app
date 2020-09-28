import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from './clientes/clientes';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private httpClient : HttpClient) { 
    
  }

  salvar(cliente: Cliente) : Observable<Cliente> {
    return this.httpClient.post<Cliente>('http://localhost:8080/api/clientes', cliente);
  }

  getCliente() : Cliente {
    let cliente : Cliente = new Cliente();
    cliente.nome = "João";
    cliente.cpf = "17048212748";
    return cliente;
  }
}
