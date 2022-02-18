import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserService } from 'app/modules/user/app-modules-users.module';
import {
  DataService,
  LookupValue,
  User,
  AuthenticationService,
  LookupValueService,
  ProjectStatus,
} from 'app/shared/app-shared.module';
import { ProjectStatusConfiguration } from '../project-status-service/project-status-configuration';

@Injectable({
  providedIn: 'root',
})
export class ProjectStatusService extends DataService {
  lookupValues: LookupValue[] = [];
  users: User[] = [];
  constructor(
    public httpClient: HttpClient,
    public authenticationService: AuthenticationService,
    public lookupValueService: LookupValueService,
    public userService: UserService
  ) {
    super(httpClient, authenticationService);
    this.entityName = ProjectStatusConfiguration.identifier;
    this.dataColumns = ProjectStatusConfiguration.dataColumns;
    this.lookupValueService.getAll<LookupValue>().toPromise().then((lookupValues) => { this.lookupValues = lookupValues});
    this.userService.getAll<User>().subscribe(users => { this.users = users; });
  }
  mapValues(projectStatus: ProjectStatus) {
    projectStatus.Status = this.lookupValues.find((lookupValue) => lookupValue?._id === projectStatus?.StatusId);
    projectStatus.createdBy = this.users.find((user) => user?._id === projectStatus?.CreatedBy);
    projectStatus.modifiedBy = this.users.find((user) => user?._id === projectStatus?.ModifiedBy);
    return projectStatus;
  }
}
