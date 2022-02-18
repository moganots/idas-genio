import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserService } from 'app/modules/user/services/user.service';
import {
  AuthenticationService,
  DataService,
  LookupValue,
  LookupValueService,
  Project,
  ProjectReview,
  User,
} from 'app/shared/app-shared.module';
import { ProjectService } from '../project-service/project.service';
import { ProjectReviewConfiguration } from './project-review-configuration';

@Injectable({
  providedIn: 'root',
})
export class ProjectReviewService extends DataService {
  lookupValues: LookupValue[] = [];
  projects: Project[] = [];
  users: User[] = [];
  constructor(
    public httpClient: HttpClient,
    public authenticationService: AuthenticationService,
    public projectService: ProjectService,
    public lookupValueService: LookupValueService,
    public userService: UserService
  ) {
    super(httpClient, authenticationService);
    this.entityName = ProjectReviewConfiguration.identifier;
    this.dataColumns = ProjectReviewConfiguration.dataColumns;
    this.lookupValueService.getAll<LookupValue>().toPromise().then((lookupValues) => { this.lookupValues = lookupValues});
    this.projectService.getAll<Project>().toPromise().then((projects) => { this.projects = projects});
    this.userService.getAll<User>().subscribe(users => { this.users = users; });
  }
  mapValues(projectReview: ProjectReview) {
    projectReview.Project = this.projects.find((project) => project?._id === projectReview?.ProjectId);
    projectReview.createdBy = this.users.find((user) => user?._id === projectReview?.CreatedBy);
    projectReview.modifiedBy = this.users.find((user) => user?._id === projectReview?.ModifiedBy);
    return projectReview;
  }
}
