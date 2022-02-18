import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserService } from 'app/modules/user/services/user.service';
import {
  AuthenticationService,
  DataService,
  TaskWorkLog,
  User,
} from 'app/shared/app-shared.module';
import { TaskWorkLogConfiguration } from './task-worklog-configuration';

@Injectable({
  providedIn: 'root',
})
export class TaskWorkLogService extends DataService {
  users: User[] = [];
  constructor(
    public httpClient: HttpClient,
    public authenticationService: AuthenticationService,
    public userService: UserService
  ) {
    super(httpClient, authenticationService);
    this.entityName = TaskWorkLogConfiguration.identifier;
    this.dataColumns = TaskWorkLogConfiguration.dataColumns;
    this.userService.getAll<User>().subscribe(users => { this.users = users; });
  }
  mapValues(taskWorkLog: TaskWorkLog) {
    taskWorkLog.createdBy = this.users.find((user) => user?._id === taskWorkLog?.CreatedBy);
    taskWorkLog.modifiedBy = this.users.find((user) => user?._id === taskWorkLog?.ModifiedBy);
    return taskWorkLog;
  }
}
