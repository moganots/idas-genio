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
  GeneralUtils,
  InboxMessage,
  LookupValueService,
} from 'app/shared/app-shared.module';
import { first } from 'rxjs/operators';
import { DialogReadViewReplyInboxMessageComponent } from './components/dialog-view-reply-inbox-message/dialog-view-reply-inbox-message/dialog-view-reply-inbox-message.component';

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
  onClickInboxMessageCreateNew() {
    this.action = `Create`;
    this.openDialog({});
  }
  onClickInboxMessageReadView(message: any, index?: number) {
    this.action = `View`;
    this.openDialog(message, index);
  }
  onClickInboxMessageUnRead(message: any, index?: number) {
    if (message && message?.element) {
      message.element.IsActive = !message.element.IsActive;
      this.dataService
        .CreateUpdateDelete<InboxMessage>(`update`, message.element)
        .pipe(first())
        .subscribe({
          next: (updated) => {
            console.log(updated);
            this.alertifyService.success(
              `Message marked as ${updated?.IsActive ? `un-read` : `read`}`
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
  onClickInboxMessageReply(message: any, index?: number) {
    this.action = `Reply`;
    this.openDialog(message, index);
  }
  onClickInboxMessageReplyAll(message: any, index?: number) {
    this.action = `ReplyAll`;
    this.openDialog(message, index);
  }
  openDialog(message: any, index?: number): void {
    const id = (message || {})?._id || (message || {})?.id;
    const name =
      (message || {})?.DisplayName ||
      (message || {})?.Name ||
      (message || {})?.Subject;
    super.openDialog(
      DialogReadViewReplyInboxMessageComponent,
      {
        action: this.action,
        dataService: this.dataService,
        entityName: this.entityName,
        pageIcon: this.pageIcon,
        pageName: `${this.capitalizeFirstLetter(this.action)} ${this.entityName
          ?.split(`-`)
          ?.map((en) => this.capitalizeFirstLetter(en))
          .join(` `)}`,
        pageTitle: `${this.capitalizeFirstLetter(this.action)} ${this.entityName
          ?.split(`-`)
          ?.map((en) => this.capitalizeFirstLetter(en))
          .join(` `)}`,
        pageSubTitle: `${GeneralUtils.StringJoin([id, name], ` / `)}`,
        dataColumns: this.dataSourceColumns,
        selectedElement: message || {},
        selectedElementIndex: index || this.selectedElementIndex,
      },
      () => {
        this.onDataRefresh();
      }
    );
  }
}
