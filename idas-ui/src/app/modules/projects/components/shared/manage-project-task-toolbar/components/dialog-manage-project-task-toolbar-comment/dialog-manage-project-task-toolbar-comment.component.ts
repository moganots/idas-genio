import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
  MAT_DIALOG_DEFAULT_OPTIONS,
} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ReferenceValueService } from 'app/modules/_shared/app-modules-shared.module';
import { BaseDialogComponent } from 'app/modules/_shared/components/dialogs/base-dialog/base-dialog.component';
import {
  AlertifyService,
  AuthenticationService,
  GeneralUtils,
  LookupValueService,
  TaskComment,
} from 'app/shared/app-shared.module';

@Component({
  selector: 'app-dialog-manage-project-task-toolbar-comment',
  templateUrl: './dialog-manage-project-task-toolbar-comment.component.html',
  styleUrls: ['./dialog-manage-project-task-toolbar-comment.component.scss'],
  providers: [
    AlertifyService,
    AuthenticationService,
    LookupValueService,
    ReferenceValueService,
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {} },
  ],
})
export class DialogManageProjectTaskToolbarCommentComponent
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
    public dialogRef: MatDialogRef<DialogManageProjectTaskToolbarCommentComponent>,
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
  onClickSave(): void {
      if(this.dataService && GeneralUtils.isNumberSet(this.entityId) && this.isNotEmptyString(this.updates?.Comment)){
        this.dataService.CreateUpdateDelete('Create', this.getComment()).subscribe(
          (updated) => {
            this.alertifyService.success(`${this.entityName}, comment added successfully`);
          },
          (error) => {
            this.alertifyService.error(`${this.entityName}, comment was not added`);
          }
        );
      }
  }
  getComment(): any {
    return {
      ProjectId: this.entityId,
      TaskId: this.entityId,
      Comment: this.updates?.comment
    }
  }
}
