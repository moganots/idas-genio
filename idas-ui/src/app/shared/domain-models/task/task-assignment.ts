import { Task } from 'app/shared/app-shared.module';
import { BaseAssignment } from '../base/base-assignment';
export class TaskAssignment extends BaseAssignment {
  TaskId: number;
  AssigneeId: number;
  Task: Task;
  constructor(
    id?: number,
    TaskId?: number,
    AssigneeId?: number,
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
    this.AssigneeId = AssigneeId;
  }
}
