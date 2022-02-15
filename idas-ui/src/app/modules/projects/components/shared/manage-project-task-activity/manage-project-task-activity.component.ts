import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ReferenceValueService } from 'app/modules/_shared/app-modules-shared.module';
import { BaseComponent } from 'app/modules/_shared/components/base-component/base.component';
import {
  AlertifyService,
  AuthenticationService,
  LookupValueService,
  DataService,
} from 'app/shared/app-shared.module';

@Component({
  selector: 'app-manage-project-task-activity',
  templateUrl: './manage-project-task-activity.component.html',
  styleUrls: ['./manage-project-task-activity.component.scss'],
  providers: [
    AlertifyService,
    AuthenticationService,
    LookupValueService,
    DataService,
  ],
})
export class ManageProjectTaskActivityComponent
  extends BaseComponent
  implements OnInit
{
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
    console.log(this.selectedElement);
  }

  ngOnInit(): void {
    console.log(this.selectedElement);
  }
}
