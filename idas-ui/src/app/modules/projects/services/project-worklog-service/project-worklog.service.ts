import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserService } from 'app/modules/user/services/user-service/user.service';
import {
  AuthenticationService,
  DataService,
  ProjectWorklog,
  User,
} from 'app/shared/app-shared.module';
import { ProjectWorklogConfiguration } from './project-worklog-configuration';

@Injectable({
  providedIn: 'root',
})
export class ProjectWorklogService extends DataService {
  users: User[] = [];
  constructor(
    public httpClient: HttpClient,
    public authenticationService: AuthenticationService,
    public userService: UserService
  ) {
    super(httpClient, authenticationService);
    this.entityName = ProjectWorklogConfiguration.identifier;
    this.dataColumns = ProjectWorklogConfiguration.dataColumns;
    this.userService.getAll<User>().subscribe(users => { this.users = users; });
  }
  mapValues(projectWorklog: ProjectWorklog) {
    projectWorklog.createdBy = this.users.find(user => user?._id === projectWorklog?.CreatedBy);
    projectWorklog.modifiedBy = this.users.find(user => user?._id === projectWorklog?.ModifiedBy);
    return projectWorklog;
  }
}
