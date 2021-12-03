import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { UserService } from "app/modules/user/app-modules-users.module";
import { DataService, LookupValue, User, AuthenticationService, LookupValueService, TaskWorkLog } from "app/shared/app-shared.module";
import { TaskWorkLogConfiguration } from "../task-work-log-service/task-work-log-configuration";

@Injectable({
  providedIn: "root",
})
export class TaskWorkLogService extends DataService {
  lookupValues: LookupValue[];
  users: User[];
  constructor(
    public httpClient: HttpClient,
    public authenticationService: AuthenticationService,
    public lookupValueService: LookupValueService,
    public userService: UserService
  ) {
    super(httpClient, authenticationService);
    this.entityName = TaskWorkLogConfiguration.identifier;
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
  mapValues(taskWorkLog: TaskWorkLog) {
    taskWorkLog.createdBy = this.users.find(
      (user) => user._id === taskWorkLog.CreatedBy
    );
    taskWorkLog.modifiedBy = this.users.find(
      (user) => user._id === taskWorkLog.ModifiedBy
    );
    return taskWorkLog;
  }
}
