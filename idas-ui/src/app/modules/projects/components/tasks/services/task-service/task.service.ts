import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProjectService } from 'app/modules/projects/services/project-service/project.service';
import { UserService } from 'app/modules/user/services/user.service';
import {
  AuthenticationService,
  DataService,
  FileAttachment,
  FileAttachmentService,
  LookupValue,
  LookupValueService,
  Project,
  Task,
  TaskComment,
  TaskWorkLog,
  User,
} from 'app/shared/app-shared.module';
import { TaskCommentService } from '../task-comment-service/task-comment.service';
import { TaskWorkLogService } from '../task-work-log-service/task-worklog-service';
import { TaskConfiguration } from './task-configuration';

@Injectable({
  providedIn: 'root',
})
export class TaskService extends DataService {
  lookupValues: LookupValue[] = [];
  projects: Project[] = [];
  users: User[] = [];
  files: FileAttachment[] = [];
  comments: TaskComment[] = [];
  workLogs: TaskWorkLog[] = [];
  constructor(
    public httpClient: HttpClient,
    public authenticationService: AuthenticationService,
    public projectService: ProjectService,
    public lookupValueService: LookupValueService,
    public userService: UserService,
    public fileAttachmentService: FileAttachmentService,
    public taskCommentService: TaskCommentService,
    public taskWorkLogService: TaskWorkLogService,
  ) {
    super(httpClient, authenticationService);
    this.entityName = TaskConfiguration.identifier;
    this.dataColumns = TaskConfiguration.dataColumns;
    this.lookupValueService.getAll<LookupValue>().toPromise().then((lookupValues) => { this.lookupValues = lookupValues});
    this.projectService.getAll<Project>().toPromise().then((projects) => { this.projects = projects});
    this.userService.getAll<User>().toPromise().then(users => { this.users = users; });
    this.fileAttachmentService.getAll<FileAttachment>().toPromise().then(files => { this.files = files; });
    this.taskCommentService.getAll<TaskComment>().toPromise().then(comments => { this.comments = comments; });
    this.taskWorkLogService.getAll<TaskWorkLog>().toPromise().then(workLogs => { this.workLogs = workLogs; });
  }
  mapValues(task: Task) {
    task.Project = this.projects.find((project) => project?._id === task.ProjectId);
    task.TaskType = this.lookupValues.find((lookupValue) => lookupValue?._id === task.TaskTypeId);
    task.Priority = this.lookupValues.find((lookupValue) => lookupValue?._id === task.PriorityId);
    task.Assignee = this.users.find((user) => user?._id === task.AssigneeId);
    task.Status = this.lookupValues.find((lookupValue) => lookupValue?._id === task.StatusId);
    task.Files = this.files.filter((file) => file?.TaskId === task?._id);
    task.Comments = this.comments.filter((comment) => comment?.TaskId === task?._id);
    task.WorkLogs = this.workLogs.filter((workLog) => workLog?.TaskId === task?._id);
    task.createdBy = this.users.find((user) => user?._id === task.CreatedBy);
    task.modifiedBy = this.users.find((user) => user?._id === task.ModifiedBy);
    return task;
  }
}
