import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  form: any = {
    username: null,
    email: null,
    password: null
  };
  isSuccessful = false;
  errorMessage = '';
  registeredUsername!: string;
  registeredEmail!: string;

  constructor(private authService: AuthService) { }

  onSubmit(): void {
    const { username, email, password } = this.form;

    this.authService.register(username, email, password).subscribe({
      next: data => {
        this.isSuccessful = true;
        this.registeredUsername = username;
        this.registeredEmail = email;
      },
      error: err => {
        this.errorMessage = err.error.message;
      }
    });
  }
}