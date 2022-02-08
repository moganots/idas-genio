import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { TaskService } from 'app/modules/projects/components/tasks/services/task-service/task.service';
import { ProjectService } from 'app/modules/projects/services/project-service/project.service';
import { ReferenceValueService } from 'app/modules/_shared/app-modules-shared.module';
import { BaseDialogComponent } from 'app/modules/_shared/components/dialogs/base-dialog/base-dialog.component';
import { AlertifyService, AuthenticationService, LookupValueService } from 'app/shared/app-shared.module';

@Component({
  selector: 'app-dialog-manage-project-task-toolbar',
  templateUrl: './dialog-manage-project-task-toolbar.component.html',
  styleUrls: ['./dialog-manage-project-task-toolbar.component.css']
})
export class DialogManageProjectTaskToolbarComponent
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
  public dialogRef: MatDialogRef<DialogManageProjectTaskToolbarComponent>,
  @Inject(MAT_DIALOG_DATA) public data,
  private projecstService: ProjectService,
  private tasksService: TaskService
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
  this.data.dataService
}

}
