import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  showPassword: boolean = false;
  constructor(private router: Router) { }
  login(e: Event) {
    e.preventDefault();
    this.router.navigate(['/']);
  }
}
