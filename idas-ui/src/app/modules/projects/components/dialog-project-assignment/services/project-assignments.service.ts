import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserService } from 'app/modules/user/services/user.service';
import {
  AuthenticationService,
  DataService,
  ProjectAssignment,
  User,
} from 'app/shared/app-shared.module';
import { ProjectAssignConfiguration } from '../project-assignment-configuration';

@Injectable({
  providedIn: 'root',
})
export class ProjectAssignmentsService extends DataService {
  users: User[] = [];

  constructor(
    public httpClient: HttpClient,
    public authenticationService: AuthenticationService,
    private userService: UserService
  ) {
    super(httpClient, authenticationService);
    this.entityName = ProjectAssignConfiguration.identifier;
    this.dataColumns = ProjectAssignConfiguration.dataColumns;
    this.userService.getAll<User>().subscribe(users => { this.users = users; });
  }
  mapValues(projectAssignment: ProjectAssignment) {
    projectAssignment.Assignee = this.users.find(user => user._id === projectAssignment?.AssigneeId);
    return projectAssignment;
  }
}
