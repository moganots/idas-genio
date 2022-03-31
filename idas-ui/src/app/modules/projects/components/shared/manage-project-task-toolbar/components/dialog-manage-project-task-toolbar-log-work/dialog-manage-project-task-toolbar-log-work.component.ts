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
  comment: string = null;
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
    this.formGroup = new FormGroup({
      timeSpent: new FormControl(
        { value: null, disabled: false },
        Validators.required
      ),
      dateStarted: new FormControl(
        { value: new Date(), disabled: false },
        Validators.required
      ),
      comment: new FormControl(
        { value: null, disabled: false },
        Validators.required
      ),
    });
  }
  onButtonClickSave(): void {
    if (
      this.dataService &&
      GeneralUtils.isStringSet(this.timeSpent) &&
      // tslint:disable-next-line:use-isnan
      GeneralUtils.isNumberSet(this.currentEntityId)
    ) {
      this.dateStarted = this.updates?.dateStarted || this.dateStarted;
      this.setDateCompleted();
      this.dataService
        .CreateUpdateDelete('Create', this.getWorkLog())
        .subscribe(
          (updated) => {
            this.alertifyService.success(
              `${this.entityName}, work log added successfully`
            );
            this.selectedElement?.Worklogs?.push(updated);
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
    const tsObject = { y: 0, m: 0, d: 0, w: 0, h: 0, min: 0, s: 0, sec: 0, ms: 0 };
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
        (tsObject[key] * -1)
      );
    });
  }
  getWorkLog(): any {
    return {
      ProjectId: this.currentEntityId,
      TaskId: this.currentEntityId,
      TimeSpent: this.timeSpent,
      DateStarted: this.dateStarted,
      DateCompleted: this.dateCompleted,
      Comment: this.updates?.comment
    }
  }
}
