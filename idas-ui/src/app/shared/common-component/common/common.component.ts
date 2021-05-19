import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { User } from 'app/shared/domain-models/user/user';
import { AuthenticationService } from 'app/shared/services/authentication-service/authentication.service';
import { GeneralUtil } from 'app/shared/utilities/general-util';
import { SharedConfiguration } from 'app/shared/configuration/shared-configuration';

@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.css']
})
export class CommonComponent {
  @Input() public companyName: string;
  @Input() public applicationName: string;
  @Input() public applicationHostName: string;
  public currentUser: User;

  constructor(public location: Location, public router: Router, public authenticationService: AuthenticationService) {
    this.companyName = SharedConfiguration.companyName;
    this.applicationName = SharedConfiguration.applicationName;
    this.applicationHostName = this.getApplicationHostName();
    this.getCurrentUser();

    console.log(`>>> Application Configuration(s) <<<`);
    console.log(`this.companyName=${this.companyName}`);
    console.log(`this.applicationName=${this.applicationName}`);
    console.log(`this.applicationHostName=${this.applicationHostName}`);

    console.log(`>>> Current User <<<`);
    console.log(this.currentUser);
    console.log(`this.isLoggedIn()=${this.isLoggedIn()}`);
  }

  getApplicationHostName(): string {
    const url = this.getApplicationUrl();
    let hostname;
    // find & remove protocol (http, ftp, etc.) and get hostname

    if (url.indexOf('//') > -1) {
        hostname = url.split('/')[2];
    } else {
        hostname = url.split('/')[0];
    }

    // find & remove port number
    hostname = hostname.split(':')[0];
    // find & remove "?"
    hostname = hostname.split('?')[0];

    return (hostname || '').toLocaleLowerCase().trim();
  }
  getApplicationUrl() {
    const angularRoute = this.location.path();
    const url = window.location.href;
    return url.replace(angularRoute, '');
  }
  getCurrentUser() {
    this.authenticationService
      .getCurrentUser()
      .subscribe((user) => {
        this.currentUser = user;
    });
  }
  isLoggedIn() {
      return this.isSessionTokenSet() && this.currentUser.IsActive && !this.currentUser.IsLocked;
  }
  isSessionTokenSet(){
    return this.currentUser && GeneralUtil.isNotEmptyString(this.currentUser.SessionToken);
  }
  isObjectSet(value: any) {
    return GeneralUtil.isObjectSet(value);
  }
  splitCamelCase(value: string): string {
    return ((value || '').trim().length === 0) ? '' : (value || '').trim().replace(/([a-z])([A-Z])/g, '$1 $2');
  }
  splitCamelCaseAndSpecialCharacters(value: string): string {
    return ((value || '').trim().length === 0) ? '' : (value || '').trim().replace(/([a-z])([A-Z])([_-])/g, '$1 $2 $3');
  }
  capitalizeFirstLetter(value: string): string {
    return ((value || '').trim().length === 0) ? '' : value.charAt(0).toLocaleUpperCase() + value.slice(1);
  }
  toggleGoHome() {
    this.router.navigate(['/']);
  }
  toggleLogout() {
    this.authenticationService
      .logout()
      .subscribe((user) => {
        this.currentUser = user;
        if (!this.isSessionTokenSet()) {
          // this.alertifyService.success('Logout: successful');
          localStorage.removeItem('eppUser');
          this.router.navigate(['/']);
        } else {
          // this.alertifyService.error('Logout: failed');
        }
      }, (error) => {
        console.error(error);
        // this.alertifyService.error('Logout: failed');
      });
  }

}
