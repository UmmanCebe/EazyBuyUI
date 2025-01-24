import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems: { name: string; price: number; quantity: number; image: string }[] = [];

  // Sepete ürün ekleme
  addToCart(product: { name: string; price: number; image: string }) {
    const existingItem = this.cartItems.find((item) => item.name === product.name);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.cartItems.push({ ...product, quantity: 1 });
    }
  }

  // Sepetteki ürünleri alma
  getCartItems() {
    return this.cartItems;
  }

  // Sepeti temizleme
  clearCart() {
    this.cartItems = [];
  }

  getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }
}
