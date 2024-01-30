import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { CartServiceService } from '../../../service/cart-service.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [HttpClientModule, CommonModule, CardComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})

export class CardComponent implements OnInit {
  products: any[] = [];

  CartService = inject(CartServiceService);

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.fetchProducts();
  }

  fetchProducts() {
    this.http.get<any>('https://dummyjson.com/products')
      .subscribe(data => {
        this.products = data?.products;
      });
  }

  addToCart(product: any) {
    this.CartService.addToCart(product);
  }
}
