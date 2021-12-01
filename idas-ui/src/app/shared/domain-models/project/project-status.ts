import { Project } from 'app/shared/app-shared.module';
import { BaseModel } from '../base/base-model';
import { LookupValue } from '../lookups/lookup-value';
export class ProjectStatus extends BaseModel {
  ProjectId: number;
  StatusId: number;
  Project: Project;
  Status: LookupValue;
}
