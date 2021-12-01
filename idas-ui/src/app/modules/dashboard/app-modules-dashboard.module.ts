import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';

import { AppModulesSharedModule } from '../_shared/app-modules-shared.module';
import { AppSharedModule } from 'app/shared/app-shared.module';

import { DashboardConfiguration } from './dashboard-configuration';
import { DashboardComponent } from './dashboard.component';
import { DashboardService } from './services/dashboard.service';

export { DashboardConfiguration } from './dashboard-configuration';
export { DashboardComponent } from './dashboard.component';

export { DashboardService } from './services/dashboard.service';

@NgModule({
  imports: [
    CommonModule,
    MatTooltipModule,
    AppModulesSharedModule,
    AppSharedModule
  ],
  declarations: [
    DashboardComponent
  ],
  exports: [
    DashboardConfiguration,
    DashboardComponent
  ],
  providers: [
    DashboardService
  ]
})
export class AppModulesDashboardModule { }
