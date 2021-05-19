import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialog, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { PageComponent } from 'app/modules/_shared/modules-shared.module';
import { UsersConfiguration } from './users-configuration';
import { UsersService } from './services/users.service';
import { AuthenticationService } from 'app/shared/shared.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  providers: [
    AuthenticationService,
    UsersService,
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { }}
  ]
})
export class UsersComponent extends PageComponent {

  constructor(
    public location: Location,
    public router: Router,
    public matDialog: MatDialog,
    public authenticationService: AuthenticationService,
    public usersService: UsersService
    ) {
      super(location, router, matDialog, authenticationService);
      this.pageIcon = UsersConfiguration.pageIcon;
      this.pageTitle = UsersConfiguration.pageTitle;
      this.pageName = UsersConfiguration.pageName;
      this.dataService = usersService;
      this.entityName = UsersConfiguration.identifier;
      this.sourceDataColumnNames = UsersConfiguration.fieldNames;
      // this.sourceData = usersService.getAll<User>();
  }

}
