import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import {
  PageComponent,
  ReferenceValueService,
} from 'app/modules/_shared/app-modules-shared.module';
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
} from 'app/shared/app-shared.module';
import { TaskService } from '../../services/task-service/task.service';
import { TaskConfiguration } from '../../task-configuration';

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
    TaskService
  ],
})
export class TaskComponent extends PageComponent implements OnInit {
  taskId?: number;
  task: Task;
  taskAssignees: any[] = [];
  lookupValues: LookupValue[] = [];
  statuses: LookupValue[] = [];
  priorities: LookupValue[] = [];

  constructor(
    public router: Router,
    public matDialog: MatDialog,
    public formBuilder: FormBuilder,
    public alertifyService: AlertifyService,
    public authenticationService: AuthenticationService,
    public lookupValueService: LookupValueService,
    public referenceValueService: ReferenceValueService,
    public fileAttachmentService: FileAttachmentService,
    public taskService: TaskService,
    private activatedRoute: ActivatedRoute
  ) {
    super(
      router,
      matDialog,
      formBuilder,
      alertifyService,
      authenticationService,
      lookupValueService,
      referenceValueService
    );
    this.entityName = TaskConfiguration.identifier;
    this.sourceDataColumns = TaskConfiguration.dataColumns;
    // tslint:disable-next-line:only-arrow-functions
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
    this.activatedRoute.params.subscribe((params) => {
      this.taskId = params.id;
    });
  }
  ngOnInit() {
    this.referenceValueService.userService
      .getAll<User>()
      .toPromise()
      .then((users) => {
        this.lookupValueService
          .getAll<LookupValue>()
          .toPromise()
          .then((lookupValues) => {
            this.referenceValueService.taskService
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
                this.referenceValueService.projectService
                  .getFirstById<Project>(task?.ProjectId)
                  .toPromise()
                  .then((project) => {
                    this.setProjectLookups(lookupValues, project);
                    this.setCreatedModifiedUser(users, project);
                    task.Project = project;
                  });
                // Get (Set) - Sub Task(s)
                this.referenceValueService.taskService
                  .getBy<Task>({ ParentTaskId: task?._id })
                  .toPromise()
                  .then((subTasks) => {
                    subTasks.forEach((subTask) => {
                      // Get (Set) - Parent Project
                      this.referenceValueService.projectService
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

  onButtonClicked(action: string, index?: number, element?: any): void {
    switch (this.toLocaleLowerCaseTrim(action)) {
      case 'edit':
        this.onClickLog(action, index, element);
        break;
      case 'comment':
        this.onClickLog(action, index, element);
        break;
      case 'logwork':
        this.onClickLog(action, index, element);
        break;
      case 'assign':
        this.onClickLog(action, index, element);
        break;
      case 'attach':
        this.onClickLog(action, index, element);
        break;
      case 'createsub':
        this.onClickLog(action, index, element);
        break;
      case 'clonecopy':
        this.onClickLog(action, index, element);
        break;
      case 'review':
        this.onClickLog(action, index, element);
        break;
    }
  }
  onClickLog(action: string, index: number, element: any) {
    console.log(`action=${action}, index=${index}`);
    console.log(element);
  }
}
