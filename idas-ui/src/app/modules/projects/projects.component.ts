import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import {
  MatDialog,
  MAT_DIALOG_DEFAULT_OPTIONS,
} from '@angular/material/dialog';
import {
  AlertifyService,
  AuthenticationService,
  GeneralUtils,
  LookupValueService,
} from 'app/shared/app-shared.module';
import {
  PageComponent,
  ReferenceValueService,
} from 'app/modules/_shared/app-modules-shared.module';
import { ProjectConfiguration } from './services/project-service/project-configuration';
import { ProjectService } from './services/project-service/project.service';
import { DialogManageProjectTaskToolbarAssignComponent } from './components/shared/manage-project-task-toolbar/components/dialog-manage-project-task-toolbar-assign/dialog-manage-project-task-toolbar-assign.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  providers: [
    AlertifyService,
    AuthenticationService,
    LookupValueService,
    ReferenceValueService,
    ProjectService,
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {} },
  ],
})
export class ProjectsComponent extends PageComponent implements OnInit {
  constructor(
    public router: Router,
    public matDialog: MatDialog,
    public formBuilder: FormBuilder,
    public alertifyService: AlertifyService,
    public authenticationService: AuthenticationService,
    public lookupValueService: LookupValueService,
    public referenceValueService: ReferenceValueService,
    public projectService: ProjectService,
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
    this.pageIcon = ProjectConfiguration.pageIcon;
    this.pageTitle = ProjectConfiguration.pageTitle;
    this.pageName = ProjectConfiguration.pageName;
    this.dataService = projectService;
    this.entityName = ProjectConfiguration.identifier;
    this.dataSourceColumns = ProjectConfiguration.dataColumns;
  }
  onButtonClickManageProjectAssignments(element: any, index?: number) {
    const id = (element?._id || element?.id);
    const name = (element?.Name || element?.DisplayName || element?.DisplayValue);
    const icon = (element?.ProjectType?.Icon || element?.ProjectType?.Image || element?.ProjectType?.Avatar);
    super.openDialog(
      DialogManageProjectTaskToolbarAssignComponent,
      {
        action: `Assign`,
        dataService: this.dataService,
        entityName: this.entityName,
        entityId: id,
        pageIcon: icon,
        pageName: `Assign  / Project`,
        pageTitle: `Assign  / Project`,
        pageSubTitle: GeneralUtils.StringJoin([id, name], ` / `),
        pageWidth: this.pageWidth,
        dataColumns: this.dataService.dataColumns,
        selectedElement: element || this.selectedElement,
        selectedElementIndex: index || this.selectedElementIndex,
      },
      () => {
        this.onDataRefresh();
      }
    );
  }
  onButtonClickManageProjectTasks(element: any, index?: number) {
    this.router.navigate([`${this.removeHashtag(element.element.RouterLink)}`]);
  }
  onButtonClickManageProjectReInstatement(element: any, index?: number) {}
}
