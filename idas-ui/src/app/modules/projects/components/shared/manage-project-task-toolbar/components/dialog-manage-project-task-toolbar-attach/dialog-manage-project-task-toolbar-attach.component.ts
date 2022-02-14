import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ReferenceValueService } from 'app/modules/_shared/app-modules-shared.module';
import { BaseDialogComponent } from 'app/modules/_shared/components/dialogs/base-dialog/base-dialog.component';
import {
  AlertifyService,
  AuthenticationService,
  LookupValueService,
} from 'app/shared/app-shared.module';

@Component({
  selector: 'app-dialog-manage-project-task-toolbar-attach',
  templateUrl: './dialog-manage-project-task-toolbar-attach.component.html',
  styleUrls: ['./dialog-manage-project-task-toolbar-attach.component.scss'],
})
export class DialogManageProjectTaskToolbarAttachFilesComponent
  extends BaseDialogComponent
  implements OnInit
{
  comment: any;
  constructor(
    public router: Router,
    public matDialog: MatDialog,
    public formBuilder: FormBuilder,
    public alertifyService: AlertifyService,
    public authenticationService: AuthenticationService,
    public lookupValueService: LookupValueService,
    public referenceValueService: ReferenceValueService,
    public dialogRef: MatDialogRef<DialogManageProjectTaskToolbarAttachFilesComponent>,
    @Inject(MAT_DIALOG_DATA) public data
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
  }

  ngOnInit(): void {}
  get isProject() {
    return this.toLocaleLowerCaseTrim(this.entityName) === `project`;
  }
  get isTask() {
    return this.toLocaleLowerCaseTrim(this.entityName) === `task`;
  }
}
