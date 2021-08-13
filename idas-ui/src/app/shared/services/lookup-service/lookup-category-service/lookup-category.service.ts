import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LookupCategory } from 'app/shared/domain-models/lookup-models/lookup-category';
import { AuthenticationService } from '../../authentication-service/authentication.service';
import { DataService } from '../../data-service/data.service';
import { LookupCategoryConfiguration } from './lookup-category-configuration';

@Injectable({
  providedIn: 'root'
})
export class LookupCategoryService extends DataService {

  constructor(public httpClient: HttpClient, public authenticationService: AuthenticationService) {
    super(httpClient, authenticationService);
    this.entityName = LookupCategoryConfiguration.identifier;
  }
  mapValues(category: LookupCategory) {
    return category;
  }
}
