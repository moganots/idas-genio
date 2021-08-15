import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';

/**
 * Shared Components
 */
import { CommonComponent } from './components/common-component/common/common.component';
import { FileUploadComponent } from './components/file-upload-component/file-upload.component';

export { CommonComponent } from './components/common-component/common/common.component';
export { FileUploadComponent } from './components/file-upload-component/file-upload.component';

/**
 * Shared Components - Calendar
 */
 import { CalendarConfiguration } from './components/calendar/shared/calendar-configuration/calendar-configuration';
 import { ViewByOption } from './components/calendar/shared/calendar-interfaces/view-by-option';
 import { ViewNavOption } from './components/calendar/shared/calendar-interfaces/view-nav-option';
 import { CalendarService } from './components/calendar/shared/calendar-service/calendar.service';
 import { CalendarViewByComponent } from './components/calendar/shared/components/calendar-view-by/calendar-view-by.component';
 import { CalendarToolbarComponent } from './components/calendar/shared/calendar-toolbar/calendar-toolbar.component';
 import { CalendarViewByMonthComponent } from './components/calendar/calendar-view-by-month/calendar-view-by-month.component';
 import { CalendarViewByWeekComponent } from './components/calendar/calendar-view-by-week/calendar-view-by-week.component';
 import { CalendarViewByWorkWeekComponent } from './components/calendar/calendar-view-by-work-week/calendar-view-by-work-week.component';
 import { CalendarViewByDayComponent } from './components/calendar/calendar-view-by-day/calendar-view-by-day.component';

 export { CalendarConfiguration } from './components/calendar/shared/calendar-configuration/calendar-configuration';
 export { ViewByOption } from './components/calendar/shared/calendar-interfaces/view-by-option';
 export { ViewNavOption } from './components/calendar/shared/calendar-interfaces/view-nav-option';
 export { CalendarService } from './components/calendar/shared/calendar-service/calendar.service';
 export { CalendarViewByComponent } from './components/calendar/shared/components/calendar-view-by/calendar-view-by.component';
 export { CalendarToolbarComponent } from './components/calendar/shared/calendar-toolbar/calendar-toolbar.component';
 export { CalendarViewByMonthComponent } from './components/calendar/calendar-view-by-month/calendar-view-by-month.component';
 export { CalendarViewByWeekComponent } from './components/calendar/calendar-view-by-week/calendar-view-by-week.component';
 export { CalendarViewByWorkWeekComponent } from './components/calendar/calendar-view-by-work-week/calendar-view-by-work-week.component';
 export { CalendarViewByDayComponent } from './components/calendar/calendar-view-by-day/calendar-view-by-day.component';

/**
 * Shared Configuration
 */
import { SharedConfiguration } from './configuration/shared-configuration';

export { SharedConfiguration } from './configuration/shared-configuration';

/**
 * Shared Domain Models - Base
 */
import { BaseModel } from './domain-models/base/base-model';
import { BaseAssignment } from './domain-models/base/base-assignment';
import { BaseComment } from './domain-models/base/base-comment';
import { BaseWorkLog } from './domain-models/base/base-work-log';
import { Entity } from './domain-models/base/entity';

export { BaseModel } from './domain-models/base/base-model';
export { BaseAssignment } from './domain-models/base/base-assignment';
export { BaseComment } from './domain-models/base/base-comment';
export { BaseWorkLog } from './domain-models/base/base-work-log';
export { Entity } from './domain-models/base/entity';

/**
 * Shared Domain Models - User
 */
import { User } from './domain-models/user/user';
import { ContactDetail } from './domain-models/user/contact-detail';
import { InboxMessage } from './domain-models/user/inbox-message';
import { NotificationMessage } from './domain-models/user/notification-message';

export { User } from './domain-models/user/user';
export { ContactDetail } from './domain-models/user/contact-detail';
export { InboxMessage } from './domain-models/user/inbox-message';
export { NotificationMessage } from './domain-models/user/notification-message';

/**
 * Shared Domain Models - Lookups
 */
import { LookupCategory } from './domain-models/lookups/lookup-category';
import { LookupValue } from './domain-models/lookups/lookup-value';

export { LookupCategory } from './domain-models/lookups/lookup-category';
export { LookupValue } from './domain-models/lookups/lookup-value';

/**
 * Shared Domain Models - Client
 */
import { Client } from './domain-models/client/client';

export { Client } from './domain-models/client/client';

/**
 * Shared Domain Models - Employee
 */
import { Employee } from './domain-models/employee/employee';
import { EmployeeSalary } from './domain-models/employee/employee-salary';

export { Employee } from './domain-models/employee/employee';
export { EmployeeSalary } from './domain-models/employee/employee-salary';

/**
 * Shared Domain Models - Supplier
 */
import { Supplier } from './domain-models/supplier/supplier';

export { Supplier } from './domain-models/supplier/supplier';

/**
 * Shared Domain Models - Project
 */
import { Project } from './domain-models/project/project';
import { ProjectAssignment } from './domain-models/project/project-assignment';
import { ProjectComment } from './domain-models/project/project-comment';
import { ProjectStatus } from './domain-models/project/project-status';
import { ProjectWorkLog } from './domain-models/project/project-work-log';

export { Project } from './domain-models/project/project';
export { ProjectAssignment } from './domain-models/project/project-assignment';
export { ProjectComment } from './domain-models/project/project-comment';
export { ProjectStatus } from './domain-models/project/project-status';
export { ProjectWorkLog } from './domain-models/project/project-work-log';

/**
 * Shared Domain Models - Task
 */
import { Task } from './domain-models/task/task';
import { TaskAssignment } from './domain-models/task/task-assignment';
import { TaskComment } from './domain-models/task/task-comment';
import { TaskStatus } from './domain-models/task/task-status';
import { TaskWorkLog } from './domain-models/task/task-work-log';

export { Task } from './domain-models/task/task';
export { TaskAssignment } from './domain-models/task/task-assignment';
export { TaskComment } from './domain-models/task/task-comment';
export { TaskStatus } from './domain-models/task/task-status';
export { TaskWorkLog } from './domain-models/task/task-work-log';

/**
 * Shared Domain Models - Scheduling
 */
import { CalendarDay } from './domain-models/scheduling/calendar-day';
import { CalendarEvent } from './domain-models/scheduling/calendar-event';

export { CalendarDay } from './domain-models/scheduling/calendar-day';
export { CalendarEvent } from './domain-models/scheduling/calendar-event';

/**
 * Shared Domain Models - Http
 */
import { AuthenticationResult } from './domain-models/http/authentication-result';
import { ResponseResult } from './domain-models/http/response-result';

export { AuthenticationResult } from './domain-models/http/authentication-result';
export { ResponseResult } from './domain-models/http/response-result';

/**
 * Shared Domain Models
 */
import { DataColumn } from './domain-models/data-column';
import { FileAttachment } from './domain-models/file-attachment';

export { DataColumn } from './domain-models/data-column';
export { FileAttachment } from './domain-models/file-attachment';

/**
 * Shared Services
 */
import { BaseService } from './services/base-service/base.service';
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

/**
 * Shared Types
 */
import { SortParameters } from './types/classes/sort-parameters';
import { SortParametersFor } from './types/classes/sort-parameters-for';
import { LookupValuesFilterByCategoryId } from './types/interfaces/lookup-values-filter-by-category-id';
import { LookupValuesFilterByCategoryName } from './types/interfaces/lookup-values-filter-by-category-name';
import { RouteInfo } from './types/interfaces/route-info';

export { SortParameters } from './types/classes/sort-parameters';
export { SortParametersFor } from './types/classes/sort-parameters-for';
export { LookupValuesFilterByCategoryId } from './types/interfaces/lookup-values-filter-by-category-id';
export { LookupValuesFilterByCategoryName } from './types/interfaces/lookup-values-filter-by-category-name';
export { RouteInfo } from './types/interfaces/route-info';

/**
 * Shared Utilities
 */
import { ChunkPipe } from './utilities/chunk.pipe';
import { DateUtils } from './utilities/date-utils';
import { DefaultObjectUtil } from './utilities/default-object-util';
import { EmployeesUtil } from './utilities/employees-util';
import { PreviousOrNext } from './utilities/enum-previous-next';
import { FileSizePipe } from './utilities/filesize.pipe';
import { GeneralUtils } from './utilities/general-utils';

export { ChunkPipe } from './utilities/chunk.pipe';
export { DateUtils } from './utilities/date-utils';
export { DefaultObjectUtil } from './utilities/default-object-util';
export { EmployeesUtil } from './utilities/employees-util';
export { PreviousOrNext } from './utilities/enum-previous-next';
export { FileSizePipe } from './utilities/filesize.pipe';
export { GeneralUtils } from './utilities/general-utils';

@NgModule({
  imports: [CommonModule],
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
    ChunkPipe,
    FileSizePipe,
  ],
  declarations: [],
  exports: [],
})
export class SharedModule {}
