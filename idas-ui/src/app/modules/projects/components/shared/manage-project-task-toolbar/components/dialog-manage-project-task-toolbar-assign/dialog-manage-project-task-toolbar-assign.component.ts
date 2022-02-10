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
  LookupValue,
  LookupValueService,
  User,
} from 'app/shared/app-shared.module';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-dialog-manage-project-task-toolbar-assign',
  templateUrl: './dialog-manage-project-task-toolbar-assign.component.html',
  styleUrls: ['./dialog-manage-project-task-toolbar-assign.component.scss'],
  providers: [
    AlertifyService,
    AuthenticationService,
    LookupValueService,
    ReferenceValueService,
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {} },
  ],
})
export class DialogManageProjectTaskToolbarAssignComponent
  extends BaseDialogComponent
  implements OnInit
{
  assigneeId: number;
  projectAssignmentTypeId: number;
  comment: string;
  assignees: any[] = [];
  filteredAssignees: Observable<any[]>;
  projectAssignmentTypes: any[] = [];
  filteredProjectAssignmentTypes: Observable<any[]>;
  constructor(
    public router: Router,
    public matDialog: MatDialog,
    public formBuilder: FormBuilder,
    public alertifyService: AlertifyService,
    public authenticationService: AuthenticationService,
    public lookupValueService: LookupValueService,
    public referenceValueService: ReferenceValueService,
    public dialogRef: MatDialogRef<DialogManageProjectTaskToolbarAssignComponent>,
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
    this.lookupValueService
      .getAll<LookupValue>()
      .toPromise()
      .then((lookupValues) => {
        lookupValues
          ?.filter(
            (value) => value.LookupCategory.Name === 'ProjectAssignmentType'
          )
          ?.forEach((lookupValue) => {
            this.projectAssignmentTypes.push(
              this.mapLookupProjectAssignmentType(lookupValue)
            );
          });
      });
    this.referenceValueService.userService
      .getAll<User>()
      .toPromise()
      .then((assignees) => {
        assignees?.forEach((assignee) => {
          this.assignees.push(this.mapLookupAssignee(assignee));
        });
      });
  }
  ngOnInit(): void {
    this.frmGroup = new FormGroup({
      assigneeId: new FormControl('', [Validators.required]),
      projectAssignmentTypeId: new FormControl('', [
        this.conditionalControlIsRequired(),
      ]),
      comment: new FormControl('', [Validators.required]),
    });
    this.filteredAssignees = this.frmGroup.controls[
      `assigneeId`
    ].valueChanges.pipe(
      startWith(''),
      map((value) => this.filterValuesBy(this.assignees, value))
    );
    this.filteredProjectAssignmentTypes = this.frmGroup.controls[
      `projectAssignmentTypeId`
    ].valueChanges.pipe(
      startWith(''),
      map((value) => this.filterValuesBy(this.projectAssignmentTypes, value))
    );
  }
  conditionControlIsDisabled() {
    return this.toLocaleLowerCaseTrim(this.entityName) === `task`
      ? false
      : true;
  }
  conditionalControlIsRequired() {
    return this.toLocaleLowerCaseTrim(this.entityName) === `project`
      ? Validators.required
      : null;
  }
  conditionControlIsHidden() {
    return this.toLocaleLowerCaseTrim(this.entityName) === `task`
      ? true
      : false;
  }
  mapLookupAssignee(assignee: User) {
    return {
      id: assignee?._id,
      displayValue: assignee?.DisplayName,
      title:
        assignee?.UserType?.Value ||
        assignee?.UserType?.Value2 ||
        assignee?.UserType?.Value3 ||
        ``,
      cssClassCategory: assignee?.UserType?.CssClassCategory,
      cssClass: assignee?.UserType?.CssClass,
      icon: assignee?.UserType?.Icon,
      image: assignee?.Avatar || './assets/img/avatars/avatar-0.png',
    };
  }
  mapLookupProjectAssignmentType(lookupValue: LookupValue): any {
    return {
      id: lookupValue?._id,
      displayValue:
        lookupValue?.Value || lookupValue?.Value2 || lookupValue?.Value3 || ``,
      title:
        lookupValue?.Value || lookupValue?.Value2 || lookupValue?.Value3 || ``,
      cssClassCategory: lookupValue?.CssClassCategory,
      cssClass: lookupValue?.CssClass,
      icon: lookupValue?.Icon,
      image: lookupValue?.Image,
    };
  }
  onClickSave(): void {
    console.clear();
    console.log(`this.assigneeId\r\n`);
    console.log(this.assigneeId);
    console.log(`\r\nthis.projectAssignmentTypeId\r\n`);
    console.log(this.projectAssignmentTypeId);
    console.log(`\r\nthis.comment=${this.updates?.comment}`);
  }
}
