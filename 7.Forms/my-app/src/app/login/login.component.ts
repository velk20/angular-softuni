import {Component, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @ViewChild('loginForm') loginForm: NgForm | undefined;

  /**
   * Renders static content
   * ngOnInit(){}
   *
   * Renders the final content + dynamic content
   * ngAfterViewInit(){}
   * */
  formSubmitHandler() {
    const form = this.loginForm;
    if (!form) {
      return;
    }
    if (form.invalid) {

      console.log('Invalid: ', form.invalid);
      return;
    }
    console.log(form.value);


    const {emai, password} = form?.value;


    form.reset();
  }
}
