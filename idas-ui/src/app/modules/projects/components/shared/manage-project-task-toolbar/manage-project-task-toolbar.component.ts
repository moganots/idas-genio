import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ReferenceValueService } from 'app/modules/_shared/app-modules-shared.module';
import { BaseDataComponent } from 'app/modules/_shared/components/base-data-component/base-data.component';
import {
  AlertifyService,
  AuthenticationService,
  DataService,
  FileAttachmentService,
  LookupValueService,
} from 'app/shared/app-shared.module';
import { DialogManageProjectTaskToolbarAssignComponent } from './components/dialog-manage-project-task-toolbar-assign/dialog-manage-project-task-toolbar-assign.component';
import { DialogManageProjectTaskToolbarCommentComponent } from './components/dialog-manage-project-task-toolbar-comment/dialog-manage-project-task-toolbar-comment.component';
import { DialogManageProjectTaskToolbarEditComponent } from './components/dialog-manage-project-task-toolbar-edit/dialog-manage-project-task-toolbar-edit.component';
import { DialogManageProjectTaskToolbarLogWorkComponent } from './components/dialog-manage-project-task-toolbar-log-work/dialog-manage-project-task-toolbar-log-work.component';
import { DialogManageProjectTaskToolbarReviewComponent } from './components/dialog-manage-project-task-toolbar-review/dialog-manage-project-task-toolbar-review.component';

@Component({
  selector: 'app-manage-project-task-toolbar',
  templateUrl: './manage-project-task-toolbar.component.html',
  styleUrls: ['./manage-project-task-toolbar.component.scss'],
  providers: [
    AlertifyService,
    AuthenticationService,
    LookupValueService,
    ReferenceValueService,
    FileAttachmentService
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
    public referenceValueService: ReferenceValueService,
    public fileAttachmentService: FileAttachmentService
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

  ngOnInit(): void {}

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
        this.openDialog(DialogManageProjectTaskToolbarEditComponent, action);
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
        this.dataService = this.fileAttachmentService;
        // this.openDialog(DialogManageProjectTaskToolbarAttachFilesComponent, action);
        break;
      case 'createsub':
        this.dataService = this.editService;
        // this.openDialog(DialogManageProjectTaskToolbarCreateSubComponent, action);
        break;
      case 'clonecopy':
        this.dataService = this.editService;
        // this.openDialog(DialogManageProjectTaskToolbarCloneCopyComponent, action);
        break;
      case 'review':
        this.dataService = this.reviewService;
        this.openDialog(DialogManageProjectTaskToolbarReviewComponent, action);
        break;
    }
  }
  openDialog(dialogComponent: any, action: string) {
    super.openDialog(
      dialogComponent,
      {
        action: `Edit`,
        dataService: this.dataService,
        entityName: this.entityName,
        pageIcon: this.pageIcon,
        pageName: `${this.splitCamelCase(this.capitalizeFirstLetter(action))} / ${this.capitalizeFirstLetter(this.entityName)}`,
        pageTitle: `${this.splitCamelCase(this.capitalizeFirstLetter(action))} / ${this.capitalizeFirstLetter(this.entityName)}`,
        pageSubTitle: `${this.selectedElement?.Name}`,
        dataColumns: this.dataService.dataColumns,
        selectedElement: this.selectedElement || {},
        selectedElementId: this.selectedElement?._id || this.selectedElement?.id,
        // selectedElementIndex: index || this.selectedElementIndex,
      },
      () => { }
    );
  }
}
