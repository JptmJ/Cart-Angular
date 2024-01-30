import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  private items: any[] = []

  constructor() { }

  addToCart(product: any) {

    let existingItem = this.items.find((item) => item.id === product.id);

    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.items.push({ ...product, quantity: 1 });
    }
  }

  getItems() {
    return this.items;
  }

  delete(item: any) {
    this.items = this.items.filter((i) => i.id !== item.id);
  }

  incrementQuantity(id: number) {
    let item = this.items.find((i) => i.id === id)
    if (item) {
      item.quantity++;
    }
  }

  decrementQuantity(id: number) {
    let item = this.items.find((i) => i.id === id)
    if (item) {
      item.quantity--;
      if (item.quantity <= 0) {
        this.delete(item);
      }
    }
  }

  getTotal() {
    return this.items.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
  }
}
