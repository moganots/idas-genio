import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserService } from 'app/modules/user/services/user-service/user.service';
import {
  AuthenticationService,
  DataService,
  FileAttachment,
  FileAttachmentService,
  GeneralUtils,
  LookupValue,
  LookupValueService,
  Project,
  ProjectAssignment,
  ProjectComment,
  ProjectReview,
  ProjectWorklog,
  User,
} from 'app/shared/app-shared.module';
import { ProjectAssignService } from '../project-assign-service/project-assign.service';
import { ProjectCommentService } from '../project-comment-service/project-comment.service';
import { ProjectReviewService } from '../project-review-service/project-review.service';
import { ProjectWorklogService } from '../project-worklog-service/project-worklog.service';
import { ProjectConfiguration } from './project-configuration';

@Injectable({
  providedIn: 'root',
})
export class ProjectService extends DataService {
  lookupValues: LookupValue[] = [];
  projects: Project[] = [];
  users: User[] = [];
  files: FileAttachment[] = [];
  comments: ProjectComment[] = [];
  worklogs: ProjectWorklog[] = [];
  assignments: ProjectAssignment[] = [];
  reviews: ProjectReview[] = [];
  constructor(
    public httpClient: HttpClient,
    public authenticationService: AuthenticationService,
    public lookupValueService: LookupValueService,
    public userService: UserService,
    public fileAttachmentService: FileAttachmentService,
    public projectCommentService: ProjectCommentService,
    public projectWorklogService: ProjectWorklogService,
    public projectAssignService: ProjectAssignService,
    public projectReviewService: ProjectReviewService
  ) {
    super(httpClient, authenticationService);
    this.entityName = ProjectConfiguration.identifier;
    this.dataColumns = ProjectConfiguration.dataColumns;
    this.lookupValueService
      .getAll<LookupValue>()
      // .toPromise()
      .subscribe((lookupValues) => {
        this.lookupValues = lookupValues;
      });
    this.userService
      .getAll<User>()
      // .toPromise()
      .subscribe((users) => {
        this.users = users;
      });
    this.fileAttachmentService
      .getAll<FileAttachment>()
      // .toPromise()
      .subscribe((files) => {
        this.files = files;
      });
    this.projectCommentService
      .getAll<ProjectComment>()
      // .toPromise()
      .subscribe((comments) => {
        this.comments = comments;
      });
    this.projectWorklogService
      .getAll<ProjectWorklog>()
      // .toPromise()
      .subscribe((worklogs) => {
        this.worklogs = worklogs;
      });
    this.projectAssignService
      .getAll<ProjectAssignment>()
      // .toPromise()
      .subscribe((assignments) => {
        this.assignments = assignments;
      });
    this.projectReviewService
      .getAll<ProjectReview>()
      // .toPromise()
      .subscribe((reviews) => {
        this.reviews = reviews;
      });
    this.getAll<Project>()
      // .toPromise()
      .subscribe((projects) => {
        this.projects = projects;
      });
  }
  mapValues(project: Project) {
    if (!GeneralUtils.isObjectSet(project)) return project;
    project.ProjectType = this.lookupValues.find(
      (lookupValue) => lookupValue?._id === project?.ProjectTypeId
    );
    project.Priority = this.lookupValues.find(
      (lookupValue) => lookupValue?._id === project?.PriorityId
    );
    project.Status = this.lookupValues.find(
      (lookupValue) => lookupValue?._id === project?.StatusId
    );
    project.ProjectAssignees = this.assignments.filter(
      (assignment) => assignment?.ProjectId === project?._id
    );
    project.ParentProject = this.projects.find(
      (parentProject) => parentProject?._id === project?.ParentProjectId
    );
    project.AssociatedProjects = this.projects.filter(
      (associatedProject) => associatedProject?.ParentProjectId === project?._id
    );
    project.Files = this.files.filter(
      (file) => file?.ProjectId === project?._id
    );
    project.Comments = this.comments.filter(
      (comment) => comment?.ProjectId === project?._id
    );
    project.Worklogs = this.worklogs.filter(
      (workLog) => workLog?.ProjectId === project?._id
    );
    project.Reviews = this.reviews.filter(
      (review) => review?.ProjectId === project?._id
    );
    project.createdBy = this.users.find(
      (user) => user?._id === project?.CreatedBy
    );
    project.modifiedBy = this.users.find(
      (user) => user?._id === project?.ModifiedBy
    );
    return project;
  }
}
