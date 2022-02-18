import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserService } from 'app/modules/user/services/user-service/user.service';
import {
  AuthenticationService,
  DataService,
  ProjectComment,
  User,
} from 'app/shared/app-shared.module';
import { ProjectCommentConfiguration } from './project-comment-configuration';

@Injectable({
  providedIn: 'root',
})
export class ProjectCommentService extends DataService {
  users: User[] = [];
  constructor(
    public httpClient: HttpClient,
    public authenticationService: AuthenticationService,
    public userService: UserService
  ) {
    super(httpClient, authenticationService);
    this.entityName = ProjectCommentConfiguration.identifier;
    this.dataColumns = ProjectCommentConfiguration.dataColumns;
    this.userService.getAll<User>().subscribe(users => { this.users = users; });
  }
  mapValues(projectComment: ProjectComment) {
    projectComment.createdBy = this.users.find(user => user?._id === projectComment?.CreatedBy);
    projectComment.modifiedBy = this.users.find(user => user?._id === projectComment?.ModifiedBy);
    return projectComment;
  }
}
