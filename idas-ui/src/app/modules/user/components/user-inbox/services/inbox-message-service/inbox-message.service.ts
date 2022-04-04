import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserService } from 'app/modules/user/services/user-service/user.service';
import {
  AuthenticationService,
  DataService,
  FileAttachment,
  FileAttachmentService,
  InboxMessage,
  InboxMessageRecipient,
  User,
} from 'app/shared/app-shared.module';
import { UserInboxMessageConfiguration } from '../../user-inbox-message-configuration';
import { InboxMessageRecipientService } from '../inbox-message-recipient-service/inbox-message-recipient.service';

@Injectable({
  providedIn: 'root',
})
export class InboxMessageService extends DataService {
  messages: InboxMessage[] = [];
  users: User[] = [];
  files: FileAttachment[] = [];
  recipients: InboxMessageRecipient[] = [];
  constructor(
    public httpClient: HttpClient,
    public authenticationService: AuthenticationService,
    public inboxMessageRecipientService: InboxMessageRecipientService,
    public userService: UserService,
    public fileAttachmentService: FileAttachmentService
  ) {
    super(httpClient, authenticationService);
    this.entityName = UserInboxMessageConfiguration.identifier;
    this.dataColumns = UserInboxMessageConfiguration.dataColumns;
    this.getAll<InboxMessage>()
      // .toPromise()
      .subscribe((messages) => {
        this.messages = messages;
      });
    this.userService
      .getAll<User>()
      // .toPromise()
      .subscribe((users) => {
        this.users = users;
      });
    this.fileAttachmentService
      .getAll<FileAttachment>()
      // .toPromise()
      .subscribe((files) => {
        this.files = files;
      });
    this.inboxMessageRecipientService
      .getAll<InboxMessageRecipient>()
      // .toPromise()
      .subscribe((recipients) => {
        this.recipients = recipients;
      });
  }
  mapValues(inboxMessage: InboxMessage) {
    inboxMessage.Recipients = this.recipients.filter((recipient) => recipient?.InboxMessageId === inboxMessage?._id);
    inboxMessage.Files = this.files.filter((file) => file?.InboxMessageId === inboxMessage?._id);
    inboxMessage.LinkedMessages = this.messages.filter((cim) => cim?.ParentInboxMessageId === inboxMessage?._id);
    inboxMessage.createdBy = this.users.find(
      (user) => user?._id === inboxMessage?.CreatedBy
    );
    inboxMessage.modifiedBy = this.users.find(
      (user) => user?._id === inboxMessage?.ModifiedBy
    );
    return inboxMessage;
  }
}
