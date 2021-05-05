import { Task, Status } from 'app/shared/shared.module';
import { BaseModel } from '../base/base-model';
export class TaskStatus extends BaseModel {
  taskId:Task;
  statusId:Status;
}
