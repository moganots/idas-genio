import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
  MAT_DIALOG_DEFAULT_OPTIONS,
} from '@angular/material/dialog';
import { Router } from '@angular/router';
import {
  BaseDialogComponent,
  ReferenceValueService,
} from 'app/modules/_shared/app-modules-shared.module';
import {
  AlertifyService,
  AuthenticationService,
  LookupValueService,
  SharedConfiguration,
} from 'app/shared/app-shared.module';

@Component({
  selector: 'app-dialog-view-reply-inbox-message',
  templateUrl: './dialog-view-reply-inbox-message.component.html',
  styleUrls: ['./dialog-view-reply-inbox-message.component.scss'],
  providers: [
    AlertifyService,
    AuthenticationService,
    LookupValueService,
    ReferenceValueService,
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {} },
  ],
})
export class DialogReadViewReplyInboxMessageComponent
  extends BaseDialogComponent
  implements OnInit
{
  constructor(
    public router: Router,
    public matDialog: MatDialog,
    public formBuilder: FormBuilder,
    public alertifyService: AlertifyService,
    public authenticationService: AuthenticationService,
    public lookupValueService: LookupValueService,
    public referenceValueService: ReferenceValueService,
    public dialogRef: MatDialogRef<DialogReadViewReplyInboxMessageComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {
    super(
      router,
      matDialog,
      formBuilder,
      alertifyService,
      authenticationService,
      lookupValueService,
      referenceValueService,
      dialogRef,
      data
    );
    this.pageWidth = data?.pageWidth;
    console.log(`this.pageWidth=${this.pageWidth}`);
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
  onButtonClickSend(): void {}
  onButtonClickReply(type?: string) {}
}
