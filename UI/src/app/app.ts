import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Notification } from './components/notification/notification';
import { Confirmation } from './components/confirmation/confirmation';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Notification, Confirmation],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('UI');
}
