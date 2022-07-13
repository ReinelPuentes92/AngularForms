import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  nameLastnamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  constructor() { }

  canNotStrinder(form: FormControl): ValidationErrors | null{
    const value: string = form.value?.trim().toLowerCase();

    if(value === 'strider'){
      return {
        noStrider: true
      }
    }

    return null;
  }

  fieldsEquals(fieldOne: string, fieldTwo: string){
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const pass1 = formGroup.get(fieldOne)?.value;
      const pass2 = formGroup.get(fieldTwo)?.value;

      if(pass1 !== pass2){
        formGroup.get(fieldTwo)?.setErrors({areNotEquals: true});
        return {
          areNotEquals: true
        }
      }

      formGroup.get(fieldTwo)?.setErrors(null);
      return null;
    }
  }

}
