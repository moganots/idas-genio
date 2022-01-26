import { HttpHeaders, HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TestUsers } from '@test-data/@test-users/test-users';
import { SharedConfiguration } from 'app/shared/configuration/shared-configuration';
import { User } from 'app/shared/domain-models/user/user';
import { GeneralUtils } from 'app/shared/utilities/general-utils';
import { environment } from 'environments/environment';
import { BehaviorSubject, Observable, throwError as ObservableThrowError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  public httpHeaders: HttpHeaders;
  public anchorName: string;
  public serviceName: string;
  public actionName: string;
  public entityName: string;
  public childEntityName: string;
  public resourceType: string;

  constructor(public httpClient: HttpClient) {
    this.httpHeaders = new HttpHeaders();
    this.httpHeaders.set('Access-Control-Allow-Origin', 'origin-list');
  }
  getEndpointUrl(): string {
    return `${SharedConfiguration.baseApi}${[
      this.anchorName,
      this.serviceName,
      this.actionName,
      this.entityName,
      this.childEntityName,
      this.resourceType
    ].filter((uriComponent) => !(uriComponent === null || uriComponent === undefined || uriComponent.trim().length === 0))
      .map((uriComponent) => encodeURIComponent(uriComponent))
      .join('/')}`;
  }
  protected _handleError(error: HttpErrorResponse | any): Observable<any> {
    // tslint:disable-next-line:max-line-length
    const errorMsg = [error.message || 'Error: Unable to complete request.', JSON.stringify(error)].filter((message) => !(message === null)).join(`\r\n`);
    return ObservableThrowError(errorMsg);
  }
}