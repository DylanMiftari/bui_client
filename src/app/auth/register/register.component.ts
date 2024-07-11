import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { BuiServiceService } from '../../bui-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css', '../../../assets/style/form.css']
})
export class RegisterComponent {
  pseudo: string = '';
  password: string = '';
  password_confirmation: string = '';

  formError: string = '';

  constructor(private authService: AuthService, private router: Router, private buiServive: BuiServiceService) { }

  register() {
    this.authService.register({
      pseudo: this.pseudo,
      password: this.password,
      password_confirmation: this.password_confirmation
    }).subscribe(
      response => {
        localStorage.setItem('token', response.token); // Stocke le token
        this.router.navigate(['/dashboard']); // Redirige l'utilisateur
      },
      error => {
        this.formError = this.buiServive.extractErrorMessage(error);
      }
    );
  }
}
