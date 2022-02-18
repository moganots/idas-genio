import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserService } from 'app/modules/user/app-modules-users.module';
import {
  DataService,
  LookupValue,
  User,
  AuthenticationService,
  LookupValueService,
  TaskStatus,
  Task,
} from 'app/shared/app-shared.module';
import { TaskService } from '../task-service/task.service';
import { TaskStatusConfiguration } from './task-status-configuration';

@Injectable({
  providedIn: 'root',
})
export class TaskStatusService extends DataService {
  lookupValues: LookupValue[];
  tasks: Task[] = [];
  users: User[] = [];
  constructor(
    public httpClient: HttpClient,
    public authenticationService: AuthenticationService,
    public lookupValueService: LookupValueService,
    public taskService: TaskService,
    public userService: UserService
  ) {
    super(httpClient, authenticationService);
    this.entityName = TaskStatusConfiguration.identifier;
    this.dataColumns = TaskStatusConfiguration.dataColumns;
    this.lookupValueService
      .getAll<LookupValue>()
      .toPromise()
      .then((lookupValues) => {
        this.lookupValues = lookupValues;
      });
      this.taskService.getAll<Task>().subscribe((tasks) => {
        this.tasks = tasks;
      });
    this.userService.getAll<User>().subscribe((users) => {
      this.users = users;
    });
  }
  mapValues(taskStatus: TaskStatus) {
    taskStatus.Task = this.tasks.find((task) => task?._id === taskStatus?.TaskId);
    taskStatus.Status = this.lookupValues.find((lookupValue) => lookupValue?._id === taskStatus.StatusId);
    taskStatus.createdBy = this.users.find((user) => user?._id === taskStatus?.CreatedBy);
    taskStatus.modifiedBy = this.users.find((user) => user?._id === taskStatus?.ModifiedBy);
    return taskStatus;
  }
}
