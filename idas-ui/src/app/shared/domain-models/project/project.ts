import { BaseModel } from '../base/base-model';
export class Project extends BaseModel {
  maximumHoursAllocated:number;
  startDate:Date;
  endDate:Date;
}
