import { Injectable } from "@angular/core";
import { UserService } from "app/modules/user/app-modules-users.module";
import {
  AuthenticationService,
  LookupValueService,
  TaskWorkLog,
} from "app/shared/app-shared.module";

@Injectable({
  providedIn: "root",
})
export class TaskWorkLogService {
  constructor(
    public httpClient: HttpClient,
    public authenticationService: AuthenticationService,
    public lookupValues: LookupValueService,
    public users: UserService
  ) {
    this.entityName = TaskConfiguration.identifier;
    this.lookupValueService.getAll<LookupValue>().toPromise().then((lookupValues) => { this.lookupValues = lookupValues});
    this.UserService.getAll<User>().subscribe(users => { this.users = users; });}
  mapValues(taskWorkLog: TaskWorkLog) {
    taskWorkLog.Task = this.projects.find(
      (project) => project._id === task.ProjectId
    );
    taskWorkLog.Assignee = this.users.find(
      (user) => user._id === task.AssigneeId
    );
    taskWorkLog.TaskType = this.lookupValues.find(
      (value) => value._id === task.TaskTypeId
    );
    taskWorkLog.Priority = this.lookupValues.find(
      (value) => value._id === task.PriorityId
    );
    taskWorkLog.Status = this.lookupValues.find(
      (value) => value._id === task.StatusId
    );
    taskWorkLog.createdBy = this.users.find(
      (user) => user._id === task.CreatedBy
    );
    taskWorkLog.modifiedBy = this.users.find(
      (user) => user._id === task.ModifiedBy
    );
    return taskWorkLog;
  }
}
