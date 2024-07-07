import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', '../../../assets/style/form.css'],
})
export class LoginComponent {
  pseudo: string = '';
  password: string = '';

  formError: string = "";

  constructor(private authService: AuthService, private router: Router) { }

  login() {
    this.authService.login({ pseudo: this.pseudo, password: this.password }).subscribe(
      response => {
        localStorage.setItem('token', response.token); // Stocke le token
        this.router.navigate(['/dashboard']); // Redirige l'utilisateur
      },
      error => {
        console.error('Login error:', error);
      }
    );
  }
}
