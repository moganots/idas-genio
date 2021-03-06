import { Project } from 'app/shared/app-shared.module';
import { BaseComment } from '../base/base-comment';
export class ProjectComment extends BaseComment {
  ProjectId: number;
  Project: Project;
  constructor(
    id?: number,
    ProjectId?: number,
    Comment?: string,
    IsActive?: boolean,
    CreatedBy?: number,
    DateCreated?: Date,
    ModifiedBy?: number,
    DateModified?: Date
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
    this.Comment = Comment;
  }
}
