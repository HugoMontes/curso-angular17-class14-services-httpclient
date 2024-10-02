import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';

@Component({
	selector: 'app-register-page',
	standalone: true,
	imports: [MatCardModule, MatInput, MatFormFieldModule, MatIcon, MatButton, ReactiveFormsModule],
	templateUrl: './register-page.component.html',
	styleUrl: './register-page.component.scss'
})
export default class RegisterPageComponent {
	
	// formGroup = new FormGroup({
	// 	names: new FormControl('')
	// });

	private readonly _formBuilder = inject(FormBuilder);

	formGroup = this._formBuilder.nonNullable.group({
		names: ''
	});

	clickRegister(): void{
		// console.log(this.formGroup.get('names')?.value as String);
		const name = this.formGroup.controls.names.value;
		console.log(name);
	}
}
