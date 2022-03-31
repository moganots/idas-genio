import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserService } from 'app/modules/user/services/user-service/user.service';
import {
  AuthenticationService,
  DataService,
  InboxMessageRecipient,
  User,
} from 'app/shared/app-shared.module';
import { UserInboxMessageRecipientConfiguration } from './user-inbox-message-recipient-configuration';

@Injectable({
  providedIn: 'root',
})
export class InboxMessageRecipientService extends DataService {
  users: User[] = [];
  constructor(
    public httpClient: HttpClient,
    public authenticationService: AuthenticationService,
    public userService: UserService
  ) {
    super(httpClient, authenticationService);
    this.entityName = UserInboxMessageRecipientConfiguration.identifier;
    this.dataColumns = UserInboxMessageRecipientConfiguration.dataColumns;
    this.userService
      .getAll<User>()
      // .toPromise()
      .subscribe((users) => {
        this.users = users;
      });
  }
  mapValues(inboxMessageRecipient: InboxMessageRecipient) {
    inboxMessageRecipient.Recipient = this.users.find(
      (user) => user?._id === inboxMessageRecipient?.RecipientId
    );
    inboxMessageRecipient.createdBy = this.users.find(
      (user) => user?._id === inboxMessageRecipient?.CreatedBy
    );
    inboxMessageRecipient.modifiedBy = this.users.find(
      (user) => user?._id === inboxMessageRecipient?.ModifiedBy
    );
    return inboxMessageRecipient;
  }
}
