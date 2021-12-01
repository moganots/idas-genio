import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserService } from 'app/modules/user/services/users.service';
import {
  AuthenticationService,
  DataService,
  ProjectAssignment,
  User,
} from 'app/shared/app-shared.module';
import { ProjectAssignmentConfiguration } from '../project-assignment-configuration';

@Injectable({
  providedIn: 'root',
})
export class ProjectAssignmentsService extends DataService {
  users: User[] = [];

  constructor(
    public httpClient: HttpClient,
    public authenticationService: AuthenticationService,
    private UserService: UserService
  ) {
    super(httpClient, authenticationService);
    this.entityName = ProjectAssignmentConfiguration.identifier;
    this.UserService.getAll<User>().subscribe(users => { this.users = users; });
  }
  mapValues(projectAssignment: ProjectAssignment) {
    projectAssignment.Assignee = this.users.find(user => user._id === projectAssignment?.AssigneeId);
    return projectAssignment;
  }
}
