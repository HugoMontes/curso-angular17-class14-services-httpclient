import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { PaymentPageComponent } from './pages/payment-page/payment-page.component';
import { SimpleProductDetailPageComponent } from './pages/payment-page/simple-product-detail-page/simple-product-detail-page.component';
import FullProductDetailsPageComponent from './pages/payment-page/full-product-details-page/full-product-details-page.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: 'payment',
    component: PaymentPageComponent,
    children: [
      {
        path: 'simple-product-detail', // http://localhost:4200/payment/simple-product-detail
        component: SimpleProductDetailPageComponent,
      },
      {
        path: 'full-product-details', // http://localhost:4200/payment/full-product-details
        component: FullProductDetailsPageComponent,
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'simple-product-detail'
      }
    ],
  },

  //SE RECOMIENDA PONER A FINAL DE LAS RUTAS EL USO DE COMODINES
  // { path: '404', component: NotFoundPageComponent },
  // { path: '**', redirectTo: '/404', pathMatch: 'full' },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // http://localhost:4200/
  { path: 'login', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class RoutingModule {}
