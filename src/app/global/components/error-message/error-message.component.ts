import { Component, inject, input } from '@angular/core';

@Component({
  selector: 'app-error-message',
  standalone: true,
  imports: [],
  templateUrl: './error-message.component.html',
})
export class ErrorMessageComponent {
  errorMessage = input<string>();

  closeErrorMessage() {
    
  }
}
