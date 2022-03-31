import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  GeneralUtils,
  InboxMessage,
  InboxMessageRecipient,
  LookupValueService,
  SharedConfiguration,
  User,
} from 'app/shared/app-shared.module';
import { Observable } from 'rxjs';
import { first, map, startWith } from 'rxjs/operators';

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
  messages: InboxMessage[] = [];
  formGroup: FormGroup;
  recipients: any[] = [];
  filteredUsers: Observable<any[]>;
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
  }
  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      recipients: [``, Validators.required],
    });
    this.onLoadRefreshMessages();
  }
  onLoadRefreshMessages() {
    this.referenceValueService.userService.getAll<User>().subscribe((users) => {
      this.recipients = users.map((user) => ({
        id: user._id,
        displayValue: user.DisplayName,
        image: user.Avatar,
      }));
      this.filteredUsers = this.cfRecipients?.valueChanges.pipe(
        startWith(``),
        map((value) => this.filterValuesBy(this.recipients, value))
      );
    });
  }
  get f() {
    return this.formGroup;
  }
  get cfRecipients() {
    return this.f?.controls?.recipients;
  }
  isCreateMessage() {
    return SharedConfiguration.inboxMessageOptionsCreate.includes(
      this.toLocaleLowerCaseTrim(this.action)
    );
  }
  isViewMessage() {
    return SharedConfiguration.inboxMessageOptionsView.includes(
      this.toLocaleLowerCaseTrim(this.action)
    );
  }
  isReplySendMessage() {
    return SharedConfiguration.inboxMessageOptionsReplySend.includes(
      this.toLocaleLowerCaseTrim(this.action)
    );
  }
  isReplySendAllMessage() {
    return SharedConfiguration.inboxMessageOptionsReplySendAll.includes(
      this.toLocaleLowerCaseTrim(this.action)
    );
  }
  onButtonClickRemoveRecipient(recipient: InboxMessageRecipient) {}
  onButtonClickSend(): void {}
  onButtonClickReply(type?: string) {}
}
