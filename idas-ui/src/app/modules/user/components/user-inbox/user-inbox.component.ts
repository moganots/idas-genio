import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialog, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { PageComponent } from 'app/modules/_shared/modules-shared.module';
import { UserInboxConfiguration } from './user-inbox-configuration';
import { InboxService } from './services/inbox.service';
import { AuthenticationService } from 'app/shared/shared.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-inbox',
  templateUrl: './user-inbox.component.html',
  styleUrls: ['./user-inbox.component.scss'],
  providers: [
    AuthenticationService,
    InboxService,
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { }}
  ]
})
export class UserInboxComponent extends PageComponent {

  constructor(
    public location: Location,
    public router: Router,
    public matDialog: MatDialog,
    public authenticationService: AuthenticationService,
    public inboxService: InboxService
    ) {
    super(location, router, matDialog, authenticationService);
    this.pageIcon = UserInboxConfiguration.pageIcon;
    this.pageTitle = UserInboxConfiguration.pageTitle;
    this.pageName = UserInboxConfiguration.pageName;
    this.dataService = inboxService;
    this.entityName = UserInboxConfiguration.identifier;
    this.sourceDataColumnNames = UserInboxConfiguration.fieldNames;
    // this.sourceData = inboxService.getAll<InboxMessage>();
  }

}
