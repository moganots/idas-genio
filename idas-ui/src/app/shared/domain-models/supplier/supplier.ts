import { BaseModel } from '../base/base-model';
import { LookupValue } from '../lookup-models/lookup-value';
export class Supplier extends BaseModel {
  SalutationId: number;
  Surname: string;
  CompanyName: string;
  IndustryTypeId: number;
  IdNumber: number;
  RegistrationNumber: string;
  VATNumber: number;
  BankId: number;
  AccountNumber: number;
  Salutation: LookupValue;
  IndustryType: LookupValue;
  Bank: LookupValue;

  constructor(
    id: number,
    IsActive: boolean,
    SalutationId?: number,
    Name?: string,
    Surname?: string,
    CompanyName?: string,
    IndustryTypeId?: number,
    IdNumber?: number,
    RegistrationNumber?: string,
    VATNumber?: number,
    BankId?: number,
    AccountNumber?: number,
    CreatedBy?: number,
    DateCreated?: Date,
    ModifiedBy?: number,
    DateModified?: Date){
    super(id, IsActive, null, Name, null, CreatedBy, DateCreated, ModifiedBy, DateModified);
      this.SalutationId = SalutationId;
      this.Surname = Surname;
      this.CompanyName = CompanyName;
      this.IndustryTypeId = IndustryTypeId;
      this.IdNumber = IdNumber;
      this.RegistrationNumber = RegistrationNumber;
      this.VATNumber = VATNumber;
      this.BankId = BankId;
      this.AccountNumber = AccountNumber;
    }
}
