// import { inject, Injectable } from "@angular/core";
// import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";

// @Injectable({ providedIn: 'root'})
// export class AuthGuard implements CanActivate {

//   private router = inject(Router);

//   canActivate(
//       route: ActivatedRouteSnapshot,
//       state: RouterStateSnapshot
//     ): boolean {
//       console.log('***AuthGuard***');
//       console.log(route);
//       const token = localStorage.getItem('token');
//       if(!token){
//         this.router.navigateByUrl("/");
//         return false;
//       }
//       return true;
//   }
// }

import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const AuthGuardFn: CanActivateFn = (route, state) => {
  console.log('***AuthGuardFn***');
  console.log(route);
  const token = localStorage.getItem('token');
  if (!token) {
    const router = inject(Router);
    router.navigateByUrl('/');
    return false;
  }
  return true;
};
