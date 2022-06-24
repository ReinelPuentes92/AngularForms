import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent {

  /*myTemplate: FormGroup = new FormGroup({
    'name': new FormControl('RTX'),
    'price': new FormControl(12000),
    'stock': new FormControl(6)
  });*/

  myTemplate: FormGroup= this.fb.group({
    name: [, [Validators.required, Validators.minLength(3)]],
    price: [, [Validators.required, Validators.min(0)]],
    stock: [, [Validators.required, Validators.min(0)]]
  })

  constructor(private fb: FormBuilder) { }

  campoEsValido(campo: string){
    return this.myTemplate.controls[campo].errors && this.myTemplate.controls[campo].touched;
  }

  save(){

    if(this.myTemplate.invalid){
      this.myTemplate.markAllAsTouched();
      return;
    } else{
      console.log(this.myTemplate.value);
      this.myTemplate.reset();
    }
    
  }



}
