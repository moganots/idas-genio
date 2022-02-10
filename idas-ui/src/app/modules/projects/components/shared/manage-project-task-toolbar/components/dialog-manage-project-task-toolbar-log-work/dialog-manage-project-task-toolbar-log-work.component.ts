import { Component, Inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
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
  DateUtils,
  GeneralUtils,
  LookupValueService,
} from 'app/shared/app-shared.module';

@Component({
  selector: 'app-dialog-manage-project-task-toolbar-log-work',
  templateUrl: './dialog-manage-project-task-toolbar-log-work.component.html',
  styleUrls: ['./dialog-manage-project-task-toolbar-log-work.component.scss'],
  providers: [
    AlertifyService,
    AuthenticationService,
    LookupValueService,
    ReferenceValueService,
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {} },
  ],
})
export class DialogManageProjectTaskToolbarLogWorkComponent
  extends BaseDialogComponent
  implements OnInit
{
  timeSpent: string = null;
  dateStarted: Date = new Date();
  dateCompleted: Date = new Date();
  description: string = null;
  constructor(
    public router: Router,
    public matDialog: MatDialog,
    public formBuilder: FormBuilder,
    public alertifyService: AlertifyService,
    public authenticationService: AuthenticationService,
    public lookupValueService: LookupValueService,
    public referenceValueService: ReferenceValueService,
    public dialogRef: MatDialogRef<DialogManageProjectTaskToolbarLogWorkComponent>,
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
    this.frmGroup = new FormGroup({
      timeSpent: new FormControl(
        { value: null, disabled: false },
        Validators.required
      ),
      dateStarted: new FormControl(
        { value: new Date(), disabled: false },
        Validators.required
      ),
      description: new FormControl(
        { value: null, disabled: false },
        Validators.required
      ),
    });
  }
  onClickSave(): void {
    if (
      GeneralUtils.isStringSet(this.timeSpent) &&
      this.dataService &&
      // tslint:disable-next-line:use-isnan
      (this.selectedElementId && this.selectedElementId !== NaN && this.selectedElementId !== 0)
    ) {
      this.dateStarted = this.updates?.dateStarted || this.dateStarted;
      console.log(`dateStarted=${this.dateStarted}`)
      this.setDateCompleted();
      this.dataService
        .CreateUpdateDelete('Create', this.getWorkLog())
        .subscribe(
          (updated) => {
            this.alertifyService.success(
              `${this.entityName}, work log added successfully`
            );
          },
          (error) => {
            this.alertifyService.error(
              `${this.entityName}, work log was not added`
            );
          }
        );
    }
  }
  setDateCompleted() {
    this.dateCompleted = this.dateStarted || new Date();
    const tsItems = this.timeSpent?.split(` `);
    const tsObject = { y: 0, m: 0, d: 0, w: 0, h: 0, min: 0, s: 0, ms: 0 };
    Object.keys(tsObject).map((key, index) => {
      tsObject[key] = GeneralUtils.toNumber(
        tsItems
          ?.find((ts) => ts.replace(/\d+/g, '') === key)
          ?.replace(/\D/g, '')
          ?.trim()
      );
    });
    Object.keys(tsObject).forEach((key) => {
      this.dateCompleted = DateUtils.add(
        this.dateCompleted,
        key,
        tsObject[key]
      );
    });
  }
  getWorkLog(): any {
    return {
      ProjectId: this.selectedElementId,
      TaskId: this.selectedElementId,
      DateStarted: this.dateStarted,
      DateCompleted: this.dateCompleted,
      Description: this.updates?.description
    }
  }
}
