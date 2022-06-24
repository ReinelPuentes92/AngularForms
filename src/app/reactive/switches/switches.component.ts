import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit {

  myTemplate: FormGroup = this.fb.group({
    gender: ['M', Validators.required],
    notifications: [true, Validators.required],
    termsConditions: [false, Validators.requiredTrue]
  });

  person = {
    gender: 'F',
    notifications: true,
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.myTemplate.reset({...this.person, termsConditions: true}); 
    this.myTemplate.valueChanges.subscribe(({termsConditions, ...rest}) => {      
      this.person = rest;
    });
  }

  guardar(){
    const formValue = {...this.myTemplate.value};
    delete formValue.termsConditions;
    this.person = formValue;
  }

}
