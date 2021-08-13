import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProjectsService } from 'app/modules/projects/services/projects.service';
import { UsersService } from 'app/modules/user/services/users.service';
import {
  AuthenticationService,
  DataService,
  LookupValue,
  LookupValueService,
  Project,
  Task,
  User,
} from 'app/shared/shared.module';
import { catchError, map } from 'rxjs/operators';
import { TasksConfiguration } from '../tasks-configuration';

@Injectable({
  providedIn: 'root',
})
export class TasksService extends DataService {
  lookupValues: LookupValue[] = [];
  projects: Project[] = [];
  users: User[] = [];
  constructor(
    public httpClient: HttpClient,
    public authenticationService: AuthenticationService,
    public lookupValueService: LookupValueService,
    public projectsService: ProjectsService,
    public usersService: UsersService
  ) {
    super(httpClient, authenticationService);
    this.entityName = TasksConfiguration.identifier;
    this.lookupValueService.getAll<LookupValue>().subscribe(values => { this.lookupValues = values; });
    this.projectsService.getAll<Project>().subscribe(projects => { this.projects = projects; });
    this.usersService.getAll<User>().subscribe(users => { this.users = users; });
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
