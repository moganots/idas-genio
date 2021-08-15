import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';

import { ClientsModule } from './clients/clients.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { EmployeesModule } from './employees/employees.module';
import { ProjectsModule } from './projects/projects.module';
import { SuppliersModule } from './suppliers/suppliers.module';
import { UsersModule } from './user/users.module';
import { SharedModulesModule } from './_shared/shared-modules.module';

export { ClientsModule } from './clients/clients.module';
export { DashboardModule } from './dashboard/dashboard.module';
export { EmployeesModule } from './employees/employees.module';
export { ProjectsModule } from './projects/projects.module';
export { SuppliersModule } from './suppliers/suppliers.module';
export { UsersModule } from './user/users.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModulesModule,
    SharedModule,
    ClientsModule,
    DashboardModule,
    EmployeesModule,
    ProjectsModule,
    SuppliersModule,
    UsersModule
  ],
  declarations: [],
  exports: []
})
export class ModulesModule { }
