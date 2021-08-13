import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuppliersConfiguration } from './suppliers-configuration';
import { SuppliersComponent } from './suppliers.component';
import { SharedModulesModule } from '../_shared/shared-modules.module';
import { SuppliersService } from './services/suppliers.service';
import { SupplierComponent } from './components/supplier/supplier.component';

export { SuppliersConfiguration } from './suppliers-configuration';
export { SuppliersComponent } from './suppliers.component';
export { SupplierComponent } from './components/supplier/supplier.component';

export { SuppliersService } from './services/suppliers.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModulesModule
  ],
  declarations: [
    SuppliersComponent,
    SupplierComponent
  ],
  exports: [
    SuppliersConfiguration,
    SuppliersComponent
  ],
  providers: [
    SuppliersService
  ]
})
export class SuppliersModule { }
