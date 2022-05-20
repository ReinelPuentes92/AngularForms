import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent implements OnInit {

  @ViewChild('myTemplate') myTemplate!: NgForm

  initForm = {
    product: '',
    price: 0,
    stock: 0
  }

  constructor() { }

  ngOnInit(): void {
  }

  save(){
    console.log(this.myTemplate.value);
    this.myTemplate.resetForm({
      price: 0,
      stock: 0
    });
  }

  nameValid(): boolean{
    return this.myTemplate?.controls.product?.invalid && this.myTemplate?.controls.product?.touched;
  }

  priceValid(): boolean{
    return this.myTemplate?.controls.price?.touched && this.myTemplate?.controls.price?.value < 0;
  }

}
