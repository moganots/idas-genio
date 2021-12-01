import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
  MAT_DIALOG_DEFAULT_OPTIONS,
} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ReferenceValueService } from 'app/modules/_shared/services/reference-value-service/reference-value.service';
import {
  AlertifyService,
  AuthenticationService,
  DataColumn,
  LookupValueService,
} from 'app/shared/app-shared.module';
import { BaseDataViewComponent } from '../../data-view/base-data-view/base-data-view.component';

@Component({
  selector: 'app-base-dialog',
  templateUrl: './base-dialog.component.html',
  styleUrls: ['./base-dialog.component.scss'],
  providers: [
    AlertifyService,
    AuthenticationService,
    LookupValueService,
    ReferenceValueService,
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {} },
  ],
})
export class BaseDialogComponent
  extends BaseDataViewComponent
{
  constructor(
    public router: Router,
    public matDialog: MatDialog,
    public formBuilder: FormBuilder,
    public alertifyService: AlertifyService,
    public authenticationService: AuthenticationService,
    public lookupValueService: LookupValueService,
    public referenceValueService: ReferenceValueService,
    public dialogRef: MatDialogRef<BaseDialogComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: any = {
      action: null,
      dataService: null,
      entityName: null,
      pageIcon: 'report_problem',
      pageName: 'no page name',
      pageTitle: 'no page title',
      dataColumns: [],
      selected: {},
      selectedIndex: -1,
    }
  ) {
    super(
      router,
      matDialog,
      formBuilder,
      alertifyService,
      authenticationService,
      lookupValueService,
      referenceValueService
    );
    this.action = data.action;
    this.dataService = data.dataService;
    this.entityName = data.entityName;
    this.pageIcon = data.pageIcon;
    this.pageName = data.pageName;
    this.pageTitle = data.pageTitle;
    this.dataSourceColumns = data.dataColumns;
    this.selected = data.selected || {};
    this.selectedIndex = data.selectedIndex;
  }
  onClickDialogClose() {
    this.dialogRef.close();
  }
}
