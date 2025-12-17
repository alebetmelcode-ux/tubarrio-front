import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
  standalone: true,
  imports: [ReactiveFormsModule, InputTextModule, ButtonModule, CommonModule,InputIconModule,IconFieldModule]
})
export class LoginComponent {
  loginForm: FormGroup;
  loading = false;
  error = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    if (this.loginForm.valid) {
      this.loading = true;
      this.error = '';
      const { username, password } = this.loginForm.value;
      this.authService.login(username, password).subscribe({
        next: () => {
          this.router.navigate(['/dashboard']);
        },
        error: (err) => {
          this.error = err.message;
          this.loading = false;
        },
        complete: () => {
          this.loading = false;
        }
      });
    }
  }
}
