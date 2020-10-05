import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Usuario } from './usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string;
  password: string;
  cadastrando: boolean;
  mensagemSucesso: string;
  erros: string[];

  constructor(
    private router: Router,
    private authService: AuthService,
  ) { }

  onSubmit(): void {
    console.log(`User: ${this.username}, Password: ${this.password}`);
    this.authService
        .tentarLogar(this.username, this.password)
        .subscribe(response => {
          console.log(response);
          const access_token = JSON.stringify(response);
          localStorage.setItem('access_token', access_token);
          this.router.navigate(['/home']);
        }, errorResponse => {
          this.erros = ['Usuário e/ou senha incorreto(s)'];
        })
  }

  preparaCadastrar(event): void {
    event.preventDefault();
    this.cadastrando = true;
  }

  cancelaCadastro(): void {
    this.cadastrando = false;
  }

  cadastrar(): void {
    const usuario: Usuario = new Usuario();
    usuario.username = this.username;
    usuario.password = this.password;
    this.authService
    .salvar(usuario)
    .subscribe(response => {
      this.mensagemSucesso = "Cadastro realizado com sucesso. Efetue o login.";
      this.cadastrando = false;
      this.username = '';
      this.password = '';
      this.erros = []; 
    }, errorResponse => {
      this.mensagemSucesso = null;
      this.erros = errorResponse.error.erros;
    })
  }

}
