import { RouteInfo } from 'app/shared/types/interfaces/route-info';
import { BaseModel } from '../base/base-model';
import { Client } from '../client/client';
import { Employee } from '../employee/employee';
import { LookupValue } from '../lookups/lookup-value';
import { Supplier } from '../supplier/supplier';
import { ContactDetail } from './contact-detail';
export class User extends BaseModel {
  EmailAddress: string;
  Password: string;
  ConfirmPassword: string;
  EmployeeId: number;
  ClientId: number;
  SupplierId: number;
  UserTypeId: number;
  ContactDetailId: number;
  IsAdmin: boolean;
  IsLocked: boolean;
  Avatar: string;
  DateLastLoggedIn: Date;
  SessionToken: string;
  Employee: Employee;
  Client: Client;
  Supplier: Supplier;
  UserType: LookupValue;
  ContactDetail: ContactDetail;
  MenuItems: any[];

  // tslint:disable-next-line:max-line-length
  constructor(
    _id: number,
    isActive: boolean,
    EmailAddress?: string,
    Password?: string,
    ConfirmPassword?: string,
    EmployeeId?: number,
    ClientId?: number,
    SupplierId?: number,
    UserTypeId?: number,
    IsAdmin?: boolean,
    IsLocked?: boolean,
    DateLastLoggedIn?: Date,
    SessionToken?: string
  ) {
    super(_id, isActive);
    this.EmailAddress = EmailAddress;
    this.Password = Password;
    this.ConfirmPassword = ConfirmPassword;
    this.EmployeeId = EmployeeId;
    this.ClientId = ClientId;
    this.SupplierId = SupplierId;
    this.UserTypeId = UserTypeId;
    this.IsAdmin = IsAdmin;
    this.IsLocked = IsLocked;
    this.DateLastLoggedIn = DateLastLoggedIn;
    this.SessionToken = SessionToken;
  }
}
