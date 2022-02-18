import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppModulesSharedModule } from '../_shared/app-modules-shared.module';
import { AppSharedModule } from 'app/shared/app-shared.module';

import { SuppliersComponent } from './suppliers.component';
import { SuppliersService } from './services/suppliers.service';
import { SupplierComponent } from './components/supplier/supplier.component';

export { SupplierConfiguration } from './services/supplier-configuration';
export { SuppliersComponent } from './suppliers.component';
export { SupplierComponent } from './components/supplier/supplier.component';

export { SuppliersService } from './services/suppliers.service';

@NgModule({
  imports: [
    CommonModule,
    AppModulesSharedModule,
    AppSharedModule
  ],
  declarations: [
    SuppliersComponent,
    SupplierComponent
  ],
  exports: [
    SuppliersComponent
  ],
  providers: [
    SuppliersService
  ]
})
export class AppModulesSuppliersModule { }
