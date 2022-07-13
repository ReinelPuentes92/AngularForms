import { FormControl } from '@angular/forms';

export const nameLastnamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
export const emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

export const canNotStrinder = (form: FormControl) =>{
    const value: string = form.value?.trim().toLowerCase();
    if(value === 'strider'){
      return {
        noStrider: true
      }
    }
    return null;
  }
