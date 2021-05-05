import { Component } from '@angular/core';
import { MatDialog, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { PageComponent } from 'app/modules/_shared/modules-shared.module';
import { EmployeesConfiguration } from './employees-configuration';
import { EmployeesService } from './services/employees.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
  providers: [
    EmployeesService,
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { }}
  ]
})
export class EmployeesComponent extends PageComponent {

  constructor(
    public matDialog: MatDialog,
    public employeesService: EmployeesService
    ) {
      super(matDialog);
      this.pageIcon = EmployeesConfiguration.pageIcon;
      this.pageTitle = EmployeesConfiguration.pageTitle;
      this.pageName = EmployeesConfiguration.pageName;
      this.dataService = employeesService;
      this.entityName = EmployeesConfiguration.identifier;
      this.sourceDataColumnNames = EmployeesConfiguration.fieldNames;
      // this.sourceData = employeesService.getAll<Employee>();
  }

}
