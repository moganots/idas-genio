import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsConfiguration } from './clients-configuration';
import { ClientsComponent } from './clients.component';
import { ModulesSharedModule } from '../_shared/modules-shared.module';

export { ClientsConfiguration } from './clients-configuration';
export { ClientsComponent } from './clients.component';

@NgModule({
  imports: [
    CommonModule,
    ModulesSharedModule
  ],
  declarations: [
    ClientsComponent
  ],
  exports: [
    ClientsConfiguration,
    ClientsComponent
  ]
})
export class ClientsModule { }
