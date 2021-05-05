import { Component } from '@angular/core';
import { MatDialog, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { User } from 'app/shared/shared.module';
import { PageComponent } from 'app/modules/_shared/modules-shared.module';
import { UserProfileConfiguration } from './user-profile-configuration';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
  providers: [
    UsersService,
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { }}
  ]
})
export class UserProfileComponent extends PageComponent {

  constructor(
    public matDialog: MatDialog,
    public usersService: UsersService
    ) {
      super(matDialog);
      this.pageIcon = UserProfileConfiguration.pageIcon;
      this.pageTitle = UserProfileConfiguration.pageTitle;
      this.pageName = UserProfileConfiguration.pageName;
      this.dataService = usersService;
      this.entityName = UserProfileConfiguration.identifier;
      this.sourceDataColumnNames = UserProfileConfiguration.fieldNames;
      this.currentUser = usersService.getFirstById<User>(1);
  }

}
