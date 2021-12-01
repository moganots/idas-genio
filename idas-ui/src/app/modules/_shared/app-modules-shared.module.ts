import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { AppSharedModule } from 'app/shared/app-shared.module';

import { BaseComponent } from './components/base-component/base.component';
import { BaseDataViewComponent } from './components/data-view/base-data-view/base-data-view.component';
import { BaseDialogComponent } from './components/dialogs/base-dialog/base-dialog.component';
import { DialogCreateEditDataComponent } from './components/dialogs/dialog-create-edit-data/dialog-create-edit-data.component';
import { PageComponent } from './components/page/page.component';
import { DataViewTableSimpleComponent } from './components/data-view/data-view-table-simple/data-view-table-simple.component';
import { BaseDataComponent } from './components/base-data-component/base-data.component';
import { MetricDetailComponent } from './components/metric-detail/metric-detail.component';
import { ReferenceValueService } from './services/reference-value-service/reference-value.service';

export { AppModulesSharedModuleConfiguration } from './shared-modules-configuration';

export { PageComponent } from './components/page/page.component';
export { DataViewTableSimpleComponent } from './components/data-view/data-view-table-simple/data-view-table-simple.component';
export { DialogCreateEditDataComponent } from './components/dialogs/dialog-create-edit-data/dialog-create-edit-data.component';

export { ReferenceValueService } from './services/reference-value-service/reference-value.service';

@NgModule({
  imports: [
    CommonModule,
    AppSharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatTableModule,
    MatSortModule,
    MatCheckboxModule,
    MatIconModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatSelectModule,
    MatPaginatorModule,
    MatDialogModule
  ],
  declarations: [
    BaseComponent,
    BaseDataViewComponent,
    DataViewTableSimpleComponent,
    BaseDialogComponent,
    DialogCreateEditDataComponent,
    PageComponent,
    BaseDataComponent,
    MetricDetailComponent
  ],
  entryComponents: [
    DialogCreateEditDataComponent
  ],
  exports: [
    DataViewTableSimpleComponent,
    DialogCreateEditDataComponent,
    PageComponent
  ],
  providers: [
    ReferenceValueService
  ]
})
export class AppModulesSharedModule { }
