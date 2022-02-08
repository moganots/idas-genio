import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserService } from 'app/modules/user/services/user.service';
import {
  AuthenticationService,
  DataService,
  LookupValue,
  LookupValueService,
  Task,
  TaskAssignment,
  User,
} from 'app/shared/app-shared.module';
import { TaskService } from '../task-service/task.service';
import { TaskAssignmentConfiguration } from './task-assignment-configuration';

@Injectable({
  providedIn: 'root',
})
export class TaskAssignmentService extends DataService {
  lookupValues: LookupValue[] = [];
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
    this.entityName = TaskAssignmentConfiguration.identifier;
    this.lookupValueService.getAll<LookupValue>().toPromise().then((lookupValues) => { this.lookupValues = lookupValues});
    this.taskService.getAll<Task>().toPromise().then((tasks) => { this.tasks = tasks});
    this.userService.getAll<User>().subscribe(users => { this.users = users; });
  }
  mapValues(taskAssignment: TaskAssignment) {
    taskAssignment.Task = this.tasks.find((value) => value._id === taskAssignment.TaskId);
    taskAssignment.Assignee = this.users.find((user) => user._id === taskAssignment.AssigneeId);
    taskAssignment.createdBy = this.users.find((user) => user._id === taskAssignment.CreatedBy);
    taskAssignment.modifiedBy = this.users.find((user) => user._id === taskAssignment.ModifiedBy);
    return taskAssignment;
  }
}
