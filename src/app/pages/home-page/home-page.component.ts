import { ProductsApiService } from './../../services/products-api.service';
import { Component, inject, OnInit, Optional } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbar } from '@angular/material/toolbar';
import { ProductComponent } from './product/product.component';
import { IApiResponseProduct } from '../../services/models/product-api.interface';
import { CartService } from '../../services/cart.service';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    MatToolbar,
    MatIcon,
    MatButtonModule,
    MatBadgeModule,
    MatSidenavModule,
    ProductComponent,
    AsyncPipe,
    RouterLink,
  ],

  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent implements OnInit {
	
  count = 0;
  private readonly _productsApiService = inject(ProductsApiService);
  // private readonly _cartService = inject(CartService);
  readonly cartService = inject(CartService);
  private readonly _activatedRoute = inject(ActivatedRoute);
  private readonly _router = inject(Router);

  products: IApiResponseProduct[] = [];
  products$!: Observable<IApiResponseProduct[]>;

  constructor() {
    console.log('Valores obtenidos por STATE ==> ', this._router.getCurrentNavigation()?.extras.state);
  }

  ngOnInit(): void {
    // this._productsApiService.getProducts().subscribe((data) => console.log(data));
    // this._productsApiService.getProducts().subscribe((data) => this.products = data);
    this._getApis();
    this._getValueRoutes();
  }

  private _getValueRoutes() {
    console.log('Valores obtenidos por QueryParam ==>', this._activatedRoute.snapshot.queryParams);
    console.log('Valores obtenidos por QueryParam ==>', this._activatedRoute.snapshot.queryParamMap.get('edad'));
    console.log('Valores obtenidos por QueryParam ==>', this._activatedRoute.snapshot.queryParams['edad']);
  }

  private _getApis() {
    this.products$ = this._productsApiService.getProducts();
	// this._cartService.cartObservable$.subscribe({
    // 	next: (number) => {
    // 		this.count = number;
    // 	}
    // });
  }
}
