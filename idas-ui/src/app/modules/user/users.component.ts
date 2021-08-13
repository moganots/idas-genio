import { Component, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { PageComponent, ReferenceValueService } from 'app/modules/_shared/shared-modules.module';
import { UsersConfiguration } from './users-configuration';
import { UsersService } from './services/users.service';
import { AlertifyService, AuthenticationService, LookupValueService } from 'app/shared/shared.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  providers: [
    AlertifyService,
    AuthenticationService,
    LookupValueService,
    ReferenceValueService,
    UsersService,
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { }}
  ]
})
export class UsersComponent extends PageComponent implements OnInit {

  constructor(
    public router: Router,
    public matDialog: MatDialog,
    public alertifyService: AlertifyService,
    public authenticationService: AuthenticationService,
    public lookupValueService: LookupValueService,
    public referenceValueService: ReferenceValueService,
    public usersService: UsersService
    ) {
      super(router, matDialog, alertifyService, authenticationService, lookupValueService, referenceValueService);
      this.pageIcon = UsersConfiguration.pageIcon;
      this.pageTitle = UsersConfiguration.pageTitle;
      this.pageName = UsersConfiguration.pageName;
      this.dataService = usersService;
      this.entityName = UsersConfiguration.identifier;
      this.sourceDataColumns = UsersConfiguration.dataColumns;
  }
}
