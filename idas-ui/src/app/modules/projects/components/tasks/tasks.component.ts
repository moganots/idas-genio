import { Component, OnInit } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DEFAULT_OPTIONS,
} from '@angular/material/dialog';
import { Router } from '@angular/router';
import {
  AlertifyService,
  AuthenticationService,
  LookupValue,
  LookupValueService,
  Project,
  Task,
  User,
} from 'app/shared/app-shared.module';
import {
  PageComponent,
  ReferenceValueService,
} from 'app/modules/_shared/app-modules-shared.module';
import { TaskConfiguration } from './task-configuration';
import { DialogCreateNewTaskComponent } from './components/dialog-create-new-task/dialog-create-new-task.component';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
  providers: [
    AlertifyService,
    AuthenticationService,
    LookupValueService,
    ReferenceValueService,
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {} },
  ],
})
export class TasksComponent extends PageComponent implements OnInit {
  projectId?: number;
  assigneeId?: number;
  users: User[] = [];
  projects: Project[] = [];

  constructor(
    public router: Router,
    public matDialog: MatDialog,
    public formBuilder: FormBuilder,
    public alertifyService: AlertifyService,
    public authenticationService: AuthenticationService,
    public lookupValueService: LookupValueService,
    public referenceValueService: ReferenceValueService
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
    this.pageIcon = TaskConfiguration.pageIcon;
    this.pageTitle = TaskConfiguration.pageTitle;
    this.pageName = TaskConfiguration.pageName;
    this.entityName = TaskConfiguration.identifier;
    this.sourceDataColumns = TaskConfiguration.dataColumns;
    this.onRefreshView();
  }
  ngOnInit() {
    this.onRefreshView();
  }
  private onRefreshView() {
    this.referenceValueService.userService
      .getAll<User>()
      .toPromise()
      .then((users) => {
        this.users = users;
      });
    this.lookupValueService
      .getAll<LookupValue>()
      .toPromise()
      .then((values) => {
        this.referenceValueService.projectService
          .getAll<Project>()
          .toPromise()
          .then((projects) => {
            projects.forEach((project) => {
              project.ProjectType = values.find(
                (value) => value._id === project.ProjectTypeId
              );
              project.Priority = values.find(
                (value) => value._id === project.PriorityId
              );
              project.Status = values.find(
                (value) => value._id === project.StatusId
              );
              this.referenceValueService.taskService
                .getBy<Task>({ ProjectId: project._id })
                .toPromise()
                .then((tasks) => {
                  tasks.forEach((task) => {
                    task.TaskType = values.find(
                      (value) => value._id === task.TaskTypeId
                    );
                    task.Priority = values.find(
                      (value) => value._id === task.PriorityId
                    );
                    task.Status = values.find(
                      (value) => value._id === task.StatusId
                    );
                  });
                  project.Tasks = tasks;
                });
            });
            this.projects = projects;
          });
      });
  }
  setToolbarUserFilterTitle(user: User) {
    return `Display Task(s) assigned to ${user.DisplayName}`;
  }
  setTaskUserTitle(user: User) {
    return user ? `Assignee: ${user.DisplayName}` : ``;
  }
  onClickAddNewProjectTask(project: Project) {
    super.openDialog(
      DialogCreateNewTaskComponent,
      {
        action: 'create',
        dataService: this.referenceValueService.taskService,
        entityName: this.entityName,
        pageIcon: this.pageIcon,
        pageName: this.pageName,
        pageTitle: this.pageTitle,
        dataColumns: TaskConfiguration.dataColumns,
        selected: project || {},
      },
      () => {
        this.onRefreshView();
      }
    );
  }
}
