import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required)
  });
  showPassword: boolean = false;

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  login() {
    if (this.loginForm.valid) {
      const userName = this.loginForm.controls.username.value;
      if (userName === 'admin') {
        this.authService.login({
          name: userName,
          role: 'admin'
        });
      }
      else if (userName === 'operator') {
        this.authService.login({
          name: userName,
          role: 'operator'
        });
      }
    }
  }
}
