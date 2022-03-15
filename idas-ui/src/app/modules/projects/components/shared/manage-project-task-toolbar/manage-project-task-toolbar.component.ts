import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogCreateEditDataComponent, ReferenceValueService } from 'app/modules/_shared/app-modules-shared.module';
import { BaseDataComponent } from 'app/modules/_shared/components/base-data-component/base-data.component';
import {
  AlertifyService,
  AuthenticationService,
  DataService,
  GeneralUtils,
  LookupValueService,
} from 'app/shared/app-shared.module';
import { DialogManageProjectTaskToolbarAssignComponent } from './components/dialog-manage-project-task-toolbar-assign/dialog-manage-project-task-toolbar-assign.component';
import { DialogManageProjectTaskToolbarAttachFilesComponent } from './components/dialog-manage-project-task-toolbar-attach/dialog-manage-project-task-toolbar-attach.component';
import { DialogManageProjectTaskToolbarCommentComponent } from './components/dialog-manage-project-task-toolbar-comment/dialog-manage-project-task-toolbar-comment.component';
import { DialogManageProjectTaskToolbarCloneCopyComponent } from './components/dialog-manage-project-task-toolbar-copy/dialog-manage-project-task-toolbar-copy.component';
import { DialogManageProjectTaskToolbarLogWorkComponent } from './components/dialog-manage-project-task-toolbar-log-work/dialog-manage-project-task-toolbar-log-work.component';
import { DialogManageProjectTaskToolbarReviewComponent } from './components/dialog-manage-project-task-toolbar-review/dialog-manage-project-task-toolbar-review.component';
import { DialogManageProjectTaskToolbarCreateSubComponent } from './components/dialog-manage-project-task-toolbar-sub/dialog-manage-project-task-toolbar-sub.component';

@Component({
  selector: 'app-manage-project-task-toolbar',
  templateUrl: './manage-project-task-toolbar.component.html',
  styleUrls: ['./manage-project-task-toolbar.component.scss'],
  providers: [
    AlertifyService,
    AuthenticationService,
    LookupValueService,
    ReferenceValueService,
  ],
})
export class ManageProjectTaskToolbarComponent
  extends BaseDataComponent
  implements OnInit
{
  @Input() public editService: DataService;
  @Input() public commentService: DataService;
  @Input() public workLogService: DataService;
  @Input() public assignService: DataService;
  @Input() public createSubService: DataService;
  @Input() public cloneCopyService: DataService;
  @Input() public reviewService: DataService;

  constructor(
    public router: Router,
    public matDialog: MatDialog,
    public alertifyService: AlertifyService,
    public authenticationService: AuthenticationService,
    public lookupValueService: LookupValueService,
    public referenceValueService: ReferenceValueService
  ) {
    super(
      router,
      matDialog,
      alertifyService,
      authenticationService,
      lookupValueService,
      referenceValueService
    );
  }

  ngOnInit(): void {
  }

  getDependentElementName() {
    switch (this.toLocaleLowerCaseTrim(this.entityName)) {
      case 'project':
        return `Child ${this.capitalizeFirstLetter(this.entityName)}`;
      case 'task':
        return `Sub-${this.capitalizeFirstLetter(this.entityName)}`;
      default:
        return ``;
    }
  }

  onButtonClicked(action: string): void {
    switch (this.toLocaleLowerCaseTrim(action)) {
      case 'edit':
        this.dataService = this.editService;
        this.openDialog(DialogCreateEditDataComponent, action);
        break;
      case 'comment':
        this.dataService = this.commentService;
        this.openDialog(DialogManageProjectTaskToolbarCommentComponent, action);
        break;
      case 'logwork':
        this.dataService = this.workLogService;
        this.openDialog(DialogManageProjectTaskToolbarLogWorkComponent, action);
        break;
      case 'assign':
        this.dataService = this.assignService;
        this.openDialog(DialogManageProjectTaskToolbarAssignComponent, action);
        break;
      case 'attachfiles':
        this.openDialog(
          DialogManageProjectTaskToolbarAttachFilesComponent,
          action
        );
        break;
      case 'createsub':
        this.dataService = this.editService;
        this.openDialog(
          DialogManageProjectTaskToolbarCreateSubComponent,
          action
        );
        break;
      case 'clonecopy':
        this.dataService = this.editService;
        this.openDialog(
          DialogManageProjectTaskToolbarCloneCopyComponent,
          action
        );
        break;
      case 'review':
        this.dataService = this.reviewService;
        this.openDialog(DialogManageProjectTaskToolbarReviewComponent, action);
        break;
    }
  }
  openDialog(dialogComponent: any, action: string) {
    const id = this.currentEntityId || this.selectedElement?._id || this.selectedElement?.id;
    const name = this.selectedElement?.DisplayName || this.selectedElement?.Name;
    const icon = (this.selectedElement?.ProjectType || this.selectedElement?.TaskType)?.Icon || this.pageIcon;
    super.openDialog(
      dialogComponent,
      {
        action: this.getDialogAction(action),
        dataService: this.dataService,
        entityName: this.entityName,
        entityId: id,
        pageIcon: icon,
        pageName: `${this.splitCamelCase(
          this.capitalizeFirstLetter(this.getProjectDialogName(action))
        )} / ${this.capitalizeFirstLetter(this.entityName)}`,
        pageTitle: `${this.splitCamelCase(
          this.capitalizeFirstLetter(this.getProjectDialogName(action))
        )} / ${this.capitalizeFirstLetter(this.entityName)}`,
        pageSubTitle: GeneralUtils.StringJoin([id, name], ` / `),
        dataColumns: this.dataService.dataColumns,
        selectedElement: this.getSelectedElement(action),
      },
      () => {}
    );
  }
  getProjectDialogName(action: string): string {
    return (this.isProject) ? this.toLocaleLowerCaseTrim(action).replace(`sub`, `Child`) : action;
  }
  getDialogAction(action: string) {
    return [`createsub`, `clonecopy`].includes(
      this.toLocaleLowerCaseTrim(action)
    )
      ? `Create`
      : `Edit`;
  }
  getSelectedElement(action: string) {
    return [`createsub`, `clonecopy`].includes(
      this.toLocaleLowerCaseTrim(action)
    )
      ? {
          ProjectId: this.selectedElement?.ProjectId,
          ParentProjectId: this.selectedElement?._id,
          ParentTaskId: this.selectedElement?._id,
          Name: ``
        }
      : this.selectedElement || {};
  }
  get isProject() {
    return this.toLocaleLowerCaseTrim(this.entityName) === `project`;
  }
  get isTask() {
    return this.toLocaleLowerCaseTrim(this.entityName) === `task`;
  }
}
