import { Component, OnInit } from '@angular/core';
import { ProductService } from './services/product.service';
import { Product } from './models/product.model';
import { Subscription } from 'rxjs';
import { ModalController } from '@ionic/angular';
import { AddproductComponent } from './components/addproduct/addproduct.component';

@Component({
  selector: 'app-store',
  templateUrl: './store.page.html',
  styleUrls: ['./store.page.scss'],
})
export class StorePage implements OnInit {
  products: Product[];
  private productSub: Subscription;
  constructor(
    public productService: ProductService,
    private mdl: ModalController
  ) { }

  ngOnInit() {
    // this.getProducts();
  }
  getProducts() {
    this.productService.getProducts();
    this.productSub = this.productService.getProductListener()
    .subscribe((prod: Product[]) => {
      this.products = prod;
    });
  }
  addProduct() {
    this.mdl.create({component: AddproductComponent})
    .then(mdlEl => {
      mdlEl.present();
      return mdlEl.dismiss();
    }).then(res => console.log('r', res));
  }
}
