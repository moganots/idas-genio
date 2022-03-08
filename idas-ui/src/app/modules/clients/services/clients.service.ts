import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ContactDetailService } from 'app/modules/user/services/contact-detail-service/contact-detail.service';
import {
  AuthenticationService,
  Client,
  ContactDetail,
  DataService,
  GeneralUtils,
  LookupValue,
  LookupValueService,
} from 'app/shared/app-shared.module';
import { ClientConfiguration } from './client-configuration';

@Injectable({
  providedIn: 'root',
})
export class ClientsService extends DataService {
  lookupValues: LookupValue[] = [];
  contactDetails: ContactDetail[] = [];
  constructor(
    public httpClient: HttpClient,
    public authenticationService: AuthenticationService,
    public lookupValueService: LookupValueService,
    public contactDetailService: ContactDetailService
  ) {
    super(httpClient, authenticationService);
    this.entityName = ClientConfiguration.identifier;
    this.dataColumns = ClientConfiguration.dataColumns;
    this.lookupValueService
      .getAll<LookupValue>()
      // .toPromise()
      .subscribe((lookupValues) => {
        this.lookupValues = lookupValues;
      });
    this.contactDetailService
      .getAll<ContactDetail>()
      // .toPromise()
      .subscribe((contactDetails) => {
        this.contactDetails = contactDetails;
      });
  }
  mapValues(client: Client) {
    client.Salutation = this.lookupValues.find(
      (lookupValue) => lookupValue?._id === client?.SalutationId
    );
    client.IndustryType = this.lookupValues.find(
      (lookupValue) => lookupValue?._id === client?.IndustryTypeId
    );
    client.ContactDetail = this.contactDetails.find(
      (contactDetail) => contactDetail?.ClientId === client?._id
    );
    client.DisplayName = GeneralUtils.getClientDisplayName(client);
    return client;
  }
}
