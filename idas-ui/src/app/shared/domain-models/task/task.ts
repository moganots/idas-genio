import { Project } from 'app/shared/shared.module';
import { BaseModel } from '../base/base-model';
export class Task extends BaseModel {
  projectId:Project;
  summary:string;
  subTaskId:Task;
}
