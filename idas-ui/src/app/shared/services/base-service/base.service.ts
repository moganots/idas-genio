import { HttpHeaders, HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SharedConfiguration } from 'app/shared/configuration/shared-configuration';
import { User } from 'app/shared/domain-models/user/user';
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
    this.currentUser = (this.currentUser || new User(1));
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
  getQueryParams(action: string, entity?: any) {
    const fromStringOptions = [
      this.getCurrentUserId(),
      `action=${action}`,
      this.getEntityId(entity)]
      .filter((fromStringOption) =>
        !(fromStringOption === null || fromStringOption === undefined)).join('&');
    return { params: new HttpParams({ fromString: fromStringOptions }) };
  }
  getCurrentUserId() {
    return (this.currentUser) ? `uid=${this.currentUser._id}` : 1;
  }
  getEntityId(entity: any) {
    return (entity) ? `id=${entity._id}` : null;
  }
  public columnNameWithoutId(column: any) {
    const columnName = (column.name || column).trim();
    return (columnName && columnName.toLocaleLowerCase().endsWith('id')) ? columnName.substring(0, columnName.length - 2) : columnName;
  }
  public toLocaleLowerCaseTrim(value: any){
    return (value || '').toString().toLocaleLowerCase().trim();
  }

  protected _handleError(error: HttpErrorResponse | any): Observable<any> {
    const errorMsg = error.message || 'Error: Unable to complete request.';
    console.error(errorMsg);
    return ObservableThrowError(errorMsg);
  }
}

