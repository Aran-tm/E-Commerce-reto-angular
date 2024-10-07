import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthService } from '@core/services/auth.service';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss',
})
export class SignInComponent implements OnInit {
  // reactive form builder
  private readonly formBuilder = inject(FormBuilder);
  authService = inject(AuthService);

  signInForm: FormGroup = this.formBuilder.nonNullable.group({
    userData: '',
    password: '',
    checkbox: false,
  });

  ngOnInit() {
    console.log(`Form Group`, this.signInForm);
  }

  onSubmit() {
    const signInForm = this.signInForm.value;
    console.log(`Sign In Form: `, signInForm);
    console.log(`Formulario es: `, this.signInForm.valid);

    // Enviar los datos al servicio
    this.authService.sendUserData(signInForm);
  }
}
