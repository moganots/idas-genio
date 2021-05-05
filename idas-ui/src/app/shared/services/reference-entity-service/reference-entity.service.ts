import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from '../base-service/base.service';

@Injectable({
  providedIn: 'root'
})
export class ReferenceEntityService extends BaseService {

  constructor(public httpClient: HttpClient) {
    super(httpClient);
  }

}
