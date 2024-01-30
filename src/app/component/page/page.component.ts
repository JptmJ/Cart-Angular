import { Component } from '@angular/core';
import { CartDataComponent } from '../cart-data/cart-data.component';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.component';

@Component({
  selector: 'app-page',
  standalone: true,
  imports: [CartDataComponent, HeaderComponent, CardComponent],
  templateUrl: './page.component.html',
  styleUrl: './page.component.css'
})
export class PageComponent {

}
