import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LookupCategory } from 'app/shared/domain-models/lookups/lookup-category';
import { AuthenticationService } from 'app/shared/services/authentication-service/authentication.service';
import { DataService } from 'app/shared/services/data-service/data.service';
import { LookupCategoryConfiguration } from './lookup-category-configuration';

@Injectable({
  providedIn: 'root'
})
export class LookupCategoryService extends DataService {

  constructor(public httpClient: HttpClient, public authenticationService: AuthenticationService) {
    super(httpClient, authenticationService);
    this.entityName = LookupCategoryConfiguration.identifier;
    this.dataColumns = LookupCategoryConfiguration.dataColumns;
  }
  mapValues(category: LookupCategory) {
    return category;
  }
}
