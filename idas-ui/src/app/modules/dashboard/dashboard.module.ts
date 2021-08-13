import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';

import { DashboardConfiguration } from './dashboard-configuration';
import { DashboardComponent } from './dashboard.component';
import { DashboardService } from './services/dashboard.service';

export { DashboardConfiguration } from './dashboard-configuration';
export { DashboardComponent } from './dashboard.component';

export { DashboardService } from './services/dashboard.service';

@NgModule({
  imports: [
    CommonModule,
    MatTooltipModule
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
export class DashboardModule { }
