import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { TargheStoreService } from '../../services/targhe.localstore.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
  providers: [
    TargheStoreService
  ]
})
export class LoginPage implements OnInit {

  form: FormGroup;
  public loginInvalid: boolean;
  private formSubmitAttempt: boolean;  // TODO

  constructor(
    private readonly fb: FormBuilder,
    private readonly authService: AuthService,
    private readonly targheStore: TargheStoreService,
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      username: ['', Validators.email],
      password: ['', Validators.required]
    });
  }

  async onSubmit() {
    this.loginInvalid = false;
    this.formSubmitAttempt = false;

    if ( this.form.valid ) {  // ok
      try {
        const username = this.form.get('username').value;  // OR this.form.controls.username.value
        const password = this.form.get('password').value;

        await this.authService.login(username, password);

        // if (this.authService.isAuthenticated) {
        //  this.router.navigate(['/tabs/tab1']);
        //  this.router.navigateByUrl('tabs/tab1');
        //  await this.router.navigate(['tabs/tab1']);
        // }

        const TARGHE = 12;
        this.targheStore.setTotTarghe(TARGHE);
        this.targheStore.setUltimoMovimento(TARGHE);

      }
      catch (err) {
        this.loginInvalid = true;
      }
    } else {
      this.formSubmitAttempt = true;
    }
  }

}
