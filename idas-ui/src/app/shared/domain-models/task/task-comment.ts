import { Task } from 'app/shared/app-shared.module';
import { BaseComment } from '../base/base-comment';
export class TaskComment extends BaseComment {
  TaskId: number;
  Task: Task;
}
