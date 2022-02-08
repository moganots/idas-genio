import { Project } from 'app/shared/app-shared.module';
import { BaseModel } from '../base/base-model';
export class ProjectReview extends BaseModel {
  ProjectId: number;
  Review: string;
  Project: Project;
  constructor(
    id?: number,
    ProjectId?: number,
    Review?: string,
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
    this.Review = Review;
  }
}
