import { UserType } from 'app/shared/shared.module';
import { BaseModel } from '../base/base-model';
export class User extends BaseModel {
  EmployeeClientSupplierId:number;
  UserType:UserType;
  EmailAddress:string;
  Password:string;
  IsAdmin:boolean;
  IsLocked:boolean;
  DateLastLoggedIn:Date;
  SessionToken:string;
}
