import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthenticationService, ContactDetail, DataService, LookupValue, LookupValueService, User } from 'app/shared/app-shared.module';
import { ContactDetailConfiguration } from './contact-detail-configuration';

@Injectable({
  providedIn: 'root'
})
export class ContactDetailService extends DataService {
  lookupValues: LookupValue[] = [];
  users: User[] = [];
  constructor(
    public httpClient: HttpClient,
    public authenticationService: AuthenticationService,
    public lookupValueService: LookupValueService
  ) {
    super(httpClient, authenticationService);
    this.entityName = ContactDetailConfiguration.identifier;
    this.dataColumns = ContactDetailConfiguration.dataColumns;
    this.lookupValueService.getAll<LookupValue>().toPromise().then((lookupValues) => {
      this.lookupValues = lookupValues;
    });
  }
  mapValues(contactDetail: ContactDetail) {
    contactDetail.Province = this.lookupValues.find((lookupValue) => lookupValue?._id === contactDetail?.ProvinceId);
    contactDetail.Country = this.lookupValues.find((lookupValue) => lookupValue?._id === contactDetail?.CountryId);
    contactDetail.PreferredLanguage = this.lookupValues.find((lookupValue) => lookupValue?._id === contactDetail?.PreferredLanguageId);
    return contactDetail;
  }
}
