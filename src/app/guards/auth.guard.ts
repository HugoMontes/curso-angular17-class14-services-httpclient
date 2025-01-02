import { inject, Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";

@Injectable({ providedIn: 'root'})
export class AuthGuard implements CanActivate {

  private router = inject(Router);

  canActivate(
      route: ActivatedRouteSnapshot, 
      state: RouterStateSnapshot
    ): boolean {
      console.log('***AuthGuard***');
      console.log(route);
      const token = localStorage.getItem('token');
      if(!token){
        this.router.navigateByUrl("/");
        return false;
      }
      return true;
  }
}

// import { CanActivateFn } from '@angular/router';

// export const authGuard: CanActivateFn = (route, state) => {
//   return true;
// };
