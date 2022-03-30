import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import {
  MatDialog,
  MAT_DIALOG_DEFAULT_OPTIONS,
} from '@angular/material/dialog';
import {
  PageComponent,
  ReferenceValueService,
} from 'app/modules/_shared/app-modules-shared.module';
import {
  AlertifyService,
  AuthenticationService,
  Employee,
  LookupValueService,
} from 'app/shared/app-shared.module';
import { EmployeeConfiguration } from './services/employee-configuration';
import { EmployeesService } from './services/employees.service';
import { first } from 'rxjs/operators';

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
    this.pageIcon = EmployeeConfiguration.pageIcon;
    this.pageTitle = EmployeeConfiguration.pageTitle;
    this.pageName = EmployeeConfiguration.pageName;
    this.dataService = employeesService;
    this.entityName = EmployeeConfiguration.identifier;
    this.dataSourceColumns = EmployeeConfiguration.dataColumns;
  }

  onButtonClickEmployeeTerminateReInstate(employee: any, index?: number) {
    if (employee && employee.element) {
      employee.element.IsActive = !employee.element.IsActive;
      employee.element.IsTerminated = !employee.element.IsTerminated;
      employee.element.DateTerminated =
        employee.element.IsTerminated === true ? new Date() : null;
      this.dataService
        .CreateUpdateDelete<Employee>(`Update`, employee.element)
        .pipe(first())
        .subscribe({
          next: (updated) => {
            this.alertifyService.success(
              `Employee ${(updated?.IsTerminated) ? `termination` : `re-instatement`} completed, successfully`
            );
          },
          complete: () => {
            this.onDataRefresh();
          },
          error: (error) => {
            this.alertifyService.error(error.message || error);
          },
        });
    }
  }
}
