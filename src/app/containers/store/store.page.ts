import { Component, OnInit } from '@angular/core';
import { ProductService } from './services/product.service';
import { Product } from './models/product.model';

@Component({
  selector: 'app-store',
  templateUrl: './store.page.html',
  styleUrls: ['./store.page.scss'],
})
export class StorePage implements OnInit {
  products: Product[];
  constructor(
    public productService: ProductService
  ) { }

  ngOnInit() {
    this.setProducts();
  }
  setProducts() {
    this.products = this.productService.getProducts();
    console.log('t', this.products)
  }
}
