import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ConfirmationService {
  readonly isOpen = signal(false);
  readonly message = signal('');

  private resolveConfirmation: ((confirmed: boolean) => void) | undefined;

  ask(message: string): Promise<boolean> {
    if (this.resolveConfirmation) {
      this.resolveConfirmation(false);
    }

    this.message.set(message);
    this.isOpen.set(true);

    return new Promise<boolean>((resolve) => {
      this.resolveConfirmation = resolve;
    });
  }

  respond(confirmed: boolean): void {
    this.isOpen.set(false);
    this.message.set('');
    this.resolveConfirmation?.(confirmed);
    this.resolveConfirmation = undefined;
  }
}
