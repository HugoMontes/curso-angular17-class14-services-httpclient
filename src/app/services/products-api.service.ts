import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IApiResponseProduct } from './models/product-api.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductsApiService {
  
  httpClient = inject(HttpClient);

  private readonly URL_PRODUCTS = 'https://fakestoreapi.com/products';

  constructor() {
    console.log('ProductsService');
  }

  getProducts() {
    return this.httpClient.get<IApiResponseProduct[]>(this.URL_PRODUCTS);
  }
}
