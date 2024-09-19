import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { IApiResponseProduct } from './models/product-api.interface';
import { ProductsApiService } from './products-api.service';
import { inject } from '@angular/core';

// @Injectable({
// 	providedIn: 'root'
// })
// export class ProductsResolverService implements Resolve<IApiResponseProduct[]> {

// 	private readonly _productsApiService = inject(ProductsApiService);

// 	resolve(route: ActivatedRouteSnapshot): Observable<IApiResponseProduct[]> {
// 		console.log('Productos desde el resolver...', route);
// 		// return this._productsApiService.getProducts().pipe(delay(3000));
// 		return this._productsApiService.getProducts().pipe();
// 	}
// }

export const ProductsResolverServiceFn: ResolveFn<IApiResponseProduct[]> = (route: ActivatedRouteSnapshot) => {
  const _productsApiService = inject(ProductsApiService);
  return _productsApiService.getProducts();
};
