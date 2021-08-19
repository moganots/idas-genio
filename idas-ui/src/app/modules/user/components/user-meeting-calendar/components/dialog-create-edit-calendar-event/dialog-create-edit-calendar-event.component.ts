import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { BaseDialogComponent } from 'app/modules/_shared/components/dialogs/base-dialog/base-dialog.component';
import { ReferenceValueService } from 'app/modules/_shared/shared-modules.module';
import { AlertifyService, AuthenticationService, LookupValueService } from 'app/shared/shared.module';

@Component({
  selector: 'app-dialog-create-edit-calendar-event',
  templateUrl: './dialog-create-edit-calendar-event.component.html',
  styleUrls: ['./dialog-create-edit-calendar-event.component.scss']
})
export class DialogCreateEditCalendarEventComponent extends BaseDialogComponent implements OnInit {

  constructor(
    public router: Router,
    public matDialog: MatDialog,
    public alertifyService: AlertifyService,
    public authenticationService: AuthenticationService,
    public lookupValueService: LookupValueService,
    public referenceValueService: ReferenceValueService,
    public dialogRef: MatDialogRef<DialogCreateEditCalendarEventComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    public frmBuilder: FormBuilder
    ) {
    super(
      router
      , matDialog
      , alertifyService
      , authenticationService
      , lookupValueService
      , referenceValueService
      , dialogRef
      , data
      , frmBuilder);
      this.pageTitle = `${this.capitalizeFirstLetter(this.action)} ${this.entityName.split(`-`).map(en => this.capitalizeFirstLetter(en)).join(` `)}`;
  }

  ngOnInit() {
    this.initFormGroupAndFields(null);
    this.frmGroup = this.frmBuilder.group({
      frmFields: this.frmGroupFields,
    });
  }
}
