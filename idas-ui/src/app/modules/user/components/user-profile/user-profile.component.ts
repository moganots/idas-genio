import { Component, OnInit } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DEFAULT_OPTIONS,
} from '@angular/material/dialog';
import {
  AlertifyService,
  AuthenticationService,
  DataColumn,
  Employee,
  GeneralUtils,
  LookupValue,
  LookupValueService,
} from 'app/shared/shared.module';
import { UserProfileConfiguration } from './user-profile-configuration';
import { UsersService } from '../../services/users.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import {
  PageComponent,
  ReferenceValueService,
} from 'app/modules/_shared/shared-modules.module';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
  providers: [
    AlertifyService,
    AuthenticationService,
    LookupValueService,
    ReferenceValueService,
    UsersService,
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
    public alertifyService: AlertifyService,
    public authenticationService: AuthenticationService,
    public lookupValueService: LookupValueService,
    public referenceValueService: ReferenceValueService,
    public usersService: UsersService,
    private frmBuilder: FormBuilder
  ) {
    super(
      router,
      matDialog,
      alertifyService,
      authenticationService,
      lookupValueService,
      referenceValueService
    );
    this.pageIcon = UserProfileConfiguration.pageIcon;
    this.pageTitle = UserProfileConfiguration.pageTitle;
    this.pageName = UserProfileConfiguration.pageName;
    this.dataService = usersService;
    this.entityName = UserProfileConfiguration.identifier;
    this.sourceDataColumns = UserProfileConfiguration.dataColumns;
  }
  ngOnInit() {
    this.action = `Edit`;
    this.setDataSourceColumns();
    this.initFormGroupAndFields(null);
    if (GeneralUtils.isObjectSet(this.currentUser)) {
      this.lookupValueService
        .getAll<LookupValue>()
        .toPromise()
        .then((lookupValues) => {
          this.referenceValueService.employeesService
            .getAll<Employee>()
            .toPromise()
            .then((employees) => {
              this.dataSourceColumns
                .filter((dsc) => dsc.controlType === 'select')
                .forEach((dsc) => {
                  const searchValue = {
                    cesValue: (this.currentUser.Client ||
                      this.currentUser.Employee ||
                      this.currentUser.Supplier ||
                      {})[dsc.name],
                    cdValue: (this.currentUser.ContactDetail || {})[dsc.name],
                    uValue: this.currentUser[dsc.name],
                  };
                  // tslint:disable-next-line:radix
                  const searchBy =
                    searchValue.cesValue ||
                      searchValue.cdValue ||
                      searchValue.uValue;
                  let displayValue = searchBy;
                  switch (dsc.selectOptionControlType) {
                    // tslint:disable-next-line:radix
                    case 'lookupIcon':
                    case 'lookupImage':
                    case 'lookupValue':
                      displayValue = (
                        lookupValues.find(
                          // tslint:disable-next-line:radix
                          (lv) => lv._id === parseInt(searchBy)
                        ) || {}
                      ).Value;
                      break;
                    case 'referenceValue':
                      displayValue = (
                        // tslint:disable-next-line:radix
                        employees.find((e) => e._id === parseInt(searchBy)) ||
                        {}
                      ).DisplayName;
                      break;
                  }
                  this.frmGroupFields.controls[dsc.name].setValue(displayValue);
                });
            });
        });
    }
    this.frmGroup = this.frmBuilder.group({
      frmFields: this.frmGroupFields,
    });
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
