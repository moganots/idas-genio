import { Component, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PageComponent, ReferenceValueService } from 'app/modules/_shared/shared-modules.module';
import { AlertifyService, AuthenticationService, LookupValueService } from 'app/shared/shared.module';
import { ClientsConfiguration } from './clients-configuration';
import { ClientsService } from './services/clients.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
  providers: [
    AlertifyService,
    AuthenticationService,
    LookupValueService,
    ReferenceValueService,
    ClientsService,
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { }}
  ]
})
export class ClientsComponent extends PageComponent implements OnInit {

  constructor(
    public router: Router,
    public matDialog: MatDialog,
    public alertifyService: AlertifyService,
    public authenticationService: AuthenticationService,
    public lookupValueService: LookupValueService,
    public referenceValueService: ReferenceValueService,
    public clientsService: ClientsService
    ) {
      super(router, matDialog, alertifyService, authenticationService, lookupValueService, referenceValueService);
      this.pageIcon = ClientsConfiguration.pageIcon;
      this.pageTitle = ClientsConfiguration.pageTitle;
      this.pageName = ClientsConfiguration.pageName;
      this.dataService = clientsService;
      this.entityName = ClientsConfiguration.identifier;
      this.sourceDataColumns = ClientsConfiguration.dataColumns;
  }
}
