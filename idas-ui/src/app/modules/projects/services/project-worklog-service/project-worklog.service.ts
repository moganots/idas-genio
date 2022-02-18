import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserService } from 'app/modules/user/services/user.service';
import {
  AuthenticationService,
  DataService,
  Project,
  ProjectWorkLog,
  User,
} from 'app/shared/app-shared.module';
import { ProjectService } from '../project-service/project.service';
import { ProjectWorkLogConfiguration } from './project-worklog-configuration';

@Injectable({
  providedIn: 'root',
})
export class ProjectWorkLogService extends DataService {
  projects: Project[] = [];
  users: User[] = [];
  constructor(
    public httpClient: HttpClient,
    public authenticationService: AuthenticationService,
    public projectService: ProjectService,
    public userService: UserService
  ) {
    super(httpClient, authenticationService);
    this.entityName = ProjectWorkLogConfiguration.identifier;
    this.dataColumns = ProjectWorkLogConfiguration.dataColumns;
    this.projectService.getAll<Project>().toPromise().then((projects) => { this.projects = projects});
    this.userService.getAll<User>().subscribe(users => { this.users = users; });
  }
  mapValues(projectWorkLog: ProjectWorkLog) {
    projectWorkLog.Project = this.projects.find(project => project?._id === projectWorkLog?.ProjectId);
    projectWorkLog.createdBy = this.users.find(user => user?._id === projectWorkLog?.CreatedBy);
    projectWorkLog.modifiedBy = this.users.find(user => user?._id === projectWorkLog?.ModifiedBy);
    return projectWorkLog;
  }
}
