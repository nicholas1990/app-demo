import { Component, OnInit, ChangeDetectorRef, NgZone } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { TargheService } from '../../services/targhe.service';
import { MovimentiTarghe } from '../../enums/targhe.enum';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
  // providers: [
  //   TargheService
  // ]
})
export class LoginPage implements OnInit {

  form: FormGroup;
  public loginInvalid: boolean;
  private formSubmitAttempt: boolean;  // TODO

  constructor(
    private readonly fb: FormBuilder,
    private readonly authService: AuthService,
    private readonly targheService: TargheService,
    private ref: ChangeDetectorRef,
    private ngZone: NgZone
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      username: ['', Validators.email],
      password: ['', Validators.required]
    });

    // this.ref.detach();

    // this.targheService.totaleTarghe$.subscribe((tot: number) => {
    //   console.log(tot);
    //   this.ref.detectChanges();
    // });
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

        this.targheService.setTarghe(MovimentiTarghe.ADD_12, true);

        // this.targheService.totaleTarghe$.subscribe((tot: number) => {
        //   console.log(tot);
        //   this.ref.detectChanges();
        // });

      }
      catch (err) {
        this.loginInvalid = true;
      }
    } else {
      this.formSubmitAttempt = true;
    }
  }

}
