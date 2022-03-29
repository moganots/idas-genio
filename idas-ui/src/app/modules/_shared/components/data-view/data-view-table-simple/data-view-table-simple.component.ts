import {
  AfterViewInit,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {
  MatDialog,
  MAT_DIALOG_DEFAULT_OPTIONS,
} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ReferenceValueService } from 'app/modules/_shared/services/reference-value-service/reference-value.service';
import {
  AlertifyService,
  AuthenticationService,
  DataColumn,
  GeneralUtils,
  LookupValueService,
} from 'app/shared/app-shared.module';
import { DialogCreateEditDataComponent } from '../../dialogs/dialog-create-edit-data/dialog-create-edit-data.component';
import { BaseDataViewComponent } from '../base-data-view/base-data-view.component';

@Component({
  selector: 'app-data-view-table-simple',
  templateUrl: './data-view-table-simple.component.html',
  styleUrls: ['./data-view-table-simple.component.scss'],
  providers: [
    AlertifyService,
    AuthenticationService,
    LookupValueService,
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {} },
  ],
})
export class DataViewTableSimpleComponent
  extends BaseDataViewComponent
  implements OnInit, AfterViewInit
{
  @Output() delete: EventEmitter<any> = new EventEmitter();
  @Output() manageEmployee: EventEmitter<any> = new EventEmitter();
  @Output() manageUser: EventEmitter<any> = new EventEmitter();
  @Output() manageProjectAssignments: EventEmitter<any> = new EventEmitter();
  @Output() manageProjectTasks: EventEmitter<any> = new EventEmitter();
  @Output() manageProjectReInstate: EventEmitter<any> = new EventEmitter();
  @Output() manageSubtask: EventEmitter<any> = new EventEmitter();
  @Output() messageView: EventEmitter<any> = new EventEmitter();
  @Output() messageReply: EventEmitter<any> = new EventEmitter();
  @Output() messageReplyAll: EventEmitter<any> = new EventEmitter();
  @Output() messageUnRead: EventEmitter<any> = new EventEmitter();

  constructor(
    public router: Router,
    public matDialog: MatDialog,
    public formBuilder: FormBuilder,
    public alertifyService: AlertifyService,
    public authenticationService: AuthenticationService,
    public lookupValueService: LookupValueService,
    public referenceValueService: ReferenceValueService
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
  }
  ngOnInit() {
    // this.setDataSourceColumns();
    this.initFormGroupAndFields();
    this.onDataRefresh();
    console.log(this.dataSource);
  }
  ngAfterViewInit() {
    if (this.matTableDataSource) {
      this.matTableDataSource.paginator = this.paginator;
      this.matTableDataSource.sort = this.sort;
    }
  }
  getFormattedColumnDisplayName(column: DataColumn) {
    return this.entityName === `inbox-message` && column?.name === `CreatedBy`
      ? `Sent By`
      : this.entityName === `inbox-message` && column?.name === `DateCreated`
      ? `Date Sent`
      : column?.displayName;
  }
  onClickCreate(): void {
    super.onClickCreate();
    this.onOpenCreateEditDialog();
  }
  onClickEdit(element: any, index?: number): void {
    super.onClickEdit(element, index);
    this.onOpenCreateEditDialog(element, index);
  }
  getTitleEditButton(element: any, index?: number) {
    return `${[
      'Edit',
      this.capitalizeFirstLetter(this.entityName || ``) /*, `(${index})`*/,
    ]
      .join(` `)
      .trim()}`;
  }
  hideEditButton() {
    // ToDo: Check current user's permissions
    return [`inbox-message`].includes(this.entityName);
  }
  onClickDelete(element: any, index?: number): void {
    super.onClickDelete(element, index);
    this.delete.emit(element);
  }
  getTitleDeleteButton(element: any, index?: number) {
    return `${[
      'Delete',
      this.capitalizeFirstLetter(this.entityName || ``) /*, `(${index})`*/,
    ]
      .join(` `)
      .trim()}`;
  }
  hideDeleteButton() {
    // ToDo: Check current user's permissions
    return true;
  }
  onClickManageUserAccountButton(element: any, index?: number): void {
    this.setSelectedElementAndIndex(element, index);
    this.manageUser.emit({ index, element });
  }
  getTitleManageUserAccountButton(element: any, index?: number) {
    return `${[element[`IsLocked`] ? `Unlock` : 'Lock', 'User Account']
      .join(` `)
      .trim()}`;
  }
  hideManageUserAccountButton() {
    // ToDo: Check current user's permissions
    return !['user'].includes(
      this.toLocaleLowerCaseTrim(this.entityName || ``)
    );
  }
  getManageUserAccountIcon(element: any, index?: number) {
    return element[`IsLocked`] ? `lock_open` : `lock`;
  }
  onClickManageEmployeeButton(element: any, index?: number): void {
    this.setSelectedElementAndIndex(element, index);
    this.manageEmployee.emit({ index, element });
  }
  getTitleManageEmployeeButton(element: any, index?: number) {
    return `${[element[`IsTerminated`] ? `Re-Instate` : 'Terminate', 'Employee']
      .join(` `)
      .trim()}`;
  }
  hideManageEmployeeButton() {
    // ToDo: Check current user's permissions
    return !['employee'].includes(
      this.toLocaleLowerCaseTrim(this.entityName || ``)
    );
  }
  getManageEmployeeIcon(element: any, index?: number) {
    return element[`IsTerminated`] ? `person_add` : `person_off`;
  }
  onClickViewProjectProgressButton(element: any, index?: number) {
    this.setSelectedElementAndIndex(element, index);
    this.manageProjectTasks.emit({ index, element });
  }
  getTitleViewProjectProgressButton(element: any, index?: number) {
    return [
      `View`,
      this.capitalizeFirstLetter(this.entityName || ``),
      `Progress`,
    ]
      .join(` `)
      .trim();
  }
  hideViewProjectProgressButton(element) {
    return !['project'].includes(
      this.toLocaleLowerCaseTrim(this.entityName || ``)
    );
  }
  onClickManageProjectTaskButton(element: any, index?: number): void {
    this.setSelectedElementAndIndex(element, index);
    this.manageProjectTasks.emit({ index, element });
  }
  getTitleManageProjectTaskButton(element: any, index?: number) {
    return [
      `View`,
      this.capitalizeFirstLetter(this.entityName || ``),
      `Task(s)`,
    ]
      .join(` `)
      .trim();
  }
  hideManageProjectTaskButton(element: any) {
    const status = this.toLocaleLowerCaseTrim(
      this.getLookupValueById(element[`StatusId`]).Value || ``
    );
    return !(
      ['project'].includes(this.toLocaleLowerCaseTrim(this.entityName || ``))
      /*      &&
      [
        'created',
        'not started',
        'started',
        're-started',
        'in progress',
      ].includes(status) */
    );
  }
  onClickManageProjectAssignmentButton(element: any, index?: number): void {
    this.setSelectedElementAndIndex(element, index);
    this.manageProjectAssignments.emit({ index, element });
  }
  getTitleManageProjectAssignmentButton(element: any, index?: number) {
    return `${[
      this.capitalizeFirstLetter(this.entityName || ``),
      'Assignment(s)',
    ]
      .join(` `)
      .trim()}`;
  }
  hideManageProjectAssignmentButton(element: any, index?: number) {
    const status = this.toLocaleLowerCaseTrim(
      this.getLookupValueById(element[`StatusId`]).Value || ``
    );
    return !(
      ['project'].includes(this.toLocaleLowerCaseTrim(this.entityName || ``)) &&
      [
        'created',
        'not started',
        'started',
        're-started',
        'in progress',
      ].includes(status)
    );
  }
  onClickManageProjectReInstateButton(element: any, index?: number): void {
    this.setSelectedElementAndIndex(element, index);
    this.manageProjectReInstate.emit({ index, element });
  }
  getTitleManageProjectReInstateButton(element: any, index?: number) {
    return [`Re-Instate`, this.capitalizeFirstLetter(this.entityName || ``)]
      .join(` `)
      .trim();
  }
  hideManageProjectReInstateButton(element: any, index?: number) {
    const status = this.toLocaleLowerCaseTrim(
      this.getLookupValueById(element[`StatusId`]).Value || ``
    );
    return !(
      ['project'].includes(this.entityName || ``) &&
      ['blocked', 'completed', 'done'].includes(status)
    );
  }
  onClickManageParentTaskButton(element: any, index?: number) {
    this.setSelectedElementAndIndex(element, index);
    this.manageSubtask.emit({ index, element });
  }
  getTitleManageParentTaskButton(element: any, index?: number) {
    return [`Create`, `Sub Task`].join(` `).trim();
  }
  hideManageParentTaskButton(element: any, index?: number) {
    return ![`task`].includes(
      this.toLocaleLowerCaseTrim(this.entityName || ``)
    );
  }
  onClickMessageView(element: any, index?: number) {
    this.setSelectedElementAndIndex(element, index);
    this.messageView.emit({ index, element });
  }
  onClickMessageUnRead(element: any, index?: number) {
    this.setSelectedElementAndIndex(element, index);
    this.messageUnRead.emit({ index, element });
  }
  onClickMessageReply(element: any, index?: number) {
    this.setSelectedElementAndIndex(element, index);
    this.messageReply.emit({ index, element });
  }
  onClickMessageReplyAll(element: any, index?: number) {
    this.setSelectedElementAndIndex(element, index);
    this.messageReplyAll.emit({ index, element });
  }
  hideInboxMessageButtons() {
    return !(this.entityName === `inbox-message`);
  }
  getTitleMessageUnRead(element: any, index?: number) {
    return [`Mark`, (element?.IsActive) ? `Read` : `Un-Read`].join(` `);
  }
  getIconMessageUnRead(element: any) {
    return (element?.IsActive) ? `mark_email_read` : `mark_email_unread`;
  }
  onOpenCreateEditDialog(element?: any, index?: number) {
    this.setSelectedElementAndIndex(element, index);
    const id = (element || {})?._id || (element || {})?.id;
    const name =
      (element || {})?.DisplayName ||
      (element || {})?.Name ||
      (element || {})?.Subject;
    super.openDialog(
      DialogCreateEditDataComponent,
      {
        action: this.action,
        dataService: this.dataService,
        entityName: this.entityName,
        pageIcon: this.pageIcon,
        pageName: `${this.capitalizeFirstLetter(this.action)} ${this.entityName
          ?.split(`-`)
          ?.map((en) => this.capitalizeFirstLetter(en))
          .join(` `)}`,
        pageTitle: `${this.capitalizeFirstLetter(this.action)} ${this.entityName
          ?.split(`-`)
          ?.map((en) => this.capitalizeFirstLetter(en))
          .join(` `)}`,
        pageSubTitle: `${GeneralUtils.StringJoin([id, name], ` / `)}`,
        dataColumns: this.dataSourceColumns,
        selectedElement: element || {},
        selectedElementIndex: index || this.selectedElementIndex,
      },
      () => {
        this.onDataRefresh();
      }
    );
  }
}
