import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ClientsModule } from './clients/clients.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { EmployeesModule } from './employees/employees.module';
import { SuppliersModule } from './suppliers/suppliers.module';
import { UsersModule } from './user/users.module';

export { ClientsModule } from './clients/clients.module';
export { DashboardModule } from './dashboard/dashboard.module';
export { EmployeesModule } from './employees/employees.module';
export { SuppliersModule } from './suppliers/suppliers.module';
export { UsersModule } from './user/users.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ClientsModule,
    DashboardModule,
    EmployeesModule,
    SuppliersModule,
    UsersModule
  ],
  declarations: [],
  exports: [
    ClientsModule,
    DashboardModule,
    EmployeesModule,
    SuppliersModule,
    UsersModule
  ]
})
export class ModulesModule { }
