import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService, CommonComponent, User } from 'app/shared/shared.module';

@Component({
  selector: 'app-main-login',
  templateUrl: './app-main-login.component.html',
  styleUrls: ['./app-main-login.component.scss']
})
export class AppMainLoginComponent extends CommonComponent {
  formLogin: FormGroup;
  uid = '';
  password = '';
  isBusy: boolean;
  authError: boolean;
  authErrorMessage: string;
  currentUser: User;

  constructor(
    public location: Location,
    public router: Router,
    public authenticationService: AuthenticationService,
    private formBuilder: FormBuilder
    ) {
    super(location, router, authenticationService);
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

  onClickLogin() {

  }

}
