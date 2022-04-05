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
  SharedConfiguration,
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
  onClickInboxMessageReply(action: string, message: any, index?: number) {
    this.action = action;
    this.openDialog(message, index);
  }
  openDialog(message: any, index?: number): void {
    const pageTitleName = this.getDialogPageTitleName(message);
    super.openDialog(
      DialogReadViewReplyInboxMessageComponent,
      {
        action: this.action,
        dataService: this.dataService,
        entityName: this.entityName,
        pageIcon: this.pageIcon,
        pageName: pageTitleName,
        pageTitle: pageTitleName,
        pageWidth: this.getDialogPageWidth(),
        dataColumns: this.dataSourceColumns,
        selectedElement: message?.element || {},
        selectedElementIndex: index || this.selectedElementIndex,
      },
      () => {
        this.onDataRefresh();
      },
      `96vh`,
      this.getDialogPageWidth(),
    );
  }
  getDialogPageTitleName(message: any) {
    const pageName = `${this.capitalizeFirstLetter(
      this.action
    )} ${this.entityName
      ?.split(`-`)
      ?.map((en) => this.capitalizeFirstLetter(en))
      .join(` `)}`;
    return (
      GeneralUtils.StringNullIf(
        this.isViewMessage() || this.isReplySendMessage() || this.isReplySendAllMessage()
          ? `${message?.Subject}`
          : pageName
      ) || pageName
    );
  }
  getDialogPageWidth() {
    return (this.isViewMessage() || this.isReplySendMessage() || this.isReplySendAllMessage()) ? `68vw` : `38vw`;
  }
  isCreateMessage() {
    return SharedConfiguration.inboxMessageOptionsCreate.includes(this.toLocaleLowerCaseTrim(this.action));
  }
  isViewMessage() {
    return SharedConfiguration.inboxMessageOptionsView.includes(this.toLocaleLowerCaseTrim(this.action));
  }
  isReplySendMessage() {
    return SharedConfiguration.inboxMessageOptionsReplySend.includes(this.toLocaleLowerCaseTrim(this.action));
  }
  isReplySendAllMessage() {
    return SharedConfiguration.inboxMessageOptionsReplySendAll.includes(this.toLocaleLowerCaseTrim(this.action));
  }
}
