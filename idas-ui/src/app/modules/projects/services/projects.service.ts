import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsersService } from 'app/modules/user/services/users.service';
import {
  AuthenticationService,
  DataService,
  LookupValue,
  LookupValueService,
  Project,
  User,
} from 'app/shared/shared.module';
import { ProjectsConfiguration } from '../projects-configuration';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService extends DataService {
  lookupValues: LookupValue[] = [];
  users: User[] = [];
  constructor(
    public httpClient: HttpClient,
    public authenticationService: AuthenticationService,
    public lookupValueService: LookupValueService,
    public usersService: UsersService
  ) {
    super(httpClient, authenticationService);
    this.entityName = ProjectsConfiguration.identifier;
    this.lookupValueService.getAll<LookupValue>().subscribe((lookupValues) => { this.lookupValues = lookupValues});
    this.usersService.getAll<User>().subscribe(users => { this.users = users; });
  }
  mapValues(project: Project) {
    project.ProjectType = this.lookupValues.find(value => value._id === project.ProjectTypeId);
    project.Priority = this.lookupValues.find(value => value._id === project.PriorityId);
    project.Status = this.lookupValues.find(value => value._id === project.StatusId);
    project.createdBy = this.users.find(user => user._id === project.CreatedBy);
    project.modifiedBy = this.users.find(user => user._id === project.ModifiedBy);
    return project;
  }
}
