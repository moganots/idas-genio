import { Task } from 'app/shared/app-shared.module';
import { BaseModel } from '../base/base-model';
export class TaskReview extends BaseModel {
  TaskId: number;
  Review: string;
  Task: Task;
  constructor(
    id?: number,
    TaskId?: number,
    Review?: string,
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
    this.Review = Review;
  }
}
