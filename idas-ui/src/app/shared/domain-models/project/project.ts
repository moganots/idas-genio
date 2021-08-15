import { BaseModel } from '../base/base-model';
import { FileAttachment } from '../file-attachment';
import { LookupValue } from '../lookups/lookup-value';
import { Task } from '../task/task';
import { ProjectAssignment } from './project-assignment';
export class Project extends BaseModel {
  ProjectTypeId: number;
  PriorityId: number;
  StartDate: Date;
  EndDate: Date;
  MaximumHoursAllocated: number;
  ParentProjectId: number;
  StatusId: number;
  ProjectType: LookupValue;
  Priority: LookupValue;
  Status: LookupValue;
  ProjectAssignees: ProjectAssignment[] = [];
  ParentProject: Project;
  Tasks: Task[] = [];
  LinkedProjects: Project[] = [];
  Files: FileAttachment[] = [];

  constructor(id, IsActive, Name, Description, CreatedBy, DateCreated, ModifiedBy, DateModified) {
    super(id, IsActive, null, Name, Description, CreatedBy, DateCreated, ModifiedBy, DateModified);
  }
}
