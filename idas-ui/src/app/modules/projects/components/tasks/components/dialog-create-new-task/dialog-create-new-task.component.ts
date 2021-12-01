import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserService } from 'app/modules/user/app-modules-users.module';
import { BaseDialogComponent } from 'app/modules/_shared/components/dialogs/base-dialog/base-dialog.component';
import { ReferenceValueService } from 'app/modules/_shared/app-modules-shared.module';
import {
  AlertifyService,
  AuthenticationService,
  LookupValueService,
} from 'app/shared/app-shared.module';

@Component({
  selector: 'app-dialog-create-new-task',
  templateUrl: './dialog-create-new-task.component.html',
  styleUrls: ['./dialog-create-new-task.component.scss'],
  providers: [
    AlertifyService,
    AuthenticationService,
    LookupValueService,
    UserService,
  ],
})
export class DialogCreateNewTaskComponent
  extends BaseDialogComponent
  implements OnInit
{
  task = {
    ProjectId: undefined,
    Name: undefined,
    Description: undefined,
    TaskTypeId: undefined,
    PriorityId: undefined,
    AssigneeId: undefined,
  };
  useColumns = [`Name`, `Description`, `TaskTypeId`, `PriorityId`, `StatusId`, `AssigneeId`, `Files`];
  projectName: string;
  constructor(
    public router: Router,
    public matDialog: MatDialog,
    public formBuilder: FormBuilder,
    public alertifyService: AlertifyService,
    public authenticationService: AuthenticationService,
    public lookupValueService: LookupValueService,
    public referenceValueService: ReferenceValueService,
    public UserService: UserService,
    public dialogRef: MatDialogRef<DialogCreateNewTaskComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    super(
      router,
      matDialog,
      formBuilder,
      alertifyService,
      authenticationService,
      lookupValueService,
      referenceValueService,
      dialogRef,
      data
    );
    this.pageIcon = 'post_add';
    this.pageTitle = `${this.capitalizeFirstLetter(
      this.action
    )} New Project Task`;
    this.projectName = this.selected.Name;
    this.selected = { ProjectId: this.selected._id };
    this.sourceDataColumns = data.dataColumns;
    this.setDataSourceColumns();
  }
  ngOnInit() {
    this.initFormGroupAndFields(this.dataSourceColumns.filter((dsc) => this.useColumns.includes(dsc.name)));
  }
  onClickAssignToMe() {
    this.frmGroupFields.controls.AssigneeId.setValue(this.currentUser.DisplayName);
    this.updates.AssigneeId = this.currentUser._id;
  }
}
