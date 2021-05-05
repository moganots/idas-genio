import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataService, DatesUtil, Project } from 'app/shared/shared.module';
import { UserProjectsConfiguration } from '../user-projects-configuration';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService extends DataService {

  constructor(public httpClient: HttpClient) {
    super(httpClient);
    this.entityName = UserProjectsConfiguration.identifier;
  }

  create(entity: any): any {
    entity.MaximumHoursAllocated = DatesUtil.dateDiffInHours(entity.StartDate, entity.EndDate);
    return super.create<Project>(entity);
  }

  update(entity: any): any {
    entity.MaximumHoursAllocated = DatesUtil.dateDiffInHours(entity.StartDate, entity.EndDate);
    return super.update<Project>(entity);
  }

  delete(entity: any): any {
    return super.delete<Project>(entity);
  }

}
