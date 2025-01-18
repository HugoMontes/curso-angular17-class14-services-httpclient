import { PaymentPageComponent } from './payment-page.component';
import { SimpleProductDetailPageComponent } from './simple-product-detail-page/simple-product-detail-page.component';
import { Routes } from '@angular/router';

export default [
  {
    path: '',
    component: PaymentPageComponent,
    children: [
      {
        path: 'simple-product-detail', // http://localhost:4200/payment/simple-product-detail
        component: SimpleProductDetailPageComponent,
      },
      {
        path: 'full-product-details', // http://localhost:4200/payment/full-product-details
        loadComponent: () =>
          import(
            './full-product-details-page/full-product-details-page.component'
          ),
      },
      {
        path: '', // http://localhost:4200/payment/simple-product-detail
        pathMatch: 'full',
        redirectTo: 'simple-product-detail',
      },
    ],
  },
] as Routes;
