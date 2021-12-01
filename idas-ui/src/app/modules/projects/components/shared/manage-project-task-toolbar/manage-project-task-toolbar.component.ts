import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogCreateEditDataComponent, ReferenceValueService } from 'app/modules/_shared/app-modules-shared.module';
import { BaseDataComponent } from 'app/modules/_shared/components/base-data-component/base-data.component';
import {
  AlertifyService,
  AuthenticationService,
  DataService,
  LookupValueService,
} from 'app/shared/app-shared.module';

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

  onButtonClicked(action: string, index?: number, element?: any): void {
    switch (this.toLocaleLowerCaseTrim(action)) {
      case 'edit':
        this.edit.emit({ action, index, element });
        break;
      case 'comment':
        this.comment.emit({ action, index, element });
        break;
      case 'logwork':
        this.logWork.emit({ action, index, element });
        break;
      case 'assign':
        this.assign.emit({ action, index, element });
        break;
      case 'attach':
        this.attach.emit({ action, index, element });
        break;
      case 'createsub':
        this.createSub.emit({ action, index, element });
        break;
      case 'clonecopy':
        this.cloneCopy.emit({ action, index, element });
        break;
      case 'review':
        this.review.emit({ action, index, element });
        break;
    }
  }
  onOpenCreateEditDialog(element?: any, index?: number) {
    super.openDialog(
      DialogCreateEditDataComponent,
      {
        action: this.action,
        dataService: this.dataService,
        entityName: this.entityName,
        pageIcon: this.pageIcon,
        pageName: this.pageName,
        pageTitle: this.pageTitle,
        dataColumns: this.dataSourceColumns,
        selected: element || {},
        selectedIndex: index || this.selectedIndex,
      },
      () => {
        this.onDataRefresh();
      }
    );
  }
}
