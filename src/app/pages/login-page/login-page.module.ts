import { NgModule } from '@angular/core';

import { LoginPageComponent } from './login-page.component';
import { MatCardModule } from '@angular/material/card';
import { MatInput } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatButton } from '@angular/material/button';
import { RouterModule, Routes } from '@angular/router';
import { DemoService } from '../../services/demo.service';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [{ path: '', component: LoginPageComponent }];

@NgModule({
  declarations: [LoginPageComponent],
  imports: [
    RouterModule.forChild(routes),
    MatCardModule,
    MatInput,
    MatFormFieldModule,
    MatIcon,
    MatButton,
    ReactiveFormsModule
  ],
  providers: [DemoService]
})
export class LoginPageModule {}
