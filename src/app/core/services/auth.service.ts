import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, filter, map } from 'rxjs';
import { User } from '../models/user.model';
import { Router } from '@angular/router';
import { menu } from '../config/menu';
import { operatorMenu } from '../config/operator-menu';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly USER_KEY = "omniak-demo2-user";

  router = inject(Router);

  loggedUser$ = new BehaviorSubject<User | null>(localStorage.getItem(this.USER_KEY) ? JSON.parse(localStorage.getItem(this.USER_KEY)!) : null);

  get isAdmin$() {
    return this.loggedUser$.pipe(
      filter((user): user is User => !!user),
      map(user => user.role === 'admin')
    );
  }

  get menu$() {
    return this.isAdmin$.pipe(map(isAdmin => isAdmin ? menu : operatorMenu))
  }

  login(user: User) {
    this.loggedUser$.next(user);
    localStorage.setItem(this.USER_KEY, JSON.stringify(user));
    this.router.navigate(['/']);
  }

  logout() {
    this.loggedUser$.next(null);
    localStorage.removeItem(this.USER_KEY);
    this.router.navigate(['login']);
  }

}
