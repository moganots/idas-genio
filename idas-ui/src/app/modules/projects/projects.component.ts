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
  LookupValueService,
} from 'app/shared/app-shared.module';
import {
  PageComponent,
  ReferenceValueService,
} from 'app/modules/_shared/app-modules-shared.module';
import { ProjectConfiguration } from './project-configuration';
import { DialogProjectAssignmentComponent } from './components/dialog-project-assignment/dialog-project-assignment.component';
import { ProjectService } from './services/project-service/project.service';

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
    public projectService: ProjectService
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
    this.sourceDataColumns = ProjectConfiguration.dataColumns;
  }
  onClickProjectAssignments(element: any, index?: number) {
    super.openDialog(
      DialogProjectAssignmentComponent,
      {
        selectedElement: element || this.selectedElement,
        selectedElementIndex: index || this.selectedElementIndex,
      },
      () => {
        this.onDataRefresh();
      },
      '90vh',
      '67.3vw'
    );
  }
  onClickProjectTasks(element: any, index?: number) {
    this.router.navigate([`${this.removeHashtag(element.element.RouterLink)}`])
  }
  onClickProjectReInstate(element: any, index?: number) {}
}
