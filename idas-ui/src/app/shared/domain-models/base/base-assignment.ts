import { User } from '../user/user';
import { BaseModel } from './base-model';
export class BaseAssignment extends BaseModel {
  AssigneeId: number;
  PreviousAssigneeId: number;
  HoursWorked: number;
  Assignee: User;
  PreviousAssignee: User;
}
