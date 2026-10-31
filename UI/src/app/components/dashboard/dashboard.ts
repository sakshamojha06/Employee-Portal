import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth';

@Component({
  imports: [],
  selector: 'app-dashboard',
  styleUrl: './dashboard.css',
  templateUrl: './dashboard.html',
})
export class Dashboard {
  private authService = inject(AuthService);

  username = this.authService.getCurrentUser()?.username;

  role = this.authService.getUserRole();
}
