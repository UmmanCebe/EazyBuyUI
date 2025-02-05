import { Component, ViewChild, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ProductService } from '../product.service';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  title = 'EazyBuyUI';
  @ViewChild('sidenav') sidenav!: MatSidenav;

  categories: string[] = [];
  products: any[] = [];
  filteredProducts: any[] = [];

  constructor(
    private cartService: CartService, 
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit() {
    // Ürünleri servisten al
    this.products = this.productService.getProducts();
    
    // Filtreleme için başlangıçta tüm ürünleri göster
    this.filteredProducts = this.products;

    // Kategorileri dinamik olarak oluştur
    this.categories = ['All', ...new Set(this.products.map(product => product.category))];
  }

  addToCart(event: Event, product: { name: string; price: number; image: string }) {
    event.stopPropagation(); // 🛑 Kart tıklanmasını engelle
    this.cartService.addToCart(product); // Ürünü sepete ekle
  }

  toggleSidenav() {
    this.sidenav.toggle();
  }

  filterProducts(category: string) {
    if (category === 'All') {
      this.filteredProducts = this.products;
    } else {
      this.filteredProducts = this.products.filter(product => product.category === category);
    }
    this.sidenav.close(); // Menü kapansın (özellikle mobilde)
  }

  goToDetail(product: any) {
    const productNameSlug = this.slugify(product.name);
    this.router.navigate(['/product', productNameSlug]);
  }

  slugify(text: string): string {
    return text.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
  }
}
