import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataService } from '../../data-service/data.service';

@Injectable({
  providedIn: 'root'
})
export class LookupCategoryService extends DataService {

  constructor(public httpClient: HttpClient) {
    super(httpClient);
    this.entityName = 'lookupcategory';
  }

}
