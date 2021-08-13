import { Task } from 'app/shared/shared.module';
import { BaseAssignment } from '../base/base-assignment';
export class TaskAssignment extends BaseAssignment {
  TaskId: number;
  Task: Task;
}
