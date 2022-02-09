import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { BaseService } from '../base-service/base.service';
import { ResponseResult } from 'app/shared/domain-models/http/response-result';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../authentication-service/authentication.service';
import { GeneralUtils } from 'app/shared/utilities/general-utils';
import { DataColumn } from 'app/shared/domain-models/data-column';

@Injectable({
  providedIn: 'root',
})
export class DataService extends BaseService {
  @Input() public dataColumns: DataColumn[];
  constructor(
    public httpClient: HttpClient,
    public authenticationService: AuthenticationService
  ) {
    super(httpClient);
  }

  create<T>(entity: T): Observable<T> {
    this.resourceType = `create`;
    return this.httpClient
      .put(this.getEndpointUrl(), entity, this.getQueryParams())
      .pipe(
        map(
          (responseResult: ResponseResult) =>
            this.mapValues(responseResult.data as unknown as T)
        ),
        catchError((error) => this._handleError(error))
      );
  }
  getAll<T>(): Observable<T[]> {
    this.resourceType = `getAll`;
    return this.httpClient
      .get(this.getEndpointUrl(), this.getQueryParams())
      .pipe(
        map(
          (responseResult: ResponseResult) =>
            (responseResult.data || [] as unknown as T[]).map(value => this.mapValues(value))
        ),
        catchError((error) => this._handleError(error))
      );
  }
  getBy<T>(predicate: any): Observable<T[]> {
    this.resourceType = `getBy`;
    if (
      Object.values(predicate).every(
        (value) => value === undefined || value === null
      )
    ) {
      return new Observable<T[]>();
    }
    return this.httpClient
      .get(this.getEndpointUrl(), this.getQueryParams(predicate))
      .pipe(
        map(
          (responseResult: ResponseResult) =>
            (responseResult.data || [] as unknown as T[]).map(value => this.mapValues(value))
        ),
        catchError((error) => this._handleError(error))
      );
  }
  getFirstBy<T>(predicate: any): Observable<T> {
    return this.getBy<T>(predicate).pipe(
      map(
        (values) => {
          return (values || []).find(value => predicate);
        },
        catchError((error) => this._handleError(error))
      )
    );
  }
  getById<T>(entityId: number): Observable<T[]> {
    this.resourceType = `getById`;
    if (entityId === undefined || entityId === null || entityId <= 0) {
      return new Observable<T[]>();
    }
    return this.httpClient
      .get(this.getEndpointUrl(), this.getQueryParams({ id: entityId }))
      .pipe(
        map(
          (responseResult: ResponseResult) =>
            responseResult.data || [] as unknown as T[]
        ),
        catchError((error) => this._handleError(error))
      );
  }
  getFirstById<T>(id: number) {
    return this.getById<T>(id).pipe(
      map(
        (values) => {
          return (values || [])[0];
        },
        catchError((error) => this._handleError(error))
      )
    );
  }
  update<T>(entity: T): Observable<T> {
    this.resourceType = `update`;
    return this.httpClient
      .put(this.getEndpointUrl(), entity, this.getQueryParams())
      .pipe(
        map(
          (responseResult: ResponseResult) =>
            this.mapValues(responseResult.data as unknown as T)
        ),
        catchError((error) => this._handleError(error))
      );
  }
  delete<T>(entity: T): Observable<T> {
    this.resourceType = `delete`;
    return this.httpClient
      .put(this.getEndpointUrl(), entity, this.getQueryParams())
      .pipe(
        map(
          (responseResult: ResponseResult) =>
            this.mapValues(responseResult.data as unknown as T)
        ),
        catchError((error) => this._handleError(error))
      );
  }
  mapValues(value: any): any {
    return value;
  }
  CreateUpdateDelete<T>(action: string, entity: T) {
    if (this.isCreate(action)) return this.create<T>(entity);
    if (this.isUpdate(action)) return this.update<T>(entity);
    if (this.isDelete(action)) return this.delete<T>(entity);
  }
  isCreate(action: string) {
    return ['add', 'create', 'new'].includes(
      GeneralUtils.toLocalLowerCaseWithTrim(action)
    );
  }
  isUpdate(action: string) {
    return ['change', 'edit', 'update'].includes(
      GeneralUtils.toLocalLowerCaseWithTrim(action)
    );
  }
  isDelete(action: string) {
    return [`archive`, 'delete', 'remove', 'deactivate'].includes(
      GeneralUtils.toLocalLowerCaseWithTrim(action)
    );
  }
  getQueryParams(predicate?: any) {
    const fromStringOptions = [
      GeneralUtils.StringNullIf(`uid=${this.authenticationService.getCurrentUserId}`),
      GeneralUtils.getPredicateParams(predicate)]
      .filter((fromStringOption) =>
        !(fromStringOption === null || fromStringOption === undefined)).join('&');
    return { params: new HttpParams({ fromString: fromStringOptions }) };
  }
}
