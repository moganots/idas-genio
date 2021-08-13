import { Project, User } from 'app/shared/shared.module';
import { BaseModel } from '../base/base-model';
import { LookupValue } from '../lookup-models/lookup-value';
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
