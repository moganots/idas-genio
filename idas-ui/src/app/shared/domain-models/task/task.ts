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
  SubTasks: Task[];
  Assignee: User;
  Status: LookupValue;
  Files: any[];
}
