import { BaseModel } from '../base/base-model';
import { User } from '../user/user';
export class InboxMessageRecipient extends BaseModel {
  _id: number;
  InboxMessageId: number;
  RecipientId: number;
  Recipient: User;
  constructor(
    _id?: number,
    InboxMessageId?: number,
    RecipientId?: number,
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
      null,
      null,
      CreatedBy,
      DateCreated,
      ModifiedBy,
      DateModified
    );
    this.InboxMessageId = InboxMessageId;
    this.RecipientId = RecipientId;
  }
}
