import { Project, Status } from 'app/shared/shared.module';
import { BaseModel } from '../base/base-model';
export class ProjectStatus extends BaseModel {
  projectId:Project;
  statusId:Status;
}
