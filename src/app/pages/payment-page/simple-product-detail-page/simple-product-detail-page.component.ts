import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';

interface ICartProduct {
	name: string;
	price: number;
	quantity: number;
	total: number;
}

const PRODUCTS: ICartProduct[] = [
	{ name: 'Mens Casual Slim Fit', price: 109.95, quantity: 2, total: 219.9 },
	{ name: "ohn Hardy Women's Legends Naga Gold & Silver Dragon", price: 695, quantity: 1, total: 695 },
	{ name: 'ierced Owl Rose Gold Plated Stainless Steel Double', price: 10.99, quantity: 1, total: 10.99 }
];

@Component({
	selector: 'app-simple-product-detail-page',
	standalone: true,
	imports: [MatTableModule, MatInputModule, MatFormFieldModule, ReactiveFormsModule],
	templateUrl: './simple-product-detail-page.component.html',
	styleUrl: './simple-product-detail-page.component.scss'
})
export class SimpleProductDetailPageComponent {
	displayedColumns: string[] = ['name', 'price', 'quantity', 'total', 'action'];
	dataSource = PRODUCTS;
	private readonly formBuilder = inject(FormBuilder);

	form = this.formBuilder.group({
		products: this.formBuilder.array([])
	});	
}
