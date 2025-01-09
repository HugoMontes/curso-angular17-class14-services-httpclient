import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { ProductsResolverServiceFn } from './services/products.resolver';
import { AuthGuardFn } from './guards/auth.guard';

export default [
  { path: 'home', title: 'Home', component: HomePageComponent },
  {
    path: 'login',
    title: 'Inicio de sesión',
    // component: LoginPageComponent,
    loadChildren: () => import('./pages/login-page/login-page.module').then((m) => m.LoginPageModule)
  },
  {
		path: 'register',
		title: 'Registro',
		loadComponent: () => import('./pages/register-page/register-page.component')
	},
  {
    path: 'payment/:user',
    data: { title: 'Pagos' },
    canActivate: [AuthGuardFn],
    resolve: { products: ProductsResolverServiceFn },
    loadChildren: () => import('./pages/payment-page/payment-page.routes'),
  },

  //SE RECOMIENDA PONER A FINAL DE LAS RUTAS EL USO DE COMODINES
  // { path: '404', component: NotFoundPageComponent },
  // { path: '**', redirectTo: '/404', pathMatch: 'full' },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // http://localhost:4200/
  { path: 'login', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: NotFoundPageComponent },
] as Routes;
