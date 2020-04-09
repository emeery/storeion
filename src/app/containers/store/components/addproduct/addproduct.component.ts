import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { mimeTipo } from './mime.validator';
import { ProductService } from '../../services/product.service';
@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss'],
})
export class AddproductComponent implements OnInit {
  form: FormGroup;
  imagenPrev: string;
  @ViewChild('fileInput', {static: false}) fileInput;
  constructor(
    public productService: ProductService,
    private mdl: ModalController
  ) { }

  ngOnInit() {
    this.setForm();
  }
  setForm() {
    this.form = new FormGroup({
        name: new FormControl(null, {
          updateOn: 'blur',
          validators: [Validators.required, Validators.minLength(1)]
        }),
        description: new FormControl(null, {
          updateOn: 'blur',
          validators: [Validators.required, Validators.minLength(1)]
        }),
        imageCollection: new FormControl(null, {
          updateOn: 'blur',
          validators: [Validators.required], asyncValidators: [mimeTipo]
        }),
        price: new FormControl(null, {
          updateOn: 'blur',
          validators: [Validators.required, Validators.minLength(1)]
        }),
        stock: new FormControl(null, {
          updateOn: 'blur',
          validators: [Validators.required, Validators.minLength(1)]
        }),
    });
  }
  addProduct() {
    console.log('f', this.form);
    this.productService.addProduct(
      this.form.value.name,
      this.form.value.description,
      this.form.value.imageCollection,
      this.form.value.price,
      this.form.value.stock
    )
  }
  onClose() {
    this.mdl.dismiss();
  }
  selectionImage(event: Event) {
    const image = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({imageCollection: image }); // apunta a un solo control
    this.form.get('imageCollection').updateValueAndValidity();
    // const lector = new FileReader();
    // lector.onload = () => { this.imagenPrev = lector.result as string; };
    // lector.readAsDataURL(image);
    // console.log('l', lector)
  }
}
