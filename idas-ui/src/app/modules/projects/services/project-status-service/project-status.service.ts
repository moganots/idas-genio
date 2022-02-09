import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserService } from 'app/modules/user/app-modules-users.module';
import {
  DataService,
  LookupValue,
  User,
  AuthenticationService,
  LookupValueService,
  ProjectStatus,
  Project,
} from 'app/shared/app-shared.module';
import { ProjectService } from '../project-service/project.service';
import { ProjectStatusConfiguration } from '../project-status-service/project-status-configuration';

@Injectable({
  providedIn: 'root',
})
export class ProjectStatusService extends DataService {
  lookupValues: LookupValue[] = [];
  projects: Project[] = [];
  users: User[] = [];
  constructor(
    public httpClient: HttpClient,
    public authenticationService: AuthenticationService,
    public lookupValueService: LookupValueService,
    public projectService: ProjectService,
    public userService: UserService
  ) {
    super(httpClient, authenticationService);
    this.entityName = ProjectStatusConfiguration.identifier;
    this.dataColumns = ProjectStatusConfiguration.dataColumns;
    this.lookupValueService.getAll<LookupValue>().toPromise().then((lookupValues) => { this.lookupValues = lookupValues});
    this.projectService.getAll<Project>().toPromise().then((projects) => { this.projects = projects});
    this.userService.getAll<User>().subscribe(users => { this.users = users; });
  }
  mapValues(projectStatus: ProjectStatus) {
    projectStatus.Project = this.projects.find((value) => value._id === projectStatus.ProjectId);
    projectStatus.Status = this.lookupValues.find((lookupValue) => lookupValue._id === projectStatus.StatusId);
    projectStatus.createdBy = this.users.find((user) => user._id === projectStatus.CreatedBy);
    projectStatus.modifiedBy = this.users.find((user) => user._id === projectStatus.ModifiedBy);
    return projectStatus;
  }
}
