import { GeneralUtils } from '../utilities/general-utils';
import { BaseModel } from './base/base-model';
import { Project } from './project/project';
import { CalendarEvent } from './scheduling/calendar-event';
import { Task } from './task/task';
export class FileAttachment extends BaseModel {
  ProjectId?: number;
  TaskId?: number;
  CalendarEventId?: number;
  FileName?: string;
  FileExtension?: string;
  ContentType?: string;
  FileContent?: any;
  FileSize?: number;
  Project?: Project;
  Task?: Task;
  CalendarEvent?: CalendarEvent;

  constructor(
    id: number,
    IsActive: boolean,
    FileName: string,
    ProjectId?: number,
    TaskId?: number,
    CalendarEventId?: number,
    FileExtension?: string,
    ContentType?: string,
    FileContent?: any,
    FileSize?: number,
    RouterLink?: string,
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
    this.CalendarEventId = CalendarEventId;
    this.FileName = FileName;
    this.FileExtension = FileExtension;
    this.ContentType = ContentType;
    this.FileContent = FileContent;
    this.FileSize = FileSize;
    this.RouterLink = RouterLink || GeneralUtils.getFileAttachmentUrl(this);
  }
}
