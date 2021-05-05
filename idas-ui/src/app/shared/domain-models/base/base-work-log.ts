import { BaseModel } from './base-model';
import { User } from '../user/user';
export class BaseWorkLog extends BaseModel {
  timeSpent:string;
  dateStarted:Date;
  hoursWorked:number;
  loggedBy:User;
}
