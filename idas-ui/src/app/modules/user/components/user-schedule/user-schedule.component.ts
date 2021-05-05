import { Component } from '@angular/core';
import { MatDialog, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { PageComponent } from 'app/modules/_shared/modules-shared.module';
import { UserScheduleConfiguration } from './user-schedule-configuration';
import { ScheduleService } from './services/schedule.service';

@Component({
  selector: 'app-user-schedule',
  templateUrl: './user-schedule.component.html',
  styleUrls: ['./user-schedule.component.scss'],
  providers: [
    ScheduleService,
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { }}
  ]
})
export class UserScheduleComponent extends PageComponent {

  constructor(
    public matDialog: MatDialog,
    public scheduleService: ScheduleService
    ) {
      super(matDialog);
      this.pageIcon = UserScheduleConfiguration.pageIcon;
      this.pageTitle = UserScheduleConfiguration.pageTitle;
      this.pageName = UserScheduleConfiguration.pageName;
      this.dataService = scheduleService;
      this.entityName = UserScheduleConfiguration.identifier;
      this.sourceDataColumnNames = UserScheduleConfiguration.fieldNames;
      // this.sourceData = scheduleService.getAll<Schedule>();
  }

}
