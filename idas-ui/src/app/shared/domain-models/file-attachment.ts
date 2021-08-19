import { GeneralUtils } from '../utilities/general-utils';
import { BaseModel } from './base/base-model';
import { Project } from './project/project';
import { CalendarEvent } from './scheduling/calendar-event';
import { Task } from './task/task';
export class FileAttachment extends BaseModel {
  ProjectId: number;
  TaskId: number;
  CalendarEventId: number;
  FileName: string;
  FileSize: number;
  Url?: string;
  Project: Project;
  Task: Task;
  CalendarEvent: CalendarEvent;

  constructor(
    id: number,
    IsActive: boolean,
    FileName: string,
    FileSize: number,
    ProjectId?: number,
    TaskId?: number,
    CalendarEventId?: number,
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
    this.CalendarEventId = TaskId;
    this.FileName = FileName;
    this.FileSize = FileSize;
    this.Url = GeneralUtils.getFileAttachmentUrl(this);
  }
}
