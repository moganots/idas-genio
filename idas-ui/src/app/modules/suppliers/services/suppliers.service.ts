import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  AuthenticationService,
  DataService,
  GeneralUtils,
  LookupValue,
  LookupValueService,
  Supplier,
} from 'app/shared/shared.module';
import { SuppliersConfiguration } from '../suppliers-configuration';

@Injectable({
  providedIn: 'root',
})
export class SuppliersService extends DataService {
  lookupValues: LookupValue[] = [];
  constructor(
    public httpClient: HttpClient,
    public authenticationService: AuthenticationService,
    public lookupValueService: LookupValueService
  ) {
    super(httpClient, authenticationService);
    this.entityName = SuppliersConfiguration.identifier;
    this.lookupValueService
      .getAll<LookupValue>()
      .subscribe((lookupValues) => {
        this.lookupValues = lookupValues;
      });
  }
  mapValues(supplier: Supplier) {
    supplier.Salutation = this.lookupValues.find(
      (lv) => lv._id === supplier.SalutationId
    );
    supplier.IndustryType = this.lookupValues.find(
      (lv) => lv._id === supplier.IndustryTypeId
    );
    supplier.Bank = this.lookupValues.find((lv) => lv._id === supplier.BankId);
    supplier.DisplayName = GeneralUtils.getSupplierDisplayName(supplier);
    return supplier;
  }
}
