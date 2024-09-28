import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
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
	clickRegister(): void{}
}
