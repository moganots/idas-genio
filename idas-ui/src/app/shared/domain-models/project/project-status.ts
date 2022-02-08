import { Project } from 'app/shared/app-shared.module';
import { BaseModel } from '../base/base-model';
import { LookupValue } from '../lookups/lookup-value';
export class ProjectStatus extends BaseModel {
  ProjectId: number;
  StatusId: number;
  Project: Project;
  Status: LookupValue;
  constructor(
    id?: number,
    ProjectId?: number,
    StatusId?: number,
    IsActive?: boolean,
    CreatedBy?: number,
    DateCreated?: Date,
    ModifiedBy?: number,
    DateModified?: Date,
  ) {
    super(
      id,
      IsActive,
      null,
      null,
      null,
      CreatedBy,
      DateCreated,
      ModifiedBy,
      DateModified
    );
    this.ProjectId = ProjectId;
    this.StatusId = StatusId;
  }
}
