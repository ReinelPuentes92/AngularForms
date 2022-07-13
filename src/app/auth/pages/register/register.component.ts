import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ValidatorService } from '../../../shared/validator/validator.service';
import { EmailValidatorService } from '../../../shared/validator/email-validator.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnInit {

  get emailErrorsMsg(): string{
    
    const errors = this.registerForm.get('email')?.errors;
    if(errors?.required){
      return 'The email is required.';
    } else if(errors?.pattern){
      return 'The email format is invalid.'
    } else if(errors?.emailRegistry){
      return 'The email is already registred.'
    }

    return '';
  }

  registerForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.pattern(this.validatorServices.nameLastnamePattern)]],
    email: ['', [Validators.required, Validators.pattern(this.validatorServices.emailPattern)], [this.emailValidator]],
    username: ['', [Validators.required, this.validatorServices.canNotStrinder]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    passwordCheck: ['', [Validators.required]]
  }, {
    validators: [this.validatorServices.fieldsEquals('password','passwordCheck')]
  })

  constructor(private fb: FormBuilder,
              private validatorServices: ValidatorService,
              private emailValidator: EmailValidatorService) { }

  ngOnInit(): void {
    this.registerForm.reset({
      name: 'Reinel Puentes',
      email: 'test1@test.com',
      username: 'rpuentesm'
    })
  }

  fieldNoValid(field:string){
    return this.registerForm.get(field)?.invalid && 
    this.registerForm.get(field)?.touched
  }

  /*emailRequired(){
    return this.registerForm.get('email')?.errors?.required
  }

  emailFormat(){
    return this.registerForm.get('email')?.errors?.pattern &&
    this.registerForm.get('email')?.touched;
  }

  emailRegistry() {
    return this.registerForm.get('email')?.errors?.emailRegistry &&
    this.registerForm.get('email')?.touched;
  }*/

  submitForm(){
    console.log(this.registerForm.value);
    this.registerForm.markAllAsTouched();
  }

}
