import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserService } from 'app/modules/user/services/user.service';
import {
  AuthenticationService,
  DataService,
  Project,
  ProjectComment,
  User,
} from 'app/shared/app-shared.module';
import { ProjectService } from '../project-service/project.service';
import { ProjectCommentConfiguration } from './project-comment-configuration';

@Injectable({
  providedIn: 'root',
})
export class ProjectCommentService extends DataService {
  projects: Project[] = [];
  users: User[] = [];
  constructor(
    public httpClient: HttpClient,
    public authenticationService: AuthenticationService,
    public projectService: ProjectService,
    public userService: UserService
  ) {
    super(httpClient, authenticationService);
    this.entityName = ProjectCommentConfiguration.identifier;
    this.dataColumns = ProjectCommentConfiguration.dataColumns;
    this.projectService.getAll<Project>().toPromise().then((projects) => { this.projects = projects});
    this.userService.getAll<User>().subscribe(users => { this.users = users; });
  }
  mapValues(projectComment: ProjectComment) {
    projectComment.Project = this.projects.find(project => project?._id === projectComment?.ProjectId);
    projectComment.createdBy = this.users.find(user => user?._id === projectComment?.CreatedBy);
    projectComment.modifiedBy = this.users.find(user => user?._id === projectComment?.ModifiedBy);
    return projectComment;
  }
}
