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

  getClientes(): Observable<Cliente[]> {
    return null;
  }

  getMockClientes(): Cliente[] {
    let cliente = new Cliente();
    cliente.id = 1;
    cliente.nome="Marcos";
    cliente.cpf="85840355089";
    cliente.dataCadastro = "20/09/2020";

    return [cliente];
  }
}
