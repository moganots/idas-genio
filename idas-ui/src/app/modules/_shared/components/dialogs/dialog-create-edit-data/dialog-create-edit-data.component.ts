import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
  MAT_DIALOG_DEFAULT_OPTIONS
} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ReferenceValueService } from 'app/modules/_shared/services/reference-value-service/reference-value.service';
import {
  AlertifyService,
  AuthenticationService,
  LookupValueService
} from 'app/shared/shared.module';
import { BaseDialogComponent } from '../base-dialog/base-dialog.component';

@Component({
  selector: 'app-dialog-create-edit-data',
  templateUrl: './dialog-create-edit-data.component.html',
  styleUrls: ['./dialog-create-edit-data.component.scss'],
  providers: [
    AlertifyService,
    AuthenticationService,
    LookupValueService,
    ReferenceValueService,
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { }}
  ]
})
export class DialogCreateEditDataComponent extends BaseDialogComponent implements OnInit {

  constructor(
    public router: Router,
    public matDialog: MatDialog,
    public alertifyService: AlertifyService,
    public authenticationService: AuthenticationService,
    public lookupValueService: LookupValueService,
    public referenceValueService: ReferenceValueService,
    public dialogRef: MatDialogRef<DialogCreateEditDataComponent>,
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
      this.pageTitle = `${this.capitalizeFirstLetter(this.action)} ${this.capitalizeFirstLetter(this.entityName)}`;
  }

  ngOnInit() {
    this.initFormGroupAndFields(null);
    this.frmGroup = this.frmBuilder.group({
      frmFields: this.frmGroupFields,
    });
  }
}
