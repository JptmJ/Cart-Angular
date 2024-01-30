import { Component, NgModule, inject } from '@angular/core';
import { CardComponent } from '../page/card/card.component';
import { CartServiceService } from '../../service/cart-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart-data',
  standalone: true,
  imports: [CardComponent, CommonModule],
  templateUrl: './cart-data.component.html',
  styleUrl: './cart-data.component.css'
})
export class CartDataComponent {

  cartService = inject(CartServiceService)

  addToCart(product: any) { }

  deleteFromCart(item: any) {
    this.cartService.delete(item);
  }
}
