import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserService } from 'app/modules/user/services/user-service/user.service';
import {
  AuthenticationService,
  DataService,
  LookupValue,
  LookupValueService,
  TaskReview,
  User,
} from 'app/shared/app-shared.module';
import { TaskReviewConfiguration } from './task-review-configuration';

@Injectable({
  providedIn: 'root',
})
export class TaskReviewService extends DataService {
  lookupValues: LookupValue[] = [];
  users: User[] = [];
  constructor(
    public httpClient: HttpClient,
    public authenticationService: AuthenticationService,
    public lookupValueService: LookupValueService,
    public userService: UserService
  ) {
    super(httpClient, authenticationService);
    this.entityName = TaskReviewConfiguration.identifier;
    this.dataColumns = TaskReviewConfiguration.dataColumns;
    this.lookupValueService.getAll<LookupValue>().toPromise().then((lookupValues) => { this.lookupValues = lookupValues});
    this.userService.getAll<User>().subscribe(users => { this.users = users; });
  }
  mapValues(taskReview: TaskReview) {
    taskReview.createdBy = this.users.find((user) => user?._id === taskReview?.CreatedBy);
    taskReview.modifiedBy = this.users.find((user) => user?._id === taskReview?.ModifiedBy);
    return taskReview;
  }
}
