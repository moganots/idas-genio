import { BaseModel } from '../base/base-model';
import { FileAttachment } from '../file-attachment';
import { InboxMessageRecipient } from './inbox-message-recipient';
export class InboxMessage extends BaseModel {
  Subject: string;
  Message: string;
  ParentInboxMessageId: number;
  Recipients: InboxMessageRecipient[] = [];
  Files: FileAttachment[] = [];
  constructor(
    _id?: number,
    Subject?: string,
    Message?: string,
    ParentInboxMessageId?: number,
    IsActive?: boolean,
    CreatedBy?: number,
    DateCreated?: Date,
    ModifiedBy?: number,
    DateModified?: Date
  ) {
    super(
      _id,
      IsActive,
      null,
      Subject,
      Message,
      CreatedBy,
      DateCreated,
      ModifiedBy,
      DateModified
    );
    this.Subject = Subject;
    this.Message = Message;
    this.ParentInboxMessageId = ParentInboxMessageId;
  }
}
