import { Task } from 'app/shared/app-shared.module';
import { BaseWorkLog } from '../base/base-work-log';
export class TaskWorkLog extends BaseWorkLog {
  TaskId: number;
  ProjectId: number;
  TimeSpent: string;
  DateStarted: Date;
  DateCompleted: Date;
  Comment: string;
  HoursWorked: number;
  Task: Task;
  constructor(
    id?: number,
    TaskId?: number,
    TimeSpent?: string,
    DateStarted?: Date,
    DateCompleted?: Date,
    Comment?: string,
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
      Comment,
      CreatedBy,
      DateCreated,
      ModifiedBy,
      DateModified
    );
    this.TaskId = TaskId;
    this.TimeSpent = TimeSpent;
    this.DateStarted = DateStarted;
    this.DateCompleted = DateCompleted;
    this.HoursWorked = HoursWorked;
  }
}
