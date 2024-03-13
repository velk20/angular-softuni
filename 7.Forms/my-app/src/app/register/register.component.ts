import {AfterViewInit, Component} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements AfterViewInit {
  isFormValid: boolean = false;
  registerForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.maxLength(4)]],
  })

  constructor(private fb: FormBuilder) {
  }

  ngAfterViewInit(): void {
 
  }


  formSubmitHandler() {
    console.log(this.registerForm.value)
  }
}
