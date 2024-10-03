import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';
import { last } from 'rxjs';

@Component({
	selector: 'app-register-page',
	standalone: true,
	imports: [MatCardModule, MatInput, MatFormFieldModule, MatIcon, MatButton, ReactiveFormsModule],
	templateUrl: './register-page.component.html',
	styleUrl: './register-page.component.scss'
})
export default class RegisterPageComponent {
	
	// formGroup = new FormGroup({
	// 	names: new FormControl('', {validators: Validators.required}),
	// 	lastName: new FormControl('', {validators: Validators.required}),
	// 	email: new FormControl('', {validators: [Validators.required, Validators.email]}),
	// });

	private readonly _formBuilder = inject(FormBuilder);

	formGroup = this._formBuilder.nonNullable.group({
		names: ['', Validators.required],
		lastName: ['', Validators.required],
		email: ['', [Validators.required, Validators.email]],
	});

	clickRegister(): void{
		// console.log(this.formGroup.get('names')?.value as String);
		const name = this.formGroup.controls.names.value;
		console.log(name);
		console.log("Estado validacion names => ", this.formGroup.controls.names.valid);
		console.log("Estado validacion form => ", this.formGroup.valid);

		if(this.formGroup.valid){
			console.log("Los datos del formulario son correctos.");
		}
	}
}
