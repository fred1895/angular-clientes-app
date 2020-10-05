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
    const tokenString = localStorage.getItem('access_token');
    const token = JSON.parse(tokenString);
    const headers = {
      'Authorization': 'Bearer ' + token.access_token
    }
    return this.httpClient.post<Cliente>(this.apiUrl, cliente, { headers:headers });
  }

  getClientes(): Observable<Cliente[]> {
    const tokenString = localStorage.getItem('access_token');
    const token = JSON.parse(tokenString);
    const headers = {
      'Authorization': 'Bearer ' + token.access_token
    }
    return this.httpClient.get<Cliente[]>(this.apiUrl, { headers:headers });
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
