import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
  ValidatorFn,
} from '@angular/forms';

@Directive({
  selector: '[appEmailValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: EmailValidatorDirective,
      multi: true,
    },
  ],
})
export class EmailValidatorDirective implements Validator, OnChanges {
  @Input() appEmailValidator: string[] = [];

  constructor() {}

  validator: ValidatorFn = () => null;

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    //! We can you this commented lines
    //! If we want simpler way of validating email
    // const validatorFn = this.emailValidate(this.appEmailValidator);
    // return validatorFn(control);
    return this.validator(control);
  }

  ngOnChanges(changes: SimpleChanges): void {
    const { currentValue } = changes['appEmailValidator'];

    if (currentValue?.length) {
      this.validator = this.emailValidate(currentValue);
    }
  }

  emailValidate(domains: string[]): ValidatorFn {
    const domainString = domains.join('|');
    const regex = new RegExp(`[A-Za-z0-9]+@gmail\\.(${domainString})`);

    return (control) => {
      const isEmailInvalid = control.value === '' || regex.test(control.value);
      return isEmailInvalid ? null : { emailValidator: true };
      //! emailValidator property will be used
      //! in the HTML template to get the error for email we need
      //! like this: *ngIf="inputEmail.errors?.['emailValidator']"
    };
  }
}
