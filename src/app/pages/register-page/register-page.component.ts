import { RouterLink } from '@angular/router';
import { Component, HostListener, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';
import { Observable } from 'rxjs';
import {
  crossPasswordMatchingValidatior,
  customPasswordValidator,
  PasswordStateMatcher,
} from './register-custom-validators';
import { CanComponentDeactive } from '../../guards/exit.guard';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [
    RouterLink,
    MatCardModule,
    MatInput,
    MatFormFieldModule,
    MatIcon,
    MatButton,
    ReactiveFormsModule,
  ],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.scss',
})
export default class RegisterPageComponent implements CanComponentDeactive {
  @HostListener('window:beforeunload', ['$event'])
  onBeforeReload(e: BeforeUnloadEvent) {
    const form_valid = Object.values(this.formGroup.controls).some(
      (control) => control.value !== '',
    );
    if (form_valid) {
      e.preventDefault();
    }
    return;
  }

  // dialog = inject(MatDialog);

  // CanDeactivate() : Observable<boolean> | Promise<boolean> | boolean {
  // 	console.log('*** CanDeactive REGISTERPAGE ****');
  // 	const formularioValido = Object.values(this.formGroup.controls).some((control) => control.value !== '');
  // 	if (formularioValido) {
  // 		const reference = this.dialog.open(ConfirmDialogComponent);
  // 		return reference.afterClosed();
  // 	}
  // 	return true;
  // }

  CanDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    console.log('*** CanDeactive REGISTERPAGE ****');
    const formularioValido = Object.values(this.formGroup.controls).some(
      (control) => control.value !== '',
    );
    return formularioValido;
  }

  // formGroup = new FormGroup({
  // 	names: new FormControl('', {validators: Validators.required}),
  // 	lastName: new FormControl('', {validators: Validators.required}),
  // 	email: new FormControl('', {validators: [Validators.required, Validators.email]}),
  // });

  passwordStateMatcher = new PasswordStateMatcher();

  private readonly _formBuilder = inject(FormBuilder);

  formGroup = this._formBuilder.nonNullable.group(
    {
      names: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [customPasswordValidator, Validators.required]],
      confirmPassword: ['', Validators.required],
    },
    { validators: crossPasswordMatchingValidatior },
  );

  clickRegister(): void {
    // Acceder al valor de un control
    // const namesOld = this.formGroup.get('names')?.value;
    const namesNew = this.formGroup.controls.names.value;
    console.log(namesNew);

    //#region Estados de validacion
    // Acceder al estado de validación de un control
    const nameIsValid = this.formGroup.controls.names.valid;
    console.log(nameIsValid);

    // Acceder al estado de validación de todo el formulario
    const formGroupIsValid = this.formGroup.valid;
    console.log(formGroupIsValid);
    //#endregion

    //#region Estados de interacción
    // Acceder al estado de interacción de un control
    const nameIsDirty = this.formGroup.controls.names.dirty;
    console.log(nameIsDirty);

    // Acceder al estado de validación de todo el formulario
    const formGroupIsDirty = this.formGroup.dirty;
    console.log(formGroupIsDirty);
    //#endregion

    //#region ERRORS
    // Acceder a los errores de un control
    const nameErrors = this.formGroup.controls.names.errors;
    console.log(nameErrors);

    // Acceder al estado de validación de todo el formulario
    const formGroupErrors = this.formGroup.errors;
    console.log(formGroupErrors);

    // verificar si un control incumplió una validacion

    console.log(this.formGroup.controls.names.hasError('required'));

    //#endregion

    // if (this.formGroup.valid) {
    //   const user = this.formGroup.getRawValue();
    // }

    // console.log(this.formGroup.get('names')?.value as String);
    const name = this.formGroup.controls.names.value;
    console.log(name);
    console.log(
      'Estado validacion names => ',
      this.formGroup.controls.names.valid,
    );
    console.log('Estado validacion form => ', this.formGroup.valid);

    if (this.formGroup.valid) {
      console.log('Los datos del formulario son correctos.');
    }

    console.log(
      'Propiedad errors email => ',
      this.formGroup.controls.email.errors,
    );
    console.log(
      'Funcion hasError() en email => ',
      this.formGroup.controls.email.hasError('email'),
    );
    console.log(
      'Validador personalizado password => ',
      this.passwordField.errors,
    );
  }

  //#region getter and setters
  get namesField(): FormControl<string> {
    return this.formGroup.controls.names;
  }

  get lastNameField(): FormControl<string> {
    return this.formGroup.controls.lastName;
  }

  get emailField(): FormControl<string> {
    return this.formGroup.controls.email;
  }

  get passwordField(): FormControl<string> {
    return this.formGroup.controls.password;
  }

  get confirmPasswordField(): FormControl<string> {
    return this.formGroup.controls.confirmPassword;
  }
  //#endregion
}
