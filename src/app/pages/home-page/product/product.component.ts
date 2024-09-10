import { Component, Input, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { IApiResponseProduct } from '../../../services/models/product-api.interface';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent {
	
  @Input({ required: true })
  product?: IApiResponseProduct;

  clickAddToCard(): void {}
}
