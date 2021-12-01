import { Project } from 'app/shared/app-shared.module';
import { BaseComment } from '../base/base-comment';
export class ProjectComment extends BaseComment {
  ProjectId: number;
  Project: Project;
}
