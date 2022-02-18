import { BaseModel } from './base-model';
export class BaseWorklog extends BaseModel {
  TimeSpent: string;
  DateStarted: Date;
  DateCompleted: Date;
  Comment: string;
  HoursWorked: number;
}
