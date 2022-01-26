import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { BaseService } from '../base-service/base.service';
import { SharedConfiguration } from 'app/shared/configuration/shared-configuration';
import { ResponseResult } from 'app/shared/domain-models/http/response-result';
import { User } from 'app/shared/domain-models/user/user';
import { AuthenticationResult } from 'app/shared/domain-models/http/authentication-result';
import { GeneralUtils } from 'app/shared/utilities/general-utils';
import { AuthenticationUtils } from 'app/shared/utilities/authentication-utils';

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
  setCurrentUserValue(user: User) {
    this.currentUserSubject.next(user || this.getLoggedInUser());
  }
  public get getCurrentUser(): User {
    return (this.currentUserSubject || { value: null }).value;
  }
  public get getCurrentUserId(): number {
    return (this.getCurrentUser || { _id: null })._id;
  }
  getLoggedInUser(): User {
    // tslint:disable-next-line:max-line-length
    return (this.getCurrentUser ||
      GeneralUtils.ToJson(
        localStorage.getItem(SharedConfiguration.userLocalStorageName)
      ) || AuthenticationUtils.getTestUser()) as User;
  }
  setCurrentAuthenticationMessageSubject() {
    this.currentAuthenticationMessageSubject = new BehaviorSubject<any>(null);
  }
  login(uid: string, password: string) {
    this.resourceType = `login`;
    return this.httpClient
      .put<any>(this.getEndpointUrl(), { uid, password })
      .pipe(
        map(
          (responseResult: ResponseResult) => {
            const user = responseResult.data as unknown as User;
            // const User = GeneralUtils.ToJson(responseResult.data) as User;
            if (!user || responseResult.hasError || !AuthenticationUtils.hasUserSessionToken(user)) {
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
    this.setCurrentUserValue(user);
    this.currentAuthenticationMessageSubject.next(message);
    localStorage.setItem(
      SharedConfiguration.userLocalStorageName,
      JSON.stringify(user)
    );
    return new AuthenticationResult(user, message);
  }
  logout(user: User) {
    this.resourceType = `logout`;
    return this.httpClient
      .put<any>(
        this.getEndpointUrl(),
        user || this.getCurrentUser
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
            } else if (AuthenticationUtils.hasUserSessionToken(user)) {
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
    this.setCurrentUserValue(null);
    this.currentAuthenticationMessageSubject.next(message);
    localStorage.removeItem(SharedConfiguration.userLocalStorageName);
    return new AuthenticationResult(user, message);
  }
  getCurrentAuthenticationMessage(): Observable<string> {
    return this.currentAuthenticationMessageSubject.asObservable();
  }
  public get currentAuthenticationMessage(): string {
    return (this.currentAuthenticationMessageSubject || { value: null }).value;
  }
}
