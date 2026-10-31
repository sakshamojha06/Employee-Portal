import { Component, inject } from '@angular/core';
import { NotificationService } from '../../services/notification';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.html',
  styleUrl: './notification.css'
})
export class Notification {
  readonly notificationService = inject(NotificationService);
}
