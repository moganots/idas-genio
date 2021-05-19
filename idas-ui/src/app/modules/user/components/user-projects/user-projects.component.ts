import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialog, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { PageComponent } from 'app/modules/_shared/modules-shared.module';
import { UserProjectsConfiguration } from './user-projects-configuration';
import { ProjectsService } from './services/projects.service';
import { AuthenticationService } from 'app/shared/shared.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-projects',
  templateUrl: './user-projects.component.html',
  styleUrls: ['./user-projects.component.scss'],
  providers: [
    AuthenticationService,
    ProjectsService,
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { }}
  ]
})
export class UserProjectsComponent extends PageComponent {

  constructor(
    public location: Location,
    public router: Router,
    public matDialog: MatDialog,
    public authenticationService: AuthenticationService,
    public projectsService: ProjectsService
    ) {
      super(location, router, matDialog, authenticationService);
      this.pageIcon = UserProjectsConfiguration.pageIcon;
      this.pageTitle = UserProjectsConfiguration.pageTitle;
      this.pageName = UserProjectsConfiguration.pageName;
      this.dataService = projectsService;
      this.entityName = UserProjectsConfiguration.identifier;
      this.sourceDataColumnNames = UserProjectsConfiguration.fieldNames;
      // this.sourceData = projectsService.getAll<Project>();
  }

}
