import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ReferenceValueService } from 'app/modules/_shared/app-modules-shared.module';
import { BaseDataComponent } from 'app/modules/_shared/components/base-data-component/base-data.component';
import {
  AlertifyService,
  AuthenticationService,
  DateUtils,
  GeneralUtils,
  LookupValueService,
} from 'app/shared/app-shared.module';

@Component({
  selector: 'app-view-project-task-activity',
  templateUrl: './view-project-task-activity.component.html',
  styleUrls: ['./view-project-task-activity.component.scss'],
  providers: [
    AlertifyService,
    AuthenticationService,
    LookupValueService,
    ReferenceValueService,
  ],
})
export class ViewProjectTaskActivityComponent
  extends BaseDataComponent
  implements OnInit
{
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
  }
  ngOnInit(): void {}
  formatTimeSpent(timeSpent: string) {
    return timeSpent
      ?.split(` `)
      .map((ts) =>
        ts?.split(/(\d+)/).filter((tse) => !(String(tse).trim().length === 0))
      )
      .map((ts) => this.getFormattedTimeSpent(ts))
      .join(` `);
  }
  getFormattedTimeSpent(timeSpentElements?: string[]): any {
    switch (this.toLocaleLowerCaseTrim(timeSpentElements[1])) {
      case `y`:
        return `${timeSpentElements[0]} year(s)`;
      case `m`:
        return `${timeSpentElements[0]} month(s)`;
      case `d`:
        return `${timeSpentElements[0]} day(s)`;
      case `h`:
        return `${timeSpentElements[0]} hour(s)`;
      case `min`:
        return `${timeSpentElements[0]} minute(s)`;
      case `sec`:
        return `${timeSpentElements[0]} second(s)`;
    }
  }
  formattedTimeElapsed(date?: Date) {
    return date
      ? DateUtils.timeAgo(DateUtils.add(new Date(date), `hour`, -2))
      : ``;
  }
}
