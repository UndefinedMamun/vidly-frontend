import { Directive, Input } from '@angular/core';
import { ValidatorFn, AbstractControl, FormGroup, Validator, NG_VALIDATORS, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[IsPasswordMatch]',
  providers: [{ provide: NG_VALIDATORS, useExisting: IsPasswordMatchDirective, multi: true }]
})

export class IsPasswordMatchDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors {
    let isValid = false;
    if (control && control instanceof FormGroup) {
      let group = control as FormGroup;
      if (group.controls['password'] && group.controls['confirmPassword']) {
        isValid = group.controls['password'].value == group.controls['confirmPassword'].value;

        if (!isValid) {
          group.controls['confirmPassword'].setErrors({ 'match': 'failed' })
        } else {
          group.controls['confirmPassword'].setErrors(null)
        }
      }
    }
    // console.log('cheking');
    if (isValid) {
      return null;
    } else {

      return { 'match': 'failed' }
    }
  }
}


// @Directive({
//   selector: '[IsPasswordMatch]',
//   providers: [{ provide: NG_VALIDATORS, useExisting: IsPasswordMatchDirective, multi: true }]
// })
// export class IsPasswordMatchDirective implements Validator {

//   validate(control: AbstractControl): { [key: string]: any } | null {
//     let isValid = false;
//     if (control.value == 'testing') {
//       isValid = true;
//     }
//     console.log('cheking');
//     if (isValid) {
//       return null;
//     } else {
//       return { 'match': 'failed' }
//     }
//   }
// }

