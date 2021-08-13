import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UsersService } from 'app/modules/user/users.module';
import { BaseDialogComponent } from 'app/modules/_shared/components/dialogs/base-dialog/base-dialog.component';
import { ReferenceValueService } from 'app/modules/_shared/shared-modules.module';
import {
  AlertifyService,
  AuthenticationService,
  LookupValueService,
} from 'app/shared/shared.module';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-dialog-create-new-task',
  templateUrl: './dialog-create-new-task.component.html',
  styleUrls: ['./dialog-create-new-task.component.scss'],
  providers: [
    AlertifyService,
    AuthenticationService,
    LookupValueService,
    UsersService,
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
    public alertifyService: AlertifyService,
    public authenticationService: AuthenticationService,
    public lookupValueService: LookupValueService,
    public referenceValueService: ReferenceValueService,
    public usersService: UsersService,
    public dialogRef: MatDialogRef<DialogCreateNewTaskComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public frmBuilder: FormBuilder
  ) {
    super(
      router,
      matDialog,
      alertifyService,
      authenticationService,
      lookupValueService,
      referenceValueService,
      dialogRef,
      data,
      frmBuilder
    );
    this.pageIcon = 'post_add';
    this.pageTitle = `${this.capitalizeFirstLetter(
      this.action
    )} New Project Task`;
    this.projectName = this.selected.Name;
    this.selected = { ProjectId: this.selected._id };
    this.sourceDataColumns = data.dataColumns;
  }
  ngOnInit() {
    this.setDataSourceColumns();
    this.initFormGroupAndFields(this.dataSourceColumns.filter((dsc) => this.useColumns.includes(dsc.name)));
    this.frmGroup = this.frmBuilder.group({
      frmFields: this.frmGroupFields,
    });
  }
  onClickAssignToMe() {
    this.frmGroupFields.controls.AssigneeId.setValue(this.currentUser.DisplayName);
    this.updates.AssigneeId = this.currentUser._id;
  }
}
