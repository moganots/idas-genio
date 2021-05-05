import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';

import { DashboardConfiguration } from './dashboard-configuration';
import { DashboardComponent } from './dashboard.component';

export { DashboardConfiguration } from './dashboard-configuration';
export { DashboardComponent } from './dashboard.component';

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
  ]
})
export class DashboardModule { }
