import { BaseModel } from '../base/base-model';
import { Client } from '../client/client';
import { Employee } from '../employee/employee';
import { LookupValue } from '../lookups/lookup-value';
import { Supplier } from '../supplier/supplier';
export class User extends BaseModel {
  EmployeeId: number;
  ClientId: number;
  SupplierId: number;
  EmailAddress: string;
  Password: string;
  ConfirmPassword: string;
  UserTypeId: number;
  IsAdmin: boolean;
  IsLocked: boolean;
  Avatar: string;
  DateLastLoggedIn: Date;
  SessionToken: string;

  Employee: Employee;
  Client: Client;
  Supplier: Supplier;
  UserType: LookupValue;

  MenuItems: any[] = [];

  constructor(
    _id?: number,
    EmployeeId?: number,
    ClientId?: number,
    SupplierId?: number,
    EmailAddress?: string,
    Password?: string,
    ConfirmPassword?: string,
    UserTypeId?: number,
    IsAdmin?: boolean,
    IsLocked?: boolean,
    Avatar?: string,
    DateLastLoggedIn?: Date,
    SessionToken?: string,
    IsActive?: boolean,
    CreatedBy?: number,
    DateCreated?: Date,
    ModifiedBy?: number,
    DateModified?: Date
  ) {
    super(
      _id,
      IsActive,
      null,
      EmailAddress,
      null,
      CreatedBy,
      DateCreated,
      ModifiedBy,
      DateModified
    );
    this.EmployeeId = EmployeeId;
    this.ClientId = ClientId;
    this.SupplierId = SupplierId;
    this.EmailAddress = EmailAddress;
    this.Password = Password;
    this.ConfirmPassword = ConfirmPassword;
    this.UserTypeId = UserTypeId;
    this.IsAdmin = IsAdmin;
    this.IsLocked = IsLocked;
    this.Avatar = Avatar;
    this.DateLastLoggedIn = DateLastLoggedIn;
    this.SessionToken = SessionToken;
  }
}
