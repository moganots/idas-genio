import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ReferenceValueService } from 'app/modules/_shared/app-modules-shared.module';
import { BaseComponent } from 'app/modules/_shared/components/base-component/base.component';
import {
  AlertifyService,
  AuthenticationService,
  DataService,
  LookupValue,
  LookupValueService,
} from 'app/shared/app-shared.module';

@Component({
  selector: 'app-manage-project-task-details',
  templateUrl: './manage-project-task-details.component.html',
  styleUrls: ['./manage-project-task-details.component.scss'],
  providers: [
    AlertifyService,
    AuthenticationService,
    DataService,
    LookupValueService,
  ],
})
export class ManageProjectTaskDetailsComponent
  extends BaseComponent
  implements OnInit
{
  statuses: LookupValue[] = [];
  priorities: LookupValue[] = [];

  constructor(
    public router: Router,
    public matDialog: MatDialog,
    public alertifyService: AlertifyService,
    public authenticationService: AuthenticationService,
    public lookupValueService: LookupValueService,
    public referenceValueService: ReferenceValueService,
    public dataService: DataService
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

  ngOnInit(): void {
    this.lookupValueService
      .getAll<LookupValue>()
      .toPromise()
      .then((lookupValues) => {
        this.statuses = lookupValues.filter(
          (value) => value.LookupCategory.Name === 'Status'
        );
        this.priorities = lookupValues.filter(
          (value) => value.LookupCategory.Name === 'Priority'
        );
      });
  }
  onButtonClicked(option: string, value: any): void {
    switch (this.toLocaleLowerCaseTrim(option)) {
      case 'priority':
        this.selected.Priority = value;
        break;
      case 'status':
        this.selected.Status = value;
        break;
    }
    console.log(this.dataService)
    this.dataService.CreateUpdateDelete(`update`, this.selected).subscribe(
      (updated) => {
        this.alertifyService.success(`Task ${option}, updated successfully`);
      },
      (error) => {
        this.alertifyService.error(`Task ${option}, not updated`);
      }
    );
    console.log(`After: Update`);
    console.log(this.selected);
  }
}
