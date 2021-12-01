import { Component, OnInit } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DEFAULT_OPTIONS,
} from '@angular/material/dialog';
import {
  PageComponent,
  ReferenceValueService,
} from 'app/modules/_shared/app-modules-shared.module';
import { UserNotificationsConfiguration } from './user-notifications-configuration';
import { NotificationsService } from './services/notifications.service';
import {
  AlertifyService,
  AuthenticationService,
  LookupValueService,
} from 'app/shared/app-shared.module';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-user-notifications',
  templateUrl: './user-notifications.component.html',
  styleUrls: ['./user-notifications.component.scss'],
  providers: [
    AlertifyService,
    AuthenticationService,
    LookupValueService,
    ReferenceValueService,
    NotificationsService,
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {} },
  ],
})
export class UserNotificationsComponent
  extends PageComponent
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
    public notificationsService: NotificationsService
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
    this.pageIcon = UserNotificationsConfiguration.pageIcon;
    this.pageTitle = UserNotificationsConfiguration.pageTitle;
    this.pageName = UserNotificationsConfiguration.pageName;
    this.dataService = notificationsService;
    this.entityName = UserNotificationsConfiguration.identifier;
    this.sourceDataColumns = UserNotificationsConfiguration.dataColumns;
  }
}
