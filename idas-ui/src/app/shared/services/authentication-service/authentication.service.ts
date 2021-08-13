import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { BaseService } from '../base-service/base.service';
import { SharedConfiguration } from 'app/shared/configuration/shared-configuration';
import { ResponseResult } from 'app/shared/domain-models/http/response-result';
import { User } from 'app/shared/domain-models/user/user';
import { GeneralUtils } from 'app/shared/utilities/general-utils';
import { AuthenticationResult } from 'app/shared/domain-models/http/authentication-result';
import { environment } from 'environments/environment';
import { TestUsers } from '@test-data/@test-users/test-users';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService extends BaseService {
  private currentUserSubject: BehaviorSubject<User>;
  private currentAuthenticationMessageSubject: BehaviorSubject<string>;

  constructor(public httpClient: HttpClient) {
    super(httpClient);
    this.anchorName = `authentication`;
    this.setCurrentUserSubject();
    this.setCurrentAuthenticationMessageSubject();
  }

  setCurrentUserSubject() {
    this.currentUserSubject = new BehaviorSubject<any>(this.getLoggedInUser());
  }
  setCurrentAuthenticationMessageSubject() {
    this.currentAuthenticationMessageSubject = new BehaviorSubject<any>(null);
  }
  login(uid: string, password: string) {
    this.resourceType = `login`;
    return this.httpClient
      .put<any>(this.getEndpointUrl(), { uid, password }, this.getQueryParams())
      .pipe(
        map(
          (responseResult: ResponseResult) => {
            const user = responseResult.data as unknown as User;
            // const User = GeneralUtils.ToJson(responseResult.data) as User;
            if (!user || responseResult.hasError) {
              throw (
                responseResult.message ||
                `Authentication failed for User: ${uid}`
              );
            }
            return this.afterSuccessfulLogin(user, responseResult.message);
          },
          (error) => {
            throw error;
          }
        )
      );
  }
  afterSuccessfulLogin(user: User, message: string) {
    this.currentUserSubject.next(user);
    this.currentAuthenticationMessageSubject.next(message);
    localStorage.setItem(
      SharedConfiguration.userLocalStorageName,
      JSON.stringify(user)
    );
    this.currentUser = user;
    return new AuthenticationResult(user, message);
  }
  logout(user: User) {
    this.resourceType = `logout`;
    return this.httpClient
      .put<any>(
        this.getEndpointUrl(),
        user || this.getCurrentUser(),
        this.getQueryParams()
      )
      .pipe(
        map(
          (responseResult: ResponseResult) => {
            user = responseResult.data as unknown as User;
            // User = GeneralUtils.ToJson(responseResult.data) as User;
            if (!user || responseResult.hasError) {
              throw (
                responseResult.message ||
                `Unable to logout User: ${user.EmailAddress}`
              );
            } else if (user && this.hasUserSessionToken(user)) {
              // tslint:disable-next-line:no-string-throw
              throw `Unable to logout User: ${user.EmailAddress}`;
            }
            return this.afterSuccessfulLogout(user, responseResult.message);
          },
          (error) => {
            throw error;
          }
        )
      );
  }
  afterSuccessfulLogout(user: User, message: string) {
    this.currentUserSubject.next(null);
    this.currentAuthenticationMessageSubject.next(message);
    localStorage.removeItem(SharedConfiguration.userLocalStorageName);
    this.currentUser = null;
    return new AuthenticationResult(user, message);
  }
  public get currentUserValue(): User {
    return (this.currentUserSubject || { value: null }).value;
  }
  getCurrentUser(): Observable<User> {
    return this.currentUserSubject.asObservable();
  }
  getLoggedInUser(): User {
    // tslint:disable-next-line:max-line-length
    return (this.currentUserValue ||
      GeneralUtils.ToJson(
        localStorage.getItem(SharedConfiguration.userLocalStorageName)
      ) ||
      this.getTestUser()) as User;
  }
  hasUserSessionToken(user: User) {
    // tslint:disable-next-line:max-line-length
    return (
      user &&
      !(
        user.SessionToken === null ||
        user.SessionToken === undefined ||
        user.SessionToken.trim().length === 0
      )
    );
  }
  getCurrentAuthenticationMessage(): Observable<string> {
    return this.currentAuthenticationMessageSubject.asObservable();
  }
  public get currentAuthenticationMessage(): string {
    return (this.currentAuthenticationMessageSubject || { value: null }).value;
  }
  getTestUser() {
    switch (this.toLocaleLowerCaseTrim(environment.testAs || 'root')) {
      case 'root':
        return TestUsers.Root();
      case 'admin':
        return TestUsers.Admin();
      case 'employee-manager':
        return TestUsers.EmployeeManager();
      case 'employee-inactive':
        return TestUsers.EmployeeInActive();
      case 'employee-active':
        return TestUsers.EmployeeActive();
      case 'client':
        return TestUsers.ClientUser();
      case 'supplier':
        return TestUsers.Supplier();
      case 'general':
      default:
        return TestUsers.General();
    }
  }
}
