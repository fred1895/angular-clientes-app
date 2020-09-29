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
    return this.httpClient.get<Cliente[]>('http://localhost:8080/api/clientes');
  }

  getMockClientes(): Cliente[] {
    let cliente = new Cliente();
    cliente.id = 1;
    cliente.nome="Marcos";
    cliente.cpf="85840355089";
    cliente.dataCadastro = "20/09/2020";

    return [cliente];
  }
  
  getClienteById(id: number) : Observable<Cliente> {
    return this.httpClient.get<any>(`http://localhost:8080/api/clientes/${id}`);
  }

  atualizar(cliente: Cliente) : Observable<any> {
    return this.httpClient.put<any>(`http://localhost:8080/api/clientes/${cliente.id}`, cliente);
  }

  
  deletar(cliente: Cliente) : Observable<any> {
    return this.httpClient.delete<any>(`http://localhost:8080/api/clientes/${cliente.id}`);
  }
}
