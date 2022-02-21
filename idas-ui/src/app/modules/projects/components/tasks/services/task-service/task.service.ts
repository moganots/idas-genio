import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProjectService } from 'app/modules/projects/services/project-service/project.service';
import { UserService } from 'app/modules/user/services/user-service/user.service';
import {
  AuthenticationService,
  DataService,
  FileAttachment,
  FileAttachmentService,
  LookupValue,
  LookupValueService,
  Project,
  Task,
  TaskAssignment,
  TaskComment,
  TaskReview,
  TaskWorklog,
  User,
} from 'app/shared/app-shared.module';
import { TaskAssignService } from '../task-assign-service/task-assign-service';
import { TaskCommentService } from '../task-comment-service/task-comment.service';
import { TaskReviewService } from '../task-review-service/task-review.service';
import { TaskWorklogService } from '../task-work-log-service/task-worklog-service';
import { TaskConfiguration } from './task-configuration';

@Injectable({
  providedIn: 'root',
})
export class TaskService extends DataService {
  lookupValues: LookupValue[] = [];
  tasks: Task[] = [];
  users: User[] = [];
  projects: Project[] = [];
  files: FileAttachment[] = [];
  comments: TaskComment[] = [];
  worklogs: TaskWorklog[] = [];
  assignments: TaskAssignment[] = [];
  reviews: TaskReview[] = [];
  constructor(
    public httpClient: HttpClient,
    public authenticationService: AuthenticationService,
    public lookupValueService: LookupValueService,
    public userService: UserService,
    public projectService: ProjectService,
    public fileAttachmentService: FileAttachmentService,
    public taskCommentService: TaskCommentService,
    public taskWorklogService: TaskWorklogService,
    public taskAssignService: TaskAssignService,
    public taskReviewService: TaskReviewService
  ) {
    super(httpClient, authenticationService);
    this.entityName = TaskConfiguration.identifier;
    this.dataColumns = TaskConfiguration.dataColumns;
    this.lookupValueService
      .getAll<LookupValue>()
      .toPromise()
      .then((lookupValues) => {
        this.lookupValues = lookupValues;
      });
    this.userService
      .getAll<User>()
      .toPromise()
      .then((users) => {
        this.users = users;
      });
    this.projectService
      .getAll<Project>()
      .toPromise()
      .then((projects) => {
        this.projects = projects;
      });
    this.fileAttachmentService
      .getAll<FileAttachment>()
      .toPromise()
      .then((files) => {
        this.files = files;
      });
    this.taskCommentService
      .getAll<TaskComment>()
      .toPromise()
      .then((comments) => {
        this.comments = comments;
      });
    this.taskWorklogService
      .getAll<TaskWorklog>()
      .toPromise()
      .then((worklogs) => {
        this.worklogs = worklogs;
      });
    this.taskAssignService
      .getAll<TaskAssignment>()
      .toPromise()
      .then((assignments) => {
        this.assignments = assignments;
      });
    this.taskReviewService
      .getAll<TaskReview>()
      .toPromise()
      .then((reviews) => {
        this.reviews = reviews;
      });
    this.getAll<Task>()
      .toPromise()
      .then((tasks) => {
        this.tasks = tasks;
      });
  }
  mapValues(task: Task) {
    task.Project = this.projects.find(
      (project) => project?._id === task?.ProjectId
    );
    task.TaskType = this.lookupValues.find(
      (lookupValue) => lookupValue?._id === task?.TaskTypeId
    );
    task.Priority = this.lookupValues.find(
      (lookupValue) => lookupValue?._id === task?.PriorityId
    );
    task.Status = this.lookupValues.find(
      (lookupValue) => lookupValue?._id === task?.StatusId
    );
    task.Assignee = this.users.find((user) => user?._id === task?.AssigneeId);
    task.ParentTask = this.tasks.find(
      (parentTask) => parentTask?._id === task?.ParentTaskId
    );
    task.SubTasks = this.tasks.filter(
      (subTask) => subTask?.ParentTaskId === task?._id
    );
    task.Files = this.files.filter((file) => file?.TaskId === task?._id);
    task.Comments = this.comments.filter(
      (comment) => comment?.TaskId === task?._id
    );
    task.Worklogs = this.worklogs.filter(
      (workLog) => workLog?.TaskId === task?._id
    );
    task.Reviews = this.reviews.filter(
      (review) => review?.TaskId === task?._id
    );
    task.createdBy = this.users.find((user) => user?._id === task?.CreatedBy);
    task.modifiedBy = this.users.find((user) => user?._id === task?.ModifiedBy);
    return task;
  }
}
