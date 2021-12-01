import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import {
  MatDialog,
  MAT_DIALOG_DEFAULT_OPTIONS,
} from '@angular/material/dialog';
import {
  AlertifyService,
  AuthenticationService,
  DataColumn,
  Employee,
  LookupValueService,
} from 'app/shared/app-shared.module';
import { UserProfileConfiguration } from './user-profile-configuration';
import { UserService } from '../../services/user.service';
import {
  PageComponent,
  ReferenceValueService,
} from 'app/modules/_shared/app-modules-shared.module';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
  providers: [
    AlertifyService,
    AuthenticationService,
    LookupValueService,
    ReferenceValueService,
    UserService,
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {} },
  ],
})
export class UserProfileComponent extends PageComponent implements OnInit {
  fieldsPersonalDetails: DataColumn[] = [];
  fieldsContactDetails: DataColumn[] = [];
  fieldsUserAccountDetails: DataColumn[] = [];
  employees: Employee[] = [];

  constructor(
    public router: Router,
    public matDialog: MatDialog,
    public formBuilder: FormBuilder,
    public alertifyService: AlertifyService,
    public authenticationService: AuthenticationService,
    public lookupValueService: LookupValueService,
    public referenceValueService: ReferenceValueService,
    public userService: UserService
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
    this.pageIcon = UserProfileConfiguration.pageIcon;
    this.pageTitle = UserProfileConfiguration.pageTitle;
    this.pageName = UserProfileConfiguration.pageName;
    this.dataService = UserService;
    this.entityName = UserProfileConfiguration.identifier;
    this.sourceDataColumns = UserProfileConfiguration.dataColumns;
    this.selected = this.currentUser;
    this.setDataSourceColumns();
  }
  ngOnInit() {
    this.action = `Edit`;
    this.initFormGroupAndFields();
    this.fieldsPersonalDetails = this.dataSourceColumns.filter(
      (column) => column.id >= 1 && column.id <= 21
    );
    this.fieldsContactDetails = this.dataSourceColumns.filter(
      (column) => column.id >= 22 && column.id <= 40
    );
    this.fieldsUserAccountDetails = this.dataSourceColumns.filter(
      (column) => column.id >= 41
    );
  }
  canShow(column: DataColumn) {
    switch (this.currentUserType) {
      default:
        return true;
    }
  }
  fieldDisabled(column: DataColumn) {
    switch (column.name) {
      case 'IsAdmin':
      case 'IsLocked':
        return true;
      default:
        return super.isFieldDisabled(column);
    }
  }
  fieldConditionalIsRequired(column: DataColumn) {
    switch (column.name) {
      case 'IsAdmin':
      case 'IsLocked':
        return null;
      default:
        return super.getFieldConditionalIsRequired(column);
    }
  }
}
