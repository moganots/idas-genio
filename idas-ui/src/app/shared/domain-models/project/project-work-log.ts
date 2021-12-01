import { Project } from 'app/shared/app-shared.module';
import { BaseWorkLog } from '../base/base-work-log';
export class ProjectWorkLog extends BaseWorkLog {
  ProjectId: number;
  Project: Project;
}
