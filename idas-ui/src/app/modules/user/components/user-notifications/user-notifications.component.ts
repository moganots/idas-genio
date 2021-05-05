import { Component } from '@angular/core';
import { MatDialog, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { PageComponent } from 'app/modules/_shared/modules-shared.module';
import { UserNotificationsConfiguration } from './user-notifications-configuration';
import { NotificationsService } from './services/notifications.service';

@Component({
  selector: 'app-user-notifications',
  templateUrl: './user-notifications.component.html',
  styleUrls: ['./user-notifications.component.scss'],
  providers: [
    NotificationsService,
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { }}
  ]
})
export class UserNotificationsComponent extends PageComponent {

  constructor(
    public matDialog: MatDialog,
    public notificationsService: NotificationsService
    ) {
    super(matDialog);
    this.pageIcon = UserNotificationsConfiguration.pageIcon;
    this.pageTitle = UserNotificationsConfiguration.pageTitle;
    this.pageName = UserNotificationsConfiguration.pageName;
    this.dataService = notificationsService;
    this.entityName = UserNotificationsConfiguration.identifier;
    this.sourceDataColumnNames = UserNotificationsConfiguration.fieldNames;
    // this.sourceData = notificationsService.getAll<Notification>();
  }

}
