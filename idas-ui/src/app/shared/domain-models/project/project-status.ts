import { Project } from 'app/shared/shared.module';
import { BaseModel } from '../base/base-model';
import { LookupValue } from '../lookup-models/lookup-value';
export class ProjectStatus extends BaseModel {
  ProjectId: number;
  StatusId: number;
  Project: Project;
  Status: LookupValue;
}
