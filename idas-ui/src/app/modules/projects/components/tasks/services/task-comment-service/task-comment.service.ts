import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { UserService } from "app/modules/user/app-modules-users.module";
import {
  DataService,
  LookupValue,
  User,
  AuthenticationService,
  LookupValueService,
  TaskComment,
} from "app/shared/app-shared.module";
import { TaskCommentConfiguration } from "../task-comment-service/task-comment-configuration";

@Injectable({
  providedIn: "root",
})
export class TaskCommentService extends DataService {
  lookupValues: LookupValue[];
  users: User[];
  constructor(
    public httpClient: HttpClient,
    public authenticationService: AuthenticationService,
    public lookupValueService: LookupValueService,
    public userService: UserService
  ) {
    super(httpClient, authenticationService);
    this.entityName = TaskCommentConfiguration.identifier;
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
  mapValues(taskComment: TaskComment) {
    taskComment.createdBy = this.users.find(
      (user) => user._id === taskComment.CreatedBy
    );
    taskComment.modifiedBy = this.users.find(
      (user) => user._id === taskComment.ModifiedBy
    );
    return taskComment;
  }
}
