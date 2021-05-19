import { Location } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DEFAULT_OPTIONS, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthenticationService, LookupService, ReferenceEntityService } from 'app/shared/shared.module';
import { BaseDialogComponent } from '../base-dialog/base-dialog.component';

@Component({
  selector: 'app-dialog-project-task-assignment',
  templateUrl: './dialog-project-task-assignment.component.html',
  styleUrls: ['./dialog-project-task-assignment.component.css'],
  providers: [
    AuthenticationService,
    LookupService,
    ReferenceEntityService,
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { }}
  ]
})
export class DialogProjectTaskAssignmentComponent extends BaseDialogComponent {

  constructor(
    public location: Location,
    public router: Router,
    public matDialog: MatDialog,
    public authenticationService: AuthenticationService,
    public lookupService: LookupService,
    public referenceEntityService: ReferenceEntityService,
    public dialogRef: MatDialogRef<DialogProjectTaskAssignmentComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    public frmBuilder: FormBuilder
    ) {
    super(location, router, matDialog, authenticationService, lookupService, referenceEntityService, dialogRef, data, frmBuilder);
  }
  
}
