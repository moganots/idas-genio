import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserService } from 'app/modules/user/services/user.service';
import {
  AuthenticationService,
  DataService,
  TaskComment,
  User,
} from 'app/shared/app-shared.module';
import { TaskCommentConfiguration } from './task-comment-configuration';

@Injectable({
  providedIn: 'root',
})
export class TaskCommentService extends DataService {
  users: User[] = [];
  constructor(
    public httpClient: HttpClient,
    public authenticationService: AuthenticationService,
    public userService: UserService
  ) {
    super(httpClient, authenticationService);
    this.entityName = TaskCommentConfiguration.identifier;
    this.dataColumns = TaskCommentConfiguration.dataColumns;
    this.userService.getAll<User>().subscribe(users => { this.users = users; });
  }
  mapValues(taskComment: TaskComment) {
    taskComment.createdBy = this.users.find((user) => user._id === taskComment.CreatedBy);
    taskComment.modifiedBy = this.users.find((user) => user._id === taskComment.ModifiedBy);
    return TaskComment;
  }
}
