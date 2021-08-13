import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
  AlertifyService
  , AuthenticationResult
  , AuthenticationService
  , CommonComponent,
  LookupValueService} from 'app/shared/shared.module';

@Component({
  selector: 'app-main-login',
  templateUrl: './app-main-login.component.html',
  styleUrls: ['./app-main-login.component.scss'],
  providers: [
    AlertifyService,
    AuthenticationService,
    LookupValueService
  ]
})
export class AppMainLoginComponent extends CommonComponent {
  formLogin: FormGroup;
  uid = '';
  password = '';
  isBusy: boolean;
  authError: boolean;
  todaysDate = Date.now();

  constructor(
    public router: Router,
    public alertifyService: AlertifyService,
    public authenticationService: AuthenticationService,
    public lookupValueService: LookupValueService,
    private formBuilder: FormBuilder
    ) {
    super(router, alertifyService, authenticationService, lookupValueService);
    this.formLogin = this.formBuilder.group({
      uid: new FormControl({value: this.uid, disabled: false}, Validators.required),
      password: new FormControl({value: this.password, disabled: false}, Validators.required)
    });
  }

  onUidChanged(): boolean {
    return this.formLogin.controls.uid.invalid && (this.formLogin.controls.uid.dirty || this.formLogin.controls.uid.touched);
  }
  onPasswordChanged(): boolean {
    return this.formLogin.controls.password.invalid && (this.formLogin.controls.password.dirty || this.formLogin.controls.password.touched);
  }
  async onClickLogin() {
    this.isBusy = true;
    this.authError = false;
    this.authenticationService
      .login(this.uid, this.password)
      .subscribe((response: AuthenticationResult) => {
        this.currentUser = response.User;
        this.authError = false;
        this.isBusy = false;
        this.currentAuthenticationMessage = response.Message;
        this.alertifyService.success(this.currentAuthenticationMessage);
        this.toggleGoToDashboard();
      }, error => {
        this.authError = true;
        this.isBusy = false;
        this.currentAuthenticationMessage = (error.error || error).message;
        this.alertifyService.error(this.currentAuthenticationMessage);
      }, () => { });
    this.sleep(60000);
  }
  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
