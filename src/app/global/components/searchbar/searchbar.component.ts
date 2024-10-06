import { Component, inject, output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-searchbar',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './searchbar.component.html',
  styles: ``,
})
export class SearchbarComponent {
  // reactive form builder
  private readonly formBuilder = inject(FormBuilder);
  searchbarInputText = output<string>();

  searchbarForm: FormGroup = this.formBuilder.group({
    searchbarItem: ['', [Validators.required, Validators.minLength(6)]],
  });

  ngOnInit() {
    console.log(`Formulario es: `, this.searchbarForm);
    console.log(`Form Group`, this.searchbarForm);
  }

  // search products by name
  searchProducts() {
    // emiting the text to the father component
    const searchbar = this.searchbarForm.controls['searchbarItem'].value;
    this.searchbarInputText.emit(searchbar);
    console.log(`Searchbar: `, searchbar);
  }
}
