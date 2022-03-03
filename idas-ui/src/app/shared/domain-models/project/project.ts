import { BaseModel } from '../base/base-model';
import { FileAttachment } from '../file-attachment';
import { LookupValue } from '../lookups/lookup-value';
import { Task } from '../task/task';
import { ProjectAssignment } from './project-assignment';
import { ProjectComment } from './project-comment';
import { ProjectReview } from './project-review';
import { ProjectWorklog } from './project-worklog';
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
  Files: FileAttachment[] = [];
  AssociatedProjects: Project[] = [];
  Tasks: Task[] = [];
  Comments: ProjectComment[] = [];
  Worklogs: ProjectWorklog[] = [];
  Reviews: ProjectReview[] = [];

  constructor(
    id?: number,
    Name?: string,
    Code?: string,
    Description?: string,
    ProjectTypeId?: number,
    PriorityId?: number,
    StartDate?: Date,
    EndDate?: Date,
    MaximumHoursAllocated?: number,
    ParentProjectId?: number,
    IsActive?: boolean,
    CreatedBy?: number,
    DateCreated?: Date,
    ModifiedBy?: number,
    DateModified?: Date,) {
    super(id, IsActive, Code, Name, Description, CreatedBy, DateCreated, ModifiedBy, DateModified);
    this.ProjectTypeId = ProjectTypeId;
    this.PriorityId = PriorityId;
    this.StartDate = StartDate;
    this.EndDate = EndDate;
    this.MaximumHoursAllocated = MaximumHoursAllocated;
    this.ParentProjectId = ParentProjectId;
  }
}
