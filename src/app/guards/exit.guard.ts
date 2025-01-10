import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import RegisterPageComponent from '../pages/register-page/register-page.component';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../components/confirm-dialog/confirm-dialog.component';

export interface CanComponentDeactive {
  CanDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable({ providedIn: 'root' })
export class ExitGuard implements CanDeactivate<CanComponentDeactive> {
  
  dialog = inject(MatDialog);

  canDeactivate(
    component: CanComponentDeactive,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    console.log('************** EXIT GUARD **********');    
    // return component.CanDeactivate();
    const formularioValido = component.CanDeactivate();
    if (formularioValido) {
			const reference = this.dialog.open(ConfirmDialogComponent);
			return reference.afterClosed();
		}
		return true;
  }
}
