import { Task } from 'app/shared/app-shared.module';
import { BaseModel } from '../base/base-model';
import { LookupValue } from '../lookups/lookup-value';
export class TaskStatus extends BaseModel {
  TaskId: number;
  StatusId: number;
  Task: Task;
  Status: LookupValue;
  constructor(
    id?: number,
    TaskId?: number,
    StatusId?: number,
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
      null,
      CreatedBy,
      DateCreated,
      ModifiedBy,
      DateModified
    );
    this.TaskId = TaskId;
    this.StatusId = StatusId;
  }
}
