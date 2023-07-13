import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { map } from 'rxjs';

export const isLoggedGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthService);
  const router = inject(Router);
  return auth.loggedUser$.pipe(map(user => {
    if(user !== null) {
      return true;
    }
    else {
      router.navigate(['login'])
      return false;
    }
  }));
};
