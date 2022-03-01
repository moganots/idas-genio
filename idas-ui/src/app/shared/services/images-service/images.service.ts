import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseResult } from 'app/shared/domain-models/http/response-result';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AuthenticationService } from '../authentication-service/authentication.service';
import { DataService } from '../data-service/data.service';
import { ImagesConfiguration } from './images-configuration';

@Injectable({
  providedIn: 'root',
})
export class ImagesService extends DataService {
  constructor(
    public httpClient: HttpClient,
    public authenticationService: AuthenticationService
  ) {
    super(httpClient, authenticationService);
    this.entityName = ImagesConfiguration.identifier;
    this.dataColumns = ImagesConfiguration.dataColumns;
  }
  getImagesAvatars<T>(): Observable<T[]> {
    this.resourceType = `getImagesAvatars`;
    return this.httpClient
      .get(this.getEndpointUrl(), this.getQueryParams())
      .pipe(
        map((responseResult: ResponseResult) =>
          (responseResult.data || ([] as unknown as T[])).map((value) =>
            this.mapValues(value)
          )
        ),
        catchError((error) => this._handleError(error))
      );
  }
  getImagesBanks<T>(): Observable<T[]> {
    this.resourceType = `getImagesBanks`;
    return this.httpClient
      .get(this.getEndpointUrl(), this.getQueryParams())
      .pipe(
        map((responseResult: ResponseResult) =>
          (responseResult.data || ([] as unknown as T[])).map((value) =>
            this.mapValues(value)
          )
        ),
        catchError((error) => this._handleError(error))
      );
  }
  getImagesBanksIcon<T>(): Observable<T[]> {
    this.resourceType = `getImagesBanksIcon`;
    return this.httpClient
      .get(this.getEndpointUrl(), this.getQueryParams())
      .pipe(
        map((responseResult: ResponseResult) =>
          (responseResult.data || ([] as unknown as T[])).map((value) =>
            this.mapValues(value)
          )
        ),
        catchError((error) => this._handleError(error))
      );
  }
  getImagesBanksMain<T>(): Observable<T[]> {
    this.resourceType = `getImagesBanksMain`;
    return this.httpClient
      .get(this.getEndpointUrl(), this.getQueryParams())
      .pipe(
        map((responseResult: ResponseResult) =>
          (responseResult.data || ([] as unknown as T[])).map((value) =>
            this.mapValues(value)
          )
        ),
        catchError((error) => this._handleError(error))
      );
  }
  getImagesFileTypes<T>(): Observable<T[]> {
    this.resourceType = `getImagesFileTypes`;
    return this.httpClient
      .get(this.getEndpointUrl(), this.getQueryParams())
      .pipe(
        map((responseResult: ResponseResult) =>
          (responseResult.data || ([] as unknown as T[])).map((value) =>
            this.mapValues(value)
          )
        ),
        catchError((error) => this._handleError(error))
      );
  }
  getImagesIcons<T>(): Observable<T[]> {
    this.resourceType = `getImagesIcons`;
    return this.httpClient
      .get(this.getEndpointUrl(), this.getQueryParams())
      .pipe(
        map((responseResult: ResponseResult) =>
          (responseResult.data || ([] as unknown as T[])).map((value) =>
            this.mapValues(value)
          )
        ),
        catchError((error) => this._handleError(error))
      );
  }
  getImagesIdas<T>(): Observable<T[]> {
    this.resourceType = `getImagesIdas`;
    return this.httpClient
      .get(this.getEndpointUrl(), this.getQueryParams())
      .pipe(
        map((responseResult: ResponseResult) =>
          (responseResult.data || ([] as unknown as T[])).map((value) =>
            this.mapValues(value)
          )
        ),
        catchError((error) => this._handleError(error))
      );
  }
}
