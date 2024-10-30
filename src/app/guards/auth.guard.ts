import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";

@Injectable({ providedIn: 'root'})
export class AuthGuard implements CanActivate {
  canActivate(
      route: ActivatedRouteSnapshot, 
      state: RouterStateSnapshot
    ): boolean {
      console.log('***AuthGuard***');
      // return true;
      return false;
  }
}

// import { CanActivateFn } from '@angular/router';

// export const authGuard: CanActivateFn = (route, state) => {
//   return true;
// };
