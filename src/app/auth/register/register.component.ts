import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css', '../../../assets/style/form.css']
})
export class RegisterComponent {
  pseudo: string = '';
  password: string = '';

  formError: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  register() {
    this.authService.register({
      pseudo: this.pseudo,
      password: this.password,
    }).subscribe(
      response => {
        localStorage.setItem('token', response.token); // Stocke le token
        this.router.navigate(['/dashboard']); // Redirige l'utilisateur
      },
      error => {
        console.error('Registration error:', error);
      }
    );
  }
}
