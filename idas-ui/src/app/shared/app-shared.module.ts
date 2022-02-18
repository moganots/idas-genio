import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/**
 * Shared Components
 */
import { AppSharedComponentsModule } from './components/app-shared-components.module';

export { AppSharedComponentsModule } from './components/app-shared-components.module';

export { SharedConfiguration } from './configuration/shared-configuration';

export { BaseModel } from './domain-models/base/base-model';
export { BaseAssignment } from './domain-models/base/base-assignment';
export { BaseComment } from './domain-models/base/base-comment';
export { BaseWorklog } from './domain-models/base/base-worklog';
export { Entity } from './domain-models/base/entity';

export { User } from './domain-models/user/user';
export { ContactDetail } from './domain-models/user/contact-detail';
export { InboxMessage } from './domain-models/user/inbox-message';
export { NotificationMessage } from './domain-models/user/notification-message';

export { LookupCategory } from './domain-models/lookups/lookup-category';
export { LookupValue } from './domain-models/lookups/lookup-value';

export { Client } from './domain-models/client/client';

export { Employee } from './domain-models/employee/employee';
export { EmployeeSalary } from './domain-models/employee/employee-salary';

export { Supplier } from './domain-models/supplier/supplier';

export { Project } from './domain-models/project/project';
export { ProjectAssignment } from './domain-models/project/project-assignment';
export { ProjectComment } from './domain-models/project/project-comment';
export { ProjectReview } from './domain-models/project/project-review';
export { ProjectStatus } from './domain-models/project/project-status';
export { ProjectWorklog } from './domain-models/project/project-worklog';

export { Task } from './domain-models/task/task';
export { TaskAssignment } from './domain-models/task/task-assignment';
export { TaskComment } from './domain-models/task/task-comment';
export { TaskReview } from './domain-models/task/task-review';
export { TaskStatus } from './domain-models/task/task-status';
export { TaskWorklog } from './domain-models/task/task-worklog';

export { CalendarDay } from './domain-models/scheduling/calendar-day';
export { CalendarEvent } from './domain-models/scheduling/calendar-event';
export { CalendarEventAttendee } from './domain-models/scheduling/calendar-event-attendee';

export { AuthenticationResult } from './domain-models/http/authentication-result';
export { ResponseResult } from './domain-models/http/response-result';

export { DataColumn } from './domain-models/data-column';
export { FileAttachment } from './domain-models/file-attachment';

import { AlertifyService } from './services/alertify-service/alertify.service';
import { AuthenticationGuardService } from './services/authentication-guard-service/authentication-guard.service';
import { AuthenticationService } from './services/authentication-service/authentication.service';
import { DataService } from './services/data-service/data.service';
import { FileAttachmentService } from './services/file-attachment-service/file-attachment.service';
import { LookupCategoryService } from './services/lookup-category-service/lookup-category.service';
import { LookupValueService } from './services/lookup-value-service/lookup-value.service';
import { SortingService } from './services/sorting-service/sorting.service';

export { BaseService } from './services/base-service/base.service';
export { AlertifyService } from './services/alertify-service/alertify.service';
export { AuthenticationGuardService } from './services/authentication-guard-service/authentication-guard.service';
export { AuthenticationService } from './services/authentication-service/authentication.service';
export { DataService } from './services/data-service/data.service';
export { FileAttachmentService } from './services/file-attachment-service/file-attachment.service';
export { LookupCategoryService } from './services/lookup-category-service/lookup-category.service';
export { LookupValueService } from './services/lookup-value-service/lookup-value.service';
export { SortingService } from './services/sorting-service/sorting.service';

export { SortParameters } from './types/classes/sort-parameters';
export { SortParametersFor } from './types/classes/sort-parameters-for';
export { LookupValuesFilterByCategoryId } from './types/interfaces/lookup-values-filter-by-category-id';
export { LookupValuesFilterByCategoryName } from './types/interfaces/lookup-values-filter-by-category-name';
export { RouteInfo } from './types/interfaces/route-info';

import { FileSizePipe } from './utilities/filesize.pipe';

export { AuthenticationUtils } from './utilities/authentication-utils';
export { DateUtils } from './utilities/date-utils';
export { DefaultObjectUtil } from './utilities/default-object-util';
export { EmployeesUtil } from './utilities/employees-util';
export { PreviousOrNext } from './utilities/enum-previous-next';
export { FileSizePipe } from './utilities/filesize.pipe';
export { GeneralUtils } from './utilities/general-utils';
export { DataColumnUtils } from './utilities/data-column-utils';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [],
  providers: [
    DatePipe,
    AlertifyService,
    AuthenticationGuardService,
    AuthenticationService,
    DataService,
    FileAttachmentService,
    LookupCategoryService,
    LookupValueService,
    SortingService,
    FileSizePipe,
  ],
  exports: [AppSharedComponentsModule],
})
export class AppSharedModule {}
