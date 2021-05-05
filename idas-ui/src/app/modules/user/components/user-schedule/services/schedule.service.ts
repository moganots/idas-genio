import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataService, Schedule } from 'app/shared/shared.module';
import { UserScheduleConfiguration } from '../user-schedule-configuration';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService extends DataService {

  constructor(public httpClient: HttpClient) {
    super(httpClient);
    this.entityName = UserScheduleConfiguration.identifier;
  }

  create(entity: any): any {
    return super.create<Schedule>(entity);
  }

  update(entity: any): any {
    return super.update<Schedule>(entity);
  }

  delete(entity: any): any {
    return super.delete<Schedule>(entity);
  }

}
