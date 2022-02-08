import { Project } from 'app/shared/app-shared.module';
import { BaseWorkLog } from '../base/base-work-log';
export class ProjectWorkLog extends BaseWorkLog {
  ProjectId: number;
  StartDate: Date;
  HoursWorked: number;
  Project: Project;
  constructor(
    id?: number,
    ProjectId?: number,
    StartDate?: Date,
    Description?: string,
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
      Description,
      CreatedBy,
      DateCreated,
      ModifiedBy,
      DateModified
    );
    this.ProjectId = ProjectId;
    this.StartDate = StartDate;
    this.HoursWorked = HoursWorked;
  }
}
