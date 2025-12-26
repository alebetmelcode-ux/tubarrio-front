import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly TOKEN_KEY = 'auth_token';

  constructor(private router: Router) { }

  login(username: string, password: string): Observable<boolean> {
    console.log('AuthService: Attempting login for user:', username);
    if (username === 'admin' && password === 'admin') {
      return of(true).pipe(
        delay(1000), // Simulate a real API call
        tap(() => {
          const token = 'dummy_token';
          if (typeof localStorage !== 'undefined') {
            localStorage.setItem(this.TOKEN_KEY, token);
            console.log('AuthService: Token set in localStorage');
          }
        })
      );
    } else {
      console.log('AuthService: Invalid credentials for user:', username);
      return throwError(() => new Error('Invalid credentials'));
    }
  }

  logout() {
    console.log('AuthService: Logging out');
    if (typeof localStorage !== 'undefined') {
      localStorage.removeItem(this.TOKEN_KEY);
      console.log('AuthService: Token removed from localStorage');
    }
    this.router.navigate(['/login']);
  }

  getToken(): string | null {
    if (typeof localStorage !== 'undefined') {
      const token = localStorage.getItem(this.TOKEN_KEY);
      console.log('AuthService: Getting token, found:', !!token);
      return token;
    }
    console.log('AuthService: localStorage not available, no token');
    return null;
  }

  isAuthenticated(): boolean {
    if (typeof localStorage !== 'undefined') {
      const authenticated = !!localStorage.getItem(this.TOKEN_KEY);
      console.log('AuthService: Is authenticated (checking localStorage):', authenticated);
      return authenticated;
    }
    console.log('AuthService: localStorage not available, not authenticated');
    return false;
  }
}
