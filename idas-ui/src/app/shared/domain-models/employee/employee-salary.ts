import { BaseModel } from '../base/base-model';
import { LookupValue } from '../lookups/lookup-value';
import { Employee } from './employee';
export class EmployeeSalary extends BaseModel {
  EmployeeId: number;
  WageTypeId: number;
  Amount: number;
  Employee: Employee;
  WageType: LookupValue;
}
