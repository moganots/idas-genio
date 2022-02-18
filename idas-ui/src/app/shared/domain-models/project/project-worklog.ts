import { Project } from 'app/shared/app-shared.module';
import { BaseWorklog } from '../base/base-worklog';
export class ProjectWorklog extends BaseWorklog {
  ProjectId: number;
  Project: Project;
  constructor(
    id?: number,
    ProjectId?: number,
    TimeSpent?: string,
    DateStarted?: Date,
    DateCompleted?: Date,
    Comment?: string,
    HoursWorked?: number,
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
      Comment,
      CreatedBy,
      DateCreated,
      ModifiedBy,
      DateModified
    );
    this.ProjectId = ProjectId;
    this.TimeSpent = TimeSpent;
    this.DateStarted = DateStarted;
    this.DateCompleted = DateCompleted;
    this.HoursWorked = HoursWorked;
  }
}
