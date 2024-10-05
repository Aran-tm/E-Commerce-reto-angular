import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, CommonModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
})
export class SignUpComponent {
  // reactive form builder
  private readonly formBuilder = inject(FormBuilder);

  // always will be a value inside inputs
  formGroup: FormGroup = this.formBuilder.nonNullable.group({
    name: ['', Validators.required],
    username: ['', Validators.required],
    gmail: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    checkbox: [false, Validators.required],
  });

  // reactive form group
  // myFormGroup = new FormGroup({
  //   // my forms control
  //   name: new FormControl(''),
  //   username: new FormControl(''),
  //   gmail: new FormControl(''),
  //   password: new FormControl(''),
  //   checkbox: new FormControl(false),
  // });

  onSubmit() {
    const submit = this.formGroup.value;
    console.log(`SUBMIT: `, submit);
  }
}
