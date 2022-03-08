import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ContactDetailService } from 'app/modules/user/services/contact-detail-service/contact-detail.service';
import {
  AuthenticationService,
  ContactDetail,
  DataService,
  GeneralUtils,
  LookupValue,
  LookupValueService,
  Supplier,
} from 'app/shared/app-shared.module';
import { SupplierConfiguration } from './supplier-configuration';

@Injectable({
  providedIn: 'root',
})
export class SuppliersService extends DataService {
  lookupValues: LookupValue[] = [];
  contactDetails: ContactDetail[] = [];
  constructor(
    public httpClient: HttpClient,
    public authenticationService: AuthenticationService,
    public lookupValueService: LookupValueService,
    public contactDetailService: ContactDetailService
  ) {
    super(httpClient, authenticationService);
    this.entityName = SupplierConfiguration.identifier;
    this.dataColumns = SupplierConfiguration.dataColumns;
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
  mapValues(supplier: Supplier) {
    supplier.Salutation = this.lookupValues.find(
      (lookupValue) => lookupValue?._id === supplier?.SalutationId
    );
    supplier.IndustryType = this.lookupValues.find(
      (lookupValue) => lookupValue?._id === supplier?.IndustryTypeId
    );
    supplier.Bank = this.lookupValues.find(
      (lookupValue) => lookupValue?._id === supplier?.BankId
    );
    supplier.ContactDetail = this.contactDetails.find(
      (contactDetail) => contactDetail?.SupplierId === supplier?._id
    );
    supplier.DisplayName = GeneralUtils.getSupplierDisplayName(supplier);
    return supplier;
  }
}
