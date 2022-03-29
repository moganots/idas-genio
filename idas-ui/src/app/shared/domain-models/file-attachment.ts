import { GeneralUtils } from '../utilities/general-utils';
import { BaseModel } from './base/base-model';
import { InboxMessage } from './messaging/inbox-message';
import { Project } from './project/project';
import { CalendarEvent } from './scheduling/calendar-event';
import { Task } from './task/task';
export class FileAttachment extends BaseModel {
  ProjectId: number;
  TaskId: number;
  CalendarEventId: number;
  InboxMessageId: number;
  FileName: string;
  FileExtension: string;
  ContentType: string;
  FileContent: string;
  FileSize: number;
  Project?: Project;
  Task?: Task;
  CalendarEvent?: CalendarEvent;
  InboxMessage?: InboxMessage;
  RouterLink: string;
  constructor(
    _id?: number,
    ProjectId?: number,
    TaskId?: number,
    CalendarEventId?: number,
    InboxMessageId?: number,
    FileName?: string,
    FileExtension?: string,
    ContentType?: string,
    FileContent?: string,
    FileSize?: number,
    RouterLink?: string,
    IsActive?: boolean,
    CreatedBy?: number,
    DateCreated?: Date,
    ModifiedBy?: number,
    DateModified?: Date,
  ) {
    super(
      _id,
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
    this.InboxMessageId = InboxMessageId;
    this.FileName = FileName;
    this.FileExtension = FileExtension;
    this.ContentType = ContentType;
    this.FileContent = FileContent;
    this.FileSize = FileSize;
    this.RouterLink = RouterLink || GeneralUtils.getFileAttachmentUrl(this);
  }
}
