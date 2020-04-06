import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    {
      id: '123',
      name: 'Vestido Algodón',
      category: 'clothing',
      price: 123,
      stock: 12,
      description: 'jeje',
      image: 'https://shoppr-c97a7.firebaseapp.com/assets/images/products/2.jpg',
      avaliable: true
    },
    {
      id: '1233',
      name: 'Blusa Lisa',
      category: 'clothing',
      price: 133,
      stock: 6,
      description: 'juju',
      image: 'https://shoppr-c97a7.firebaseapp.com/assets/images/products/1_2.jpg',
      avaliable: true
    }
  ];
  constructor() { }
  getProducts() {
    return this.products.slice();
  }
}
