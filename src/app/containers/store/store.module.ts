import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StorePageRoutingModule } from './store-routing.module';

import { StorePage } from './store.page';
import { AddproductComponent } from './components/addproduct/addproduct.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    StorePageRoutingModule
  ],
  declarations: [StorePage, AddproductComponent],
  entryComponents: [AddproductComponent]
})
export class StorePageModule {}
