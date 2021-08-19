import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  AuthenticationService,
  Client,
  DataService,
  GeneralUtils,
  LookupValue,
  LookupValueService,
} from 'app/shared/shared.module';
import { catchError, map } from 'rxjs/operators';
import { ClientsConfiguration } from '../clients-configuration';

@Injectable({
  providedIn: 'root',
})
export class ClientsService extends DataService {
  lookupValues: LookupValue[] = [];
  constructor(
    public httpClient: HttpClient,
    public authenticationService: AuthenticationService,
    public lookupValueService: LookupValueService
  ) {
    super(httpClient, authenticationService);
    this.entityName = ClientsConfiguration.identifier;
    this.lookupValueService
      .getAll<LookupValue>()
      .toPromise().then((lookupValues) => {
        this.lookupValues = lookupValues;
      });
  }
  mapValues(client: Client) {
    client.Salutation = this.lookupValues.find(
      (lv) => lv._id === client.SalutationId
    );
    client.IndustryType = this.lookupValues.find(
      (lv) => lv._id === client.IndustryTypeId
    );
    client.DisplayName = GeneralUtils.getClientDisplayName(client);
    return client;
  }
}
