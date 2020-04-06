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
              image: t.image,
              price: t.price
          };
        });
      })
    )
    .subscribe(twtD => {
      this.product = twtD;
      this.productListen.next([...this.product]);
    });
  }
  getProductListener() {
    return this.productListen.asObservable();
  }
}
