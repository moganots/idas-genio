import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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
} from 'app/shared/app-shared.module';

@Component({
  selector: 'app-dialog-manage-project-task-toolbar-review',
  templateUrl: './dialog-manage-project-task-toolbar-review.component.html',
  styleUrls: ['./dialog-manage-project-task-toolbar-review.component.scss'],
  providers: [
    AlertifyService,
    AuthenticationService,
    LookupValueService,
    ReferenceValueService,
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {} },
  ],
})
export class DialogManageProjectTaskToolbarReviewComponent
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
    public dialogRef: MatDialogRef<DialogManageProjectTaskToolbarReviewComponent>,
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
    this.formGroup = this.formBuilder.group({
      review: [
        {
          value: ``,
        },
        Validators.required,
      ],
      reviewRapproveReject: [
        {
          value: null,
        },
        Validators.required,
      ],
    });
  }
  get f() {
    return this.formGroup.controls;
  }
  get review() {
    return document.getElementById(`review`);
  }
  get reviewIsSet() {
    return GeneralUtils.isStringSet(this.review.innerText);
  }
  get reviewApproved() {
    return (
      this.f?.reviewRapproveReject?.touched &&
      GeneralUtils.toLocaleLowerCaseWithTrim(
        this.f?.reviewRapproveReject?.value
      ) === `approve`
    );
  }
  get reviewRejected() {
    return (
      this.f?.reviewRapproveReject?.touched &&
      GeneralUtils.toLocaleLowerCaseWithTrim(
        this.f?.reviewRapproveReject?.value
      ) === `reject`
    );
  }
  get ifCanSave() {
    return this.reviewIsSet && this.f?.reviewRapproveReject?.touched;
  }
  onButtonClickSave(): void {
      if(this.dataService && GeneralUtils.isNumberSet(this.currentEntityId)){
        this.dataService.CreateUpdateDelete('Create', this.getReview()).subscribe(
          (updated) => {
            this.alertifyService.success(`${this.entityName}, review added successfully`);
            this.selectedElement?.Reviews?.push(updated);
          },
          (error) => {
            this.alertifyService.error(`${this.entityName}, review was not added`);
          }
        );
      }
  }
  getReview(): any {
    return {
      ProjectId: this.currentEntityId,
      TaskId: this.currentEntityId,
      Review: this.review.innerText,
      Approved: this.reviewApproved,
      Rejected: this.reviewRejected,
    }
  }
}
