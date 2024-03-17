import { ValidatorFn } from '@angular/forms';

export function matchPasswordsValidator(
  passControl: string,
  rePasswordControl: string,
): ValidatorFn {
  return (control) => {
    const pass1 = control.get(passControl);
    const pass2 = control.get(rePasswordControl);

    const areMatched: boolean = pass1?.value == pass2?.value;
    return areMatched ? null : { matchPasswordsValidator: true };
  };
}
