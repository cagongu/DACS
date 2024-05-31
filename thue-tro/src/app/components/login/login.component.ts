import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { StorageService } from '../../services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {
    username: null,
    password: null
  };
  errorMessage = '';
  roles: string[] = [];
  isSuccessful: boolean = false;

  constructor(private authService: AuthService, private storageService: StorageService, private router : Router) { }

  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
      this.roles = this.storageService.getUser().roles;
    }
  }

  onSubmit(): void {
    const { username, password } = this.form;

    this.authService.login(username, password).subscribe({
      next: data => {
        this.storageService.saveUser(data);
        this.roles = this.storageService.getUser().roles;
        this.isSuccessful = true;
        this.reloadPage();
      },
      error: err => {
        this.errorMessage = err.error.message;
        console.log("login failed");
      }
    });
  }

  reloadPage(): void {
    this.router.navigateByUrl('/rooms');
  }
}