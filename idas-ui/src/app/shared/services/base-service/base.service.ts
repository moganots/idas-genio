import { HttpHeaders, HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SharedConfiguration } from 'app/shared/configuration/shared-configuration';
import { User } from 'app/shared/domain-models/user/user';
import { GeneralUtils } from 'app/shared/utilities/general-utils';
import { Observable, throwError as ObservableThrowError } from 'rxjs';

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
  public currentUser: User;

  constructor(public httpClient: HttpClient) {
    this.httpHeaders = new HttpHeaders();
    this.httpHeaders.set('Access-Control-Allow-Origin', '*');
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
  getQueryParams(predicate?: any) {
    const fromStringOptions = [
      this.getCurrentUserId(),
      this.getPredicateParams(predicate)]
      .filter((fromStringOption) =>
        !(fromStringOption === null || fromStringOption === undefined)).join('&');
    return { params: new HttpParams({ fromString: fromStringOptions }) };
  }
  getCurrentUserId() {
    return (this.currentUser && GeneralUtils.isNumber(this.currentUser._id)) ? `uid=${this.currentUser._id}` : null;
  }
  getPredicateParams(predicate?: any) {
    return (predicate) ? Object.keys(predicate).map((key) => `${key}=${predicate[key]}`).join('&') : null;
  }
  columnNameWithoutId(column: any) {
    const columnName = String(column.name || column).trim();
    return (this.toLocaleLowerCaseTrim(columnName).endsWith('id')) ? columnName.substring(0, columnName.length - 2) : columnName;
  }
  toLocaleLowerCaseTrim(value: any){
    return String(value || '').toLocaleLowerCase().trim();
  }
  protected _handleError(error: HttpErrorResponse | any): Observable<any> {
    // tslint:disable-next-line:max-line-length
    const errorMsg = [error.message || 'Error: Unable to complete request.', JSON.stringify(error)].filter((message) => !(message === null)).join(`\r\n`);
    return ObservableThrowError(errorMsg);
  }
}