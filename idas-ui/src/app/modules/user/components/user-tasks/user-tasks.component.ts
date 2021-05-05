import { Component } from '@angular/core';
import { MatDialog, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { PageComponent } from 'app/modules/_shared/modules-shared.module';
import { TasksService } from './services/tasks.service';
import { UserTasksConfiguration } from './user-tasks-configuration';

@Component({
  selector: 'app-user-tasks',
  templateUrl: './user-tasks.component.html',
  styleUrls: ['./user-tasks.component.scss'],
  providers: [
    TasksService,
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { }}
  ]
})
export class UserTasksComponent extends PageComponent {

  constructor(
    public matDialog: MatDialog,
    public tasksService: TasksService
    ) {
      super(matDialog);
      this.pageIcon = UserTasksConfiguration.pageIcon;
      this.pageTitle = UserTasksConfiguration.pageTitle;
      this.pageName = UserTasksConfiguration.pageName;
      this.dataService = tasksService;
      this.entityName = UserTasksConfiguration.identifier;
      this.sourceDataColumnNames = UserTasksConfiguration.fieldNames;
      // this.sourceData = tasksService.getAll<Task>();
  }

}
