import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ReferenceValueService } from 'app/modules/_shared/app-modules-shared.module';
import { BaseDialogComponent } from 'app/modules/_shared/components/dialogs/base-dialog/base-dialog.component';
import { AlertifyService, AuthenticationService, LookupValueService } from 'app/shared/app-shared.module';

@Component({
  selector: 'app-dialog-manage-project-task-toolbar-copy',
  templateUrl: './dialog-manage-project-task-toolbar-copy.component.html',
  styleUrls: ['./dialog-manage-project-task-toolbar-copy.component.scss']
})
export class DialogManageProjectTaskToolbarCloneCopyComponent
extends BaseDialogComponent
implements OnInit
{
constructor(
  public router: Router,
  public matDialog: MatDialog,
  public formBuilder: FormBuilder,
  public alertifyService: AlertifyService,
  public authenticationService: AuthenticationService,
  public lookupValueService: LookupValueService,
  public referenceValueService: ReferenceValueService,
  public dialogRef: MatDialogRef<DialogManageProjectTaskToolbarCloneCopyComponent>,
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

ngOnInit(): void {
  this.initFormGroupAndFields();
}

}
