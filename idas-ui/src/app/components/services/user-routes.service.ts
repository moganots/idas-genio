import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from 'app/shared/app-shared.module';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserRoutesService extends BaseService {

  constructor(httpClient: HttpClient) {
    super(httpClient);
    this.anchorName = `user`;
  }

  getUserMenuItems(): Observable<any> {
    this.entityName = `menu-item`;
    this.resourceType = `getAll`;
    return this.httpClient
      .get(`${this.getEndpointUrl()}`, this.getQueryParams())
      .pipe(map((results: any) => results.data), catchError((error) => this._handleError(error)));
  }

}
