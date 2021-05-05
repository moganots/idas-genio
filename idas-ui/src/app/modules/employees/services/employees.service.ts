import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataService, Employee, EmployeesUtil, LookupService } from 'app/shared/shared.module';
import { EmployeesConfiguration } from '../employees-configuration';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService extends DataService {

  constructor(public httpClient: HttpClient, public lookupService: LookupService) {
    super(httpClient);
    this.entityName = EmployeesConfiguration.identifier;
  }

  create(entity: any): any {
    entity.EmployeeNumber = this.getNewEmployeeNumber(entity.EmploymentTypeId);
    entity.BirthDate = EmployeesUtil.getSAIdNumberBirthDate(entity.IdNumber);
    entity.Gender = this.lookupService.getLookupValueIdByCategoryAndValue('Gender', EmployeesUtil.getSAIdNumberGender(entity.IdNumber));
    return super.create<Employee>(entity);
  }

  update(entity: any): any {
    entity.BirthDate = EmployeesUtil.getSAIdNumberBirthDate(entity.IdNumber);
    entity.Gender = this.lookupService.getLookupValueIdByCategoryAndValue('Gender', EmployeesUtil.getSAIdNumberGender(entity.IdNumber));
    return super.update<Employee>(entity);
  }

  delete(entity: any): any {
    return super.delete<Employee>(entity);
  }

  private getNewEmployeeNumber(employmentTypeId: number) {
    const employmentType = this.getEmploymentType(this.lookupService.getLookupValueById(employmentTypeId).value);
    let newEmployeeNumber = this.newRandomEmployeeNumber(employmentType);
    super.getAll<Employee>().map((employee) => employee.employeeNumber).forEach((en) => {
      if(en === newEmployeeNumber){
        newEmployeeNumber = this.newRandomEmployeeNumber(employmentType);
      }
    });
    return newEmployeeNumber;
  }
  getEmploymentType(value: string) {
    switch((value || '').trim().toLocaleLowerCase()) {
      case 'consultant':
      case 'freelancer':
      case 'indipendent contractor': return 'C';
      case 'permanent': return 'P';
      case 'part-time':
      case 'seasonal':
      case 'temporary':
      default: return 'T';
    }
  }
  private newRandomEmployeeNumber(employmentType: string) {
    return `${employmentType}${(Math.random() * (899999) + 100000)}`.split('.')[0].toLocaleUpperCase();
  }
}
