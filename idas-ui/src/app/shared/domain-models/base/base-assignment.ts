import { BaseModel } from './base-model';
import { User } from '../user/user';
export class BaseAssignment extends BaseModel {
  previousAssignment:User;
  currentAssignment:User;
  hoursWorked:number;
  assignedBy:User;
}
