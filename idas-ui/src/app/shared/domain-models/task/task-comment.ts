import { Task } from 'app/shared/shared.module';
import { BaseComment } from '../base/base-comment';
export class TaskComment extends BaseComment {
  taskId:Task;
}
