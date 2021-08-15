import { Client } from '../domain-models/client/client';
import { Employee } from '../domain-models/employee/employee';
import { LookupCategory } from '../domain-models/lookups/lookup-category';
import { LookupValue } from '../domain-models/lookups/lookup-value';
import { Project } from '../domain-models/project/project';
import { Supplier } from '../domain-models/supplier/supplier';
import { Task } from '../domain-models/task/task';
import { User } from '../domain-models/user/user';

export class DefaultObjectUtil {
  public static noUser() {
    return {
      _id: -1,
      EmailAddress: null,
      Password: null,
      UserTypeId: this.noLookupValue(),
      IsAdmin: false,
      IsLocked: false,
      Avatar: './assets/img/avatars/avatar-0.png',
      IsActive: false,
      CreatedBy: -1,
      DateCreated: undefined,
      ModifiedBy: -1,
      DateModified: undefined,
    } as unknown as User;
  }
  public static noLookupValue() {
    return {
      _id: -1,
      LookupCategoryId: -1,
      Value: undefined,
      Value2: undefined,
      Value3: undefined,
      Icon: 'report_problem',
      Image: './assets/img/problem-orange.png',
      IsActive: false,
      CreatedBy: -1,
      DateCreated: undefined,
      LookupCategory: this.noLookupCategory(),
      CssClassCategory: undefined,
      CssClass: undefined,
    } as unknown as LookupValue;
  }
  public static noLookupCategory() {
    return {
      _id: -1,
      Code: undefined,
      Name: undefined,
      Description: undefined,
      IsActive: false,
      CreatedBy: -1,
      DateCreated: undefined,
    } as unknown as LookupCategory;
  }
  public static noProject() {
    return {
      _id: -1,
      Name: undefined,
      Code: undefined,
      Description: undefined,
      ProjectTypeId: -1,
      PriorityId: -1,
      StartDate: undefined,
      EndDate: undefined,
      MaximumHoursAllocated: 0,
      IsActive: false,
      CreatedBy: -1,
      DateCreated: undefined,
      ModifiedBy: -1,
      DateModified: undefined,
      StatusId: -1,
      ProjectType: this.noLookupValue(),
      Priority: this.noLookupValue(),
      Status: this.noLookupValue(),
    } as unknown as Project;
  }
  public static noTask() {
    return {
      _id: -1,
      ProjectId: -1,
      Name: undefined,
      Description: undefined,
      TaskTypeId: -1,
      PriorityId: -1,
      IsActive: false,
      CreatedBy: -1,
      DateCreated: undefined,
      AssigneeId: -1,
      StatusId: -1,
      TaskType: this.noLookupValue(),
      Priority: this.noLookupValue(),
      Assignee: this.noUser(),
      Status: this.noLookupValue()
    } as unknown as Task;
  }
  public static noEmployee() {
    return {
      _id: -1,
      SalutationId: -1,
      Name: undefined,
      Surname: undefined,
      IdNumber: -1,
      BirthDate: undefined,
      GenderId: -1,
      EmploymentTypeId: -1,
      PositionId: -1,
      DepartmentId: -1,
      ManagerId: -1,
      DateHired: undefined,
      EmployeeNumber: undefined,
      IsTerminated: false,
      IsActive: false,
      CreatedBy: -1,
      DateCreated: undefined,
      Salutation: this.noLookupValue(),
      Gender: this.noLookupValue(),
      EmploymentType: this.noLookupValue(),
      Position: this.noLookupValue(),
      Department: this.noLookupValue(),
      Manager: this.noLookupValue(),
    } as unknown as Employee;
  }
  public static noClient() {
    return {
      _id: -1,
      SalutationId: -1,
      Name: undefined,
      Surname: undefined,
      CompanyName: undefined,
      IndustryTypeId: -1,
      IdNumber: -1,
      RegistrationNumber: undefined,
      IsActive: false,
      CreatedBy: -1,
      DateCreated: undefined,
      Salutation: this.noLookupValue(),
      IndustryType: this.noLookupValue(),
    } as unknown as Client;
  }
  public static noSupplier() {
    return {
      _id: -1,
      SalutationId: -1,
      Name: undefined,
      Surname: undefined,
      CompanyName: undefined,
      IndustryTypeId: 284,
      RegistrationNumber: undefined,
      VATNumber: -1,
      BankId: -1,
      AccountNumber: -1,
      IsActive: false,
      CreatedBy: -1,
      DateCreated: undefined,
      Salutation: this.noLookupValue(),
      IndustryType: this.noLookupValue(),
      Bank: this.noLookupValue(),
    } as unknown as Supplier;
  }
}
