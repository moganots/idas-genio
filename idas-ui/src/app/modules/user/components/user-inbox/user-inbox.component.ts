import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import {
  MatDialog,
  MAT_DIALOG_DEFAULT_OPTIONS,
} from '@angular/material/dialog';
import {
  PageComponent,
  ReferenceValueService,
} from 'app/modules/_shared/app-modules-shared.module';
import { UserInboxMessageConfiguration } from './user-inbox-message-configuration';
import { InboxMessageService } from './services/inbox-message-service/inbox-message.service';
import {
  AlertifyService,
  AuthenticationService,
  InboxMessage,
  LookupValueService,
} from 'app/shared/app-shared.module';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-user-inbox',
  templateUrl: './user-inbox.component.html',
  styleUrls: ['./user-inbox.component.scss'],
  providers: [
    AlertifyService,
    AuthenticationService,
    LookupValueService,
    ReferenceValueService,
    InboxMessageService,
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {} },
  ],
})
export class UserInboxComponent extends PageComponent implements OnInit {
  constructor(
    public router: Router,
    public matDialog: MatDialog,
    public formBuilder: FormBuilder,
    public alertifyService: AlertifyService,
    public authenticationService: AuthenticationService,
    public lookupValueService: LookupValueService,
    public referenceValueService: ReferenceValueService,
    public inboxMessageService: InboxMessageService
  ) {
    super(
      router,
      matDialog,
      formBuilder,
      alertifyService,
      authenticationService,
      lookupValueService,
      referenceValueService
    );
    this.pageIcon = UserInboxMessageConfiguration.pageIcon;
    this.pageTitle = UserInboxMessageConfiguration.pageTitle;
    this.pageName = UserInboxMessageConfiguration.pageName;
    this.dataService = inboxMessageService;
    this.entityName = UserInboxMessageConfiguration.identifier;
    this.dataSourceColumns = UserInboxMessageConfiguration.dataColumns;
  }
  onClickMessageUnRead(message: any, index?: number) {
    if (message && message?.element) {
      message.element.IsActive = !message.element.IsActive;
      this.dataService
        .CreateUpdateDelete<InboxMessage>(`update`, message.element)
        .pipe(first())
        .subscribe({
          next: (updated) => {
            this.alertifyService.success(
              `Message marked as read`
            );
          },
          complete: () => {
            this.onDataRefresh();
          },
          error: (error) => {
            this.alertifyService.error(error.message || error);
          },
        });
    }
  }
  onClickMessageReply(message: any, index?: number) {
    console.log(message);
  }
  onClickMessageReplyAll(message: any, index?: number) {
    console.log(message);
  }
}
