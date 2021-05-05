import { Salutation, Gender, EmploymentType, EmployeePosition, Department, WageType, Province } from 'app/shared/shared.module';
import { User } from '../user/user';
export class Employee extends User {
  employeeNumber:string;
  salutationId:Salutation;
  name:string;
  middleName:string;
  surname:string;
  idNumber:number;
  birthDate:Date;
  genderId:Gender;
  employmentTypeId:EmploymentType;
  positionId:EmployeePosition;
  departmentId:Department;
  dateHired:Date;
  wageTypeId:WageType;
  homeTelephoneNumber:number;
  officeTelephoneNumber:number;
  mobileTelephoneNumber:number;
  emailAddress:string;
  addressLine1:string;
  addressLine2:string;
  city:string;
  provinceId:Province;
  postalCode:string;
  country:string;
  isTerminated:boolean;
  dateTerminated:Date;
}
