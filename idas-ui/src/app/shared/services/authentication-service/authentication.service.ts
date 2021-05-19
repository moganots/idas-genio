import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SharedConfiguration } from 'app/shared/configuration/shared-configuration';
import { UserType } from 'app/shared/domain-models/lookup-models/user-type';
import { User } from 'app/shared/domain-models/user/user';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { BaseService } from '../base-service/base.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService extends BaseService {
  private currentUserSubject: BehaviorSubject<User>;
  private loginMessageSubject: BehaviorSubject<any>;

  constructor(public httpClient: HttpClient) {
    super(httpClient);
    this.anchorName = `authentication`;
    this.setCurrentUserSubject();
    this.loginMessageSubject = new BehaviorSubject<any>(null);
  }

  private setCurrentUserSubject() {
    this.currentUserSubject = new BehaviorSubject<User>(this.getLoggedInUser());
  }

  public get currentUserValue(): User {
    return (this.currentUserSubject || {value: null}).value;
  }

  login(uid: string, password: string) {
    this.resourceType = `login`;
    return this.httpClient
      .put<any>(this.getEndpointUrl(), ({uid, password}))
      .pipe(
        map((result) => {
          if (result && result.hasError) {
            throw result.message;
          } else if (result && result.data) {
            return this.afterSuccessfulLogin((result.data as User));
          }
          throw new Error(`Login: failed for - ${uid}`);
        }, (error) => { this._handleError(error); }),
        catchError(error => this._handleError(error))
      );
  }

  afterSuccessfulLogin(user: User) {
    localStorage.setItem(SharedConfiguration.userLocalStorageName, JSON.stringify(user));
    this.currentUserSubject.next(this.getLoggedInUser());
    this.loginMessageSubject.next(null);
    return this.currentUserValue;
  }

  getCurrentUser(): Observable<User> {
    return this.currentUserSubject.asObservable();
  }

  logout(): Observable<User> {
    this.resourceType = `logout`;
    return this.httpClient
      .put<any>(this.getEndpointUrl(), this.currentUserValue)
      .pipe(
        map((result) => {
          const user = (result.data as User);
          if (!this.hasUserSessionToken(user)) {
            return this.afterSuccessfulLogout(user);
          } else {
            throw new Error(`Logout: failed for - ${this.currentUserValue.EmailAddress}`);
          }
        }, (error) => { this._handleError(error); }),
        catchError(error => this._handleError(error))
      );
  }

  afterSuccessfulLogout(user: User) {
    localStorage.removeItem(SharedConfiguration.userLocalStorageName);
    this.currentUserSubject.next(null);
    return user;
  }

  hasUserSessionToken(user: User) {
    return user && !(user.SessionToken === null || user.SessionToken === undefined || user.SessionToken.trim().length === 0);
  }

  getMessage() {
    return this.loginMessageSubject.asObservable();
  }

  getLoggedInUser(): User {
    return !environment.production ? this.getTestUser() : (localStorage.getItem(SharedConfiguration.userLocalStorageName) as unknown as User);
  }

  getTestUser(){
    return {
      _id:1,
      Code:null,
      Name:null,
      Description:null,
      EmployeeClientSupplierId:1,
      UserType: new UserType(471, null, null, null, null, null, null),
      EmailAddress:'root@genio.idas.co.za',
      Password:'root@123',
      IsAdmin:true,
      IsLocked:false,
      DateLastLoggedIn: new Date('2021-04-08T20:32:50.090'),
      SessionToken:null, //'854330CF-D4C5-458B-A31A-FB7876361640',
      IsActive:true,
      CreatedBy: new User(1),
      DateCreated: new Date('2021-04-08T20:32:50.090'),
      ModifiedBy:null,
      DateModified:null
    };
  }
}
