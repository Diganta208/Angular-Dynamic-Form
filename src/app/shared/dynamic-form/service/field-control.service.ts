import { Injectable } from '@angular/core';
import {
  AbstractControl, FormControl,
  FormGroup, ValidationErrors,
  ValidatorFn, Validators
} from '@angular/forms';
import { FieldBase } from 'src/app/core/field-base';

@Injectable({
  providedIn: 'root'
})
export class FieldControlService {

  constructor() { }

  toFormGroup(fields: FieldBase<string>[]) {
    const group: any = {};
    let arr: any = []

    for (let i = 0; i < fields.length; i++) {
      if (!arr.includes(fields[i].key)) arr.push(fields[i].key)
    }

    fields.forEach(field => {
      let validatorArr = []

      if (field.minLength) {
        validatorArr.push(Validators.minLength(field.minLength))
      }

      if (field.required) {
        validatorArr.push(Validators.required)
      }

      if (field.type == 'email') {
        validatorArr.push(Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'))
      }

      if ((arr.includes('password') && arr.includes('question.key'))
        && field.key == 'password') validatorArr.push(this.matchValidator('password_confirmation', true))

      if ((arr.includes('password') && arr.includes('password_confirmation'))
        && field.key == 'password_confirmation') validatorArr.push(this.matchValidator('password'))

      group[field.key] = field.required ? new FormControl(field.value || '', validatorArr)
        : new FormControl(field.value || '');

    });

    return new FormGroup(group);
  }


  matchValidator(matchTo: string, reverse?: boolean): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (control.parent && reverse) {
        const c = (control.parent?.controls as any)[matchTo]
        if (c) c.updateValueAndValidity();
        return null;
      }
      return !!control.parent && !!control.parent.value && control.value ===
        (control.parent?.controls as any)[matchTo].value
        ? null : { matching: true };
    };
  }
}
