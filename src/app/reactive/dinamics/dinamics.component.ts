import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dinamics',
  templateUrl: './dinamics.component.html',
  styles: [
  ]
})
export class DinamicsComponent {

  myTemplate: FormGroup = this.fb.group({
    name: [,[Validators.required, Validators.minLength(3)]],
    favorities: this.fb.array([
      ['Batman', Validators.required],
      ['Fifa', Validators.required]
    ], Validators.required)
  });

  newFavoritie: FormControl = this.fb.control('', Validators.required);

  get favoritiesArr(){
    return this.myTemplate.get('favorities') as FormArray;
  }

  constructor(private fb: FormBuilder) { }

  validarCampo(campo:string){
    return this.myTemplate.controls[campo].errors && this.myTemplate.controls[campo].touched;
  }

  addFavorite(){
    if(this.newFavoritie.invalid) { return; }

    //this.favoritiesArr.push(new FormControl(this.newFavoritie.value, Validators.required));
    this.favoritiesArr.push(this.fb.control(this.newFavoritie.value, Validators.required));
    this.newFavoritie.reset();

  }

  deleteFavorite(index: number){
    this.favoritiesArr.removeAt(index);
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
