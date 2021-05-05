import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataService, Task } from 'app/shared/shared.module';
import { UserTasksConfiguration } from '../user-tasks-configuration';

@Injectable({
  providedIn: 'root'
})
export class TasksService extends DataService {

  constructor(public httpClient: HttpClient) {
    super(httpClient);
    this.entityName = UserTasksConfiguration.identifier;
  }

  create(entity: any): any {
    return super.create<Task>(entity);
  }

  update(entity: any): any {
    return super.update<Task>(entity);
  }

  delete(entity: any): any {
    return super.delete<Task>(entity);
  }

}
