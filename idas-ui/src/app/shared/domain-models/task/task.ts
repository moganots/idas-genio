import { BaseModel } from '../base/base-model';
import { FileAttachment } from '../file-attachment';
import { LookupValue } from '../lookups/lookup-value';
import { Project } from '../project/project';
import { User } from '../user/user';
import { TaskComment } from './task-comment';
import { TaskReview } from './task-review';
import { TaskWorklog } from './task-worklog';
export class Task extends BaseModel {
  ProjectId: number;
  TaskTypeId: number;
  PriorityId: number;
  ParentTaskId: number;
  AssigneeId: number;
  StatusId: number;
  Project: Project;
  TaskType: LookupValue;
  Priority: LookupValue;
  ParentTask: Task;
  Assignee: User;
  Status: LookupValue;
  Files: FileAttachment[] = [];
  SubTasks: Task[] = [];
  Comments: TaskComment[] = [];
  Worklogs: TaskWorklog[] = [];
  Reviews: TaskReview[] = [];
  constructor(
    id?: number,
    ProjectId?: number,
    Name?: string,
    Description?: string,
    TaskTypeId?: number,
    PriorityId?: number,
    ParentTaskId?: number,
    AssigneeId?: number,
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
      Name,
      Description,
      CreatedBy,
      DateCreated,
      ModifiedBy,
      DateModified
    );
    this.ProjectId = ProjectId;
    this.TaskTypeId = TaskTypeId;
    this.PriorityId = PriorityId;
    this.ParentTaskId = ParentTaskId;
    this.AssigneeId = AssigneeId;
    this.StatusId = StatusId;
  }
}
