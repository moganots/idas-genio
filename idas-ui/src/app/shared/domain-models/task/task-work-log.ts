import { Task } from 'app/shared/app-shared.module';
import { BaseWorkLog } from '../base/base-work-log';
export class TaskWorkLog extends BaseWorkLog {
  TaskId: number;
  StartDate: Date;
  Description: string;
  HoursWorked: number;
  Task: Task;
  constructor(
    id?: number,
    TaskId?: number,
    StartDate?: Date,
    Description?: string,
    HoursWorked?: number,
    IsActive?: boolean,
    CreatedBy?: number,
    DateCreated?: Date,
    ModifiedBy?: number,
    DateModified?: Date,
  ) {
    super(
      id,
      IsActive,
      null,
      null,
      Description,
      CreatedBy,
      DateCreated,
      ModifiedBy,
      DateModified
    );
    this.TaskId = TaskId;
    this.StartDate = StartDate;
    this.HoursWorked = HoursWorked;
  }
}
