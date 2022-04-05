import { DatePipe } from '@angular/common';
import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';
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
  DateUtils,
  GeneralUtils,
  InboxMessage,
  InboxMessageRecipient,
  LookupValueService,
  SharedConfiguration,
  User,
} from 'app/shared/app-shared.module';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { InboxMessageRecipientService } from '../../../services/inbox-message-recipient-service/inbox-message-recipient.service';
import { InboxMessageService } from '../../../services/inbox-message-service/inbox-message.service';

@Component({
  selector: 'app-dialog-view-reply-inbox-message',
  templateUrl: './dialog-view-reply-inbox-message.component.html',
  styleUrls: ['./dialog-view-reply-inbox-message.component.scss'],
  providers: [
    AlertifyService,
    AuthenticationService,
    LookupValueService,
    ReferenceValueService,
    InboxMessageService,
    InboxMessageRecipientService,
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
  datepipe: DatePipe = new DatePipe(this.locale);
  newInboxMessage: InboxMessage;
  constructor(
    public router: Router,
    public matDialog: MatDialog,
    public formBuilder: FormBuilder,
    public alertifyService: AlertifyService,
    public authenticationService: AuthenticationService,
    public lookupValueService: LookupValueService,
    public referenceValueService: ReferenceValueService,
    @Inject(LOCALE_ID) public locale: string,
    public inboxMessageService: InboxMessageService,
    public inboxMessageRecipientService: InboxMessageRecipientService,
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
  }
  ngOnInit(): void {
    this.onLoadRefreshMessages();
    this.formGroup = this.formBuilder.group({
      recipients: [``, Validators.required],
    });
  }
  onLoadRefreshMessages() {
    this.inboxMessageService
      .getFirstById<InboxMessage>(this.selectedElement?._id)
      .subscribe((message) => {
        this.messages.push(message);
        message?.LinkedMessages?.forEach((lm) => this.messages.push(lm));
        this.referenceValueService.userService
          .getAll<User>()
          .subscribe((users) => {
            this.messages?.forEach((msg, index) => {
              msg.createdBy = users.find(
                (user) => user?._id === msg?.CreatedBy
              );
              this.inboxMessageRecipientService
                .getBy<InboxMessageRecipient>({ InboxMessageId: msg?._id })
                .subscribe((recipients) => {
                  msg.Recipients = recipients;
                });
            });
          });
        message.Recipients = this.isReplySendMessage()
          ? ([
              { Recipient: message.createdBy },
            ] as unknown as InboxMessageRecipient[])
          : message.Recipients;
        this.newInboxMessage = message;
        this.messages = this.messages?.sort(
          (x, y) => +new Date(y.DateCreated) - +new Date(x.DateCreated)
        );
      });
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
  getFormatedInboxMessageDateCreated(date: Date) {
    return this.datepipe.transform(
      date,
      DateUtils.DATE_FORMAT_MMM_DD_YYYY_HH_MM_SS_WITH_COMMA
    );
  }
  onAddSelectedRecipient(event: any) {
    if (event && (event._id || event.id)) {
    }
  }
  onButtonClickRemoveRecipient(recipient: InboxMessageRecipient) {}
  onDivValueChanged(event: any) {
    console.log(event);
  }
  onButtonClickSend(): void {}
  canSend() {
    return (
      this.newInboxMessage &&
      GeneralUtils.hasItems(this.newInboxMessage.Recipients) &&
      GeneralUtils.isStringSet(this.newInboxMessage.Message)
    );
  }
  onButtonClickReply(type?: string) {}
}
