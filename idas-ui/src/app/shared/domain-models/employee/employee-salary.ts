import { Employee, WageType } from 'app/shared/shared.module';
import { BaseModel } from '../base/base-model';
export class EmployeeSalary extends BaseModel {
  employeeId:Employee;
  wageTypeId:WageType;
  amount:number;
}
