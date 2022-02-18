import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserService } from 'app/modules/user/services/user-service/user.service';
import {
  AuthenticationService,
  DataService,
  LookupValue,
  LookupValueService,
  ProjectAssignment,
  User,
} from 'app/shared/app-shared.module';
import { ProjectAssignConfiguration } from './project-assign-configuration';

@Injectable({
  providedIn: 'root',
})
export class ProjectAssignService extends DataService {
  lookupValues: LookupValue[] = [];
  users: User[] = [];
  constructor(
    public httpClient: HttpClient,
    public authenticationService: AuthenticationService,
    public lookupValueService: LookupValueService,
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
    this.userService.getAll<User>().subscribe((users) => {
      this.users = users;
    });
  }
  mapValues(projectAssignment: ProjectAssignment) {
    projectAssignment.ProjectAssignmentType = this.lookupValues.find(
      (lookupValue) =>
        lookupValue?._id === projectAssignment?.ProjectAssignmentTypeId
    );
    projectAssignment.Assignee = this.users.find(
      (user) => user?._id === projectAssignment?.AssigneeId
    );
    projectAssignment.createdBy = this.users.find(
      (user) => user?._id === projectAssignment?.CreatedBy
    );
    projectAssignment.modifiedBy = this.users.find(
      (user) => user?._id === projectAssignment?.ModifiedBy
    );
    return projectAssignment;
  }
}
