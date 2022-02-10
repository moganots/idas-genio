import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonComponent } from './common/common.component';
import { FileUploadComponent } from './file-upload/components/file-upload-component/file-upload.component';

import { AppSharedComponentsCalendarModule } from './calendar/app-shared-components-calendar.module';
import { FileDragDropDirective } from './file-upload/directives/file-drag-drop/file-drag-drop.directive';

export { CommonComponent } from './common/common.component';
export { FileUploadComponent } from './file-upload/components/file-upload-component/file-upload.component';
export { FileDragDropDirective } from './file-upload/directives/file-drag-drop/file-drag-drop.directive';

export { AppSharedComponentsCalendarModule } from './calendar/app-shared-components-calendar.module';

@NgModule({
  declarations: [CommonComponent, FileUploadComponent, FileDragDropDirective],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [
    CommonComponent,
    FileUploadComponent,
    FileDragDropDirective,
    AppSharedComponentsCalendarModule,
  ],
})
export class AppSharedComponentsModule {}
