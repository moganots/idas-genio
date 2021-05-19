import { Location } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthenticationService, LookupService, ReferenceEntityService } from 'app/shared/shared.module';
import { BaseDialogComponent } from '../base-dialog/base-dialog.component';

@Component({
  selector: 'app-dialog-create-edit-data',
  templateUrl: './dialog-create-edit-data.component.html',
  styleUrls: ['./dialog-create-edit-data.component.scss'],
  providers: [
    AuthenticationService,
    LookupService,
    ReferenceEntityService,
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { }}
  ]
})
export class DialogCreateEditDataComponent extends BaseDialogComponent {

  constructor(
    public location: Location,
    public router: Router,
    public matDialog: MatDialog,
    public authenticationService: AuthenticationService,
    public lookupService: LookupService,
    public referenceEntityService: ReferenceEntityService,
    public dialogRef: MatDialogRef<DialogCreateEditDataComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    public frmBuilder: FormBuilder
    ) {
    super(location, router, matDialog, authenticationService, lookupService, referenceEntityService, dialogRef, data, frmBuilder);
  }
  
}
