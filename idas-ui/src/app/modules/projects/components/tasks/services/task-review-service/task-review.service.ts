import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserService } from 'app/modules/user/services/user.service';
import {
  AuthenticationService,
  DataService,
  LookupValue,
  LookupValueService,
  Task,
  TaskReview,
  User,
} from 'app/shared/app-shared.module';
import { TaskService } from '../task-service/task.service';
import { TaskReviewConfiguration } from './task-review-configuration';

@Injectable({
  providedIn: 'root',
})
export class TaskReviewService extends DataService {
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
    this.entityName = TaskReviewConfiguration.identifier;
    this.dataColumns = TaskReviewConfiguration.dataColumns;
    this.lookupValueService.getAll<LookupValue>().toPromise().then((lookupValues) => { this.lookupValues = lookupValues});
    this.taskService.getAll<Task>().toPromise().then((tasks) => { this.tasks = tasks});
    this.userService.getAll<User>().subscribe(users => { this.users = users; });
  }
  mapValues(taskReview: TaskReview) {
    taskReview.Task = this.tasks.find((task) => task?._id === taskReview?.TaskId);
    taskReview.createdBy = this.users.find((user) => user?._id === taskReview?.CreatedBy);
    taskReview.modifiedBy = this.users.find((user) => user?._id === taskReview?.ModifiedBy);
    return taskReview;
  }
}
