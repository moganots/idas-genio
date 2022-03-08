import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserService } from 'app/modules/user/services/user-service/user.service';
import {
  AuthenticationService,
  DataService,
  LookupValue,
  LookupValueService,
  TaskAssignment,
  User,
} from 'app/shared/app-shared.module';
import { TaskAssignConfiguration } from './task-assign-configuration';

@Injectable({
  providedIn: 'root',
})
export class TaskAssignService extends DataService {
  lookupValues: LookupValue[] = [];
  users: User[] = [];
  constructor(
    public httpClient: HttpClient,
    public authenticationService: AuthenticationService,
    public lookupValueService: LookupValueService,
    public userService: UserService
  ) {
    super(httpClient, authenticationService);
    this.entityName = TaskAssignConfiguration.identifier;
    this.lookupValueService.getAll<LookupValue>()// .toPromise().subscribe((lookupValues) => { this.lookupValues = lookupValues});
    this.userService.getAll<User>().subscribe(users => { this.users = users; });
  }
  mapValues(taskAssignment: TaskAssignment) {
    taskAssignment.Assignee = this.users.find((user) => user?._id === taskAssignment?.AssigneeId);
    taskAssignment.createdBy = this.users.find((user) => user?._id === taskAssignment?.CreatedBy);
    taskAssignment.modifiedBy = this.users.find((user) => user?._id === taskAssignment?.ModifiedBy);
    return taskAssignment;
  }
}
