import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialog, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { PageComponent } from 'app/modules/_shared/modules-shared.module';
import { UserNotificationsConfiguration } from './user-notifications-configuration';
import { NotificationsService } from './services/notifications.service';
import { AuthenticationService } from 'app/shared/shared.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-notifications',
  templateUrl: './user-notifications.component.html',
  styleUrls: ['./user-notifications.component.scss'],
  providers: [
    AuthenticationService,
    NotificationsService,
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { }}
  ]
})
export class UserNotificationsComponent extends PageComponent {

  constructor(
    public location: Location,
    public router: Router,
    public matDialog: MatDialog,
    public authenticationService: AuthenticationService,
    public notificationsService: NotificationsService
    ) {
    super(location, router, matDialog, authenticationService);
    this.pageIcon = UserNotificationsConfiguration.pageIcon;
    this.pageTitle = UserNotificationsConfiguration.pageTitle;
    this.pageName = UserNotificationsConfiguration.pageName;
    this.dataService = notificationsService;
    this.entityName = UserNotificationsConfiguration.identifier;
    this.sourceDataColumnNames = UserNotificationsConfiguration.fieldNames;
    // this.sourceData = notificationsService.getAll<Notification>();
  }

}
