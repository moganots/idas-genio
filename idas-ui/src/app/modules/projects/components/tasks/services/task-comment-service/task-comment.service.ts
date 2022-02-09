import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserService } from 'app/modules/user/services/user.service';
import {
  AuthenticationService,
  DataService,
  Task,
  TaskComment,
  User,
} from 'app/shared/app-shared.module';
import { TaskService } from '../task-service/task.service';
import { TaskCommentConfiguration } from './task-comment-configuration';

@Injectable({
  providedIn: 'root',
})
export class TaskCommentService extends DataService {
  tasks: Task[] = [];
  users: User[] = [];
  constructor(
    public httpClient: HttpClient,
    public authenticationService: AuthenticationService,
    public taskService: TaskService,
    public userService: UserService
  ) {
    super(httpClient, authenticationService);
    this.entityName = TaskCommentConfiguration.identifier;
    this.dataColumns = TaskCommentConfiguration.dataColumns;
    this.taskService.getAll<Task>().toPromise().then((tasks) => { this.tasks = tasks});
    this.userService.getAll<User>().subscribe(users => { this.users = users; });
  }
  mapValues(taskComment: TaskComment) {
    taskComment.Task = this.tasks.find((value) => value._id === taskComment.TaskId);
    taskComment.createdBy = this.users.find((user) => user._id === taskComment.CreatedBy);
    taskComment.modifiedBy = this.users.find((user) => user._id === taskComment.ModifiedBy);
    return TaskComment;
  }
}
