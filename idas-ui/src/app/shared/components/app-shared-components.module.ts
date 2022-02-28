import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonComponent } from './common/common.component';
import { FileUploadComponent } from './file-upload/components/file-upload-component/file-upload.component';

import { AppSharedComponentsCalendarModule } from './calendar/app-shared-components-calendar.module';
import { FileDragDropDirective } from './file-upload/directives/file-drag-drop/file-drag-drop.directive';
import { CommonSwitchCaseDataInputComponent } from './common-switch-case-data-input/common-switch-case-data-input.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NgxMatDatetimePickerModule, NgxMatTimepickerModule } from '@angular-material-components/datetime-picker';
import { NgxMatMomentModule } from '@angular-material-components/moment-adapter';
import { MatDatepickerModule } from '@angular/material/datepicker';

export { CommonComponent } from './common/common.component';
export { FileUploadComponent } from './file-upload/components/file-upload-component/file-upload.component';
export { FileDragDropDirective } from './file-upload/directives/file-drag-drop/file-drag-drop.directive';
export { CommonSwitchCaseDataInputComponent } from './common-switch-case-data-input/common-switch-case-data-input.component';

export { AppSharedComponentsCalendarModule } from './calendar/app-shared-components-calendar.module';

@NgModule({
  declarations: [
    CommonComponent,
    FileUploadComponent,
    FileDragDropDirective,
    CommonSwitchCaseDataInputComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatDatepickerModule,
    NgxMatDatetimePickerModule,
    NgxMatTimepickerModule,
    NgxMatMomentModule,
  ],
  exports: [
    CommonComponent,
    FileUploadComponent,
    FileDragDropDirective,
    CommonSwitchCaseDataInputComponent,
    AppSharedComponentsCalendarModule,
  ],
})
export class AppSharedComponentsModule {}
