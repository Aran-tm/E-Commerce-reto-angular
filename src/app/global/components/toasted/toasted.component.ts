import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-toasted',
  standalone: true,
  imports: [],
  templateUrl: './toasted.component.html',
})
export class ToastedComponent {
  isVisible = signal(false);
  errorMessage: string = 'Invalid User Data';

  showMessageError() {
    this.isVisible.set(true);
  }
}
