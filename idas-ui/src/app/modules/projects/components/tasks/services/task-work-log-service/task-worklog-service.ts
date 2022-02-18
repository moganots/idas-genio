import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserService } from 'app/modules/user/services/user.service';
import {
  AuthenticationService,
  DataService,
  TaskWorklog,
  User,
} from 'app/shared/app-shared.module';
import { TaskWorklogConfiguration } from './task-worklog-configuration';

@Injectable({
  providedIn: 'root',
})
export class TaskWorklogService extends DataService {
  users: User[] = [];
  constructor(
    public httpClient: HttpClient,
    public authenticationService: AuthenticationService,
    public userService: UserService
  ) {
    super(httpClient, authenticationService);
    this.entityName = TaskWorklogConfiguration.identifier;
    this.dataColumns = TaskWorklogConfiguration.dataColumns;
    this.userService.getAll<User>().subscribe(users => { this.users = users; });
  }
  mapValues(taskWorklog: TaskWorklog) {
    taskWorklog.createdBy = this.users.find((user) => user?._id === taskWorklog?.CreatedBy);
    taskWorklog.modifiedBy = this.users.find((user) => user?._id === taskWorklog?.ModifiedBy);
    return taskWorklog;
  }
}
