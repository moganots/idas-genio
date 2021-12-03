import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserService } from 'app/modules/user/app-modules-users.module';
import { DataService, LookupValue, User, AuthenticationService, LookupValueService, ProjectWorkLog } from 'app/shared/app-shared.module';
import { ProjectWorkLogConfiguration } from '../project-work-log-service/project-work-log-configuration';

@Injectable({
  providedIn: 'root',
})
export class ProjectWorkLogService extends DataService {
  lookupValues: LookupValue[];
  users: User[];
  constructor(
    public httpClient: HttpClient,
    public authenticationService: AuthenticationService,
    public lookupValueService: LookupValueService,
    public userService: UserService
  ) {
    super(httpClient, authenticationService);
    this.entityName = ProjectWorkLogConfiguration.identifier;
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
  mapValues(projectWorkLog: ProjectWorkLog) {
    projectWorkLog.createdBy = this.users.find(
      (user) => user._id === projectWorkLog.CreatedBy
    );
    projectWorkLog.modifiedBy = this.users.find(
      (user) => user._id === projectWorkLog.ModifiedBy
    );
    return projectWorkLog;
  }
}
