import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth';

export const authGuard: CanActivateFn = (route, state) => {
  console.log('AuthGuard: Checking authentication');
  const authService = inject(AuthService);
  const router = inject(Router);

  const isAuthenticated = authService.isAuthenticated();
  console.log('AuthGuard: Is authenticated?', isAuthenticated);

  if (isAuthenticated) {
    return true;
  } else {
    console.log('AuthGuard: Not authenticated, redirecting to login');
    router.navigate(['/login']);
    return false;
  }
};
