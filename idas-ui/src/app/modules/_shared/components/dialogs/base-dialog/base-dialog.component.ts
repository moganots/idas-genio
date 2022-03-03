import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
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
  implements OnInit
{
  useColumns: any[];
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
      entityName: null,
      entityId: null,
      dataService: null,
      pageIcon: 'report_problem',
      pageName: 'no page name',
      pageTitle: 'no page title',
      pageSubTitle: 'no page title',
      dataColumns: [],
      selectedElementIndex: -1,
      selectedElement: {},
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
    this.action = data?.action;
    this.entityName = data?.entityName;
    this.dataService = data?.dataService;
    this.pageIcon = data?.pageIcon;
    this.pageName = data?.pageName;
    this.pageTitle = data?.pageTitle;
    this.pageSubTitle = data?.pageSubTitle;
    this.dataSourceColumns = data?.dataColumns;
    this.currentEntityId = data?.selectedElement?._id || data?.selectedElement?.id;
    this.selectedElementIndex = data?.selectedElementIndex;
    this.selectedElement = data?.selectedElement || {};
  }
  ngOnInit(): void {
    this.setDataSourceColumns();
  }
  onClickDialogClose() {
    this.dialogRef.close();
  }
}
