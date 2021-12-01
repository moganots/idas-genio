import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {
  MatDialog,
  MAT_DIALOG_DEFAULT_OPTIONS,
} from '@angular/material/dialog';
import { Router } from '@angular/router';
import {
  PageComponent,
  ReferenceValueService,
} from 'app/modules/_shared/app-modules-shared.module';
import {
  AlertifyService,
  AuthenticationService,
  LookupValueService,
} from 'app/shared/app-shared.module';
import { EmployeesConfiguration } from './employees-configuration';
import { EmployeesService } from './services/employees.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
  providers: [
    AlertifyService,
    AuthenticationService,
    LookupValueService,
    ReferenceValueService,
    EmployeesService,
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {} },
  ],
})
export class EmployeesComponent extends PageComponent implements OnInit {
  constructor(
    public router: Router,
    public matDialog: MatDialog,
    public formBuilder: FormBuilder,
    public alertifyService: AlertifyService,
    public authenticationService: AuthenticationService,
    public lookupValueService: LookupValueService,
    public referenceValueService: ReferenceValueService,
    public employeesService: EmployeesService
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
    this.pageIcon = EmployeesConfiguration.pageIcon;
    this.pageTitle = EmployeesConfiguration.pageTitle;
    this.pageName = EmployeesConfiguration.pageName;
    this.dataService = employeesService;
    this.entityName = EmployeesConfiguration.identifier;
    this.sourceDataColumns = EmployeesConfiguration.dataColumns;
  }
}
