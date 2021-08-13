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
} from 'app/shared/shared.module';
import {
  PageComponent,
  ReferenceValueService,
} from 'app/modules/_shared/shared-modules.module';
import { TasksConfiguration } from './tasks-configuration';
import { DialogCreateNewTaskComponent } from './components/dialog-create-new-task/dialog-create-new-task.component';

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
    public alertifyService: AlertifyService,
    public authenticationService: AuthenticationService,
    public lookupValueService: LookupValueService,
    public referenceValueService: ReferenceValueService
  ) {
    super(
      router,
      matDialog,
      alertifyService,
      authenticationService,
      lookupValueService,
      referenceValueService
    );
    this.pageIcon = TasksConfiguration.pageIcon;
    this.pageTitle = TasksConfiguration.pageTitle;
    this.pageName = TasksConfiguration.pageName;
    this.entityName = TasksConfiguration.identifier;
    this.sourceDataColumns = TasksConfiguration.dataColumns;
    this.onRefreshView();
  }
  ngOnInit() {
    this.onRefreshView();
  }
  private onRefreshView() {
    this.referenceValueService.usersService.getAll<User>().toPromise().then(users => {
      this.users = users;
    });
    this.lookupValueService.getAll<LookupValue>().toPromise().then(values => {
      this.referenceValueService.projectsService.getAll<Project>().toPromise().then(projects => {
        projects.forEach(project => {
          project.ProjectType = values.find(value => value._id === project.ProjectTypeId);
          project.Priority = values.find(value => value._id === project.PriorityId);
          project.Status = values.find(value => value._id === project.StatusId);
          this.referenceValueService.tasksService.getBy<Task>({ProjectId: project._id}).toPromise().then(tasks => {
            tasks.forEach(task => {
              task.TaskType = values.find(value => value._id === task.TaskTypeId);
              task.Priority = values.find(value => value._id === task.PriorityId);
              task.Status = values.find(value => value._id === task.StatusId);
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
    return (user) ? `Assignee: ${user.DisplayName}` : ``;
  }
  onClickAddNewProjectTask(project: Project) {
    super.openDialog(
      DialogCreateNewTaskComponent, {
        action : 'create',
        dataService : this.referenceValueService.tasksService,
        entityName : this.entityName,
        pageIcon : this.pageIcon,
        pageName : this.pageName,
        pageTitle : this.pageTitle,
        dataColumns : TasksConfiguration.dataColumns,
        selected : project || {}
      }, () => { this.onRefreshView(); });
  }
}
