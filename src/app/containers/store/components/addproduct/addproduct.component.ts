import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { mimeTipo } from './mime.validator';
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
          validators: [Validators.required, Validators.minLength(1)]
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
    console.log('e', this.form.value);
  }
  onClose() {
    this.mdl.dismiss();
  }
  selectionImage(event: Event) {
    const image = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({imagen: image }); // apunta a un solo control
    this.form.get('imageCollection').updateValueAndValidity();
    const lector = new FileReader();
    lector.onload = () => { this.imagenPrev = lector.result as string; };
    lector.readAsDataURL(image);
  }
}
