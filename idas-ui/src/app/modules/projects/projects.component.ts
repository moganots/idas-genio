import { Component, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { Router } from '@angular/router';
import {
  AlertifyService
  , AuthenticationService
  , LookupValueService
   } from 'app/shared/shared.module';
import { PageComponent, ReferenceValueService } from 'app/modules/_shared/shared-modules.module';
import { ProjectsService } from './services/projects.service';
import { ProjectsConfiguration } from './projects-configuration';
import { DialogProjectAssignmentComponent } from './components/dialog-project-assignment/dialog-project-assignment.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  providers: [
    AlertifyService,
    AuthenticationService,
    LookupValueService,
    ReferenceValueService,
    ProjectsService,
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { }}
  ]
})
export class ProjectsComponent extends PageComponent implements OnInit {

  constructor(
    public router: Router,
    public matDialog: MatDialog,
    public alertifyService: AlertifyService,
    public authenticationService: AuthenticationService,
    public lookupValueService: LookupValueService,
    public referenceValueService: ReferenceValueService,
    public projectsService: ProjectsService
    ) {
      super(router, matDialog, alertifyService, authenticationService, lookupValueService, referenceValueService);
      this.pageIcon = ProjectsConfiguration.pageIcon;
      this.pageTitle = ProjectsConfiguration.pageTitle;
      this.pageName = ProjectsConfiguration.pageName;
      this.dataService = projectsService;
      this.entityName = ProjectsConfiguration.identifier;
      this.sourceDataColumns = ProjectsConfiguration.dataColumns;
  }
  onClickProjectAssignments(element: any, index?: number) {
    super.openDialog(
      DialogProjectAssignmentComponent, {
        selected : element || this.selected,
        selectedIndex : index || this.selectedIndex
      }, () => { this.onDataRefresh(); }, '93vh', '67.3vw');
  }
  onClickProjectTasks(element: any, index?: number) {

  }
  onClickProjectReInstate(element: any, index?: number) {

  }
}
