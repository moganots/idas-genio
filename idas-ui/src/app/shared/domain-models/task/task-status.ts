import { Task } from 'app/shared/shared.module';
import { BaseModel } from '../base/base-model';
import { LookupValue } from '../lookup-models/lookup-value';
export class TaskStatus extends BaseModel {
  TaskId: number;
  StatusId: number;
  Task: Task;
  Status: LookupValue;
}
