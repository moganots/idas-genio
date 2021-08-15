import { BaseModel } from '../base/base-model';
import { Client } from '../client/client';
import { Employee } from '../employee/employee';
import { LookupValue } from '../lookups/lookup-value';
import { Supplier } from '../supplier/supplier';
export class ContactDetail extends BaseModel {
  EmployeeId: number;
  ClientId: number;
  SupplierId: number;
  RecipientsName: string;
  EmailAddress: string;
  HomeTelephoneNumber: number;
  OfficeTelephoneNumber: number;
  MobileTelephoneNumber: number;
  Website: string;
  AddressLine1: string;
  AddressLine2: string;
  City: string;
  ProvinceId: number;
  PostalCode: string;
  CountryId: number;
  PreferredLanguageId: number;
  UseEmailAddress: boolean;
  UseHomeTelephoneNumber: boolean;
  UseOfficeTelephoneNumber: boolean;
  UseMobileTelephoneNumber: boolean;
  UsePostalAddress: boolean;
  Employee: Employee;
  Client: Client;
  Supplier: Supplier;
  Province: LookupValue;
  Country: LookupValue;
  PreferredLanguage: LookupValue;

  constructor(
    id: number,
    IsActive: boolean,
    EmployeeId?: number,
    ClientId?: number,
    SupplierId?: number,
    RecipientsName?: string,
    EmailAddress?: string,
    HomeTelephoneNumber?: number,
    OfficeTelephoneNumber?: number,
    MobileTelephoneNumber?: number,
    Website?: string,
    AddressLine1?: string,
    AddressLine2?: string,
    City?: string,
    ProvinceId?: number,
    PostalCode?: string,
    CountryId?: number,
    PreferredLanguageId?: number,
    UseEmailAddress?: boolean,
    UseHomeTelephoneNumber?: boolean,
    UseOfficeTelephoneNumber?: boolean,
    UseMobileTelephoneNumber?: boolean,
    UsePostalAddress?: boolean,
    CreatedBy?: number,
    DateCreated?: Date,
    ModifiedBy?: number,
    DateModified?: Date){
    super(id, IsActive, null, null, null, CreatedBy, DateCreated, ModifiedBy, DateModified);
      this.EmployeeId = EmployeeId;
      this.ClientId = ClientId;
      this.SupplierId = SupplierId;
      this.RecipientsName = RecipientsName;
      this.EmailAddress = EmailAddress;
      this.HomeTelephoneNumber = HomeTelephoneNumber;
      this.OfficeTelephoneNumber = OfficeTelephoneNumber;
      this.MobileTelephoneNumber = MobileTelephoneNumber;
      this.Website = Website;
      this.AddressLine1 = AddressLine1;
      this.AddressLine2 = AddressLine2;
      this.City = City;
      this.ProvinceId = ProvinceId;
      this.PostalCode = PostalCode;
      this.CountryId = CountryId;
      this.PreferredLanguageId = PreferredLanguageId;
      this.UseEmailAddress = UseEmailAddress;
      this.UseHomeTelephoneNumber = UseHomeTelephoneNumber;
      this.UseOfficeTelephoneNumber = UseOfficeTelephoneNumber;
      this.UseMobileTelephoneNumber = UseMobileTelephoneNumber;
      this.UsePostalAddress = UsePostalAddress;
    }
}