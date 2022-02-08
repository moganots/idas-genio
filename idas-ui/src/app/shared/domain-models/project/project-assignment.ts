import { Project } from 'app/shared/app-shared.module';
import { BaseAssignment } from '../base/base-assignment';
import { LookupValue } from '../lookups/lookup-value';
export class ProjectAssignment extends BaseAssignment {
  ProjectId: number;
  ProjectAssignmentTypeId: number;
  AssigneeId: number;
  Project: Project;
  ProjectAssignmentType: LookupValue;
  constructor(
    id?: number,
    ProjectId?: number,
    ProjectAssignmentTypeId?: number,
    AssigneeId?: number,
    IsActive?: boolean,
    CreatedBy?: number,
    DateCreated?: Date,
    ModifiedBy?: number,
    DateModified?: Date,
  ) {
    super(id, IsActive, null, null, null, CreatedBy, DateCreated, ModifiedBy, DateModified);
    this.ProjectId = ProjectId;
    this.ProjectAssignmentTypeId = ProjectAssignmentTypeId;
    this.AssigneeId = AssigneeId;
  }
}
