import { Component, inject } from '@angular/core';
import { ConfirmationService } from '../../services/confirmation';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.html'
})
export class Confirmation {
  readonly confirmationService = inject(ConfirmationService);

  cancel(): void {
    this.confirmationService.respond(false);
  }

  confirm(): void {
    this.confirmationService.respond(true);
  }
}
