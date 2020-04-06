import { Component, OnInit } from '@angular/core';
import { ProductService } from './services/product.service';
import { Product } from './models/product.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-store',
  templateUrl: './store.page.html',
  styleUrls: ['./store.page.scss'],
})
export class StorePage implements OnInit {
  products: Product[];
  private productSub: Subscription;
  constructor(
    public productService: ProductService
  ) { }

  ngOnInit() {
    this.getProducts();
  }
  getProducts() {
    this.productService.getProducts();
    this.productSub = this.productService.getProductListener()
    .subscribe((prod: Product[]) => {
      this.products = prod;
    });
  }
}
