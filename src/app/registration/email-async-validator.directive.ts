import { UsresService } from '../services/usres.service';
import { Directive } from '@angular/core';
import { AsyncValidator, AbstractControl, ValidationErrors, NG_ASYNC_VALIDATORS } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { map, catchError } from 'rxjs/operators';

@Directive({
  selector: '[EmailAsyncValidator]',
  providers: [{ provide: NG_ASYNC_VALIDATORS, useExisting: EmailAsyncValidatorDirective, multi: true }, UsresService]
})

export class EmailAsyncValidatorDirective implements AsyncValidator {

  constructor(private service: UsresService) { }

  validate(ctrl: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    console.log(ctrl.value)
    return this.service.isEmailTaken(ctrl.value)
      .pipe(
        map(isTaken => {
          return isTaken ? { taken: true } : null
        }),
        catchError(() => null)
      )
  }
}

