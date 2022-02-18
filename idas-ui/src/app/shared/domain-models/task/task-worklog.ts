import { Task } from 'app/shared/app-shared.module';
import { BaseWorklog } from '../base/base-worklog';
export class TaskWorklog extends BaseWorklog {
  TaskId: number;
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
