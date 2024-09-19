import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
// import { LoginPageComponent } from './pages/login-page/login-page.component';
// import { PaymentPageComponent } from './pages/payment-page/payment-page.component';
// import { SimpleProductDetailPageComponent } from './pages/payment-page/simple-product-detail-page/simple-product-detail-page.component';
// import FullProductDetailsPageComponent from './pages/payment-page/full-product-details-page/full-product-details-page.component';
// import { ProductsResolverService } from './services/products.resolver';

export default [
  { path: 'home', title: 'Home', component: HomePageComponent },
  {
    path: 'login',
    title: 'Inicio de sesión',
    // component: LoginPageComponent,
    loadChildren: () => import('./pages/login-page/login-page.module').then((m) => m.LoginPageModule)
  },
  // {
  //   path: 'payment/:user',
  //   component: PaymentPageComponent,
  //   data: { title: 'Pagos' },
  //   resolve: { products: ProductsResolverService },
  //   children: [
  //     {
  //       path: 'simple-product-detail', // http://localhost:4200/payment/simple-product-detail
  //       component: SimpleProductDetailPageComponent,
  //     },
  //     {
  //       path: 'full-product-details', // http://localhost:4200/payment/full-product-details
  //       component: FullProductDetailsPageComponent,
  //     },
  //     {
  //       path: '',
  //       pathMatch: 'full',
  //       redirectTo: 'simple-product-detail',
  //     },
  //   ],
  // },

  //SE RECOMIENDA PONER A FINAL DE LAS RUTAS EL USO DE COMODINES
  // { path: '404', component: NotFoundPageComponent },
  // { path: '**', redirectTo: '/404', pathMatch: 'full' },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // http://localhost:4200/
  { path: 'login', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: NotFoundPageComponent },
] as Routes;
