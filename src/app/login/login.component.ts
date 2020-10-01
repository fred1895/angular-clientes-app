import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string;
  password: string;
  loginError: boolean;
  cadastrando: boolean;

  constructor(
    private router: Router,
  ) { }

  onSubmit(): void {
    console.log(`User: ${this.username}, Password: ${this.password}`);
    this.router.navigate(['/home'])
  }

  preparaCadastrar(event): void {
    event.preventDefault();
    this.cadastrando = true;
  }

  cancelaCadastro(): void {
    this.cadastrando = false;
  }

}
