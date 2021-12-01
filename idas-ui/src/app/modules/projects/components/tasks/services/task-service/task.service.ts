import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProjectService } from 'app/modules/projects/services/project-service/project.service';
import { UserService } from 'app/modules/user/services/users.service';
import {
  AuthenticationService,
  DataService,
  LookupValue,
  LookupValueService,
  Project,
  Task,
  User,
} from 'app/shared/app-shared.module';
import { TaskConfiguration } from '../../task-configuration';

@Injectable({
  providedIn: 'root',
})
export class TaskService extends DataService {
  lookupValues: LookupValue[] = [];
  users: User[] = [];
  projects: Project[] = [];
  constructor(
    public httpClient: HttpClient,
    public authenticationService: AuthenticationService,
    public lookupValueService: LookupValueService,
    public UserService: UserService,
    public projectService: ProjectService
  ) {
    super(httpClient, authenticationService);
    this.entityName = TaskConfiguration.identifier;
    this.lookupValueService.getAll<LookupValue>().toPromise().then((lookupValues) => { this.lookupValues = lookupValues});
    this.UserService.getAll<User>().subscribe(users => { this.users = users; });
    this.projectService.getAll<Project>().subscribe(projects => { this.projects = projects; });
  }
  mapValues(task: Task) {
    task.Project = this.projects.find(project => project._id === task.ProjectId);
    task.Assignee = this.users.find(user => user._id === task.AssigneeId);
    task.TaskType = this.lookupValues.find(value => value._id === task.TaskTypeId);
    task.Priority = this.lookupValues.find(value => value._id === task.PriorityId);
    task.Status = this.lookupValues.find(value => value._id === task.StatusId);
    task.createdBy = this.users.find(user => user._id === task.CreatedBy);
    task.modifiedBy = this.users.find(user => user._id === task.ModifiedBy);
    return task;
  }
}
