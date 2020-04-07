import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss'],
})
export class AddproductComponent implements OnInit {

  constructor(
    private mdl: ModalController
  ) { }

  ngOnInit() {}
  onClose() {
    this.mdl.dismiss()
  }
}
