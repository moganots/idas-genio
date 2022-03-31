import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'app/shared/services/authentication-service/authentication.service';
import { GeneralUtils } from 'app/shared/utilities/general-utils';
import { SharedConfiguration } from 'app/shared/configuration/shared-configuration';
import { AlertifyService } from 'app/shared/services/alertify-service/alertify.service';
import { LookupValue } from 'app/shared/domain-models/lookups/lookup-value';
import { User } from 'app/shared/domain-models/user/user';
import { first } from 'rxjs/operators';
import { LookupValueService } from 'app/shared/services/lookup-value-service/lookup-value.service';
import { DefaultObjectUtil } from 'app/shared/utilities/default-object-util';
import { RouteInfo } from 'app/shared/types/interfaces/route-info';
import { AuthenticationUtils } from 'app/shared/utilities/authentication-utils';
import { AuthenticationResult } from 'app/shared/domain-models/http/authentication-result';

@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.scss'],
  providers: [AlertifyService, AuthenticationService, LookupValueService],
})
export class CommonComponent {
  @Input() public companyName: string;
  @Input() public applicationName: string;
  @Input() public applicationHostName: string;
  formGroup: FormGroup;
  public lookupValues: LookupValue[] = [];
  public currentUser: User;
  public currentUserType: LookupValue;
  public currentAuthenticationMessage: string;
  public menuItems: RouteInfo[] = [];

  constructor(
    public router: Router,
    public alertifyService: AlertifyService,
    public authenticationService: AuthenticationService,
    public lookupValueService: LookupValueService
  ) {
    this.companyName = SharedConfiguration.companyName;
    this.applicationName = SharedConfiguration.applicationName;
    this.lookupValueService
      .getAll<LookupValue>()
      // .toPromise()
      .subscribe((values) => {
        this.lookupValues = values;
      });
    this.currentUser = this.authenticationService.getCurrentUser;
    this.setCurrentUserMenuItems();
    this.getCurrentAuthenticationMessage();
  }
  setCurrentUserMenuItems() {
    this.menuItems = this.currentUser?.MenuItems?.map(
      (menuItem) =>
      ({
        path: menuItem.Path,
        title: menuItem.Title,
        icon: menuItem.Icon,
        class: menuItem.CssClass,
      } as unknown as RouteInfo)
    );
  }
  getCurrentAuthenticationMessage() {
    this.authenticationService
      .getCurrentAuthenticationMessage()
      .pipe(first())
      .subscribe((authenticationMessage: string) => {
        this.currentAuthenticationMessage = authenticationMessage;
      });
  }
  isLoggedIn() {
    return AuthenticationUtils.isLoggedIn(this.currentUser);
  }
  isObjectSet(value: any) {
    return GeneralUtils.isObjectSet(value);
  }
  isNotEmptyString(value: string) {
    return GeneralUtils.isNotEmptyString(value);
  }
  splitCamelCase(value: string): string {
    return (value || ``).trim().length === 0
      ? ``
      : (value || ``).trim().replace(/([a-z])([A-Z])/g, '$1 $2');
  }
  splitCamelCaseAndSpecialCharacters(value: string): string {
    return (value || ``).trim().length === 0
      ? ``
      : (value || ``).trim().replace(/([a-z])([A-Z])([_-])/g, '$1 $2 $3');
  }
  capitalizeFirstLetter(value: string): string {
    return (value || ``).trim().length === 0
      ? ``
      : value.charAt(0).toLocaleUpperCase() + value.slice(1);
  }
  toLocaleLowerCase(value: any) {
    return String(value || ``).toLocaleLowerCase();
  }
  toLocaleLowerCaseTrim(value: any) {
    return this.toLocaleLowerCase(value).trim();
  }
  getLookupValueById(id?: number) {
    return (
      this.lookupValues.find((lv) => lv._id === id) ||
      DefaultObjectUtil.noLookupValue()
    );
  }
  getLookupValueCategoryAsCssClassById(id?: number) {
    return this.getLookupValueById(id)?.CssClassCategory;
  }
  getLookupValueAsCssClassById(id?: number) {
    return this.getLookupValueById(id)?.CssClass;
  }
  getLookupValueIconById(id?: number) {
    return this.getLookupValueById(id)?.Icon;
  }
  getLookupValueImageById(id?: number) {
    return this.getLookupValueById(id)?.Image;
  }
  getLookupValueAsTitleById(id?: number) {
    return this.getLookupValueById(id)?.Value;
  }
  hasItems(items: any[]) {
    return GeneralUtils.hasItems(items);
  }
  appendLeadingZero(value: number) {
    return GeneralUtils.appendLeadingZero(value);
  }
  getHourMinuteFromDate(date: Date): string {
    const hours = this.appendLeadingZero(date.getHours() - 2);
    const minutes = this.appendLeadingZero(date.getMinutes());
    return `${hours}:${minutes}`;
  }
  removeHashtag(value: any): string {
    return String(value).replace('#', '').trim();
  }
  toggleGoHome() {
    this.router.navigate(['/']);
  }
  toggleGoToDashboard() {
    this.router.navigate(['dashboard']);
  }
  toggleGoToLogin() {
    this.router.navigate(['login']);
  }
  toggleLogout() {
    this.authenticationService.logout(this.currentUser).subscribe(
      (response: AuthenticationResult) => {
        this.currentUser = response.User;
        this.currentAuthenticationMessage = response.Message;
        this.alertifyService.success(this.currentAuthenticationMessage);
        this.router.navigate(['login']);
      },
      (error) => {
        this.currentAuthenticationMessage = (error.error || error).message;
        this.alertifyService.error(this.currentAuthenticationMessage);
      },
      () => { }
    );
  }
}
