import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cliente } from './clientes/clientes';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  apiUrl: string = environment.apiUrl + '/api/clientes';

  constructor(private httpClient : HttpClient) { 
    
  }

  salvar(cliente: Cliente) : Observable<Cliente> {
    return this.httpClient.post<Cliente>(this.apiUrl, cliente);
  }

  getClientes(): Observable<Cliente[]> {
    return this.httpClient.get<Cliente[]>(this.apiUrl);
  }
  
  getClienteById(id: number) : Observable<Cliente> {
    return this.httpClient.get<any>(`${this.apiUrl}/${id}`);
  }

  atualizar(cliente: Cliente) : Observable<any> {
    return this.httpClient.put<any>(`${this.apiUrl}/${cliente.id}`, cliente);
  }
  
  deletar(cliente: Cliente) : Observable<any> {
    return this.httpClient.delete<any>(`${this.apiUrl}/${cliente.id}`);
  }
}
