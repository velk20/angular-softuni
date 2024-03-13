import {Directive, Input} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from "@angular/forms";

@Directive({
  selector: '[appMaxCount]',
  providers: [
    //! For validators config
    {
      provide: NG_VALIDATORS,
      useExisting: MaxCountDirective,
      multi: true
    }
  ]
})
export class MaxCountDirective implements Validator {
  @Input() appMaxCount: number | undefined;

  constructor() {
  }

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    if (!this.appMaxCount || control.value?.length <= this.appMaxCount) {
      return null;
    }
    return {appMaxCount: this.appMaxCount};
  }


}
