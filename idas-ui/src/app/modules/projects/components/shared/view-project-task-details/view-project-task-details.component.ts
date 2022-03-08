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
  selector: 'app-view-project-task-details',
  templateUrl: './view-project-task-details.component.html',
  styleUrls: ['./view-project-task-details.component.scss'],
  providers: [
    AlertifyService,
    AuthenticationService,
    DataService,
    LookupValueService,
  ],
})
export class ViewProjectTaskDetailsComponent
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
      // .toPromise()
      .subscribe((lookupValues) => {
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
        this.selectedElement.Priority = value;
        break;
      case 'status':
        this.selectedElement.Status = value;
        break;
    }
    this.dataService.CreateUpdateDelete(`update`, this.selectedElement).subscribe(
      (updated) => {
        this.alertifyService.success(`Task ${option}, updated successfully`);
        this.selectedElement = updated;
      },
      (error) => {
        this.alertifyService.error(`Task ${option}, not updated`);
      }
    );
  }
}
