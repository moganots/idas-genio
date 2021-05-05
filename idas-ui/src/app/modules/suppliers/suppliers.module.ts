import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuppliersConfiguration } from './suppliers-configuration';
import { SuppliersComponent } from './suppliers.component';
import { ModulesSharedModule } from '../_shared/modules-shared.module';

export { SuppliersConfiguration } from './suppliers-configuration';
export { SuppliersComponent } from './suppliers.component';

@NgModule({
  imports: [
    CommonModule,
    ModulesSharedModule
  ],
  declarations: [
    SuppliersComponent
  ],
  exports: [
    SuppliersConfiguration,
    SuppliersComponent
  ]
})
export class SuppliersModule { }
