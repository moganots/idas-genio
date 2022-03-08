import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserService } from 'app/modules/user/services/user-service/user.service';
import {
  AuthenticationService,
  DataService,
  LookupValue,
  LookupValueService,
  ProjectReview,
  User,
} from 'app/shared/app-shared.module';
import { ProjectReviewConfiguration } from './project-review-configuration';

@Injectable({
  providedIn: 'root',
})
export class ProjectReviewService extends DataService {
  lookupValues: LookupValue[] = [];
  users: User[] = [];
  constructor(
    public httpClient: HttpClient,
    public authenticationService: AuthenticationService,
    public lookupValueService: LookupValueService,
    public userService: UserService
  ) {
    super(httpClient, authenticationService);
    this.entityName = ProjectReviewConfiguration.identifier;
    this.dataColumns = ProjectReviewConfiguration.dataColumns;
    this.lookupValueService.getAll<LookupValue>()// .toPromise().subscribe((lookupValues) => { this.lookupValues = lookupValues});
    this.userService.getAll<User>().subscribe(users => { this.users = users; });
  }
  mapValues(projectReview: ProjectReview) {
    projectReview.createdBy = this.users.find((user) => user?._id === projectReview?.CreatedBy);
    projectReview.modifiedBy = this.users.find((user) => user?._id === projectReview?.ModifiedBy);
    return projectReview;
  }
}
