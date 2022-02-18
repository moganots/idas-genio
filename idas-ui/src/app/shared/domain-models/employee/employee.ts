import { BaseModel } from '../base/base-model';
import { LookupValue } from '../lookups/lookup-value';
import { ContactDetail } from '../user/contact-detail';
export class Employee extends BaseModel {
  SalutationId: number;
  MiddleName: string;
  Surname: string;
  IdNumber: number;
  BirthDate: Date;
  GenderId: number;
  EmploymentTypeId: number;
  PositionId: number;
  DepartmentId: number;
  ManagerId: number;
  DateHired: Date;
  EmployeeNumber: string;
  IsTerminated: boolean;
  DateTerminated: Date;
  Salutation: LookupValue;
  Gender: LookupValue;
  EmploymentType: LookupValue;
  Position: LookupValue;
  Department: LookupValue;
  Manager: Employee;
  ContactDetail: ContactDetail;

  constructor(
    id: number,
    IsActive: boolean,
    SalutationId?: number,
    Name?: string,
    MiddleName?: string,
    Surname?: string,
    IdNumber?: number,
    BirthDate?: Date,
    GenderId?: number,
    EmploymentTypeId?: number,
    PositionId?: number,
    DepartmentId?: number,
    ManagerId?: number,
    DateHired?: Date,
    EmployeeNumber?: string,
    IsTerminated?: boolean,
    DateTerminated?: Date,
    CreatedBy?: number,
    DateCreated?: Date,
    ModifiedBy?: number,
    DateModified?: Date){
    super(id, IsActive, null, Name, null, CreatedBy, DateCreated, ModifiedBy, DateModified);
      this.SalutationId = SalutationId;
      this.MiddleName = MiddleName;
      this.Surname = Surname;
      this.IdNumber = IdNumber;
      this.BirthDate = BirthDate;
      this.GenderId = GenderId;
      this.EmploymentTypeId = EmploymentTypeId;
      this.PositionId = PositionId;
      this.DepartmentId = DepartmentId;
      this.ManagerId = ManagerId;
      this.DateHired = DateHired;
      this.EmployeeNumber = EmployeeNumber;
      this.IsTerminated = IsTerminated;
      this.DateTerminated = DateTerminated;
    }
}
