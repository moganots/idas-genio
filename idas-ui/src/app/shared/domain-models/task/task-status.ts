import { Task } from 'app/shared/app-shared.module';
import { BaseModel } from '../base/base-model';
import { LookupValue } from '../lookups/lookup-value';
export class TaskStatus extends BaseModel {
  TaskId: number;
  StatusId: number;
  Task: Task;
  Status: LookupValue;
}
