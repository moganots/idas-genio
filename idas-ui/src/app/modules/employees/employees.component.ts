import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialog, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PageComponent } from 'app/modules/_shared/modules-shared.module';
import { AuthenticationService } from 'app/shared/shared.module';
import { EmployeesConfiguration } from './employees-configuration';
import { EmployeesService } from './services/employees.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
  providers: [
    AuthenticationService,
    EmployeesService,
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { }}
  ]
})
export class EmployeesComponent extends PageComponent {

  constructor(
    public location: Location,
    public router: Router,
    public matDialog: MatDialog,
    public authenticationService: AuthenticationService,
    public employeesService: EmployeesService
    ) {
      super(location, router, matDialog, authenticationService);
      this.pageIcon = EmployeesConfiguration.pageIcon;
      this.pageTitle = EmployeesConfiguration.pageTitle;
      this.pageName = EmployeesConfiguration.pageName;
      this.dataService = employeesService;
      this.entityName = EmployeesConfiguration.identifier;
      this.sourceDataColumnNames = EmployeesConfiguration.fieldNames;
      // this.sourceData = employeesService.getAll<Employee>();
  }

}
