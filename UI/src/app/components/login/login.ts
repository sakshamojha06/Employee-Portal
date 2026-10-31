import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {
  private authService = inject(AuthService);
  private router = inject(Router);

  username = '';
  password = '';
  errorMessage = '';

  onLogin(): void {
    const isAuthenticated = this.authService.login(
      this.username,
      this.password
    );

    if(isAuthenticated) {
      this.router.navigate(['/dashboard']);
    }
    else {
      this.errorMessage = 'Invalid username or password!';
    }
  }
}
