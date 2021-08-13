import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BaseAssignment } from './domain-models/base/base-assignment';
import { BaseComment } from './domain-models/base/base-comment';
import { BaseModel } from './domain-models/base/base-model';
import { BaseWorkLog } from './domain-models/base/base-work-log';

import { LookupService } from './services/lookup-service/lookup.service';
import { DataService } from './services/data-service/data.service';
import { SortingService } from './services/sorting-service/sorting.service';
import { LookupCategoryService } from './services/lookup-service/lookup-category-service/lookup-category.service';
import { LookupValueService } from './services/lookup-service/lookup-value-service/lookup-value.service';
import { AuthenticationService } from './services/authentication-service/authentication.service';
import { AuthenticationGuardService } from './services/authentication-guard-service/authentication-guard.service';
import { AlertifyService } from './services/alertify-service/alertify.service';

import { SharedConfiguration } from './configuration/shared-configuration';
import { ResponseResult } from './domain-models/http/response-result';
import { AuthenticationResult } from './domain-models/http/authentication-result';
import { DataColumn } from './domain-models/data-column';
import { FileDragDropDirective } from './components/file-upload-component/file-upload-directive/file-drag-drop.directive';
import { FileUploadComponent } from './components/file-upload-component/file-upload.component';
import { FileAttachment } from './domain-models/file-attachment';
import { FileSizePipe } from './utilities/filesize.pipe';
import { FileAttachmentService } from './services/file-attachment-service/file-attachment.service';
import { CalendarDay } from './domain-models/scheduling/calendar-day';
import { PreviousOrNext } from './utilities/enum-previous-next';
import { ChunkPipe } from './utilities/chunk-pipe';

export { CommonComponent } from './components/common-component/common/common.component';
export { FileDragDropDirective } from './components/file-upload-component/file-upload-directive/file-drag-drop.directive';
export { FileUploadComponent } from './components/file-upload-component/file-upload.component';
export { FileAttachment } from './domain-models/file-attachment';
export { FileSizePipe } from './utilities/filesize.pipe';
export { CalendarDay } from './domain-models/scheduling/calendar-day';
export { PreviousOrNext } from './utilities/enum-previous-next';
export { ChunkPipe } from './utilities/chunk-pipe';

export { SharedConfiguration } from './configuration/shared-configuration';
export { ResponseResult } from './domain-models/http/response-result';
export { AuthenticationResult } from './domain-models/http/authentication-result';
export { DataColumn } from './domain-models/data-column';

export { Client } from './domain-models/client/client';
export { EmployeeSalary } from './domain-models/employee/employee-salary';
export { Employee } from './domain-models/employee/employee';
export { InboxMessage } from './domain-models/user/inbox-message';
export { LookupCategory } from './domain-models/lookup-models/lookup-category';
export { LookupValue } from './domain-models/lookup-models/lookup-value';
export { NotificationMessage } from './domain-models/user/notification-message';
export { MeetingCalendar } from './domain-models/scheduling/meeting-calendar';
export { ProjectAssignment } from './domain-models/project/project-assignment';
export { ProjectComment } from './domain-models/project/project-comment';
export { ProjectStatus } from './domain-models/project/project-status';
export { ProjectWorkLog } from './domain-models/project/project-work-log';
export { Project } from './domain-models/project/project';
export { Supplier } from './domain-models/supplier/supplier';
export { TaskAssignment } from './domain-models/task/task-assignment';
export { TaskComment } from './domain-models/task/task-comment';
export { TaskStatus } from './domain-models/task/task-status';
export { TaskWorkLog } from './domain-models/task/task-work-log';
export { Task } from './domain-models/task/task';
export { SortParametersFor } from './types/classes/sort-parameters-for';
export { SortParameters } from './types/classes/sort-parameters';
export { RouteInfo } from './types/interfaces/route-info';
export { User } from './domain-models/user/user';

export { EmployeesUtil } from './utilities/employees-util';
export { DateUtils } from './utilities/date-utils';
export { GeneralUtils } from './utilities/general-utils';

export { BaseService } from './services/base-service/base.service';
export { AuthenticationService } from './services/authentication-service/authentication.service';
export { AuthenticationGuardService } from './services/authentication-guard-service/authentication-guard.service';
export { DataService } from './services/data-service/data.service';
export { SortingService } from './services/sorting-service/sorting.service';
export { LookupService } from './services/lookup-service/lookup.service';
export { LookupCategoryService } from './services/lookup-service/lookup-category-service/lookup-category.service';
export { LookupValueService } from './services/lookup-service/lookup-value-service/lookup-value.service';
export { AlertifyService } from './services/alertify-service/alertify.service';
export { FileAttachmentService } from './services/file-attachment-service/file-attachment.service';

@NgModule({
  imports: [CommonModule],
  providers: [
    AuthenticationService,
    AuthenticationGuardService,
    DataService,
    SortingService,
    LookupService,
    LookupCategoryService,
    LookupValueService,
    AlertifyService
  ],
  declarations: [],
  exports: []
})
export class SharedModule {}
