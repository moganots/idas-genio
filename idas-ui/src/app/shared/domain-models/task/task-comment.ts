import { Task } from 'app/shared/app-shared.module';
import { BaseComment } from '../base/base-comment';
export class TaskComment extends BaseComment {
  TaskId: number;
  Comment: string;
  Task: Task;
  constructor(
    id?: number,
    TaskId?: number,
    Comment?: string,
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
    this.Comment = Comment;
  }
}
