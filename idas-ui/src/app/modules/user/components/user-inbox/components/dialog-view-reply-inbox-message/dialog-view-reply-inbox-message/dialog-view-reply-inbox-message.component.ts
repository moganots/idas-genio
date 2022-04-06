import { DatePipe } from "@angular/common";
import { Component, Inject, LOCALE_ID, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
  MAT_DIALOG_DEFAULT_OPTIONS,
} from "@angular/material/dialog";
import { Router } from "@angular/router";
import {
  BaseDialogComponent,
  ReferenceValueService,
} from "app/modules/_shared/app-modules-shared.module";
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
} from "app/shared/app-shared.module";
import { Observable } from "rxjs";
import { first, map, startWith } from "rxjs/operators";
import { InboxMessageRecipientService } from "../../../services/inbox-message-recipient-service/inbox-message-recipient.service";
import { InboxMessageService } from "../../../services/inbox-message-service/inbox-message.service";

@Component({
  selector: "app-dialog-view-reply-inbox-message",
  templateUrl: "./dialog-view-reply-inbox-message.component.html",
  styleUrls: ["./dialog-view-reply-inbox-message.component.scss"],
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
  message: InboxMessage;
  messages: InboxMessage[] = [];
  formGroup: FormGroup;
  filteredRecipients: Observable<any[]>;
  datepipe: DatePipe = new DatePipe(this.locale);
  messageSubject = null;
  newRecipients = [];
  newMessage = null;
  parentInboxMessageId: number;
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
      subject: [``, Validators.required],
      recipients: [``, Validators.required],
      message: [``, Validators.required],
    });
  }
  onLoadRefreshMessages() {
    this.referenceValueService?.userService
      ?.getAll<User>()
      ?.subscribe((users) => {
        // Get / load - Recipient value(s)
        this.filteredRecipients = this.cfMessageRecipients?.valueChanges.pipe(
          startWith(``),
          map((value) =>
            this.filterValuesBy(
              users?.map((user) => ({
                id: user._id,
                displayValue: user.DisplayName,
                image: user.Avatar,
                value: user,
              })),
              value
            )
          )
        );
        // Get - InboxMessage (as is / with recent update(s)) > this.selectedElement?._id
        this.inboxMessageService
          ?.getFirstById<InboxMessage>(this.selectedElement?._id)
          ?.subscribe((message) => {
            // Add - InboxMessage to messages list
            this.messages.push(message);
            // Add - InboxMessage.ReplyMessages to messages list
            message?.ReplyMessages?.forEach((replyMessage) => {
              this.messages.push(replyMessage);
            });
            // Update - References / User - InboxMessage.createdBy for each message
            this.messages?.forEach((msg, index) => {
              msg.createdBy = users?.find(
                (user) => user?._id === msg?.CreatedBy
              );
              // Get / Update - InboxMessage Recipient(s)
              this.inboxMessageRecipientService
                .getBy<InboxMessageRecipient>({ InboxMessageId: msg?._id })
                .subscribe((recipients) => {
                  // Set / Update - InboxMessage Recipient(s)
                  msg.Recipients = recipients;
                  // Update - References / User - InboxMessage.Recipients
                  msg?.Recipients?.forEach((recipient) => {
                    recipient.Recipient = users?.find(
                      (user) => user?._id === recipient?.RecipientId
                    );
                  });
                });
            });
            // Set / Update - this.selectedElement to update message
            this.selectedElement = message;
            // Set - Message subject
            this.messageSubject = message?.Subject;
            // Set - Reply Message parent Id
            this.parentInboxMessageId = message?._id;
            // Set / Update - newRecipients
            this.setRecipients();
            // Sort this.messages by DateCreated
            this.messages = this.messages?.sort(
              (x, y) => +new Date(y.DateCreated) - +new Date(x.DateCreated)
            );
          });
      });
  }
  get f() {
    return this.formGroup;
  }
  get cfMessageSubject() {
    return this.f?.controls?.subject;
  }
  get cfMessageRecipients() {
    return this.f?.controls?.recipients;
  }
  get cfMessage() {
    return this.f?.controls?.message;
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
      DateUtils.DATE_FORMAT_MMM_DD_YYYY_HH_MM_SS_WITH_COMMA,
      this.locale
    );
  }
  setRecipients() {
    if (this.isReplySendMessage()) {
      this.newRecipients = [
        {
          Recipient: this.selectedElement?.createdBy,
        } as unknown as InboxMessageRecipient,
      ];
    } else {
      this.newRecipients = this.selectedElement.Recipients || [];
    }
  }
  onAddSelectedRecipient(event: any) {
    const nRecipient = event?.source?.value?.value;
    const eRecipient = this.newRecipients.find(
      (recipient) => recipient?.Recipient?._id === nRecipient?._id
    );
    if ((nRecipient && eRecipient === null) || eRecipient === undefined) {
      this.newRecipients?.push({ Recipient: nRecipient });
    }
  }
  onButtonClickRemoveRecipient(recipient: any) {
    if (recipient && recipient.Recipient) {
      this.newRecipients = this.newRecipients?.filter(
        (rec) => !(rec.Recipient._id === recipient.Recipient._id)
      );
    }
  }
  onReplyMessageValueChanged(event: any) {
    if (event && (event.target._id || event.target.id)) {
      this.newMessage = event?.target?.textContent;
    }
  }
  canSend() {
    return (
      GeneralUtils.isStringSet(this.messageSubject) &&
      GeneralUtils.hasItems(this.newRecipients) &&
      GeneralUtils.isStringSet(this.newMessage)
    );
  }
  onButtonClickSend(): void {
    if (
      GeneralUtils.isStringSet(this.messageSubject) &&
      GeneralUtils.hasItems(this.newRecipients) &&
      GeneralUtils.isStringSet(this.newMessage)
    ) {
      this.dataService
        ?.CreateUpdateDelete(`Create`, {
          Subject: this.messageSubject,
          Message: this.newMessage,
          ParentInboxMessageId: this.parentInboxMessageId,
        })
        .subscribe((message) => {
          this.newRecipients.forEach((recipient) => {
            this.inboxMessageRecipientService
              ?.CreateUpdateDelete(`Create`, {
                InboxMessageId: message[0]._id,
                RecipientId: recipient.Recipient._id,
              })
              .subscribe(() => {});
          });
          this.alertifyService.success(
            `New inbox message created / sent, successfully`
          );
        });
    }
  }
}
