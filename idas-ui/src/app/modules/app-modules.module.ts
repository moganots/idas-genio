import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppSharedModule } from 'app/shared/app-shared.module';

import { AppModulesClientsModule } from './clients/app-modules-clients.module';
import { AppModulesDashboardModule } from './dashboard/app-modules-dashboard.module';
import { AppModulesEmployeesModule } from './employees/app-modules-employees.module';
import { AppModulesProjectsModule } from './projects/app-modules-projects.module';
import { AppModulesSuppliersModule } from './suppliers/app-modules-suppliers.module';
import { AppModulesUsersModule } from './user/app-modules-users.module';
import { AppModulesSharedModule } from './_shared/app-modules-shared.module';

export { AppModulesClientsModule } from './clients/app-modules-clients.module';
export { AppModulesDashboardModule } from './dashboard/app-modules-dashboard.module';
export { AppModulesEmployeesModule } from './employees/app-modules-employees.module';
export { AppModulesProjectsModule } from './projects/app-modules-projects.module';
export { AppModulesSuppliersModule } from './suppliers/app-modules-suppliers.module';
export { AppModulesUsersModule } from './user/app-modules-users.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AppSharedModule,
    AppModulesSharedModule,
    AppModulesClientsModule,
    AppModulesDashboardModule,
    AppModulesEmployeesModule,
    AppModulesProjectsModule,
    AppModulesSuppliersModule,
    AppModulesUsersModule
  ],
  declarations: [],
  exports: []
})
export class AppModulesModule { }
