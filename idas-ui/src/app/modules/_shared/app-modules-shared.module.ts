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
import { BaseDataComponent } from './components/base-data-component/base-data.component';
import { BaseDataViewComponent } from './components/data-view/base-data-view/base-data-view.component';
import { DataViewTableSimpleComponent } from './components/data-view/data-view-table-simple/data-view-table-simple.component';
import { BaseDialogComponent } from './components/dialogs/base-dialog/base-dialog.component';
import { DialogCreateEditDataComponent } from './components/dialogs/dialog-create-edit-data/dialog-create-edit-data.component';
import { MetricDetailComponent } from './components/metric-detail/metric-detail.component';
import { PageHeaderComponent } from './components/page/page-header/page-header.component';
import { PageComponent } from './components/page/page.component';
import { DialogHeaderComponent } from './components/dialogs/dialog-header/dialog-header.component';

import { ReferenceValueService } from './services/reference-value-service/reference-value.service';

export { BaseComponent } from './components/base-component/base.component';
export { BaseDataComponent } from './components/base-data-component/base-data.component';
export { BaseDataViewComponent } from './components/data-view/base-data-view/base-data-view.component';
export { DataViewTableSimpleComponent } from './components/data-view/data-view-table-simple/data-view-table-simple.component';
export { BaseDialogComponent } from './components/dialogs/base-dialog/base-dialog.component';
export { DialogCreateEditDataComponent } from './components/dialogs/dialog-create-edit-data/dialog-create-edit-data.component';
export { MetricDetailComponent } from './components/metric-detail/metric-detail.component';
export { PageHeaderComponent } from './components/page/page-header/page-header.component';
export { PageComponent } from './components/page/page.component';
export { DialogHeaderComponent } from './components/dialogs/dialog-header/dialog-header.component';

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
    BaseDataComponent,
    BaseDataViewComponent,
    DataViewTableSimpleComponent,
    BaseDialogComponent,
    DialogCreateEditDataComponent,
    PageComponent,
    PageHeaderComponent,
    MetricDetailComponent,
    DialogHeaderComponent
  ],
  entryComponents: [
    DialogCreateEditDataComponent,
    DialogHeaderComponent
  ],
  exports: [
    BaseComponent,
    BaseDataComponent,
    BaseDataViewComponent,
    DataViewTableSimpleComponent,
    BaseDialogComponent,
    DialogCreateEditDataComponent,
    PageComponent,
    PageHeaderComponent,
    MetricDetailComponent,
    DialogHeaderComponent
  ],
  providers: [
    ReferenceValueService
  ]
})
export class AppModulesSharedModule { }
