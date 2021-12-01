import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppModulesSharedModule } from '../_shared/app-modules-shared.module';
import { AppSharedModule } from 'app/shared/app-shared.module';

import { ClientsConfiguration } from './clients-configuration';
import { ClientsComponent } from './clients.component';
import { ClientsService } from './services/clients.service';
import { ClientComponent } from './components/client/client.component';

export { ClientsConfiguration } from './clients-configuration';
export { ClientsComponent } from './clients.component';
export { ClientComponent } from './components/client/client.component';

export { ClientsService } from './services/clients.service';

@NgModule({
  imports: [
    CommonModule,
    AppModulesSharedModule,
    AppSharedModule
  ],
  declarations: [
    ClientsComponent,
    ClientComponent
  ],
  exports: [
    ClientsConfiguration,
    ClientsComponent
  ],
  providers: [
    ClientsService
  ]
})
export class AppModulesClientsModule { }
