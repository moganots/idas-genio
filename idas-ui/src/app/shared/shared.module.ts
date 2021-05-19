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
import { ReferenceEntityService } from './services/reference-entity-service/reference-entity.service';
import { AuthenticationService } from './services/authentication-service/authentication.service';

import { CommonComponent } from './common-component/common/common.component';
import { SharedConfiguration } from './configuration/shared-configuration';

export { CommonComponent } from './common-component/common/common.component';
export { SharedConfiguration } from './configuration/shared-configuration';

export { Client } from './domain-models/client/client';
export { EmployeeSalary } from './domain-models/employee/employee-salary';
export { Employee } from './domain-models/employee/employee';
export { BudgetCode } from './domain-models/lookup-models/budget-code';
export { Capacity } from './domain-models/lookup-models/capacity';
export { Department } from './domain-models/lookup-models/department';
export { EmployeePosition } from './domain-models/lookup-models/employee-position';
export { EmploymentType } from './domain-models/lookup-models/employment-type';
export { Gender } from './domain-models/lookup-models/gender';
export { Group } from './domain-models/lookup-models/group';
export { IndustryType } from './domain-models/lookup-models/industry-type';
export { InboxMessage } from './domain-models/user/inbox-message';
export { LookupCategory } from './domain-models/lookup-models/lookup-category';
export { LookupValue } from './domain-models/lookup-models/lookup-value';
export { NotificationMessage } from './domain-models/user/notification-message';
export { Position } from './domain-models/lookup-models/position';
export { PreferredLanguage } from './domain-models/lookup-models/preferred-language';
export { ProjectAssignmentType } from './domain-models/lookup-models/project-assignment-type';
export { Province } from './domain-models/lookup-models/province';
export { Salutation } from './domain-models/lookup-models/salutation';
export { Schedule } from './domain-models/user/schedule';
export { Status } from './domain-models/lookup-models/status';
export { TransactionType } from './domain-models/lookup-models/transaction-type';
export { UserLockedReason } from './domain-models/lookup-models/user-locked-reason';
export { UserType } from './domain-models/lookup-models/user-type';
export { WageType } from './domain-models/lookup-models/wage-type';
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
export { User } from './domain-models/user/user';

export { EmployeesUtil } from './utilities/employees-util';
export { DatesUtil } from './utilities/dates-util';
export { GeneralUtil } from './utilities/general-util';

export { BaseService } from './services/base-service/base.service';
export { AuthenticationService } from './services/authentication-service/authentication.service';
export { DataService } from './services/data-service/data.service';
export { SortingService } from './services/sorting-service/sorting.service';
export { LookupService } from './services/lookup-service/lookup.service';
export { LookupCategoryService } from './services/lookup-service/lookup-category-service/lookup-category.service';
export { LookupValueService } from './services/lookup-service/lookup-value-service/lookup-value.service';
export { ReferenceEntityService } from './services/reference-entity-service/reference-entity.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CommonComponent],
  exports: [],
  providers: [AuthenticationService, DataService, SortingService, LookupService, LookupCategoryService, LookupValueService, ReferenceEntityService]
})
export class SharedModule { }
