import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private product: Product[] = [];
  private productListen = new Subject<Product[]>();
  constructor(private http: HttpClient) { }
  // getProducts() {
  //   return this.products.slice();
  // }
  getProducts() {
    this.http.get<{mensaje: string; products: any}>(
      'http://localhost:8070/product')
    .pipe(
      map((res) => {
        console.log('r', res);
        return res.products.map(t => {
          return {
              id: t._id,
              name: t.name,
              description: t.description,
              image: t.imageCollection[0],
              price: t.price,
              stock: t.stock
          };
        });
      })
    )
    .subscribe(twtD => {
      this.product = twtD;
      this.productListen.next([...this.product]);
    });
  }
  addProduct(name: string, description: string, image: string, price: number, stock: number) {
    const prod: Product = {id: null, name, description, image, price, stock };
    this.http.post<{mensaje: string, product: Product}>('http://locahost:8070/product', prod)
    .subscribe(res => {
      console.log('r', res);
    });

    // const productData = new FormData();
    // productData.append('name', name);
    // console.log('p', productData);
    // productData.append('imageCollection', imagen);
    // productData.append('price', price.toString());
    // productData.append('stock', stock.toString());
    // console.log('pr', productData);
  }
  getProductListener() {
    return this.productListen.asObservable();
  }
}
