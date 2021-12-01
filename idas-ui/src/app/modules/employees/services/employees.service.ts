import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  AuthenticationService,
  DataService,
  Employee,
  GeneralUtils,
  LookupValue,
  LookupValueService,
} from 'app/shared/app-shared.module';
import { EmployeesConfiguration } from '../employees-configuration';

@Injectable({
  providedIn: 'root',
})
export class EmployeesService extends DataService {
  lookupValues: LookupValue[] = [];
  constructor(
    public httpEmployee: HttpClient,
    public authenticationService: AuthenticationService,
    public lookupValueService: LookupValueService
  ) {
    super(httpEmployee, authenticationService);
    this.entityName = EmployeesConfiguration.identifier;
    this.lookupValueService
      .getAll<LookupValue>()
      .toPromise().then((lookupValues) => {
        this.lookupValues = lookupValues;
      });
  }
  mapValues(employee: Employee) {
    employee.Salutation = this.lookupValues.find(
      (lv) => lv._id === employee.SalutationId
    );
    employee.Gender = this.lookupValues.find(
      (lv) => lv._id === employee.GenderId
    );
    employee.EmploymentType = this.lookupValues.find(
      (lv) => lv._id === employee.EmploymentTypeId
    );
    employee.Position = this.lookupValues.find(
      (lv) => lv._id === employee.PositionId
    );
    employee.Department = this.lookupValues.find(
      (lv) => lv._id === employee.DepartmentId
    );
    employee.DisplayName = GeneralUtils.getEmployeeDisplayName(employee);
    return employee;
  }
}
