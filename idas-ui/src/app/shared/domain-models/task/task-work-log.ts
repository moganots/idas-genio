import { Task } from 'app/shared/app-shared.module';
import { BaseWorkLog } from '../base/base-work-log';
export class TaskWorkLog extends BaseWorkLog {
  TaskId: number;
  Task: Task;
}
