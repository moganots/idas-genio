import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import {
  PageComponent,
  ReferenceValueService,
} from 'app/modules/_shared/shared-modules.module';
import {
  AlertifyService,
  AuthenticationService,
  LookupValue,
  LookupValueService,
  Task,
  FileAttachmentService,
  User,
  Project,
  FileAttachment,
} from 'app/shared/shared.module';
import { TasksConfiguration } from '../../tasks-configuration';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
  providers: [
    AlertifyService,
    AuthenticationService,
    LookupValueService,
    ReferenceValueService,
    FileAttachmentService,
  ],
})
export class TaskComponent extends PageComponent implements OnInit {
  taskId?: number;
  task: Task;
  taskAssignees: any[] = [];
  lookupValues: LookupValue[] = [];
  statuses: LookupValue[] = [];
  priorities: LookupValue[] = [];

  @ViewChild('autosize') autosize: CdkTextareaAutosize;

  constructor(
    public router: Router,
    public matDialog: MatDialog,
    public alertifyService: AlertifyService,
    public authenticationService: AuthenticationService,
    public lookupValueService: LookupValueService,
    public referenceValueService: ReferenceValueService,
    public fileAttachmentService: FileAttachmentService,
    private activatedRoute: ActivatedRoute
  ) {
    super(
      router,
      matDialog,
      alertifyService,
      authenticationService,
      lookupValueService,
      referenceValueService
    );
    this.entityName = TasksConfiguration.identifier;
    // tslint:disable-next-line:only-arrow-functions
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
    this.activatedRoute.params.subscribe((params) => {
      this.taskId = params.id;
    });
  }
  ngOnInit() {
    this.referenceValueService.usersService
      .getAll<User>()
      .toPromise()
      .then((users) => {
        this.lookupValueService
          .getAll<LookupValue>()
          .toPromise()
          .then((lookupValues) => {
            this.referenceValueService.tasksService
              .getFirstById<Task>(this.taskId)
              .toPromise()
              .then((task) => {
                // Get (Set) - Task FileAttachment(s)
                this.fileAttachmentService
                  .getBy<FileAttachment>({ TaskId: task?._id })
                  .toPromise()
                  .then((files) => {
                    files.forEach((file) => {
                      this.setCreatedModifiedUser(users, file);
                    });
                    task.Files = files;
                  });
                // Get (Set) - Parent Project
                this.referenceValueService.projectsService
                  .getFirstById<Project>(task?.ProjectId)
                  .toPromise()
                  .then((project) => {
                    this.setProjectLookups(lookupValues, project);
                    this.setCreatedModifiedUser(users, project);
                    task.Project = project;
                  });
                // Get (Set) - Sub Task(s)
                this.referenceValueService.tasksService
                  .getBy<Task>({ ParentTaskId: task?._id })
                  .toPromise()
                  .then((subTasks) => {
                    subTasks.forEach((subTask) => {
                      // Get (Set) - Parent Project
                      this.referenceValueService.projectsService
                        .getFirstById<Project>(subTask?.ProjectId)
                        .toPromise()
                        .then((project) => {
                          this.setProjectLookups(lookupValues, project);
                          this.setCreatedModifiedUser(users, project);
                          subTask.Project = project;
                        });
                        // (Set) - Sub Task
                      this.setTaskAssignee(users, subTask);
                      this.setTaskLookups(lookupValues, subTask);
                      this.setCreatedModifiedUser(users, subTask);
                    });
                    task.SubTasks = subTasks;
                  });
                // (Set) - Task
                this.setTaskAssignee(users, task);
                this.setTaskLookups(lookupValues, task);
                this.setCreatedModifiedUser(users, task);
                this.task = task;
              });
            // Get (Set) Status / Priority dropdown value(s)
            this.statuses = lookupValues.filter(
              (value) => value.LookupCategory.Name === 'Status'
            );
            this.priorities = lookupValues.filter(
              (value) => value.LookupCategory.Name === 'Priority'
            );
          });
      });
  }
  setTaskAssignee(users: User[], task: Task) {
    task.Assignee = users.find((user) => user._id === task?.AssigneeId);
  }
  setTaskLookups(lookupValues: LookupValue[], task: Task) {
    task.TaskType = lookupValues.find(
      (lookupValue) => lookupValue._id === task?.TaskTypeId
    );
    task.Priority = lookupValues.find(
      (lookupValue) => lookupValue._id === task?.PriorityId
    );
    task.Status = lookupValues.find(
      (lookupValue) => lookupValue._id === task?.StatusId
    );
  }
  setProjectLookups(lookupValues: LookupValue[], project: Project) {
    project.ProjectType = lookupValues.find(
      (lookupValue) => lookupValue._id === project?.ProjectTypeId
    );
    project.Priority = lookupValues.find(
      (lookupValue) => lookupValue._id === project?.PriorityId
    );
    project.Status = lookupValues.find(
      (lookupValue) => lookupValue._id === project?.StatusId
    );
  }
  setCreatedModifiedUser(users: User[], value: any) {
    value.createdBy = users.find((user) => user._id === value?.CreatedBy);
    value.modifiedBy = users.find((user) => user._id === value?.ModifiedBy);
  }
}
