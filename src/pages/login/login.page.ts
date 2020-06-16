import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss']
})
export class LoginPage implements OnInit {

  form: FormGroup;
  public loginInvalid: boolean;
  private formSubmitAttempt: boolean;
  private returnUrl: string;

  constructor(
    private readonly fb: FormBuilder,
    private readonly router: Router,
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      username: ['', Validators.email],
      password: ['', Validators.required]
    });

    // await this.authService.checkAuthenticated()
    // if (true) {
    //   await this.router.navigate(['tabs/tab1']);
    // }
  }

  async onSubmit() {
    this.loginInvalid = false;
    this.formSubmitAttempt = false;
    if (this.form.valid) {  // ok
      try {
        const username = this.form.get('username').value;
        const password = this.form.get('password').value;
        debugger;
        await this.authService.login(username, password);
      }
      catch (err) {
        this.loginInvalid = true;
      }
    } else {
      this.formSubmitAttempt = true;
    }
  }

  // onSubmit() {
  //   if ( this.firstFormGroup.valid && this.secondFormGroup.valid ) {
  //     const obj = {
  //       firstGroup: this.firstFormGroup.value,
  //       secondGroup: this.secondFormGroup.value
  //     };

  //     if (window.localStorage.getItem('impianti') === null) {
  //       window.localStorage.setItem('impianti', JSON.stringify([obj]));
  //     } else {
  //       window.localStorage.setItem('impianti', JSON.stringify([...JSON.parse(window.localStorage.getItem('impianti')), obj]));
  //     }
  //   }
  // }

}
