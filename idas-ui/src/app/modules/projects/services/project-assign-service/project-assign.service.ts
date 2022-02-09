import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserService } from 'app/modules/user/services/user.service';
import {
  AuthenticationService,
  DataService,
  LookupValue,
  LookupValueService,
  Project,
  ProjectAssignment,
  User,
} from 'app/shared/app-shared.module';
import { ProjectService } from '../project-service/project.service';
import { ProjectAssignConfiguration } from './project-assign-configuration';

@Injectable({
  providedIn: 'root',
})
export class ProjectAssignService extends DataService {
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
    this.entityName = ProjectAssignConfiguration.identifier;
    this.dataColumns = ProjectAssignConfiguration.dataColumns;
    this.lookupValueService
      .getAll<LookupValue>()
      .toPromise()
      .then((lookupValues) => {
        this.lookupValues = lookupValues;
      });
    this.projectService
      .getAll<Project>()
      .toPromise()
      .then((projects) => {
        this.projects = projects;
      });
    this.userService.getAll<User>().subscribe((users) => {
      this.users = users;
    });
  }
  mapValues(projectAssignment: ProjectAssignment) {
    projectAssignment.Project = this.projects.find(
      (value) => value._id === projectAssignment.ProjectId
    );
    projectAssignment.ProjectAssignmentType = this.lookupValues.find(
      (lookupValue) =>
        lookupValue._id === projectAssignment.ProjectAssignmentTypeId
    );
    projectAssignment.Assignee = this.users.find(
      (user) => user._id === projectAssignment.AssigneeId
    );
    projectAssignment.createdBy = this.users.find(
      (user) => user._id === projectAssignment.CreatedBy
    );
    projectAssignment.modifiedBy = this.users.find(
      (user) => user._id === projectAssignment.ModifiedBy
    );
    return projectAssignment;
  }
}
