import { Component } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbar } from '@angular/material/toolbar';
import { ProductComponent } from './product/product.component';

@Component({
	selector: 'app-home-page',
	standalone: true,
	imports: [MatToolbar, MatIcon, MatButtonModule, MatBadgeModule, MatSidenavModule, ProductComponent],

	templateUrl: './home-page.component.html',
	styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
	count = 0;
}
