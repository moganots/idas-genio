import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogCreateEditDataComponent, ReferenceValueService } from 'app/modules/_shared/app-modules-shared.module';
import { PageComponent } from 'app/modules/_shared/components/page/page.component';
import {
  AlertifyService,
  AuthenticationService,
  GeneralUtils,
  LookupValueService,
  Project,
  Task,
  User,
} from 'app/shared/app-shared.module';
import { TaskConfiguration } from './services/task-service/task-configuration';
import { TaskService } from './services/task-service/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent extends PageComponent implements OnInit {
  users: User[] = [];
  projects: Project[] = [];
  tasks: Task[] = [];
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
    this.dataService = referenceValueService.taskService;
    this.entityName = TaskConfiguration.identifier;
    this.dataSourceColumns = TaskConfiguration.dataColumns;
  }
  ngOnInit(): void {
    this.referenceValueService.userService
      .getAll<User>()
      // .toPromise()
      .subscribe((users) => {
        this.users = users;
      });
    this.referenceValueService.projectService
      .getAll<Project>()
      // .toPromise()
      .subscribe((projects) => {
        this.projects = projects;
        this.referenceValueService.taskService
          .getAll<Task>()
          // .toPromise()
          .subscribe((tasks) => {
            this.projects.forEach((project) => {
              project.Tasks = tasks?.filter(
                (task) => task?.ProjectId === project?._id
              );
            });
          });
      });
  }
  onClickAddNewProjectTask(project: Project): void {
    this.action = `Create`;
    const id = project?._id;
    const name = project?.DisplayName || project?.Name;
    super.openDialog(
      DialogCreateEditDataComponent,
      {
        action: this.action,
        dataService: this.dataService,
        entityName: this.entityName,
        pageIcon: this.pageIcon,
        pageName: `${this.capitalizeFirstLetter(this.action)} ${this.capitalizeFirstLetter(this.entityName)}`,
        pageTitle: `${this.capitalizeFirstLetter(this.action)} ${this.capitalizeFirstLetter(this.entityName)}`,
        pageSubTitle: `${GeneralUtils.StringJoin([id, name], ` / `)}`,
        dataColumns: this.dataSourceColumns,
        selectedElement: {ProjectId: id},
      },
      () => {}
    );
  }
}
