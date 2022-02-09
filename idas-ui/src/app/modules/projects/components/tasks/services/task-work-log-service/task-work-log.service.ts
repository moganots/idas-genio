import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserService } from 'app/modules/user/services/user.service';
import {
  AuthenticationService,
  DataService,
  Task,
  TaskWorkLog,
  User,
} from 'app/shared/app-shared.module';
import { TaskService } from '../task-service/task.service';
import { TaskWorkLogConfiguration } from './task-work-log-configuration';

@Injectable({
  providedIn: 'root',
})
export class TaskWorkLogService extends DataService {
  tasks: Task[] = [];
  users: User[] = [];
  constructor(
    public httpClient: HttpClient,
    public authenticationService: AuthenticationService,
    public taskService: TaskService,
    public userService: UserService
  ) {
    super(httpClient, authenticationService);
    this.entityName = TaskWorkLogConfiguration.identifier;
    this.dataColumns = TaskWorkLogConfiguration.dataColumns;
    this.taskService.getAll<Task>().toPromise().then((Tasks) => { this.tasks = Tasks});
    this.userService.getAll<User>().subscribe(users => { this.users = users; });
  }
  mapValues(taskWorkLog: TaskWorkLog) {
    taskWorkLog.Task = this.tasks.find((value) => value._id === taskWorkLog.TaskId);
    taskWorkLog.createdBy = this.users.find((user) => user._id === taskWorkLog.CreatedBy);
    taskWorkLog.modifiedBy = this.users.find((user) => user._id === taskWorkLog.ModifiedBy);
    return taskWorkLog;
  }
}
