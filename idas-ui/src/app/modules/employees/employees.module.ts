import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesConfiguration } from './employees-configuration';
import { EmployeesComponent } from './employees.component';
import { ModulesSharedModule } from '../_shared/modules-shared.module';

export { EmployeesConfiguration } from './employees-configuration';
export { EmployeesComponent } from './employees.component';

@NgModule({
  imports: [
    CommonModule,
    ModulesSharedModule
  ],
  declarations: [
    EmployeesComponent
  ],
  exports: [
    EmployeesConfiguration,
    EmployeesComponent
  ]
})
export class EmployeesModule { }
