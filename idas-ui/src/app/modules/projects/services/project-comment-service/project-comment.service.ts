import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserService } from 'app/modules/user/app-modules-users.module';
import {
  DataService,
  LookupValue,
  User,
  AuthenticationService,
  LookupValueService,
  ProjectComment,
} from 'app/shared/app-shared.module';
import { ProjectCommentConfiguration } from '../project-comment-service/project-comment-configuration';

@Injectable({
  providedIn: 'root',
})
export class ProjectCommentService extends DataService {
  lookupValues: LookupValue[];
  users: User[];
  constructor(
    public httpClient: HttpClient,
    public authenticationService: AuthenticationService,
    public lookupValueService: LookupValueService,
    public userService: UserService
  ) {
    super(httpClient, authenticationService);
    this.entityName = ProjectCommentConfiguration.identifier;
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
  mapValues(projectComment: ProjectComment) {
    projectComment.createdBy = this.users.find(
      (user) => user._id === projectComment.CreatedBy
    );
    projectComment.modifiedBy = this.users.find(
      (user) => user._id === projectComment.ModifiedBy
    );
    return projectComment;
  }
}
