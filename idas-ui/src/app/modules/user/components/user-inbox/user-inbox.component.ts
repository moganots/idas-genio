import { Component, OnInit } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DEFAULT_OPTIONS,
} from '@angular/material/dialog';
import {
  PageComponent,
  ReferenceValueService,
} from 'app/modules/_shared/app-modules-shared.module';
import { UserInboxConfiguration } from './user-inbox-configuration';
import { InboxService } from './services/inbox.service';
import {
  AlertifyService,
  AuthenticationService,
  LookupValueService,
} from 'app/shared/app-shared.module';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-user-inbox',
  templateUrl: './user-inbox.component.html',
  styleUrls: ['./user-inbox.component.scss'],
  providers: [
    AlertifyService,
    AuthenticationService,
    LookupValueService,
    ReferenceValueService,
    InboxService,
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
    public inboxService: InboxService
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
    this.pageIcon = UserInboxConfiguration.pageIcon;
    this.pageTitle = UserInboxConfiguration.pageTitle;
    this.pageName = UserInboxConfiguration.pageName;
    this.dataService = inboxService;
    this.entityName = UserInboxConfiguration.identifier;
    this.sourceDataColumns = UserInboxConfiguration.dataColumns;
  }
}
