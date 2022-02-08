import { Project, User } from 'app/shared/app-shared.module';
import { BaseModel } from '../base/base-model';
import { LookupValue } from '../lookups/lookup-value';
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
  SubTasks: Task[] = [];
  Assignee: User;
  Status: LookupValue;
  Files: any[];
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
