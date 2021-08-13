import { BaseModel } from './base/base-model';
import { Project } from './project/project';
import { Task } from './task/task';
export class FileAttachment extends BaseModel {
  ProjectId?: number;
  TaskId?: number;
  FileName: string;
  FileSize?: number;
  Project: Project;
  Task: Task;
  Url?: string;

  constructor(
    id: number,
    IsActive: boolean,
    FileName: string,
    FileSize: number,
    ProjectId?: number,
    TaskId?: number,
    CreatedBy?: number,
    DateCreated?: Date,
    ModifiedBy?: number,
    DateModified?: Date
  ) {
    super(
      id,
      IsActive,
      undefined,
      FileName,
      undefined,
      CreatedBy,
      DateCreated,
      ModifiedBy,
      DateModified
    );
    this.ProjectId = ProjectId;
    this.TaskId = TaskId;
    this.FileName = FileName;
    this.FileSize = FileSize;
    this.Url = `#/secure/attachment/${this.ProjectId || this.TaskId}${(this._id) ? `/${this._id}` : ``}/${this.FileName}`;
  }
}
