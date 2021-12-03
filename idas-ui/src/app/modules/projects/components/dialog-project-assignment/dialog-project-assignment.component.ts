import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import {
  MAT_DIALOG_DEFAULT_OPTIONS,
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { BaseDialogComponent } from 'app/modules/_shared/components/dialogs/base-dialog/base-dialog.component';
import { ReferenceValueService } from 'app/modules/_shared/services/reference-value-service/reference-value.service';
import {
  AlertifyService,
  AuthenticationService,
  LookupValueService,
} from 'app/shared/app-shared.module';
import { ProjectAssignmentConfiguration } from './project-assignment-configuration';
import { ProjectAssignmentsService } from './services/project-assignments.service';

@Component({
  selector: 'app-dialog-project-assignment',
  templateUrl: './dialog-project-assignment.component.html',
  styleUrls: ['./dialog-project-assignment.component.scss'],
  providers: [
    AlertifyService,
    AuthenticationService,
    LookupValueService,
    ReferenceValueService,
    ProjectAssignmentsService,
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {} },
  ],
})
export class DialogProjectAssignmentComponent
  extends BaseDialogComponent
  implements OnInit
{
  projectId: number;
  projectName: string;
  useInputColumnNames = [`ProjectAssignmentTypeId`, `AssigneeId`, `PreviousAssigneeId`];

  constructor(
    public router: Router,
    public matDialog: MatDialog,
    public formBuilder: FormBuilder,
    public alertifyService: AlertifyService,
    public authenticationService: AuthenticationService,
    public lookupValueService: LookupValueService,
    public referenceValueService: ReferenceValueService,
    public dialogRef: MatDialogRef<DialogProjectAssignmentComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    public projectAssignmentService: ProjectAssignmentsService
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
    this.dataService = projectAssignmentService;
    this.projectId = data.selected.element._id;
    this.projectName = data.selected.element.Name;
    this.entityName = `${ProjectAssignmentConfiguration.identifier}`;
    this.pageIcon = ProjectAssignmentConfiguration.pageIcon;
    this.pageName = `${ProjectAssignmentConfiguration.pageName}`;
    this.pageTitle = `${ProjectAssignmentConfiguration.pageTitle}`;
    this.sourceDataColumns = ProjectAssignmentConfiguration.dataColumns;
    this.setDataSourceColumns();
  }
  ngOnInit() {
    this.formInputDataColumns = this.dataSourceColumns.filter((column) => this.useInputColumnNames.includes(column.name));
    this.initFormGroupAndFields(this.formInputDataColumns);
    this.onDataRefresh();
    this.onApplyFilter(this.projectId);
  }
  onClickAssignToProject() {
    if(this.projectId && Object.keys(this.updates).length !== 0){
      this.updates.ProjectId = this.projectId;
    }
  }
}
