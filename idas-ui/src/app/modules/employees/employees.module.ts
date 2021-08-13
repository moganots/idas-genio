import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesConfiguration } from './employees-configuration';
import { EmployeesComponent } from './employees.component';
import { SharedModulesModule } from '../_shared/shared-modules.module';
import { EmployeesService } from './services/employees.service';
import { EmployeeComponent } from './components/employee/employee.component';

export { EmployeesConfiguration } from './employees-configuration';
export { EmployeesComponent } from './employees.component';
export { EmployeeComponent } from './components/employee/employee.component';

export { EmployeesService } from './services/employees.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModulesModule
  ],
  declarations: [
    EmployeesComponent,
    EmployeeComponent
  ],
  exports: [
    EmployeesConfiguration,
    EmployeesComponent
  ],
  providers: [
    EmployeesService
  ]
})
export class EmployeesModule { }
