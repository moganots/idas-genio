import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ContactDetailService } from 'app/modules/user/services/contact-detail-service/contact-detail.service';
import {
  AuthenticationService,
  ContactDetail,
  DataService,
  Employee,
  GeneralUtils,
  LookupValue,
  LookupValueService,
} from 'app/shared/app-shared.module';
import { EmployeeConfiguration } from './employee-configuration';

@Injectable({
  providedIn: 'root',
})
export class EmployeesService extends DataService {
  lookupValues: LookupValue[] = [];
  contactDetails: ContactDetail[] = [];
  employees: Employee[] = [];
  constructor(
    public httpEmployee: HttpClient,
    public authenticationService: AuthenticationService,
    public lookupValueService: LookupValueService,
    public contactDetailService: ContactDetailService
  ) {
    super(httpEmployee, authenticationService);
    this.entityName = EmployeeConfiguration.identifier;
    this.dataColumns = EmployeeConfiguration.dataColumns;
    this.lookupValueService
      .getAll<LookupValue>()
      .toPromise()
      .then((lookupValues) => {
        this.lookupValues = lookupValues;
      });
    this.contactDetailService
      .getAll<ContactDetail>()
      .toPromise()
      .then((contactDetails) => {
        this.contactDetails = contactDetails;
      });
      this.getAll<Employee>().toPromise().then((employees) => { this.employees = employees;});
  }
  mapValues(employee: Employee) {
    employee.Salutation = this.lookupValues.find(
      (lookupValue) => lookupValue?._id === employee?.SalutationId
    );
    employee.Gender = this.lookupValues.find(
      (lookupValue) => lookupValue?._id === employee?.GenderId
    );
    employee.EmploymentType = this.lookupValues.find(
      (lookupValue) => lookupValue?._id === employee?.EmploymentTypeId
    );
    employee.Position = this.lookupValues.find(
      (lookupValue) => lookupValue?._id === employee?.PositionId
    );
    employee.Department = this.lookupValues.find(
      (lookupValue) => lookupValue?._id === employee?.DepartmentId
    );
    employee.ContactDetail = this.contactDetails.find(
      (contactDetail) => contactDetail?._id === employee?._id
    );
    employee.DisplayName = GeneralUtils.getEmployeeDisplayName(employee);
    employee.Manager = this.employees.find((manager) => manager?._id === employee?.ManagerId);
    return employee;
  }
}
