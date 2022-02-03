import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ReferenceValueService } from 'app/modules/_shared/app-modules-shared.module';
import { BaseDataComponent } from 'app/modules/_shared/components/base-data-component/base-data.component';
import {
  AlertifyService,
  AuthenticationService,
  DataService,
  LookupValueService,
} from 'app/shared/app-shared.module';
import { DialogManageProjectTaskToolbarAssignComponent } from './components/dialog-manage-project-task-toolbar-assign/dialog-manage-project-task-toolbar-assign.component';
import { DialogManageProjectTaskToolbarAttachFilesComponent } from './components/dialog-manage-project-task-toolbar-attach-files/dialog-manage-project-task-toolbar-attach-files.component';
import { DialogManageProjectTaskToolbarCloneCopyComponent } from './components/dialog-manage-project-task-toolbar-clone-copy/dialog-manage-project-task-toolbar-clone-copy.component';
import { DialogManageProjectTaskToolbarCommentComponent } from './components/dialog-manage-project-task-toolbar-comment/dialog-manage-project-task-toolbar-comment.component';
import { DialogManageProjectTaskToolbarCreateSubComponent } from './components/dialog-manage-project-task-toolbar-create-sub/dialog-manage-project-task-toolbar-create-sub.component';
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
    DataService,
  ],
})
export class ManageProjectTaskToolbarComponent
  extends BaseDataComponent
  implements OnInit
{
  @Output() edit: EventEmitter<any> = new EventEmitter();
  @Output() comment: EventEmitter<any> = new EventEmitter();
  @Output() logWork: EventEmitter<any> = new EventEmitter();
  @Output() assign: EventEmitter<any> = new EventEmitter();
  @Output() attach: EventEmitter<any> = new EventEmitter();
  @Output() createSub: EventEmitter<any> = new EventEmitter();
  @Output() cloneCopy: EventEmitter<any> = new EventEmitter();
  @Output() review: EventEmitter<any> = new EventEmitter();

  constructor(
    public router: Router,
    public matDialog: MatDialog,
    public alertifyService: AlertifyService,
    public authenticationService: AuthenticationService,
    public lookupValueService: LookupValueService,
    public referenceValueService: ReferenceValueService,
    public dataService: DataService
  ) {
    super(
      router,
      matDialog,
      alertifyService,
      authenticationService,
      lookupValueService,
      referenceValueService
    );
    this.dataService = dataService || this.dataService;
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
        this.openDialog(DialogManageProjectTaskToolbarEditComponent, action);
        break;
      case 'comment':
        this.openDialog(DialogManageProjectTaskToolbarCommentComponent, action);
        break;
      case 'logwork':
        this.openDialog(DialogManageProjectTaskToolbarLogWorkComponent, action);
        break;
      case 'assign':
        this.openDialog(DialogManageProjectTaskToolbarAssignComponent, action);
        break;
      case 'attach':
        this.openDialog(DialogManageProjectTaskToolbarAttachFilesComponent, action);
        break;
      case 'createsub':
        this.openDialog(DialogManageProjectTaskToolbarCreateSubComponent, action);
        break;
      case 'clonecopy':
        this.openDialog(DialogManageProjectTaskToolbarCloneCopyComponent, action);
        break;
      case 'review':
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
        pageName: this.pageName,
        pageTitle: this.pageTitle,
        dataColumns: this.dataSourceColumns,
        selectedElement: this.selectedElement || {},
        // selectedElementIndex: index || this.selectedElementIndex,
      },
      () => { }
    );
  }
}
