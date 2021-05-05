import { UserType } from 'app/shared/shared.module';
import { BaseModel } from '../base/base-model';
export class User extends BaseModel {
  employeeClientSupplierId:number;
  userType:UserType;
  emailAddress:string;
  password:string;
  isLocked:boolean;
  dateLastLoggedIn:Date;
}
