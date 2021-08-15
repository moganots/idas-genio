import { Project } from 'app/shared/shared.module';
import { BaseAssignment } from '../base/base-assignment';
import { LookupValue } from '../lookups/lookup-value';
export class ProjectAssignment extends BaseAssignment {
  ProjectId: number;
  ProjectAssignmentTypeId: number;
  Project: Project;
  ProjectAssignmentType: LookupValue;
}
